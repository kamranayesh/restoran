import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <h4>Contact Us</h4>
      <h1>Contact for any query</h1>
      <div>
        <h4>Booking</h4>
        <FontAwesomeIcon icon="fa-regular fa-envelope-open-text" />
        {/* <FontAwesomeIcon icon={faEnvelopeOpenText} /> */}
        book@example.com
      </div>
      <div>Video</div>
      <div></div>
    </div>
  );
};

export default Contact;
