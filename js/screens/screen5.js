window.PETSDemoScreens = window.PETSDemoScreens || {};

window.PETSDemoScreens.screen5 = (useCase, state, components) => {
  const { match } = useCase;

  return `
    <section class="screen-frame">
      ${components.renderTopbar({ screenNumber: 5, title: match.title, useCaseKey: state.useCaseKey })}
      <div class="screen-content">
        <div class="match-tag">Secure Match ID: ${components.escapeHtml(match.matchId)}</div>

        <div class="before-after-section">
          <div class="mini-section-title">${components.escapeHtml(match.beforeLabel)}</div>
          <div class="triple-grid">
            <div class="card rise-in">
              <h3 class="card-title">${components.escapeHtml(match.leftTitle)}</h3>
              <p class="body-copy">${components.escapeHtml(match.leftBody)}</p>
              <div>${components.priorityPill(match.leftPriority)}</div>
            </div>
            <div class="card rise-in">
              <h3 class="card-title">${components.escapeHtml(match.rightTitle)}</h3>
              <p class="body-copy">${components.escapeHtml(match.rightBody)}</p>
              <div>${components.priorityPill(match.rightPriority)}</div>
            </div>
            <div class="side-card card rise-in">
              <div class="mini-section-title">${components.escapeHtml(match.withoutTitle)}</div>
              <p class="side-body">${components.escapeHtml(match.withoutBody)}</p>
            </div>
          </div>
        </div>

        <div class="before-after-section">
          <div class="mini-section-title">${components.escapeHtml(match.afterLabel)}</div>
          <div class="insight-grid">
            <div class="card rise-in">
              <h3 class="card-title">${components.escapeHtml(match.insightTitle)}</h3>
              <p class="body-copy">${components.escapeHtml(match.insightBody)}</p>
            </div>
            <div class="card rise-in">
              <h3 class="card-title">${components.escapeHtml(match.combinedTitle)}</h3>
              <div class="emphasis-value">${components.escapeHtml(match.combinedValue)}</div>
            </div>
            <div class="card rise-in">
              <h3 class="card-title">${components.escapeHtml(match.responseTitle)}</h3>
              <p class="body-copy">${components.escapeHtml(match.responseBody)}</p>
            </div>
          </div>
        </div>

        <div class="detail-grid">
          <div class="card rise-in">
            <div class="mini-section-title">${components.escapeHtml(match.whyTitle)}</div>
            <p class="why-copy">${components.escapeHtml(match.whyBody)}</p>
          </div>
          <div class="card rise-in">
            <div class="mini-section-title">${components.escapeHtml(match.privacyTitle)}</div>
            <p class="why-copy">${components.escapeHtml(match.privacyBody)}</p>
          </div>
        </div>

        <div class="cta-row">
          <span></span>
          <button class="primary-button" data-action="next-screen">View Drill-Down →</button>
        </div>
      </div>
    </section>
  `;
};
