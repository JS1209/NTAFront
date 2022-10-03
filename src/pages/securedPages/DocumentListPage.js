import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getAllDocuments } from "../../store/database/thunks";
import { selectDocuments } from "../../store/database/selectors";

import styled from "styled-components";
import { CompanyListed } from "../../components/CompanyListed";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import { DocumentListed } from "../../components/DocumentListed";

export const DocumentListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchterm, setTerm] = useState("");

  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  var i = 0;

  useEffect(() => {
    dispatch(getAllDocuments());
  }, [dispatch]);

  const documents = useSelector(selectDocuments);
  const documentsMapped = documents?.filter((document) => {
    if (
      document?.name.toLowerCase().includes(searchterm.toLowerCase()) ||
      document?.path.toLowerCase().includes(searchterm.toLowerCase()) ||
      document?.signatureId.toLowerCase().includes(searchterm.toLowerCase()) ||
      document?.template.toLowerCase().includes(searchterm.toLowerCase())
    ) {
      return true;
    }
  });

  return documentsMapped ? (
    <Divved>
      <Top>
        {searchterm ? (
          <Title>Documents include "{searchterm}":</Title>
        ) : (
          <Title>All documents:</Title>
        )}
        <Search></Search>
        <span>Search in documents:</span>
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
          <Name>File name:</Name>
          <Temp>Template</Temp>
          <Customer>Customer:</Customer>
          <Company>Company:</Company>
          <Signed>Signed at:</Signed>
        </Table>
        {documentsMapped.map((doc) => {
          i = i + 1;
          return <DocumentListed i={i} item={doc} key={doc.id} />;
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
  min-width 500px;
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

const Temp = styled.div`
  font-weight: 500;
  display: flex;
  order 2;
  width: 25%;
`;

const Customer = styled.div`
  font-weight: 500;
  display: flex;
  order 3;
  width: 15%;
`;

const Company = styled.div`
  font-weight: 500;
  display: flex;
  order 4;
  width: 15%;
`;

const Signed = styled.div`
  font-weight: 500;
  display: flex;
  order: 5;
  width: 10%;
`;
