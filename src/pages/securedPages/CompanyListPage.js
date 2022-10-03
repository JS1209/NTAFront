import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getAllCompanies } from "../../store/database/thunks";
import { selectCompanies } from "../../store/database/selectors";

import styled from "styled-components";
import { CompanyListed } from "../../components/CompanyListed";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import { DateTime } from "luxon";

export const CompanyListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchterm, setTerm] = useState("");

  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  var i = 0;

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  const companies = useSelector(selectCompanies);
  const companiesMapped = companies?.filter((company) => {
    if (
      company?.name.toLowerCase().includes(searchterm.toLowerCase()) ||
      company?.coc.includes(searchterm) ||
      company?.vat.includes(searchterm) ||
      company?.country.toLowerCase().includes(searchterm.toLowerCase()) ||
      company?.street.toLowerCase().includes(searchterm.toLowerCase()) ||
      company?.zip.toLowerCase().includes(searchterm.toLowerCase()) ||
      company?.createdAt.includes(searchterm)
    ) {
      return true;
    }
  });

  return companiesMapped ? (
    <Divved>
      <Top>
        {searchterm ? (
          <Title>Companies include "{searchterm}":</Title>
        ) : (
          <Title>All companies:</Title>
        )}
        <Search />
        <span>Search in companies:</span>
        <input
          type="text"
          value={searchterm}
          style={{ height: "20px" }}
          onChange={(e) => {
            e.preventDefault();
            setTerm(e.target.value);
          }}
        />
      </Top>
      <Div>
        <Table>
          <Name>Company Name:</Name>
          <Coc>Chamber of Commerce:</Coc>
          <Country>Country:</Country>
          <Owners>Owners:</Owners>
          <Documents>Documents:</Documents>
        </Table>
        {companiesMapped.map((cos) => {
          i = i + 1;
          return <CompanyListed i={i} item={cos} key={cos.id} />;
        })}
      </Div>
    </Divved>
  ) : null;
};

const Title = styled.div`
  font-weight: 600;
  font-size: 20pt;
  width: 30%;
  min-width: 500px;
  display: flex;
`;

const Search = styled.div`
  width: 40%;
  min-width: 400px;
  display: flex;
`;

const Divved = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  background: white;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 500px;
`;

const Table = styled.div`
  margin: 20px;
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
  font-weight: 500;
  display: flex;
  order 1;
  width: 35%;
`;

const Coc = styled.div`
  font-weight: 500;
  display: flex;
  order 2;
  width: 25%;
`;

const Country = styled.div`
  font-weight: 500;
  display: flex;
  order 3;
  width: 15%;
`;

const Owners = styled.div`
  font-weight: 500;
  display: flex;
  order 4;
  width: 15%;
`;

const Documents = styled.div`
  font-weight: 500;
  display: flex;
  order 5;
  width: 10%;
`;
