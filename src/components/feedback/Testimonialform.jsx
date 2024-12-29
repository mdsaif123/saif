
// import React, { useState } from "react";
// import { Box, TextField, Rating, Typography } from "@mui/material";
// import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
// import "./Testimonialform.css";

// const Testimonialform = () => {
//   const [rating, setRating] = useState(0);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [result, setResult] = useState("");
//   const [name, setName] = useState(""); // New state for name
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");
  
//     const formData = new FormData(event.target);
//     formData.append("access_key", "14d8288e-fa09-4922-a5d3-92970358eb2a"); // Use your Web3Forms API key
  
//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         setFormSubmitted(true); // Update state to show success message
//         setRating(0); // Reset the rating field
//         // setName(""); // Clear the name field after submission
//         console.log(name,"name")
//         event.target.reset(); // Clear the form fields
//       } else {
//         console.error("Error:", data);
//         setErrorMessage(data.message || "Failed to submit.");
//       }
//     } catch (error) {
//       console.error("Error sending form:", error);
//       setErrorMessage("An error occurred. Please try again.");
//     }
//   };
  

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <Box
//         sx={{
//           backgroundColor: "rgba(255, 255, 255, 0.1)",
//           color: "#d4d4d4",
//           padding: "20px",
//           borderRadius: "10px",
//           maxWidth: "500px",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
//           backdropFilter: "blur(10px)",
//           border: "1px solid rgba(255, 255, 255, 0.3)",
//           width: "100%",
//           position: "relative",
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "10px",
//             left: "10px",
//             display: "flex",
//             gap: "8px",
//             zIndex: 1,
//           }}
//         >
//           <Box
//             sx={{
//               width: "10px",
//               height: "10px",
//               backgroundColor: "#f56565",
//               borderRadius: "50%",
//             }}
//           ></Box>
//           <Box
//             sx={{
//               width: "10px",
//               height: "10px",
//               backgroundColor: "#ecc94b",
//               borderRadius: "50%",
//             }}
//           ></Box>
//           <Box
//             sx={{
//               width: "10px",
//               height: "10px",
//               backgroundColor: "#48bb78",
//               borderRadius: "50%",
//             }}
//           ></Box>
//         </Box>

//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 3,
//           }}
//         >
//           <TextField
//           className="mt-4"
//             name="name"
//             placeholder="Your Name"
//             variant="standard"
//             fullWidth
//             required
//             value={name} // Bind the value to state
//             onChange={(e) => setName(e.target.value)} // Update state on input change
//             InputProps={{
//               style: {
//                 color: "#d4d4d4",
//                 borderBottom: "1px solid #d4d4d4",
//               },
//               disableUnderline: true,
//             }}
//             sx={{
//               "& .MuiInput-underline:after": {
//                 borderBottomColor: "#007acc",
//               },
//             }}
//           />
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 2,
//             }}
//           >
//             <Typography>Rating:</Typography>
//             <Rating
//               name="rating"
//               value={rating}
//               onChange={(event, newValue) => setRating(newValue)}
//               size="medium"
//               emptyIcon={
//                 <StarBorderOutlinedIcon
//                   fontSize="inherit"
//                   style={{ color: "#ffffff" }}
//                 />
//               }
//             />
//           </Box>
//           <TextField
//             name="message"
//             placeholder="Your Message"
//             variant="standard"
//             multiline
//             rows={2}
//             fullWidth
//             required
//             InputProps={{
//               style: {
//                 color: "#d4d4d4",
//                 borderBottom: "1px solid #d4d4d4",
//               },
//               disableUnderline: true,
//             }}
//             sx={{
//               "& .MuiInput-underline:after": {
//                 borderBottomColor: "#007acc",
//               },
//             }}
//           />

//           <button type="submit" className="feedback-btn">
//             <div className="svg-wrapper-1">
//               <div className="svg-wrapper">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                 >
//                   <path fill="none" d="M0 0h24v24H0z"></path>
//                   <path
//                     fill="currentColor"
//                     d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//             <span>Send</span>
//           </button>
//         </Box>

//         {formSubmitted && (
//             <Typography
//   variant="body1"
//   sx={{ color: "#00ff99", textAlign: "center", marginTop: 2 }}
// >
//   {`Thank You `}
//   <span style={{ color: "gold" }}>{name}</span>
//   {` for your feedback`}
// </Typography>

//         )}
//         {errorMessage && (
//           <Typography
//             variant="body1"
//             sx={{ color: "#f44336", textAlign: "center", marginTop: 2 }}
//           >
//             {errorMessage}
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Testimonialform;
import React, { useState } from "react";
import { Box, TextField, Rating, Typography, CircularProgress } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import "./Testimonialform.css";

const Testimonialform = () => {
  const [rating, setRating] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState("");
  const [name, setName] = useState(""); // New state for name

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending..."); // Show the sending message

    const formData = new FormData(event.target);
    formData.append("access_key", "14d8288e-fa09-4922-a5d3-92970358eb2a"); // Use your Web3Forms API key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormSubmitted(true); // Update state to show success message
        setRating(0); // Reset the rating field
        // setName(""); // Clear the name field after submission
        event.target.reset(); // Clear the form fields
      } else {
        console.error("Error:", data);
        setErrorMessage(data.message || "Failed to submit.");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#d4d4d4",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "500px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            display: "flex",
            gap: "8px",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "10px",
              height: "10px",
              backgroundColor: "#f56565",
              borderRadius: "50%",
            }}
          ></Box>
          <Box
            sx={{
              width: "10px",
              height: "10px",
              backgroundColor: "#ecc94b",
              borderRadius: "50%",
            }}
          ></Box>
          <Box
            sx={{
              width: "10px",
              height: "10px",
              backgroundColor: "#48bb78",
              borderRadius: "50%",
            }}
          ></Box>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            className="mt-4"
            name="name"
            placeholder="Your Name"
            variant="standard"
            fullWidth
            required
            value={name} // Bind the value to state
            onChange={(e) => setName(e.target.value)} // Update state on input change
            InputProps={{
              style: {
                color: "#d4d4d4",
                borderBottom: "1px solid #d4d4d4",
              },
              disableUnderline: true,
            }}
            sx={{
              "& .MuiInput-underline:after": {
                borderBottomColor: "#007acc",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography>Rating:</Typography>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              size="medium"
              emptyIcon={
                <StarBorderOutlinedIcon
                  fontSize="inherit"
                  style={{ color: "#ffffff" }}
                />
              }
            />
          </Box>
          <TextField
            name="message"
            placeholder="Your Message"
            variant="standard"
            multiline
            rows={2}
            fullWidth
            required
            InputProps={{
              style: {
                color: "#d4d4d4",
                borderBottom: "1px solid #d4d4d4",
              },
              disableUnderline: true,
            }}
            sx={{
              "& .MuiInput-underline:after": {
                borderBottomColor: "#007acc",
              },
            }}
          />

          <button type="submit" className="feedback-btn">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </Box>

        {result === "Sending..." && (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <CircularProgress sx={{color:"#00ff99"}} size={20} />

            <Typography variant="body1" sx={{ color: "#00ff99", marginLeft: 2 }}>
              Sending...
            </Typography>
          </Box>
        )}

        {formSubmitted && (
          <Typography
            variant="body1"
            sx={{ color: "#00ff99", textAlign: "center", marginTop: 2 }}
          >
            Thank You <span style={{ color: "gold" }}>{name}</span> for your feedback.
          </Typography>
        )}

        {errorMessage && (
          <Typography
            variant="body1"
            sx={{ color: "#f44336", textAlign: "center", marginTop: 2 }}
          >
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Testimonialform;
