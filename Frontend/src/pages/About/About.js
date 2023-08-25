import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import pic from "../../assets/images/profile_pic.jpg";

const About = () => {
  return (
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-12 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={pic} alt="profile pic" />
          </div>
          <div className="col-md-12 col-xl-6 col-lg-6 col-xs-12  about-content">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              ipsam nemo nulla vero adipisci nesciunt deserunt, illum ratione
              error in! At eos, dignissimos totam animi sapiente pariatur
              assumenda earum voluptatum ab adipisci itaque voluptatem eveniet
              repellendus quidem. Tempore maxime omnis, rerum qui aliquam
              praesentium cupiditate ipsa doloribus et, nulla distinctio!
              Recusandae quos aliquam illum voluptatum quis modi ipsam est omnis
              ad facilis, sit distinctio eos a tempore? Eos mollitia, hic
              exercitationem perferendis cupiditate sint blanditiis voluptate
              inventore, libero facilis unde fugiat, natus sequi ipsa quos
              maxime architecto. Id aut minus adipisci quasi ab soluta rem
              laudantium dolor, tempora dolores, commodi, fugit quas ex odit! A
              in placeat corporis reprehenderit aliquid quibusdam quidem minima
              numquam perspiciatis exercitationem, odit aspernatur incidunt
              maiores mollitia maxime similique ab, esse debitis omnis.
            </p>
          </div>
        </div>
      </div>
    </Jump>
  );
};

export default About;
