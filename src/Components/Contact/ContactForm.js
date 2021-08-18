import React from "react";
import { useState } from "react";
import ContactFormStyle from "./ContactFormStyle.scss";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailInput(e) {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      console.log("yelp");
    }
  }

  function handleMessageInput(e) {}

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" name="name" required={true} placeholder="Full name" />
      <input
        type="email"
        name="email"
        required="true"
        placeholder="Email adress"
      />
      <input type="text" name="subject" required={true} placeholder="Subject" />
      <textarea
        type="text"
        name="message"
        required={true}
        placeholder="Message"
      />
      <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />,
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
