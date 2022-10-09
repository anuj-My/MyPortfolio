import styled from "styled-components";
import { Logo } from "./Logo";
import MenuSideBar from "./MenuSideBar";

const NavHeader = styled.header`
  background-color: #172026;
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
    <NavHeader>
      <Nav>
        <Logo />
        <MenuSideBar />
      </Nav>
    </NavHeader>
  );
}

export default Navbar;
