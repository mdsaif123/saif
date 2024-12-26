
import React, { useState } from "react";
import "./Contact.css";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "14d8288e-fa09-4922-a5d3-92970358eb2a"); // Your Web3Forms API key here

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
      console.error("Error sending form:", error);
    }
  };

  return (
    <div className="container">
      <div className="container-contact my-5 text-white">
        {/* Blurry Circle */}
        <div className="circle-blur"></div>
        <div className="row">
          {/* Left Column - Contact Content */}
          <div className="col-md-6">
            <h2 className="mb-5">Let’s Discuss Your Project</h2>
            <p>
              <a
                href="mailto:shubhamsonkar2843@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="visit-us d-flex align-items-center mb-4">
                  <div
                    className="contact-icon d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      width: "80px",
                      height: "80px",
                      color: "#fff",
                      marginRight: "15px",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <i className="fas fa-envelope"></i>
                  </div>

                  <div>
                    <strong>Chat to us</strong>
                    <p style={{ margin: 0 }}>
                      Our friendly team is there to help.
                      <br />
                      <a
                        href="mailto:mdsaif62041@gmail.com"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        mdsaif62041@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </a>
            </p>

            {/* Call Section */}
            <div className="visit-us d-flex align-items-center mb-4">
              <div
                className="contact-icon d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  width: "80px",
                  height: "80px",
                  color: "#fff",
                  marginRight: "15px",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <i className="fas fa-phone-alt"></i>
              </div>

              <div>
                <strong>Call us</strong>
                <p style={{ margin: 0 }}>
                  Mon-Sat from 8am to 7pm.
                  <br />
                  <a
                    href="tel:+919326737641"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    +91 6204180519
                  </a>
                </p>
              </div>
            </div>

            {/* Visit Us Section */}
            <div className="visit-us d-flex align-items-center mb-4">
              <div
                className="contact-icon d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  width: "80px",
                  height: "80px",
                  color: "#fff",
                  marginRight: "15px",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
              </div>

              <div>
                <strong>Visit us</strong>
                <p style={{ margin: 0 }}>
                  Andheri East Sahar Road
                  <br />
                  Mumbai Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-md-6 my-4">
            <form onSubmit={onSubmit} className="form">
              <div className="flex">
                <label>
                  <input
                    required
                    placeholder=""
                    type="text"
                    className="input"
                    name="first_name"
                  />
                  <span>First Name</span>
                </label>

                <label>
                  <input
                    required
                    placeholder=""
                    type="text"
                    className="input"
                    name="last_name"
                  />
                  <span>Last Name</span>
                </label>
              </div>

              <label>
                <input
                  required
                  placeholder=""
                  type="email"
                  className="input"
                  name="email"
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required
                  type="tel"
                  placeholder=""
                  className="input"
                  name="phone"
                />
                <span>Contact Number</span>
              </label>

              <label>
                <textarea
                  required
                  rows="3"
                  placeholder=""
                  className="input01"
                  name="message"
                ></textarea>
                <span>Message</span>
              </label>

              <button className="fancy" type="submit">
                <span className="top-key"></span>
                <span className="text">Submit</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </form>

            <div
              className="result-message"
              style={{ color: result === "Form Submitted Successfully" ? "#00ff99" : "inherit" }}
            >
              {result}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
