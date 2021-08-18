import React from "react";
import { useState } from "react";
import ContactFormStyle from "./ContactFormStyle.scss";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_upwl3hi",
        "template_l1n2cqs",
        e.target,
        "user_8nC2EfLLyZcIMh0SwPfJf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
        // sendEmail(e);
      }}
    >
      <h2>Wanna turn your ideas into reality?</h2>

      <div className="inputContainer">
        <div className="shortInputs">
          <input
            type="text"
            name="name"
            required={true}
            placeholder="Full name"
          />
          <input
            type="email"
            name="email"
            required={true}
            placeholder="Email adress"
          />
          <input
            type="text"
            name="subject"
            required={true}
            placeholder="Subject"
          />
        </div>
        <textarea
          type="text"
          name="message"
          required={true}
          placeholder="Message"
        />
      </div>
      <ReCAPTCHA
        sitekey="6LdbcwocAAAAAFDs4fPZFm8FtmFDcmc8hOZ-17Lo"
        onChange={onChange}
      />
      <input type="submit" value="Send" id="submitButton" />
    </form>
  );
};

export default ContactForm;
