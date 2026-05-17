window.PETSDemoScreens = window.PETSDemoScreens || {};

window.PETSDemoScreens.screen3 = (useCase, state, components) => {
  const { processing } = useCase;
  const progress = Math.round(state.processingProgress);
  const totalSteps = processing.steps.length;
  const completeSteps = Math.floor((progress / 100) * totalSteps);

  const trustItems = processing.trust.map((item) => `
    <div class="trust-item">
      <span class="icon-badge">✓</span>
      <span>${components.escapeHtml(item)}</span>
    </div>
  `).join("");

  const stepItems = processing.steps.map((step, index) => {
    let status = "pending";
    let symbol = "";
    if (index < completeSteps) {
      status = "complete";
      symbol = "✓";
    } else if (index === completeSteps && progress < 100) {
      status = "current";
      symbol = "•";
    }
    return `
      <div class="step-item ${status}">
        <span class="step-dot">${symbol}</span>
        <span>${components.escapeHtml(step)}</span>
      </div>
    `;
  }).join("");

  return `
    <section class="screen-frame">
      ${components.renderTopbar({ screenNumber: 3, title: processing.title, useCaseKey: state.useCaseKey })}
      <div class="screen-content">
        <div class="processing-shell">
          <div class="processing-header rise-in" style="text-align:center">
            <h1 class="processing-title">${components.escapeHtml(processing.pageTitle)}</h1>
            <div class="page-subtitle">${components.escapeHtml(processing.subtitle)}</div>
          </div>

          <div class="processing-orbit rise-in">
            <div class="processing-rings"></div>
            <div class="lock-core processing-lock">🔒</div>
            <div class="trust-card processing-trust-card">
              <div class="trust-list">${trustItems}</div>
            </div>
          </div>

          <div class="progress-block">
            <div class="meta-split">
              <strong>Processing...</strong>
              <strong>${progress}%</strong>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width:${progress}%"></div>
            </div>
            <div class="step-list">${stepItems}</div>
          </div>

          <div class="footer-banner">
            <strong>${components.escapeHtml(processing.footerTitle)}</strong>
            <div class="small-note">${components.escapeHtml(processing.footerBody)}</div>
          </div>
        </div>
      </div>
    </section>
  `;
};
