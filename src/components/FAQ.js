import React from "react";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";

import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

const FAQ = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={"How do I start"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              consequatur!
            </p>
          </div>
        </Toggle>
        <Toggle title={"Daily Schedule"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              consequatur!
            </p>
          </div>
        </Toggle>
        <Toggle title={"Different Payment Methods"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              consequatur!
            </p>
          </div>
        </Toggle>
        <Toggle title={"What do you offer"}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              consequatur!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FAQ;
