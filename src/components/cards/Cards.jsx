import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import ApiService from "../../services/ApiService";
// import { useNavigate } from "react-router-dom";
import ModelComponent from "../model/ModelComponent";
import "./cards.css";
function Cards(props) {
  const [modalShow, setModalShow] = useState(false);
  // const [view, setView] = useState();
  // const [data, setData] = useState({});
  // const navigate = useNavigate();
  const handleOnClick = () => {
    setModalShow(true);
    // ApiService.getEmployeeById(props.data.id)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <ModelComponent
        data={props.data.id}
        show={modalShow}
        // view={view}
        onHide={() => {
          setModalShow(false);
          // setData({});
        }}
      />
      <Card className="card-template">
        <Card.Img
          variant="top"
          className="card-image"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1655897437~exp=1655898037~hmac=b3cc634fd5e10bbc789099f7b0330132746d548d90a0bf505440d33dc444afa7&w=740"
        />

        <Card.Body>
          <Card.Title>{props.data.employeeId}</Card.Title>
          <Card.Text>
            EmployeeId: &emsp; {props.data.employeeId} <br /> Employee
            Name:&emsp;
            {props.data.employeeName} <br />
            {/* Profit:&emsp;200 */}
          </Card.Text>
          <Button
            className="card-btn"
            onClick={() => handleOnClick(props.data)}
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
