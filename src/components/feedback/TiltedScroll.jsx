import React from "react";
import { Rating } from "@mui/material";
import "./TiltedScroll.css";

const TiltedScroll = () => {
  const items = [
    {
      id: "1",
      name: "John Doe",
      description: "Great product, would recommend!",
      rating: 5,
    },
    {
      id: "2",
      name: "Jane Smith",
      description: "Good value for the price.",
      rating: 4,
    },
    {
      id: "3",
      name: "Alex Johnson",
      description: "Okay experience, could be better.",
      rating: 3,
    },
    {
      id: "4",
      name: "Emily Davis",
      description: "Excellent service and quality.",
      rating: 5,
    },
    {
      id: "5",
      name: "Michael Brown",
      description: "Fast delivery and good customer support.",
      rating: 4,
    },
    {
      id: "6",
      name: "Sophia Lee",
      description: "Not as expected, but decent.",
      rating: 2,
    },
    {
      id: "7",
      name: "William Harris",
      description: "Amazing experience, I love it!",
      rating: 5,
    },
    {
      id: "8",
      name: "Olivia White",
      description: "Pretty good, satisfied with the product.",
      rating: 4,
    },
  ];

  return (
    <div className="Tilted-container">
      <div className="inner-container">
        <div className="scroll-grid">
          {items.map((item) => (
            <div key={item.id} className="grid-item">
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
              <Rating value={item.rating} readOnly />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiltedScroll;
