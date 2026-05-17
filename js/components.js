window.PETSDemoComponents = (() => {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatBody(text) {
    return escapeHtml(text).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");
  }

  function priorityPill(priority) {
    const key = priority.toLowerCase();
    return `<span class="priority-pill ${key}">${escapeHtml(priority)}</span>`;
  }

  function renderTopbar({ screenNumber, title, useCaseKey }) {
    const interventionActive = useCaseKey === "intervention" ? "is-active" : "";
    const operationalActive = useCaseKey === "operational" ? "is-active" : "";
    return `
      <div class="topbar">
        <div class="topbar-left">
          <span class="step-chip">${screenNumber}/6</span>
          <div class="screen-title">${escapeHtml(title)}</div>
        </div>
        <div class="topbar-right">
          <div class="use-case-switcher" aria-label="Choose use case">
            <button class="switch-pill ${interventionActive}" data-action="select-use-case" data-use-case="intervention">Early Intervention</button>
            <button class="switch-pill ${operationalActive}" data-action="select-use-case" data-use-case="operational">Cross-Market Risk</button>
          </div>
          <div class="powered-by">Powered by <img class="powered-logo-image" src="assets/vfx-logo.png" alt="VFX logo"></div>
        </div>
      </div>
    `;
  }

  function renderSignalsTable(org) {
    const rows = org.rows.map((row) => `
      <tr>
        <td>${escapeHtml(row[0])}</td>
        <td>${escapeHtml(row[1])}</td>
        <td>${escapeHtml(row[2])}</td>
        <td>${priorityPill(row[3])}</td>
      </tr>
    `).join("");

    return `
      <div class="table-card rise-in">
        <div class="org-head">
          <div class="org-meta">
            <div class="org-icon ${org.color}">${escapeHtml(org.icon)}</div>
            <div>
              <h3 class="org-title">${escapeHtml(org.name)}</h3>
              <div class="table-subtitle">${escapeHtml(org.subtitle)}</div>
            </div>
          </div>
        </div>
        <table class="signals-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Repeat</th>
              <th>Type</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="card-footer">
          <strong>${escapeHtml(org.footer)}</strong>
          <button class="text-link" data-action="open-signals" data-org="${escapeHtml(org.name)}">View Example Signals</button>
        </div>
      </div>
    `;
  }

  function renderMetrics(metrics) {
    return `
      <div class="metric-grid">
        ${metrics.map((metric) => `
          <div class="metric-card card rise-in">
            <div class="metric-top">
              <div class="metric-icon ${metric.color}">${escapeHtml(metric.icon)}</div>
              <div class="metric-value">${escapeHtml(metric.value)}</div>
            </div>
            <div class="metric-caption">${escapeHtml(metric.label)}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderUkMap(title, layers, regions, selectedLayer) {
    const entries = [
      { key: "left", label: layers.left },
      { key: "right", label: layers.right },
      { key: "combined", label: layers.combined }
    ];

    return `
      <div class="map-card card rise-in">
        <div class="map-toolbar">
          <div>
            <div class="mini-section-title">Section title</div>
            <h3 class="card-title">${escapeHtml(title)}</h3>
          </div>
          <div class="toggle-row" aria-label="Map layer toggle">
            ${entries.map((entry) => `
              <button class="toggle-pill ${entry.key === selectedLayer ? "is-active" : ""}" data-action="set-layer" data-layer="${entry.key}">
                ${escapeHtml(entry.label)}
              </button>
            `).join("")}
          </div>
        </div>
        <div class="heatmap-wrap">
          <div class="heatmap-scale">
            <div class="legend-label">High</div>
            <div class="scale-bar"></div>
            <div class="legend-label">Low</div>
          </div>
          <div
            class="uk-map-shell"
            id="uk-choropleth-map"
            data-layer="${escapeHtml(selectedLayer)}"
            data-title="${escapeHtml(title)}"
          >
            <div class="map-loading">Loading UK regional map…</div>
          </div>
        </div>
        <div class="map-note">Heat intensity is shown as a presentation-ready hotspot overlay for the selected view.</div>
      </div>
    `;
  }

  function renderBreakdown(title, items) {
    const total = items.reduce((sum, item) => sum + item.count, 0);
    let running = 0;
    const stops = items.map((item) => {
      const start = (running / total) * 100;
      running += item.count;
      const end = (running / total) * 100;
      return `${item.color} ${start}% ${end}%`;
    }).join(", ");

    return `
      <div class="breakdown-card card rise-in">
        <div>
          <div class="mini-section-title">Section title</div>
          <h3 class="card-title">${escapeHtml(title)}</h3>
        </div>
        <div class="donut-layout">
          <div class="donut-chart" style="background: conic-gradient(${stops});"></div>
          <div class="breakdown-list">
            ${items.map((item) => `
              <div class="breakdown-item">
                <div class="breakdown-label"><span class="swatch" style="background:${item.color}"></span>${escapeHtml(item.label)}</div>
                <strong>${escapeHtml(item.count)}</strong>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderNav(screenIndex) {
    const nextLabel = screenIndex === 5 ? "Restart Demo" : "Next";
    const nextAction = screenIndex === 5 ? "restart-demo" : "next-screen";
    return `
      <div class="nav-row">
        <span></span>
        <button class="secondary-button" data-action="${nextAction}">${nextLabel}</button>
      </div>
    `;
  }

  function renderModal(modal) {
    if (!modal) {
      return "";
    }

    const rows = modal.rows.map((row) => `
      <tr>
        <td>${escapeHtml(row[0])}</td>
        <td>${escapeHtml(row[1])}</td>
        <td>${escapeHtml(row[2])}</td>
        <td>${escapeHtml(row[3])}</td>
      </tr>
    `).join("");

    return `
      <div class="modal-backdrop fade-in" data-action="close-modal">
        <div class="modal-card rise-in" role="dialog" aria-modal="true" aria-label="${escapeHtml(modal.title)}" onclick="event.stopPropagation()">
          <div class="modal-header">
            <div>
              <div class="mini-section-title">Example signals</div>
              <h3 class="card-title">${escapeHtml(modal.title)}</h3>
              <div class="body-copy">${escapeHtml(modal.subtitle)}</div>
            </div>
            <button class="close-button" data-action="close-modal" aria-label="Close">×</button>
          </div>
          <table class="signals-table modal-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Repeat</th>
                <th>Type</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  return {
    escapeHtml,
    formatBody,
    priorityPill,
    renderTopbar,
    renderSignalsTable,
    renderMetrics,
    renderUkMap,
    renderBreakdown,
    renderNav,
    renderModal
  };
})();
