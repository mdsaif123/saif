import React from "react";
import { Rating } from "@mui/material";
import "./TiltedScroll.css";
import { useNavigate } from "react-router-dom";
const TiltedScroll = () => {
  const navigate = useNavigate();
  const items = [
    {
      id: "1",
      name: "MOHAMMED ARFAN",
      description:
        "It has been a great pleasure to work with such a wonderful colleague who has consistently helped me with various aspects of my work. Their support and collaboration have been invaluable",
      rating: 5,
    },    {
      id: "4",
      name: "Rehmat",
      description: "Ek Number Hai Bhai",
      rating: 5,
    },
    {
      id: "5",
      name: "Rohit Wagadi",
      description:
        "I recently visited mdsaif.site and was impressed by its user-friendly design and informative content. The layout is clean and easy to navigate, making it simple to find what I was looking for. The information provided is relevant and well-presented, showcasing the expertise of the site owner. Overall, a great experience!",
      rating: 5,
    },
    {
      id: "3",
      name: "Noman Shaikh ",
      description: "Good",
      rating: 5,
    },

    {
      id: "2",
      name: "Aftab.S",
      description: "Your website design is very unique.I like it very much! 😊",
      rating: 5,
    },
  
  ];

  return (
    <div className="Tilted-container">
      <div className="inner-container">
        <div className="scroll-grid">
          {items.map((item) => (
            <div key={item.id} className="grid-item"   onClick={() => navigate("/testimonial")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              {/* <p className="item-text">{item.description}</p> */}
              <p className="item-name">{item.name}</p>
              <p>
                {item.description.split(" ").slice(0, 10).join(" ")}{" "}
                <span
                
                  style={{ color: "#00ff99", cursor: "pointer" }}
                >
                  See More
                </span>
              </p>

              <Rating value={item.rating} readOnly />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiltedScroll;
