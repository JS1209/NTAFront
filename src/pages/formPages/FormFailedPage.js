import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const FormFailedPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/form/signing");
  };

  return (
    <Main>
      <Title>
        Document was closed without signing. The data you submit will be
        deleted, as well as the request.
      </Title>
      <MenuLink to="/">Back to start</MenuLink>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
  width: 750px;
  height: 60%;
  margin: auto;
  background-color: white;
  border: 2px solid #55c2c2;
  border-radius: 25px;
`;

const Title = styled.div`
  border-radius: 15px;
  display: flex;
  text-align: center;
  background-color: #55c2c2;
  display: flex;
  width: 100%;
  font-family: "Times New Roman";
  font-size: 30px;
`;

const MenuLink = styled(Link)`
  background-color: #cbd4d4;
  color: black;
  margin: 20px;
  border: 2px solid #55c2c2;
  border-radius: 10px;
  width: 100px;
  height: 60px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-weight: 300;
  padding: 20px;

  &:hover {
    color: #9cc094;
  }
`;
