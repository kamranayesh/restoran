import "./BookATable.css";
import { Button, TextField } from "@mui/material";

const BookATable = () => {
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

    // axios.post("/bookings", bookObj).then((response) => {
    //   console.log(response);
    // });
    console.log("Save in backend", bookObj);
  };
  return (
    <div className="booktable">
      <div className="booktable-video"></div>
      <div className="booktable-form">
        <h5>Reservation</h5>
        <h1>Book a Table Online</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="standard"
            type="text"
            id="name"
            placeholder="Your Name"
            name="name"
            required
          />
          <TextField
            label="Email"
            variant="standard"
            type="email"
            id="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <br />

          <label for="datetime">Date &amp; Time</label>
          <input type="datetime-local" id="datetime" name="datetime" required />
          <br />
          <select id="select1" name="select1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <label for="select1">No Of People</label>
          <br />
          <textarea
            placeholder="Special Request"
            id="message"
            name="message"
          ></textarea>
          <br />
          <Button variant="contained" color="success" type="submit">
            Book Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookATable;
