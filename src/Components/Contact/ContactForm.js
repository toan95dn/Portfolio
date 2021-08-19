import React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import StatusMessage from "./StatusMessage";
import ContactFormStyle from "./ContactFormStyle.scss";

const ContactForm = () => {
  //set message display if there's any error or show status of submission
  const [isHuman, setHuman] = useState(false);
  const [isSuccessfullySubmited, setSubmited] = useState(false);
  const [isDisplayed, setDisplay] = useState(false);
  const [displayedMessage, setDisplayedMessage] = useState("");

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
          setSubmited(true);
          setDisplay(true);
          setDisplayedMessage("Thank you! I'll contact you soon");
        },
        (error) => {
          setSubmited(false);
          setDisplayedMessage("Sorry, please try again");
        }
      );
  }

  function toggleIsHuman() {
    let currStatus = isHuman ? false : true;
    if (currStatus) {
      setDisplay(false); //Captcha verified. Turn off the message confirm not robot
    } else {
      setDisplayedMessage("Please confirm that you are not a robot");
    }
    setHuman(currStatus);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isHuman === true) {
      sendEmail(e);
      e.target.reset();
    } else {
      setDisplayedMessage("Please confirm that you are not a robot");
      setDisplay(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <StatusMessage
        isError={!(isHuman && isSuccessfullySubmited)}
        messages={displayedMessage}
        isDisplayed={isDisplayed}
      />

      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={toggleIsHuman}
      />

      <input type="submit" value="Send" id="submitButton" />
    </form>
  );
};

export default ContactForm;
