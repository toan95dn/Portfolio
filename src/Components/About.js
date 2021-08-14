import React from "react";
import AboutStyle from "./AboutStyle.scss";
import Avatar from "./Images/Me.jpg";

const About = () => {
  //   const MyImage = new Image();
  //   MyImage.src = Avatar;

  return (
    <div className="aboutContainer">
      <img src={Avatar} alt="" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        sint, eius inventore repellat tenetur amet assumenda accusantium magni
        illo est odit dolorem adipisci libero laudantium doloremque atque
        facilis eaque optio. Accusamus sed minus repellendus suscipit et,
        quaerat accusantium optio eveniet, qui facere neque veritatis
        repudiandae. Blanditiis adipisci aspernatur amet labore perferendis!
        Dolorum repellendus quos suscipit nemo animi doloremque labore porro!
      </p>
    </div>
  );
};

export default About;
