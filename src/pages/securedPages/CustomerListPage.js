import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getAllCustomers } from "../../store/database/thunks";
import { selectCustomers } from "../../store/database/selectors";
import { selectToken } from "../../store/user/selectors";

import styled from "styled-components";
import { CustomerListed } from "../../components/CustomerListed";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

export const CustomerListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchterm, setTerm] = useState("");

  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  const customers = useSelector(selectCustomers);

  const customersMapped = customers?.filter((customer) => {
    if (
      customer?.name.toLowerCase().includes(searchterm.toLowerCase()) ||
      customer?.email.toLowerCase().includes(searchterm.toLowerCase()) ||
      customer?.date_of_birth.includes(searchterm) ||
      customer?.country.toLowerCase().includes(searchterm.toLowerCase()) ||
      customer?.number.includes(searchterm) ||
      customer?.createdAt.includes(searchterm)
    ) {
      return true;
    }
  });

  return customersMapped ? (
    <Divved>
      <Top>
        {searchterm ? (
          <Title>Customers include "{searchterm}":</Title>
        ) : (
          <Title>All customers:</Title>
        )}
        <Search></Search>
        <span>Search in customers:</span>
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
        {customersMapped
          ? customersMapped.map((cos) => {
              return <CustomerListed item={cos} key={cos.id} />;
            })
          : null}
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
  flex-wrap: wrap;
  flex-direction: row;
`;
