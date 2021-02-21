import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert, Col } from "react-bootstrap";
import { Button, Card, FormLabel, Input } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Alert from "@material-ui/lab/Alert";
import { FormControl } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (e) {
      setError("Failed to log in", e);
    }

    setLoading(false);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card style={{ width: "28rem", marginTop: "2rem" }}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <FormControl style={{ display: "flex" }}>
            <FormLabel>Email</FormLabel>
            <Input type="email" inputRef={emailRef} required />
          </FormControl>
          <FormControl style={{ display: "flex" }}>
            <FormLabel style={{ paddingTop: "10px " }}>Password</FormLabel>
            <Input type="password" inputRef={passwordRef} required />
          </FormControl>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </div>

          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </CardContent>
      </Card>
      <div style={{ paddingTop: "10px " }}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
