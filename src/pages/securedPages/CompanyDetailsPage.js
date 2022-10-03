import { deleteCompany, getOneCompany } from "../../store/database/thunks";
import { selectOneCompany } from "../../store/database/selectors";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Document } from "../../components/Document";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DateTime } from "luxon";

export const CompanyDetailsPage = () => {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);

  const company = useSelector(selectOneCompany);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  useEffect(() => {
    dispatch(getOneCompany(id));
  }, [dispatch, id]);

  return !company ? (
    <div>Loading...</div>
  ) : (
    <div>
      <WholeCard>
        <VerificationDelete style={{ zIndex: isActive ? 1 : -1 }}>
          ARE YOU SURE YOU WANT TO DELETE THIS COMPANY? THERE IS NO WAY BACK
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
                dispatch(deleteCompany(company.id));
                navigate("/loggedIn/success");
              }}
            >
              Delete Company
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
        <Title>{company.name}</Title>
        <Card>
          <Desc>
            <Descitems>
              <Desctitles>
                Chamber of Commerce: <br />
                VAT registration nr.:
                <br />
                Address: <br />
                ZIP-code: <br />
                Country: <br />
                Beneficial owners: <br />
                In EU: <br />
                First signed at: <br />
                Documents: <br />
              </Desctitles>
              <Descvars>
                {company.coc} <br />
                {company.vat} <br />
                {company.street} <br />
                {company.zip} <br />
                {company.country} <br />
                {company.owners} <br />
                {company.in_EU ? "True" : "False"} <br />
                {DateTime.fromISO(company.createdAt)
                  .setLocale("fr")
                  .toFormat("D")}{" "}
                <br />
                {company.files ? company.files.length : 0}
              </Descvars>
            </Descitems>
            <Additional>
              <Companies>
                {company.customer ? (
                  <MenuLink
                    key={company.customer.id}
                    to={`/loggedIn/customers/${company.customer.id}`}
                  >
                    {company.customer.name}
                  </MenuLink>
                ) : null}
              </Companies>
            </Additional>
          </Desc>
        </Card>
        {user.admin ? (
          <DeleteBar>
            <Delete
              onClick={(e) => {
                e.preventDefault();
                setActive(!isActive);
              }}
            >
              Delete Company
            </Delete>
          </DeleteBar>
        ) : null}
      </WholeCard>
      <LowerBody>
        <LowerTitle>Documents</LowerTitle>
        <Table>
          <tr>
            <th>Name</th>
            <th>Path</th>
            <th>Signature ID</th>
            <th>Signed at</th>
          </tr>
          {company.files
            ? company.files.map((file) => {
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
  margin: 20px;
  border-radius: 25px;
  border: 2px solid #55c2c2;
  height: 70%;
  min-height: 500px;
  width: 80%;
  min-width: 400px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const Title = styled.div`
  text-align: center;
  maring: auto;
  font-family: "Times New Roman";
  font-size: 50px;
`;

const Card = styled.div`
  margin: 20px;
  display: flex;
  border-radius: 25px;
  border: solid #55c2c2;
  flex-direction: column;
  background-color: #55c2c2;
`;

const Desc = styled.div`
  padding: 20px;
  border-radius: 15px;
  flex-grow: 2;
  margin: 20px;
  display: flex;
  flex-direction: column;
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
  min-width: 300px;
  display: flex;
`;

const Descvars = styled.div`
  width: 60%;
  min-width: 300px;
  display: flex;
`;

const Additional = styled.div`
  display: flex;
  flex-direction: row;
`;

const Companies = styled.div`
  dispay: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 20%;
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
