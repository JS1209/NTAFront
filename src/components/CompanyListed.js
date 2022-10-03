import { Link } from "react-router-dom";
import styled from "styled-components";

export const CompanyListed = (prop) => {
  return (
    <Card style={{ backgroundColor: prop.i % 2 === 0 ? "#cbd4d4" : "white" }}>
      <Name to={`/loggedIn/companies/${prop.item.id}`}>{prop.item.name}</Name>
      <Coc>{prop.item.coc}</Coc>
      <Country>{prop.item.country}</Country>
      <Owners>{prop.item.owners}</Owners>
      <Docs>{prop.item.files.length}</Docs>
    </Card>
  );
};

const Card = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 15px;
  align-items: left;
  margin: 5px;
  padding: 10px 10px 10px 20px;
  margin-left: 20px;
  margin-right: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
`;

const Name = styled(Link)`
  width: 35%;
  text-align: left;
  maring: auto;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;

const Coc = styled.div`
  width: 25%;
  text-align: left;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;

const Country = styled.div`
  text-align: left;
  width: 15%;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;

const Owners = styled.div`
  text-align: left;
  width: 15%;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;

const Docs = styled.div`
  text-align: left;
  width: 10%;
`;
