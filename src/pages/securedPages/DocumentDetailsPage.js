import { getOneCustomer } from "../../store/database/thunks";
import { selectOneCustomer } from "../../store/database/selectors";
import { selectToken } from "../../store/user/selectors";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Document } from "../../components/Document";
import styled from "styled-components";
import { CompanyListed } from "../../components/CompanyListed";
import { DateTime } from "luxon";

export const DocumentDetailsPage = () => {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  const customer = useSelector(selectOneCustomer);
  console.log(customer);

  useEffect(() => {
    dispatch(getOneCustomer(id));
  }, [dispatch, id]);

  return !customer ? (
    <div>Loading...</div>
  ) : (
    <WholeCard>
      <Title>{customer.name}</Title>
      <BottomCard>
        <Picture src={customer.imageUrl} alt="Image" />
        <Desc>
          <Descitems>
            <Desctitles>
              Date of birth: <br />
              Cellphone number: <br />
              Email: <br />
              Country: <br />
              First signed at: <br />
              Documents signed: <br />
            </Desctitles>
            <Descvars>
              {customer.date_of_birth} <br />
              {customer.number} <br />
              {customer.date_of_birth} <br />
              {customer.country} <br />
              {DateTime.fromISO(customer.createdAt)
                .setLocale("fr")
                .toFormat("D")}{" "}
              <br />
              {customer.files ? customer.files.length : 0}
            </Descvars>
          </Descitems>
          <Additional>
            <Companies>
              {customer.companies
                ? customer.companies.map((comp) => {
                    return (
                      <MenuLink
                        key={comp.id}
                        to={`/loggedIn/companies/${comp.id}`}
                      >
                        {comp.name}
                      </MenuLink>
                    );
                  })
                : null}
            </Companies>
            <Documents>
              {customer.files
                ? customer.files.map((file) => {
                    return <Document key={file.id} item={file} />;
                  })
                : null}
            </Documents>
          </Additional>
        </Desc>
      </BottomCard>
    </WholeCard>
  );
};

const WholeCard = styled.div`
  border-radius: 25px;
  border: 2px solid #55c2c2;
  margin: 20px;
  display: flex;
  width: 80%;
  height: 70%;
  min-height: 450px;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.div`
  text-align: center;
  maring: auto;
  font-family: "Times New Roman";
  font-size: 50px;
`;

const BottomCard = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  height: 80%;
  min-height: 200px;
  border-radius: 25px;
  background-color: #55c2c2;
`;

const Picture = styled.img`
  flex-grow: 1;
  margin: 20px;
  height: 200px;
  max-height: 200px;
  width: 200px;
  max-width: 200px;
  display: flex;
  background-color: grey;
`;

const Desc = styled.div`
  padding: 20px;
  flex-grow: 2;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #d5eded;
`;

const Descitems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  vertical-align: top;
`;

const Desctitles = styled.div`
  width: 40%;
  min-width: 200px;
  display: flex;
`;

const Descvars = styled.div`
  width: 60%;
  min-width: 200px;
  display: flex;
`;

const Additional = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Companies = styled.div`
  dispay: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 20%;
`;

const Documents = styled.div`
  dispay: flex;
  flex-direction: column;
  width: 40%;
`;

const MenuLink = styled(Link)`
  margin: 10px;
  padding: 5px;
  align-items: center;
  border-radius: 15px;
  display: flex;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  background-color: #cbd4d4;
  height: 25px;
  width: 100%;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #9cc094;
  }
`;
