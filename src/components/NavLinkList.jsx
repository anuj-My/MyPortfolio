import { navLinkList } from "../data";
import NavLinks from "./NavLinks";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #172026;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    justify-content: center;
    gap: 2.3rem;
    z-index: 5;
  }
`;
export default function NavLinksList({ open }) {
  const renderedList = navLinkList.map((item) => {
    return <NavLinks key={item.id} item={item} />;
  });

  return <Ul open={open}>{renderedList}</Ul>;
}
