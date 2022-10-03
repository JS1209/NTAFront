import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomerListed = (prop) => {
  return (
    <Card>
      <Picture alt="image" src={prop.item.imageUrl} />
      <Desc>
        <Title>{prop.item.name}</Title>
        <p>{prop.item.email}</p>
        <p>{prop.item.number}</p>
        <p>{prop.item.country}</p>
        {prop.item.files ? <p>Documents: {prop.item.files.length}</p> : null}
        <Link to={`/loggedIn/customers/${prop.item.id}`}>View Details</Link>
      </Desc>
    </Card>
  );
};

const Card = styled.div`
  border-radius: 25px;
  border: 2px solid #55c2c2;
  padding: 20px;
  margin: 20px;
  height: 200px;
  width: 320px;
  display: flex;
  flex-direction: row;
  background-color: white;
`;

const Title = styled.div`
  text-align: center;
  maring: auto;
  font-family: "Times New Roman";
  font-size: 20px;
  font-weight: bold;
`;

const Picture = styled.img`
  flex-grow: 1;
  margin: 20px;
  height: 100px;
  max-height: 100px;
  width: 100px;
  max-width: 100px;
  display: flex;
`;

const Desc = styled.div`
  border-radius: 10px;
  padding: 10px;
  flex-grow: 2;
  flex-direction: column;
  background-color: #cbd4d4;
`;
