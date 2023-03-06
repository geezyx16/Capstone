import html from "html-literal";

export default () => html`
  <div class="contact" id="Contact">
    <form
      class="main_forms"
      action="https://formspree.io/f/xoqzwjav"
      method="POST"
    >
      <label>
        Your Full Name:<br />
        <input
          type="name"
          name="name"
          placeholder="Please enter your full name"
        />
      </label>
      <label>
        Your email:<br />
        <input
          type="email"
          name="email"
          placeholder="Please enter your email address"
        />
      </label>
      <label>
        Your message:<br />
        <textarea
          name="message"
          placeholder="Please enter your message here"
        ></textarea>
      </label>
      <!-- your other form fields go here -->
      <div class="btn_container">
        <button type="submit" class="send_btn">Send</button>
      </div>
    </form>
  </div>
`;
