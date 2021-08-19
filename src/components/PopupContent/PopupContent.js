import Table from "react-bootstrap/Table";
import { hours } from "../../helpers/date/DateHelpers";
import EventInput from "../EventInput/EventInput";
import { useSelector } from "react-redux";
import { useState } from "react";

const PopupContent = () => {
  const [newDay, newMonth, newYear] = useSelector((state) => [
    state.day,
    state.month,
    state.year,
  ]);
  const date = `${newYear}-${newMonth}-${newDay}`;
  const [currentlyClickedDate, setCurrentlyClickedDate] = useState("");
  const [currentlyClickedDateEdit, setCurrentlyClickedDateEdit] = useState("");
  const newEvents = useSelector((state) => state.newEvents);

  const handleClick = (e) => {
    if (e.target.style.backgroundColor) {
      setCurrentlyClickedDateEdit(e.currentTarget.dataset.value);
      setCurrentlyClickedDate("");
      return;
    }
    if (e.target.dataset.value === e.currentTarget.dataset.value) {
      setCurrentlyClickedDateEdit("");
      setCurrentlyClickedDate(e.currentTarget.dataset.value);
    }
  };
  const resetCurrentlyClicked = () => {
    setCurrentlyClickedDate("");
    setCurrentlyClickedDateEdit("");
  };
  return (
    <Table responsive>
      <tbody>
        {hours.map((hour, i) => (
          <tr key={`id${i}`}>
            <td style={{ width: "70px" }}>{hour}</td>
            <td
              data-value={`${date}-${hour}`}
              style={
                newEvents.hasOwnProperty(`${date}-${hour}`)
                  ? { cursor: "pointer", backgroundColor: "lightblue" }
                  : { cursor: "pointer" }
              }
              onClick={handleClick}
            >
              {currentlyClickedDate === `${date}-${hour}` && (
                <EventInput
                  date={currentlyClickedDate}
                  resetCurrentlyClicked={resetCurrentlyClicked}
                />
              )}
              {currentlyClickedDateEdit === `${date}-${hour}` ? (
                <EventInput
                  date={`${date}-${hour}`}
                  resetCurrentlyClicked={resetCurrentlyClicked}
                  msg={newEvents[`${date}-${hour}`]}
                />
              ) : (
                newEvents[`${date}-${hour}`]
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PopupContent;
