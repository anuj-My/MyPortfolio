import styled from "styled-components";

const Btn = styled.a`
  &,
  &:link,
  &:visited {
    position: relative;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    text-transform: uppercase;
    transition: all 0.3s ease;
    border-radius: 10rem;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(#000, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    transition: all 0.4s ease;
  }

  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  &::after {
    background-color: ${({ bg }) => bg};
  }
`;

const Button = ({ color, bg, text }) => {
  return (
    <Btn color={color} bg={bg}>
      {text}
    </Btn>
  );
};

export default Button;
