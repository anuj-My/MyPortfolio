import styled from "styled-components";
import { Logo } from "../components/Logo";
import MenuSideBar from "../components/MenuSideBar";
import { Outlet } from "react-router-dom";
const NavHeader = styled.header`
  background-color: #172026;
  /* background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18); */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;
function Navbar() {
  return (
    <>
      <NavHeader>
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
