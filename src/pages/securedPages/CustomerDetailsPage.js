import { getOneCustomer, deleteCustomer } from "../../store/database/thunks";
import { selectOneCustomer } from "../../store/database/selectors";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Document } from "../../components/Document";
import styled from "styled-components";
import { CompanyListed } from "../../components/CompanyListed";
import { DateTime } from "luxon";

export const CustomerDetailsPage = () => {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  const customer = useSelector(selectOneCustomer);

  useEffect(() => {
    dispatch(getOneCustomer(id));
  }, [dispatch, id]);

  return !customer ? (
    <div>Loading...</div>
  ) : (
    <div>
      <WholeCard>
        <VerificationDelete style={{ zIndex: isActive ? 1 : -1 }}>
          ARE YOU SURE YOU WANT TO DELETE THIS CUSTOMER? THERE IS NO WAY BACK
          <br />
          <br />
          <div style={{ fontWeight: "500" }}>
            &#40;Files and documents will stay saved on the server&#41;
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              style={{
                width: "150px",
                height: "40px",
              }}
              onClick={(e) => {
                e.preventDefault();
                dispatch(deleteCustomer(customer.id));
                navigate("/loggedIn/success");
              }}
            >
              Delete Customer
            </button>
            <button
              style={{ width: "150px", height: "40px" }}
              onClick={(e) => {
                e.preventDefault();
                setActive(!isActive);
              }}
            >
              Cancel
            </button>
          </div>
        </VerificationDelete>
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
                {customer.email} <br />
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
            </Additional>
          </Desc>
        </BottomCard>
        {user.admin ? (
          <DeleteBar>
            <Delete
              onClick={(e) => {
                e.preventDefault();
                setActive(!isActive);
              }}
            >
              Delete Customer
            </Delete>
          </DeleteBar>
        ) : null}
      </WholeCard>
      <LowerBody>
        <LowerTitle>Documents:</LowerTitle>
        <Table>
          <tr>
            <th>Name</th>
            <th>Path</th>
            <th>Signature ID</th>
            <th>Signed at</th>
          </tr>
          {customer.files
            ? customer.files.map((file) => {
                return (
                  <tr>
                    <td>{file.name}</td>
                    <td>{file.path}</td>
                    <td>{file.signatureId}</td>
                    <td>{file.createdAt}</td>
                  </tr>
                );
              })
            : null}
        </Table>
      </LowerBody>
    </div>
  );
};

const Table = styled.table`
  width: 90%;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;

  th {
    font-weight: 500;
  }

  td {
    font-weight: 300;
    background-color: #cbd4d4;
  }

  tr {
    border: 1px solid black;
    border-radius: 10px;
  }
`;

const VerificationDelete = styled.div`
  border-radius: 20px;
  border: 5px solid black;
  text-align: center;
  color: white;
  padding: 50px;
  font-weight: 800;
  background-color: red;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 500px;
  margin: auto;
`;

const DeleteBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: auto;
  height: 50px;
  width: 100%;
`;

const Delete = styled.button`
  padding: 5px;
  width: 10%;
  height: 100%;
  background-color: red;
  border-radius: 25px;
`;

const WholeCard = styled.div`
  border-radius: 25px;
  border: 2px solid #55c2c2;
  margin: auto;
  margin-top: 50px;
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

const LowerBody = styled.div`
  margin: auto;
  margin-top: 20px;
  border-radius: 25px;
  border: 2px solid #55c2c2;
  dispay: flex;
  flex-direction: row;
  width: 80%;
  background-color: white;
  min-height: 100px;
`;

const LowerTitle = styled.div`
  font-weight: 600;
  font-size: 18pt;
  margin: auto;
  text-align: center;
`;

const Documents = styled.div`
  margin: auto;
  dispay: flex;
  flex-direction: column;
  width: 90%;
  background-color: #cbd4d4;
  border: 2px solid #55c2c2;
  min-height: 25px;
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
