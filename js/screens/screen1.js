window.PETSDemoScreens = window.PETSDemoScreens || {};

window.PETSDemoScreens.screen1 = (useCase, state, components) => {
  const { landing } = useCase;
  const exploreList = landing.explore.map((item) => `<li>${components.escapeHtml(item)}</li>`).join("");
  const benefitsList = landing.benefits.map((item) => `<li>${components.escapeHtml(item)}</li>`).join("");

  return `
    <section class="screen-frame">
      ${components.renderTopbar({ screenNumber: 1, title: useCase.topbarTitle, useCaseKey: state.useCaseKey })}
      <div class="screen-content">
        <div class="hero-grid">
          <div class="story-card rise-in">
            <div class="eyebrow">Educational demo flow</div>
            <h1 class="hero-title">${components.escapeHtml(landing.heroTitle)}</h1>
            <p class="hero-copy">${components.escapeHtml(landing.heroDescription)}</p>
            <div class="supporting-callout">
              <div class="icon-badge">🔒</div>
              <div class="supporting-copy">${components.escapeHtml(landing.supportingText)}</div>
            </div>
          </div>
          <div class="panel hero-visual rise-in">
            <div class="hero-network">
              <div class="lock-core">🔒</div>
              <div class="connector-line"></div>
              <div class="connector-vertical"></div>
              <div class="org-building left">
                <div class="org-label blue">${components.escapeHtml(useCase.before.left.name.toUpperCase())}</div>
                <div class="building-card">
                  <span></span><span></span><span></span>
                  <span></span><span></span><span></span>
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div class="org-building right">
                <div class="org-label green">${components.escapeHtml(useCase.before.right.name.toUpperCase())}</div>
                <div class="building-card">
                  <span></span><span></span><span></span>
                  <span></span><span></span><span></span>
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div class="connection-node">⟡</div>
            </div>
          </div>
        </div>

        <div class="card-grid-3">
          <div class="card rise-in">
            <div class="eyebrow">What You Will Explore</div>
            <ul class="list-clean">${exploreList}</ul>
          </div>
          <div class="card rise-in">
            <div class="eyebrow">Use Case</div>
            <h3 class="card-title">${components.escapeHtml(landing.useCaseTitle)}</h3>
            <div class="body-copy"><p>${components.formatBody(landing.useCaseBody)}</p></div>
          </div>
          <div class="card rise-in">
            <div class="eyebrow">Key Benefits</div>
            <ul class="list-clean">${benefitsList}</ul>
          </div>
        </div>

        <div class="cta-row">
          <span></span>
          <button class="primary-button" data-action="next-screen">Explore Demo →</button>
        </div>
      </div>
    </section>
  `;
};
