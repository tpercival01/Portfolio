const Contact = () => {
  return (
    <div id="contact-container">
      <p>Feel free to contact me regarding any questions or enquiries</p>
      <form
        id="contact-form"
        action="https://formspree.io/f/xbjeqkwn"
        method="POST"
      >
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Your name"
          required
        />
        <input name="subject" type="hidden" value="Contact from {{ name }}" />
        <input
          type="text"
          name="email"
          id="email-input"
          placeholder="Your email"
          required
        />
        <textarea
          type="text"
          name="message"
          id="reason-input"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};
export default Contact;
