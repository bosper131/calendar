import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const EventInput = ({ date, resetCurrentlyClicked, msg = "" }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.eventDescription.value === null || e.target.eventDescription.value === "") {
      alert("Don't forget to put a value!!!");
      return;
    }
    resetCurrentlyClicked(false);
    dispatch({
      type: "ADD_EVENT",
      newEvent: { date, eventDesc: e.target.eventDescription.value },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          name="eventDescription"
          placeholder="Type your event..."
          aria-label="Type your event..."
          defaultValue={msg}
          aria-describedby="basic-addon2"
        />
        <Button type="submit" variant="outline-secondary" id="button-addon2">
          Submit
        </Button>
      </InputGroup>
    </Form>
  );
};

EventInput.propTypes = {
  date: PropTypes.string.isRequired,
  resetCurrentlyClicked: PropTypes.func.isRequired,
  msg: PropTypes.string,
};

EventInput.defaultProps = {
  date: "",
  msg: "",
};

export default EventInput;
