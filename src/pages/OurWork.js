import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//animation
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledMovie>
        <h2>The Athlete</h2>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <Link to="/work/the-racer">
          <img src={theracer} alt="" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
