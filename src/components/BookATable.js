import "./BookATable.css";
import { useDispatch, useSelector } from "react-redux";
import { bookATable } from "../utils/action";
const BookATable = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formObj = e.target;
    let bookObj = {
      name: formObj.name.value,
      email: formObj.email.value,
      datetime: formObj.datetime.value,
      select1: formObj.select1.value,
      message: formObj.message.value,
    };
    dispatch(bookATable(bookObj));
    // axios.post("/bookings", bookObj).then((response) => {
    //   console.log(response);
    // });
    console.log("Save in backend", bookObj);
  };

  return (
    <div className="booktable">
      <div className="booktable-video">
        <iframe
          src="https://www.youtube.com/embed/xPPLbEFbCAo?si=h8k59wtVvnKzGOpI?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          autoPlay
          muted
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="booktable-form">
        <h5>Reservation</h5>
        <h1>Book a Table Online</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="booktable-input"
            label="Name"
            id="name"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            label="Email"
            className="booktable-input"
            type="email"
            id="email"
            placeholder="Your Email"
            name="email"
            required
          />

          {/* <label for="datetime">Date &amp; Time</label> */}
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            className="booktable-input"
            required
          />
          <select id="select1" name="select1" className="booktable-input">
            <option value="">No of People</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          {/* <label for="select1">No Of People</label> */}
          <br />
          <textarea
            placeholder="Special Request"
            id="message"
            name="message"
            className="booktable-textarea"
          ></textarea>
          <br />
          <button type="submit">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
};

export default BookATable;
