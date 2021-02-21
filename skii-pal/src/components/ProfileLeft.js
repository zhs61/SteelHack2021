import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Card, Alert, Col } from "react-bootstrap";
import CardMedia from "@material-ui/core/CardMedia";
import { shadows } from "@material-ui/system";

function ProfileLeft() {
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    console.log(currentUser);
  }, []);

  return (
    <div>
      <Card style={{ width: "20rem", marginTop: "2rem" }} elevation={4}>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className="text-center mb-4">
            {currentUser?.displayName || "Sam"}
          </h2>
          <CardMedia
            component="img"
            style={{ height: 200, width: 200 }}
            height="240"
            image="images/profile.png"
            title="Paella dish"
          />
          <div>
            <label style={{ marginRight: "20px" }}>Phone Number: </label>
            {currentUser?.phoneNumber || "413-222-2222"}
          </div>
          <div>
            <label style={{ marginRight: "20px" }}>Email: </label>
            {currentUser?.email || "PlaceHolder@pl.com"}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileLeft;
