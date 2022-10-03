import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeRemoveAll } from "../../store/helloSign/slice";
import { useEffect } from "react";
import styled from "styled-components";
import { selectToken } from "../../store/user/selectors";

export const SuccessfullPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(storeRemoveAll());

  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  return (
    <Main>
      <Pagediv>The entitiy has been successfully deleted!</Pagediv>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 80%;
  width: 80%;
  background-color: #cbd4d4;
  border-radius: 15px;
  padding: 20px;
`;

const Pagediv = styled.div`
  flex-direction: row;
  display: flex;
  order: 2;
`;

const Button = styled.button`
  height: 250px;
  width: 180px;
  margin: 20px;
  padding: 20px;
`;
