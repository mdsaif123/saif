import React from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import { Typography, Rating, Avatar, Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";
import SpotlightCard from "../../CustomDesign/TextSlide/SpotlightCard";

const TestimonialSlider = () => {
  const items = [
    {
      id: "1",
      name: "MOHAMMED ARFAN",
      description:
        "It has been a great pleasure to work with such a wonderful colleague who has consistently helped me with various aspects of my work. Their support and collaboration have been invaluable.",
      rating: 5,
      occutpation: "Web Developer",
    },
    {
      id: "5",
      name: "Rohit Wagadi",
      description:
        "I recently visited mdsaif.site and was impressed by its user-friendly design and informative content. The layout is clean and easy to navigate, making it simple to find what I was looking for. The information provided is relevant and well-presented, showcasing the expertise of the site owner.",
      rating: 5,
    },
    {
        id: "2",
        name: "Aftab.S",
        description:
          "Your website design is very unique. I like it very much! 😊",
        rating: 5,
      },
    {
      id: "4",
      name: "Rehmat",
      description: "Ek Number Hai Bhai",
      rating: 5,
    },

    {
      id: "3",
      name: "Noman Shaikh",
      description: "Good",
      rating: 5,
    },
  
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      className="testimonial-slider__arrow testimonial-slider__arrow--prev"
    >
      <ChevronLeft />
    </IconButton>
  );

  const CustomNextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      className="testimonial-slider__arrow testimonial-slider__arrow--next"
    >
      <ChevronRight />
    </IconButton>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="testimonial-slider">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="testimonial-slider__slide">
          <SpotlightCard>
            <Card className="testimonial-slider__card">
              <div className="testimonial-slider__content">
              <Box className="testimonial-slider__profile my-3">
                  <Avatar
                    alt={item.name}
                    className="testimonial-slider__avatar"
                  >
                    {item.name.charAt(0)}
                  </Avatar>
                  <Box className="testimonial-slider__user-info">
                    <Typography
                      variant="subtitle1"
                      className="testimonial-slider__name"
                      sx={{ paddingTop: 0, paddingBottom: 0 }}
                      style={{ color: "#00ff99" }}
                    >
                      {item.name}
                    </Typography>
                    {/* <Typography variant="subtitle1" className="testimonial-slider__name" sx={{ paddingTop: 0, paddingBottom: 0 ,color:"gray"}}>
        {item.occutpation}
    </Typography> */}
                  </Box>
                </Box>
              

                <Typography
                  variant="body1"
                  className="testimonial-slider__review text-white"
                >
                  {item.description}
                </Typography>
                <Rating
                  value={item.rating}
                  readOnly
                  className="testimonial-slider__rating"
                />
              
              </div>
            </Card>
            </SpotlightCard>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TestimonialSlider;
