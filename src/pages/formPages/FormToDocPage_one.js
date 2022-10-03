import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { insertInDatabase } from "../../store/database/thunks";

export const FormToDocPage_one = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [passport, setPassport] = useState("");
  const [custCountry, setCustCountry] = useState("");

  const [compName, setCompName] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [compCountry, setCompCountry] = useState("");
  const [vat, setVat] = useState("");
  const [coc, setCoc] = useState("");
  const [owners, setOwners] = useState("");
  const [eu, setEU] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      insertInDatabase(
        name,
        dob,
        email,
        number,
        passport,
        custCountry,
        compName,
        street,
        zip,
        compCountry,
        vat,
        coc,
        owners,
        eu
      )
    );
    navigate("/form/upload");
  };

  return (
    <Fields>
      <Title>Fill out this form, all fields are required</Title>
      <Format onSubmit={submit}>
        <Person>
          <Title>Person Details</Title>
          <InputDiv>
            <TextDiv>Full name:</TextDiv>
            <Input
              type="string"
              placeholder="name"
              required={true}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Date of birth:</TextDiv>
            <Input
              type="string"
              placeholder="date of birth"
              required={true}
              value={dob}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Email:</TextDiv>
            <Input
              type="email"
              placeholder="email"
              required={true}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Cellphone number (including landcode):</TextDiv>
            <Input
              type="number"
              placeholder="cellphone number"
              required={true}
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>ID/Passport document number:</TextDiv>
            <Input
              type="string"
              placeholder="ID/Passport document number"
              required={true}
              value={passport}
              onChange={(e) => {
                setPassport(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Customer country:</TextDiv>
            <Input
              type="string"
              placeholder="Customer country"
              required={true}
              value={custCountry}
              onChange={(e) => {
                setCustCountry(e.target.value);
              }}
            />
          </InputDiv>
        </Person>
        <Company>
          <Title>Company Details</Title>
          <InputDiv>
            <TextDiv>Company name:</TextDiv>
            <Input
              type="string"
              placeholder="company name"
              required={true}
              value={compName}
              onChange={(e) => {
                setCompName(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Company address:</TextDiv>
            <Input
              type="string"
              placeholder="company address"
              required={true}
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Company zip-code:</TextDiv>
            <Input
              type="string"
              placeholder="company zip-code"
              required={true}
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Company country:</TextDiv>
            <Input
              type="string"
              placeholder="company country"
              required={true}
              value={compCountry}
              onChange={(e) => {
                setCompCountry(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>VAT registration nr.:</TextDiv>
            <Input
              type="string"
              placeholder="VAT registration nr."
              required={true}
              value={vat}
              onChange={(e) => {
                setVat(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Chamber of Commerce number:</TextDiv>
            <Input
              type="string"
              placeholder="Chamber of Commerce number"
              required={true}
              value={coc}
              onChange={(e) => {
                setCoc(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Number of benificial owners:</TextDiv>
            <Input
              type="number"
              placeholder="Number of owners"
              required={true}
              value={owners}
              onChange={(e) => {
                setOwners(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <TextDiv>Inside European Union:</TextDiv>
            <Input
              type="checkbox"
              checked={eu}
              onChange={() => {
                setEU(!eu);
              }}
            />
          </InputDiv>
          <Button type="submit">Next step</Button>
        </Company>
      </Format>
    </Fields>
  );
};

const Person = styled.div`
  display: flex;
  margin:auto;
  min-height: 500px
  align-self: center;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
  width: 750px;
  height: 80&;

  border-radius: 25px;
  border: 2px solid #cbd4d4;
  background-color: white;
`;

const Company = styled.div`
  display: flex;
  margin:auto;
  min-height: 500px
  align-self: center;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
  width: 750px;
  height: 80&;

  border-radius: 25px;
  border: 2px solid #cbd4d4;
  background-color: white;
`;

const Title = styled.div`
  font: serif;
  text-align: center;
  display: flex;
  align-self: center;
  maring: auto;
  font-family: "Times New Roman";
  font-size: 30px;
`;

const Fields = styled.div`
  display: flex;
  margin:auto;
  margin-top: 10px;
  min-height: 500px
  align-self: center;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
  width: 90%;
  height: 100%;

  border-radius: 25px;
  border: 2px solid #cbd4d4;
  background-color: white;
`;

const Input = styled.input`
  align-self: center;
  order: 2;
  display: flex;
  width: 55%;
  padding: 5px;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #73ad21;
  margin-right: 10px;
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
  border-radius: 25px;
  background: #cbd4d4;
`;

const Format = styled.form`
  display: flex;
  flex-direction: row;
  min-height: 500px;
`;

const Button = styled.button`
  align-self: center;
  display: flex;
  widht: 20%;
  padding: 10px;
  margin: 10px;
`;
