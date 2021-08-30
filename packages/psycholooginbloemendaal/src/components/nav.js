import React, { useState, Fragment } from 'react';
import { connect, styled } from "frontity";
import Link from "./link";


/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (

  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);



export default connect(Nav);

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  list-style: none;
  display: flex; 
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  
  

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 10px 16px 5px 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    color: #000;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
  }

  &.colorChanged > a {
    color: #fff;
  }

  a[aria-current="page"] {
    border-bottom-color: #fff !important;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
