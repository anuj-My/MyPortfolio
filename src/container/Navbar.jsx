import { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";
import MenuSideBar from "../components/MenuSideBar";
import { Outlet } from "react-router-dom";
const NavHeader = styled.header`
  background-color: rgb(23, 32, 38);
  /* background: rgba(23, 32, 38, 0.743);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(23, 32, 38, 0.441); */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  transform: translateY(${({ scroll }) => (scroll ? 0 : -9.5)}rem);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;
function Navbar() {
  const [onScroll, setOnScroll] = useState(true);

  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setOnScroll(false);
    } else {
      setOnScroll(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });
  return (
    <>
      <NavHeader scroll={onScroll}>
        <Nav>
          <Logo />
          <MenuSideBar />
        </Nav>
      </NavHeader>
      <Outlet />
    </>
  );
}

export default Navbar;
