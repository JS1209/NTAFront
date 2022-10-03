import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { storeSetTemplate } from "../../store/helloSign/slice";

export const FormToDocPage_three = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Page>
      <Top>
        <Card
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              storeSetTemplate("b0773380c17e848c9be0d76e7dc4cc3e9866cb23")
            );
            navigate("/form/signing");
          }}
        >
          <Cardimage
            src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"
            alt="image"
          ></Cardimage>
          <Carddesc>1 UBO inside EU</Carddesc>
        </Card>
      </Top>
    </Page>
  );
};

const Page = styled.div`
  margin: auto;
  width: 80%;
  min-width: 500px;
  height: 90%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Top = styled.div`
  background-color: white;
  border-radius: 25px;
  border: 2px solid #cbd4d4;
  margin: 20px;
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Bottom = styled.div`
  background-color: white;
  border-radius: 25px;
  border: 2px solid #cbd4d4;
  margin: 20px;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 150px;
  height: 50px;
`;

const Card = styled.button`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 190px;
  height: 250px;
  background-color: #55c2c2;
`;

const Cardimage = styled.img`
  flex-grow: 3;
  background-color: white;
  display: flex;
  margin: auto;
  margin-top: 5px;
  border-radius: 10px;
  width: 90%;
  heigth: 65%;
`;

const Carddesc = styled.div`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  display: flex;
  margin: auto;
  width: 90%;
  height: 30%;
`;
