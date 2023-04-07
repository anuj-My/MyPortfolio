import styled from "styled-components";
import { Logo } from "../components/Logo";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #172026;
  padding: 2rem 0;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  p {
    color: #fefcfd;
  }
  a {
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div>
        <a href="#home" rel="noreferrer">
          <Logo />
        </a>
        <p>Built and Design by Anuj Maurya.</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
