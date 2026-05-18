window.PETSDemoScreens = window.PETSDemoScreens || {};

window.PETSDemoScreens.screen6 = (useCase, state, components) => {
  const { drilldown } = useCase;
  const hiddenItems = drilldown.hidden.map((item) => `<div class="hidden-item"><span>🔒</span><span>${components.escapeHtml(item)}</span></div>`).join("");

  return `
    <section class="screen-frame">
      ${components.renderTopbar({ screenNumber: 6, title: drilldown.title, useCaseKey: state.useCaseKey })}
      <div class="screen-content">
        <div class="drill-grid">
          <div class="card rise-in">
            <div class="mini-section-title">${components.escapeHtml(drilldown.leftTitle)}</div>
            <p class="body-copy">${components.escapeHtml(drilldown.leftBody)}</p>
            <div>${components.priorityPill(drilldown.leftPriority)}</div>
          </div>
          <div class="card rise-in">
            <div class="mini-section-title">${components.escapeHtml(drilldown.rightTitle)}</div>
            <p class="body-copy">${components.escapeHtml(drilldown.rightBody)}</p>
            <div>${components.priorityPill(drilldown.rightPriority)}</div>
          </div>
        </div>

        <div class="connector-card card rise-in">
          <div class="drill-connector">
            <div class="drill-lock">🔒</div>
          </div>
          <div style="text-align:center">
            <div class="mini-section-title">${components.escapeHtml(drilldown.connectedTitle)}</div>
            <p class="body-copy">${components.escapeHtml(drilldown.connectedBody)}</p>
          </div>
        </div>

        <div class="detail-grid">
          <div class="card rise-in">
            <div class="mini-section-title">${components.escapeHtml(drilldown.hiddenTitle)}</div>
            <div class="hidden-grid">${hiddenItems}</div>
          </div>
          <div class="card rise-in">
            <div class="mini-section-title">${components.escapeHtml(drilldown.resultTitle)}</div>
            <p class="result-copy">${components.escapeHtml(drilldown.resultBody)}</p>
          </div>
        </div>

        <div class="footer-banner">
          <strong>${components.escapeHtml(drilldown.footer)}</strong>
          <div class="small-note">${components.escapeHtml(drilldown.dataBoundaryBody)}</div>
        </div>

        ${components.renderNav(5)}
      </div>
    </section>
  `;
};
