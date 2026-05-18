window.PETSDemoScreens = window.PETSDemoScreens || {};

window.PETSDemoScreens.contact = (state, components) => `
  <section class="screen-frame">
    ${components.renderTopbar({ title: "", showContactLink: false })}
    <div class="screen-content contact-screen-content">
      <div class="contact-layout">
        <div class="contact-intro card rise-in">
          <div class="eyebrow">Get in touch</div>
          <h1 class="page-title">Contact Us</h1>
          <p class="body-copy">
            If you would like to discuss PETs, secure collaboration, or this demo experience, send us a message and the Verifoxx team will follow up.
          </p>
          <div class="contact-highlights">
            <div class="contact-highlight">
              <span class="contact-highlight-dot"></span>
              <span>Privacy-first collaboration conversations</span>
            </div>
            <div class="contact-highlight">
              <span class="contact-highlight-dot"></span>
              <span>Demo, partnership, and product enquiries</span>
            </div>
            <div class="contact-highlight">
              <span class="contact-highlight-dot"></span>
              <span>Minimal, friction-free contact flow</span>
            </div>
          </div>
        </div>

        <div class="contact-form-card card rise-in">
          <form class="contact-form" name="contact" method="POST" data-netlify="true" data-contact-form>
            <input type="hidden" name="form-name" value="contact">
            <input type="hidden" name="subject" value="Verifoxx demo contact enquiry">

            <div class="form-row two-up">
              <label class="form-field">
                <span class="form-label">Full name</span>
                <input class="form-input" type="text" name="name" placeholder="Your name" required>
              </label>

              <label class="form-field">
                <span class="form-label">Organisation</span>
                <input class="form-input" type="text" name="organisation" placeholder="Company or team">
              </label>
            </div>

            <div class="form-row two-up">
              <label class="form-field">
                <span class="form-label">Email</span>
                <input class="form-input" type="email" name="email" placeholder="you@company.com" required>
              </label>

              <label class="form-field">
                <span class="form-label">Reason</span>
                <select class="form-input form-select" name="reason" required>
                  <option value="">Select an option</option>
                  <option value="Demo request">Demo request</option>
                  <option value="Partnership enquiry">Partnership enquiry</option>
                  <option value="Product question">Product question</option>
                  <option value="General enquiry">General enquiry</option>
                </select>
              </label>
            </div>

            <label class="form-field">
              <span class="form-label">Message</span>
              <textarea class="form-input form-textarea" name="message" rows="6" placeholder="Tell us a little about what you'd like to discuss." required></textarea>
            </label>

            <div class="contact-actions">
              <p class="form-note">We will only use these details to respond to your enquiry.</p>
              <button class="primary-button contact-submit-button" type="submit" data-contact-submit>
                <span data-submit-label>Send enquiry</span>
              </button>
            </div>
            <div class="form-status" data-form-status hidden></div>
          </form>
        </div>
      </div>
    </div>
  </section>
`;
