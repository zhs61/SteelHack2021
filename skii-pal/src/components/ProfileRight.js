import React from "react";
import { Card } from "react-bootstrap";
import { appointments } from "../dummyData";

function ProfileRight() {
  const generateAppointment = () => {
    return appointments.map((appointment) => (
      <Card style={{ width: "35rem" }}>
        <Card.Body
          raised={true}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label>Time: {appointment.time}</label>
          <label>Status: {appointment.status}</label>
          <label>Current: {appointment.Current_Member}</label>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
      <Card style={{ width: "40rem", marginTop: "2rem" }} raised>
        <Card.Body
          raised={true}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1px",
          }}
        >
          <h2 className="text-center mb-4">Appointment</h2>

          {generateAppointment()}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileRight;
