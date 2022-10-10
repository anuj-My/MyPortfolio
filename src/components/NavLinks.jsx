import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const LinkList = styled.li`
  &:not(:last-child) {
    margin-right: 1rem;
  }
  a {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 1.6rem;
      color: #fefcfd;
      font-weight: 300;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
      text-transform: uppercase;
      text-decoration: none;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fefcfd 50%
      );
      background-size: 230%;
      transition: all 0.3s ease;

      @media screen and (max-width: 768px) {
        padding: 1.3rem 3rem;
        font-size: 2.5rem;
      }
    }

    &:hover {
      background-position: 100%;
      color: #172026;
      transform: translateX(1rem);
    }
  }
`;

function NavLinks({ item, closeSideBar }) {
  const { url, title } = item;

  function navLinkStyles({ isActive }) {
    return {
      backgroundPosition: isActive && "100%",
      color: isActive && "#172026",
      transform: isActive && " translateX(1rem)",
    };
  }
  return (
    <LinkList>
      <NavLink to={url} style={navLinkStyles} onClick={closeSideBar} end>
        {title}
      </NavLink>
    </LinkList>
  );
}

export default NavLinks;
