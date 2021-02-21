import React, { useRef, useState } from "react";
import { Button, Card, FormLabel, Input } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Alert from "@material-ui/lab/Alert";
import { FormControl } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
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
          <h2>Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <FormControl onSubmit={handleSubmit} style={{ display: "flex" }}>
            <FormLabel>Email</FormLabel>
            <Input type="email" inputRef={emailRef} required />
          </FormControl>
          <FormControl onSubmit={handleSubmit} style={{ display: "flex" }}>
            <FormLabel style={{ paddingTop: "10px " }}>Password</FormLabel>
            <Input type="password" inputRef={passwordRef} required />
          </FormControl>
          <FormControl onSubmit={handleSubmit} style={{ display: "flex" }}>
            <FormLabel style={{ paddingTop: "10px " }}>
              Password Confirm
            </FormLabel>
            <Input type="password" inputRef={passwordConfirmRef} required />
          </FormControl>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </div>

          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
        </CardContent>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
