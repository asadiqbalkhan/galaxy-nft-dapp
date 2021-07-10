import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "transparent" : "#000")};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.h4`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 42px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #f792f1;
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
`;

export const NavBarActive = styled.div`
  position: absolute;
  right: 78%;
  top: 35px;
  width: 10px;
  height: 10px;
  background-color: #abff00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.5) 0 -2px 7px 1px, inset #304701 0 -1px 9px,
    #89ff00 0 2px 12px;
`;

export const NavAccountShow = styled.h6`
  color: #fff;
  justify-self: flex-start;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
