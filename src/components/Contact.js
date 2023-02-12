
import React, { useState, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./styling.css";
// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";
import emailjs from "@emailjs/browser";



export default function Contact() {
    const form = useRef();
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
  
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  

    const messageSent = document.querySelector(".messageSent");
    if (email && name && message) {
      messageSent.classList.remove("none");
      messageSent.classList.add("show");
      messageSent.textContent = "Message Sent!";
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box className="big-contact" sx={{ bgcolor: "#cfe8fc", height: "74vh" }}>
          <h1 className="welcome">Contact</h1>
            return (
    <div>
      <p>Hello {name}</p>
      <form className="form" ref={form}>
        <h2>Reach Out!</h2>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Message"
        />
        <button
          className="submitButton btn-outline-light btn"
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
        <p className="messageSent"></p>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
      </form>
    </div>
  );
        </Box>
      </Container>
    </React.Fragment>
  );
}
