import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { storeRemoveAll } from "../../../store/helloSign/slice";
import { useEffect } from "react";
import styled from "styled-components";
import { selectToken, selectUser } from "../../../store/user/selectors";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(storeRemoveAll());

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  return user ? (
    <Main>
      <Linker to="/loggedIn/editUser">Edit</Linker>
      <Pagediv>
        <Desc>
          <Title>{user.name}</Title>
          <Title>{user.email}</Title>
          <Title>{user.phone}</Title>
        </Desc>{" "}
        <Pic></Pic>
      </Pagediv>
      <Title>
        Privileges: {user.admin ? "Administrator" : "Standard User"}
        {user.admin ? (
          <Linker to="/loggedIn/administratorSettings">
            Administrator settings
          </Linker>
        ) : null}
      </Title>
    </Main>
  ) : null;
};

const Linker = styled(Link)`
  width: 250px;
  height: 50px;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Pic = styled.img`
  margin: 40px;
  display: flex;
  width: 200px;
  height: 200px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 80%;
  width: 80%;
  border-radius: 15px;
  padding: 20px;
`;

const Title = styled.div`
  border-radius: 15px;
  margin: 20px;
  background-color: white;
  justify-content: space-between;
  font-size: 15pt;
  font-weight: 500;
  display: flex;
  padding: 20px;
  width: 80%;
  height: 50%;
`;

const Pagediv = styled.div`
  flex-direction: row;
  background-color: #cbd4d4;
  justify-content: space-between;
  display: flex;
  order: 0;
`;

const Button = styled.button`
  height: 250px;
  width: 180px;
  margin: 20px;
  padding: 20px;
`;
