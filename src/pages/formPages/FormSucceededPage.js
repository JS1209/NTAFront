import { useState } from "react";
import { getRequest, downloadDocument } from "../../store/helloSign/thunks";
import { useSelector, useDispatch } from "react-redux";
import { selectOneCompany } from "../../store/database/selectors";
import styled from "styled-components";
import { insertInDatabase } from "../../store/database/thunks";
import { useNavigate } from "react-router-dom";

export const FormSucceededPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/form/signing");
  };

  return (
    <Main>
      <Fields>
        <Title>
          We will reach out to you as soon as possible. If you are already in
          contact with sales, you can let them know directly!
        </Title>
      </Fields>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  padding: 10px;
  margin: auto;
  background-color: black;
  height: 80%;
`;

const Title = styled.div`
  text-align: center;
  background-color: red;
  display: flex;
  align-self: center;
  maring: auto;
  font-family: "Times New Roman";
  font-size: 30px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
  width: 750px;
  height: 100%;
  background-color: green;
`;

const Input = styled.input`
  align-self: center;
  order: 2;
  display: flex;
  width: 55%;
  padding: 5px;
  background-color: blue;
`;

const TextDiv = styled.div`
  order: 1;
  display: flex;
  padding: 10px;
  text-align: left;
`;

const InputDiv = styled.div`
  align-self: center;
  justify-content: space-between;
  display: flex;
  flex-direction: col;
  margin: 10px;
  width: 600px;
  background-color: yellow;
`;

const Format = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  align-self: center;
  display: flex;
  widht: 20%;
  padding: 10px;
  margin: 10px;
`;
