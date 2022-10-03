import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { Link, useNavigate } from "react-router-dom";

export const NavigationLI = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const token = useSelector(selectToken);

  return !active ? (
    <Nav>
      <Menu
        onClick={(e) => {
          e.preventDefault();
          setActive(!active);
        }}
      >
        Open Menu
      </Menu>
    </Nav>
  ) : (
    <Nav>
      <Menu
        onClick={(e) => {
          e.preventDefault();
          setActive(!active);
        }}
      >
        Close Menu
      </Menu>

      <Details>
        <summary>database</summary>
        <MenuLink to="/loggedIn/customers/list">Customers</MenuLink>
        <br />
        <MenuLink to="/loggedIn/companies/list">Companies</MenuLink> <br />
        <MenuLink to="/loggedIn/documents/list">Documents</MenuLink>
      </Details>
      <Details>
        <summary>profiles</summary>
        <MenuLink to="/loggedIn/profile">My Profile</MenuLink> <br />
        <MenuLink to="/loggedIn/administratorSettings">All Users</MenuLink>
      </Details>
      <MenuLink
        onClick={(e) => {
          dispatch(logOut());
        }}
        to="/"
      >
        Logout
      </MenuLink>
    </Nav>
  );
};

const Details = styled.details`
  display: block;
  cursor: pointer;
  margin-bottom: 5px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: black;
  background-color: #c5d2d2;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: white;
  }
`;

const Menu = styled.button`
  justify-content: center;
  margin: 10px;
  width: 100px;
  height: 20px;
`;

const MenuLink = styled(Link)`
  cursor: pointer;
  margin-bottom: 5px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: black;
  background-color: #c5d2d2;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: white;
  }
`;

const Nav = styled.div`
  order: 0;
  width: 100%;
  background-color: #55c2c2;
  flex-direction: row;
  display: flex;
  justify-content: top;
  align-items: center;
  flex-wrap: wrap;
`;
