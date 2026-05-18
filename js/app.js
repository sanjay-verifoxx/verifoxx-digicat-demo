(function () {
  const root = document.getElementById("app");
  const data = window.PETSDemoData.useCases;
  const components = window.PETSDemoComponents;
  const screens = window.PETSDemoScreens;
  const ukBoundaryFiles = [
    { dataKey: "ew", objectName: "nuts1", regionCode: "multi" },
    { dataKey: "sco", objectName: "nuts2", regionCode: "UKM", regionName: "Scotland" },
    { dataKey: "ni", objectName: "lgd", regionCode: "UKN", regionName: "Northern Ireland" }
  ];

  const state = {
    mode: "use-case",
    useCaseKey: "intervention",
    screenIndex: 0,
    sidebarCollapsed: true,
    selectedLayer: "combined",
    processingProgress: 0,
    modal: null
  };

  const screenKeys = ["screen1", "screen2", "screen3", "screen4", "screen5", "screen6"];
  let processingTimer = null;
  let ukGeoJsonPromise = null;

  function currentUseCase() {
    return data[state.useCaseKey];
  }

  function setUseCase(key) {
    state.mode = "use-case";
    state.useCaseKey = key;
    state.screenIndex = 0;
    state.sidebarCollapsed = true;
    state.selectedLayer = "combined";
    state.processingProgress = 0;
    state.modal = null;
    clearProcessingTimer();
    render();
  }

  function setMode(mode, useCaseKey) {
    clearProcessingTimer();
    state.modal = null;
    state.sidebarCollapsed = true;

    if (mode === "contact") {
      state.mode = "contact";
      render();
      return;
    }

    state.mode = "use-case";
    if (useCaseKey && useCaseKey !== state.useCaseKey) {
      state.useCaseKey = useCaseKey;
      state.screenIndex = 0;
      state.selectedLayer = "combined";
      state.processingProgress = 0;
    }
    render();
  }

  function nextScreen() {
    if (state.screenIndex < screenKeys.length - 1) {
      state.screenIndex += 1;
      state.modal = null;
      if (state.screenIndex === 2) {
        state.processingProgress = 0;
      } else {
        clearProcessingTimer();
      }
      render();
      maybeStartProcessing();
    }
  }

  function prevScreen() {
    if (state.screenIndex > 0) {
      state.screenIndex -= 1;
      state.modal = null;
      clearProcessingTimer();
      render();
    }
  }

  function backToBefore() {
    state.screenIndex = 1;
    state.modal = null;
    clearProcessingTimer();
    render();
  }

  function restartDemo() {
    state.screenIndex = 0;
    state.selectedLayer = "combined";
    state.processingProgress = 0;
    state.modal = null;
    clearProcessingTimer();
    render();
  }

  function maybeStartProcessing() {
    if (state.screenIndex !== 2 || processingTimer) {
      return;
    }

    const targetScreen = 3;
    const increments = [18, 32, 48, 65, 82, 100];
    let index = 0;

    processingTimer = window.setInterval(() => {
      state.processingProgress = increments[index];
      render();
      index += 1;

      if (index >= increments.length) {
        clearProcessingTimer();
        window.setTimeout(() => {
          if (state.screenIndex === 2) {
            state.screenIndex = targetScreen;
            render();
          }
        }, 500);
      }
    }, 420);
  }

  function clearProcessingTimer() {
    if (processingTimer) {
      window.clearInterval(processingTimer);
      processingTimer = null;
    }
  }

  function openSignals(orgName) {
    const useCase = currentUseCase();
    const orgs = [useCase.before.left, useCase.before.right];
    const org = orgs.find((item) => item.name === orgName);
    if (!org) {
      return;
    }
    state.modal = {
      title: org.name,
      subtitle: org.subtitle,
      rows: org.rows
    };
    render();
  }

  function handleAction(target) {
    const actionEl = target.closest("[data-action]");
    if (!actionEl) {
      return;
    }

    const action = actionEl.getAttribute("data-action");
    switch (action) {
      case "select-use-case":
        setUseCase(actionEl.getAttribute("data-use-case"));
        break;
      case "select-mode":
        setMode(actionEl.getAttribute("data-mode"), actionEl.getAttribute("data-use-case"));
        break;
      case "toggle-sidebar":
        state.sidebarCollapsed = !state.sidebarCollapsed;
        render();
        break;
      case "next-screen":
        nextScreen();
        break;
      case "prev-screen":
        prevScreen();
        break;
      case "back-to-before":
        backToBefore();
        break;
      case "restart-demo":
        restartDemo();
        break;
      case "set-layer":
        state.selectedLayer = actionEl.getAttribute("data-layer") || "combined";
        render();
        break;
      case "open-signals":
        openSignals(actionEl.getAttribute("data-org"));
        break;
      case "close-modal":
        state.modal = null;
        render();
        break;
      default:
        break;
    }
  }

  function getMapPalette(layer) {
    if (layer === "left") {
      return ["#edf4ff", "#2563eb"];
    }
    if (layer === "right") {
      return ["#edf9f2", "#1f9d68"];
    }
    return ["#f1ecff", "#5b48f5"];
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function getRegionValues(useCase, layer) {
    const left = useCase.after.regions.left || {};
    const right = useCase.after.regions.right || {};

    if (layer === "left") {
      return left;
    }

    if (layer === "right") {
      return right;
    }

    const codes = new Set([...Object.keys(left), ...Object.keys(right)]);
    const combined = {};

    for (const code of codes) {
      const leftValue = left[code] ?? 0;
      const rightValue = right[code] ?? 0;
      const overlap = Math.min(leftValue, rightValue);
      const imbalancePenalty = Math.abs(leftValue - rightValue) * 0.08;
      const synergyBonus = overlap > 0.32 ? 0.16 + overlap * 0.12 : overlap * 0.08;
      const weighted = (leftValue * 0.46) + (rightValue * 0.46) + synergyBonus - imbalancePenalty;
      combined[code] = clamp(Number(weighted.toFixed(3)), 0.08, 0.95);
    }

    return combined;
  }

  function normalizeUkFeatures() {
    if (!ukGeoJsonPromise) {
      ukGeoJsonPromise = Promise.resolve().then(() => {
        const source = window.PETSDemoUkMapData;
        if (!source) {
          throw new Error("Embedded UK map data is missing");
        }

        const entries = ukBoundaryFiles.map((file) => {
          const topology = source[file.dataKey];
          if (!topology) {
            throw new Error(`Embedded map segment missing: ${file.dataKey}`);
          }
          return { topology, file };
        });

        const features = [];

        for (const entry of entries) {
          const fc = window.topojson.feature(entry.topology, entry.topology.objects[entry.file.objectName]);
          for (const feature of fc.features) {
            if (entry.file.regionCode === "multi") {
              feature.properties.regionCode = feature.properties.NUTS112CD;
              feature.properties.regionName = feature.properties.NUTS112NM;
              feature.properties.strokeMode = "outlined";
            } else {
              feature.properties.regionCode = entry.file.regionCode;
              feature.properties.regionName = entry.file.regionName;
              feature.properties.strokeMode = "blended";
            }
            features.push(feature);
          }
        }

        return { type: "FeatureCollection", features };
      });
    }

    return ukGeoJsonPromise;
  }

  function renderChoroplethMap() {
    if (state.screenIndex !== 3 || !window.d3) {
      return;
    }

    const container = document.getElementById("uk-choropleth-map");
    if (!container) {
      return;
    }

    const useCase = currentUseCase();
    const layer = state.selectedLayer;
    const regionValues = getRegionValues(useCase, layer);
    const [lightColor, strongColor] = getMapPalette(layer);

    normalizeUkFeatures().then((geojson) => {
      if (!document.getElementById("uk-choropleth-map")) {
        return;
      }

      container.innerHTML = "";
      const width = 420;
      const height = 560;

      const svg = window.d3
        .select(container)
        .append("svg")
        .attr("class", "uk-map-svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("role", "img")
        .attr("aria-label", `${useCase.after.hotspotTitle} map`);

      const projection = window.d3.geoMercator().fitSize([width, height], geojson);
      const path = window.d3.geoPath(projection);
      const color = window.d3.scaleLinear().domain([0, 1]).range([lightColor, strongColor]);

      svg
        .append("g")
        .selectAll("path")
        .data(geojson.features)
        .join("path")
        .attr("class", "uk-region-path")
        .attr("d", path)
        .attr("fill", (feature) => color(regionValues[feature.properties.regionCode] ?? 0.12))
        .attr("stroke", (feature) => {
          const fill = color(regionValues[feature.properties.regionCode] ?? 0.12);
          return feature.properties.strokeMode === "outlined" ? "rgba(255,255,255,0.95)" : fill;
        })
        .attr("stroke-width", (feature) => feature.properties.strokeMode === "outlined" ? 1.4 : 0.7)
        .attr("stroke-linejoin", "round")
        .append("title")
        .text((feature) => {
          const score = regionValues[feature.properties.regionCode] ?? 0.12;
          const label = layer === "combined" ? "joined-up signal score" : "approved indicator score";
          return `${feature.properties.regionName}: ${Math.round(score * 100)} ${label}`;
        });
    }).catch(() => {
      container.innerHTML = '<div class="map-loading">Unable to load the UK boundary layer right now.</div>';
    });
  }

  function render() {
    const screenKey = screenKeys[state.screenIndex];
    const template = state.mode === "contact" ? screens.contact : screens[screenKey];
    const content = state.mode === "contact"
      ? template(state, components)
      : template(currentUseCase(), state, components);

    root.innerHTML = `
      <div class="app-layout ${state.sidebarCollapsed ? "sidebar-collapsed" : ""}">
        ${components.renderSidebar({
          mode: state.mode,
          useCaseKey: state.useCaseKey,
          collapsed: state.sidebarCollapsed
        })}
        <main class="app-main">
          ${content}
        </main>
      </div>
      ${components.renderModal(state.modal)}
    `;
    renderChoroplethMap();
  }

  root.addEventListener("click", (event) => {
    handleAction(event.target);
  });

  document.addEventListener("click", (event) => {
    if (event.target.matches(".modal-backdrop")) {
      state.modal = null;
      render();
    }
  });

  render();
})();
