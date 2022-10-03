import { Link } from "react-router-dom";
import styled from "styled-components";
import { DateTime } from "luxon";

export const DocumentListed = (prop) => {
  return prop.item.customer && prop.item.company ? (
    <Card>
      <Name to={`/loggedIn/documents/${prop.item.id}`}>{prop.item.name}</Name>
      <Temp>{prop.item.template}</Temp>
      <Customer to={`/loggedIn/customers/${prop.item.customer.id}`}>
        {prop.item.customer.name}
      </Customer>
      <Company to={`/loggedIn/companies/${prop.item.company.id}`}>
        {prop.item.company.name}
      </Company>
      <Signed>
        {DateTime.fromISO(prop.item.createdAt).setLocale("fr").toFormat("D")}
      </Signed>
    </Card>
  ) : null;
};

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  align-items: left;
  margin: 5px;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
`;

const Name = styled(Link)`
  display: flex;
  order 1;
  width: 35%;
  text-align: left;
  maring: auto;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;

const Temp = styled.div`
  display: flex;
  order 2;
  width: 25%;
  text-align: left;
  maring: auto;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;

const Customer = styled(Link)`
  display: flex;
  order 3;
  width: 15%;
  text-align: left;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;

const Company = styled(Link)`
  display: flex;
  order 4;
  width: 15%;
  text-align: left;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;

const Signed = styled.div`
  font-weight: 500;
  display: flex;
  order: 5;
  width: 10%;
  text-align: left;
  font-family: "Times New Roman";
  font-weight: 300;
  font-size: 20px;
`;
