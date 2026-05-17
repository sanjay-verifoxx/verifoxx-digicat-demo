window.PETSDemoScreens = window.PETSDemoScreens || {};

window.PETSDemoScreens.screen2 = (useCase, state, components) => {
  const { before } = useCase;
  const limitationItems = before.limitations.map((item) => `<li>${components.escapeHtml(item)}</li>`).join("");

  return `
    <section class="screen-frame">
      ${components.renderTopbar({ screenNumber: 2, title: before.title, useCaseKey: state.useCaseKey })}
      <div class="screen-content">
        <div class="header-row">
          <div>
            <h1 class="page-title">${components.escapeHtml(before.pageTitle)}</h1>
            <div class="page-subtitle">${components.escapeHtml(before.subtitle)}</div>
          </div>
          <button class="table-filter" type="button">${components.escapeHtml(before.filter)} ▾</button>
        </div>

        <div class="split-grid">
          ${components.renderSignalsTable(before.left)}
          ${components.renderSignalsTable(before.right)}
        </div>

        <div class="card rise-in">
          <div class="limitations-grid">
            <div>
              <div class="eyebrow"><span class="warning-icon">⚠</span>Current Limitations</div>
              <ul class="list-clean">${limitationItems}</ul>
            </div>
            <div class="panel">
              <div class="mini-section-title">Why this matters</div>
              <p class="body-copy">Separate medium-priority indicators can look manageable on their own, even when the combined picture suggests earlier action would help.</p>
            </div>
          </div>
        </div>

        <div class="cta-row">
          <span></span>
          <button class="primary-button" data-action="next-screen">Run Secure Collaboration →</button>
        </div>
      </div>
    </section>
  `;
};
