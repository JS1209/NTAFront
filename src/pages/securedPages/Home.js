import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeRemoveAll } from "../../store/helloSign/slice";
import { useEffect } from "react";
import styled from "styled-components";
import { selectToken } from "../../store/user/selectors";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(storeRemoveAll());

  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  return (
    <Supermain>
      <Left>
        <Pagediv>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate("/form");
            }}
          >
            Sign documents
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate("/loggedIn/customers/list");
            }}
          >
            To customer list
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate("/loggedIn/companies/list");
            }}
          >
            To company list
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate("/loggedIn/documents/list");
            }}
          >
            To Documents list{" "}
          </Button>
        </Pagediv>
      </Left>
      <Right>
        <Messageboard>
          <Message>
            <h1>RELEASE NOTES:</h1>
            <p>v1.0 update: Search for customers and companies.</p>
          </Message>
          <Message>
            <h1>RELEASE NOTES:</h1>
            <p>v1.1 update: Search for documents.</p>
          </Message>
          <Message>
            <h1>RELEASE NOTES:</h1>
            <p>
              v1.2 update: Documents automatically downloaded to server after
              signing.
            </p>
          </Message>
        </Messageboard>
        <Messageboard>
          <Message>
            <h1>Upcoming update:</h1>
            <p>UPDATE: Setup profile page with basic needs.</p>
          </Message>
          <Message>
            <h1>Upcoming update</h1>
            <p>
              UPDATE: Administrators can create users and can assign privileges.
            </p>
          </Message>
        </Messageboard>
      </Right>
    </Supermain>
  );
};

const Right = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 300px;
  max-width: 700px; ;
`;

const Message = styled.div`
  flex-wrap: wrap;
  padding: 3px;
  border: 2px solid #55c2c2;
  border-radius: 15px;
  background-color: white;
  margin: 2px;

  h1 {
    font-size: 11pt;
  }

  p {
    font-size: 10pt;
    font-weight: 300;
  }
`;

const Messageboard = styled.div`
  flex-direction: column;
  padding: 5px;
  display: flex;
  background-color: #cbd4d4;
  width: 90%;
  min-width: 300px;
  min-height: 300px;
  border: 2px solid #55c2c2;
  border-radius: 20px;
  margin: auto;
  margin: 5px;
`;

const Supermain = styled.div`
  padding: 20px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 500px;
  min-height: 250px;
  border-radius: 15px;
  padding: 20px;
`;

const Pagediv = styled.div`
  margin: auto;
  padding: auto;
  flex-direction: row;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  height: 250px;
  width: 180px;
  margin: 20px;
  padding: 20px;
`;
