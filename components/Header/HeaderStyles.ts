import styled from 'styled-components';

export const Nav = styled.nav`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #888;
  text-align: left;
  background-color: #f3969a;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  margin-bottom: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin: 15px 0;
  list-style: none;
`;

export const NavItem = styled.li`
  transition: background-color 0.3s ease-in-out;
  margin: 0 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &.active {
    background: #fff;
    & a {
      color: #f3969a;
    }
  }
`;

export const NavLink = styled.a`
  font-family: 'Comfortaa', sans-serif;
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  background-color: transparent;
`;
