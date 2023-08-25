import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { toast } from "react-toastify";
import contactImg from "../../assets/images/contact.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle sumbit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
      }
      const res = await axios.post(
        "https://portfolio-backend-juiu.onrender.com/sendEmail",
        {
          name,
          email,
          msg,
        }
      );
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" contact  " id="contacts">
        <div className="card card0 border-0 ">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row ">
                  <img src={contactImg} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row ">
                    <h6 className="text-center">
                      Contact With
                      <BsLinkedin
                        color="blue"
                        size={30}
                        className="ms-2 mx-2 linkedinIcon"
                      />
                      <BsGithub color="black" size={30} className="ms-2 mx-2" />
                      <BsInstagram
                        color="#E4405F"
                        size={30}
                        className="ms-2 mx-2"
                      />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
