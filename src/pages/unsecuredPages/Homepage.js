import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storeRemoveAll } from "../../store/helloSign/slice";
import { selectToken } from "../../store/user/selectors";
import styled from "styled-components";

export const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(storeRemoveAll());
    if (token !== null) {
      navigate("/loggedIn");
    }
  }, [token, navigate, dispatch]);

  return (
    <Page>
      <Top>
        <Card
          onClick={(e) => {
            e.preventDefault();
            navigate("/form");
          }}
        >
          <Cardimage
            src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"
            alt="image"
          ></Cardimage>
          <Carddesc>Roadmap to documents</Carddesc>
        </Card>
        <Card
          onClick={(e) => {
            e.preventDefault();
            navigate("/documentTest1");
          }}
        >
          <Cardimage src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"></Cardimage>
          <Carddesc>Document Test 1</Carddesc>
        </Card>
        <Card
          onClick={(e) => {
            e.preventDefault();
            navigate("/documentTest2");
          }}
        >
          <Cardimage src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"></Cardimage>
          <Carddesc>Document Test 2</Carddesc>
        </Card>
        <Card
          onClick={(e) => {
            e.preventDefault();
            navigate("/documentTest1");
          }}
        >
          <Cardimage src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"></Cardimage>
          <Carddesc>Document Test 3</Carddesc>
        </Card>
        <Card
          onClick={(e) => {
            e.preventDefault();
            navigate("/documentTest2");
          }}
        >
          <Cardimage src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"></Cardimage>
          <Carddesc>Document Test 4</Carddesc>
        </Card>
      </Top>
      <Bottom>
        <Card
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          <Cardimage src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"></Cardimage>
          <Carddesc>Login</Carddesc>
        </Card>
        <Card
          onClick={(e) => {
            e.preventDefault();
            navigate("/about");
          }}
        >
          <Cardimage src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg"></Cardimage>
          <Carddesc>About us</Carddesc>
        </Card>
      </Bottom>
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
