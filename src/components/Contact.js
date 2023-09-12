import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { contactUS } from "../utils/action";
import "./Contact.css";

const Contact = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formObj = e.target;
    let contactObj = {
      name: formObj.name.value,
      email: formObj.email.value,
      subject: formObj.subject.value,
      message: formObj.message.value,
    };
    dispatch(contactUS(contactUS));
    // axios.post("/contact", contactObj).then((response) => {
    //   console.log(response);
    // });
    console.log("Save contact in backend ", contactObj);
  };
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <h1>Contact for Any query</h1>
      <div className="contact-list">
        <div className="contact-mail">
          <h3>Booking</h3>
          <span>
            <FontAwesomeIcon
              className="mail-icon"
              icon="fa-solid fa-envelope-open-text"
            />{" "}
            book@example.com
          </span>
        </div>
        <div className="contact-mail">
          <h3>General</h3>
          <span>
            <FontAwesomeIcon
              className="mail-icon"
              icon="fa-solid fa-envelope-open-text"
            />{" "}
            info@example.com
          </span>
        </div>
        <div className="contact-mail">
          <h3>Technical</h3>

          <span>
            <FontAwesomeIcon
              className="mail-icon"
              icon="fa-solid fa-envelope-open-text"
            />{" "}
            tech@example.com
          </span>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3477906575285!2d78.37155507608725!3d17.44306020119709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ddd01fb2e5%3A0x25b98481e976cfdb!2sGainsight!5e0!3m2!1sen!2sin!4v1694497546534!5m2!1sen!2sin"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="contact-input"
              label="Name"
              id="name"
              placeholder="Your Name"
              name="name"
              required
            />
            <input
              label="Email"
              className="contact-input"
              type="email"
              id="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <br />
            <input
              type="text"
              className="contact-input-subject"
              label="subject"
              id="subject"
              placeholder="Subject"
              name="subject"
              required
            />

            <br />
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              className="contact-textarea"
            ></textarea>
            <br />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
