import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { appointments } from "../dummyData";

function ProfileRight() {
  const generateAppointment = () => {
    return appointments.map((appointment) => (
      <div style={{ paddingTop: "10px" }}>
        <Card style={{ width: "35rem" }}>
          <CardContent
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
          </CardContent>
        </Card>
      </div>
    ));
  };

  return (
    <div>
      <Card style={{ width: "40rem", marginTop: "2rem" }} raised>
        <CardContent
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
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfileRight;
