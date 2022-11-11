import styled from "styled-components";
import Button from "../components/Button";

const StyledHero = styled.section`
  display: flex;
  align-items: center;
  /* background-color: #172026; */
  min-height: 100vh;
  padding: 0 30rem;

  @media screen and (max-width: 1372px) {
    padding: 0rem 20rem;
  }

  @media screen and (max-width: 1172px) {
    padding: 0rem 10rem;
  }

  @media screen and (max-width: 960px) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 837px) {
    padding: 0rem 3rem;
  }
`;

const Container = styled.div`
  width: 85%;
  max-width: 100%;
  color: #172026;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  span {
    margin-bottom: 1.4rem;
    display: inline-block;
    font-size: 1.6rem;
    font-family: "Major Mono Display", monospace;
    font-weight: 600;
    opacity: 0.9;

    @media screen and (max-width: 410px) {
      font-size: 1.4rem;
    }
  }

  h1 {
    font-size: 6rem;
    padding-bottom: 0.5rem;
    opacity: 0.9;
    letter-spacing: 3px;
    text-transform: capitalize;

    @media screen and (max-width: 1278px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 410px) {
      font-size: 3rem;
    }
  }

  h2 {
    padding: 1rem 0 3rem 0;
    opacity: 0.7;
    font-size: 4rem;
    text-transform: capitalize;

    @media screen and (max-width: 1278px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 410px) {
      font-size: 2rem;
    }
  }

  p {
    padding-bottom: 3rem;
    font-size: 2rem;

    @media screen and (max-width: 1278px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 410px) {
      font-size: 1.4rem;
    }
  }
`;

function Hero() {
  return (
    <>
      <StyledHero id="home">
        <Container>
          <span>Hi! my name is</span>
          <h1>Anuj Maurya</h1>
          <h2>A Passionate Front-end Developer</h2>
          <p>
            I love exploring and creating, I'm a lifelong learner looking for an
            opportunity to apply creative, problem-solving, and communicative
            skills on a development team.
          </p>
          <Button
            href="#contact"
            rel="noreferrer"
            color="#fefcfd"
            bg="#172026"
            text="Get in Touch"
          />
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
