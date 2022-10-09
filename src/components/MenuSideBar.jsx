import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import NavLinksList from "./NavLinkList";

const animateLeft = keyframes`
  from {
    transform: rotatez(0deg) translate(0px, 0px);
  }
  to{
    transform: rotatez(45deg) translate(2px, 2px);
  }
  
  `;

const animateRight = keyframes`
  from {
    transform: rotatez(0deg) translate(0px, 0px);
  }
  to{
    transform: rotatez(-45deg) translate(4px, -4px);
  }
  `;

const StyledBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    right: 2rem;
    top: 2rem;
    z-index: 100;
    width: 4.5rem;
    height: 4.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    cursor: pointer;

    div {
      border-radius: 5px;
      background-color: #fefcfd;
      width: 100%;
      height: 100%;
      height: 0.4rem;
      transition: transform cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s;
    }
    div:nth-child(2) {
      display: none;
    }
  }

  ${(props) =>
    props.open
      ? css`
          div:nth-child(1) {
            animation: ${animateLeft} 0.5s
              cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform: rotatez(45deg) translate(2px, 2px);
          }

          div:nth-child(3) {
            animation: ${animateRight} 0.5s
              cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform: rotatez(-45deg) translate(4px, -4px);
          }
        `
      : css``}
`;

function MenuSideBar() {
  const [open, setOpen] = useState(false);

  const toggleBars = () => setOpen(!open);
  console.log(open);
  return (
    <>
      <StyledBars onClick={toggleBars} open={open}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBars>
      <NavLinksList open={open} setOpen = {setOpen} />
    </>
  );
}
export default MenuSideBar;
