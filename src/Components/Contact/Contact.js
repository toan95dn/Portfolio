import React from "react";
import ContactStyle from "./ContactStyle.scss";
import ContactForm from "./ContactForm";
import { FiPhoneCall, FiMapPin, FiMail, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import AllContainerVariants from "../Transition/Transition";

const Contact = () => {
  const myMap = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.1134187776665!2d-118.3429046848337!3d33.86096778065838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzM5LjUiTiAxMTjCsDIwJzI2LjYiVw!5e0!3m2!1sen!2sus!4v1629161756733!5m2!1sen!2sus"
      width="3000"
      height="200"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  );

  return (
    <motion.div
      variants={AllContainerVariants[0]}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="contactContainer"
    >
      <h1>Contact</h1>
      <div className="mapContainer">{myMap}</div>

      <ul className="infoContainer">
        <li>
          <FiPhoneCall className="icons" />
          <p>424-391-9330</p>
        </li>
        <li>
          <FiMapPin className="icons" />
          <p>Lawndale</p>
        </li>
        <li>
          <FiMail className="icons" />
          <p>toan95dn@gmail.com</p>
        </li>
        <li>
          <FiCheckCircle className="icons" />
          <p>Freelance Available</p>
        </li>
      </ul>

      <ContactForm />
    </motion.div>
  );
};

export default Contact;
