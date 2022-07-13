import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import ApiService from "../../services/ApiService";
// import { useNavigate } from "react-router-dom";
import ModelComponent from "../model/ModelComponent";
import { Link } from "react-router-dom";
import "./cards.css";
function Cards(props) {
  console.log(props.data);
  const [status, setStatus] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [viewEmployee, setViewEmployee] = useState(false);
  // const [view, setView] = useState();
  // const [data, setData] = useState({});
  // const navigate = useNavigate();
  const handleClick = () => {
    setModalShow(true);
  };

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
        type={props.type}
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
            Profit:&emsp; {props.data.profit}
          </Card.Text>
          {props.data?.button === "Exit" ? (
            status ? (
              <>
                <Button
                  className="card-btn"
                  // onClick={() => setStatus()}
                >
                  Request
                </Button>{" "}
                <Button
                  variant="danger"
                  // className="card-btn"
                  onClick={() => setStatus(false)}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button className="card-btn" onClick={() => setStatus(true)}>
                Exit
              </Button>
            )
          ) : (
            <>
              <Button
                className="card-btn"
                onClick={() => handleOnClick(props.data)}
              >
                View
              </Button>{" "}
              {["View Employees"].includes(props.data.button2) && (
                <Button
                  as={Link}
                  to={`/employee/${props.data.id}`}
                  className="card-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setViewEmployee(!viewEmployee);
                  }}
                >
                  {viewEmployee ? "Hide" : "View Employees"}
                </Button>
              )}
              {viewEmployee &&
                (props.type === "md" ? (
                  <div>
                    <span>1. Lead1</span>
                    <br />
                    <span>2. Lead2</span>
                    <br />
                    <span>3. Lead3</span>
                  </div>
                ) : (
                  props.type === "manager" && (
                    <div>
                      <span onClick={() => handleClick(1)}>1. associate1</span>
                      <br />
                      <span onClick={() => handleClick(2)}>2. associate2</span>
                      <br />
                      <span onClick={() => handleClick(3)}>3. associate3</span>
                    </div>
                  )
                ))}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
