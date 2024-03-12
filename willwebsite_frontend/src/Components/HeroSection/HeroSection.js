import styled from "styled-components";
import img from '../../Images/HeroPhoto.jpg';


const HeroSection = styled.section`
  background: 
  url(${img}) ;
  background-position: center, top left;
  background-size: cover, cover;
  height: 100vh;
  color: #fafafc;
  padding: 2rem 2rem 10rem;
  
  .heroInner {
    display: flex;
    align-items:center;
    margin: 0 auto;
    padding-left: 2rem
  }
  span {
    max-width: 50%;
  }
  h1 {
    font-weight: 900;
    color: white;
    font-size: clamp(3rem, 8vw, 5rem);
    font-family: Manrope;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    align-items: left
  }
`;

export default HeroSection;