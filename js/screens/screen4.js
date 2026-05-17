window.PETSDemoScreens = window.PETSDemoScreens || {};

window.PETSDemoScreens.screen4 = (useCase, state, components) => {
  const { after } = useCase;
  const beforeList = after.whyBefore.map((item) => `<li class="bad">${components.escapeHtml(item)}</li>`).join("");
  const afterList = after.whyAfter.map((item) => `<li class="good">${components.escapeHtml(item)}</li>`).join("");

  return `
    <section class="screen-frame">
      ${components.renderTopbar({ screenNumber: 4, title: after.title, useCaseKey: state.useCaseKey })}
      <div class="screen-content">
        <div class="header-row">
          <div>
            <h1 class="page-title">${components.escapeHtml(after.pageTitle)}</h1>
            <div class="page-subtitle">${components.escapeHtml(after.subtitle)}</div>
          </div>
          <button class="table-filter" type="button">${components.escapeHtml(after.filter)} ▾</button>
        </div>

        ${components.renderMetrics(after.metrics)}

        <div class="after-grid">
          ${components.renderUkMap(after.hotspotTitle, after.layers, after.regions, state.selectedLayer)}
          ${components.renderBreakdown("Breakdown by Category", after.breakdown)}
        </div>

        <div class="comparison-card card rise-in">
          <div class="eyebrow">Why This Matters</div>
          <div class="comparison-columns">
            <div>
              <h3 class="card-title">Before PETs</h3>
              <ul class="comparison-list">${beforeList}</ul>
            </div>
            <div>
              <h3 class="card-title">After PETs</h3>
              <ul class="comparison-list">${afterList}</ul>
            </div>
          </div>
        </div>

        <div class="footer-banner">
          <strong>${components.escapeHtml(after.footer)}</strong>
        </div>

        ${components.renderNav(3)}
      </div>
    </section>
  `;
};
