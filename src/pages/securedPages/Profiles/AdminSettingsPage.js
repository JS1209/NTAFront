import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeRemoveAll } from "../../../store/helloSign/slice";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { selectToken, selectUser } from "../../../store/user/selectors";
import { selectAllUsers } from "../../../store/database/selectors";
import { deleteUser, getAllUsers } from "../../../store/database/thunks";
import { getUserWithStoredToken, signUp } from "../../../store/user/thunks";

export const AdminSettingsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [add, setAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAdmin, setNewAdmin] = useState(false);
  const [newNumber, setNewNumber] = useState(null);
  const [newPass, setNewPass] = useState("");
  const [id, setId] = useState(null);

  const token = useSelector(selectToken);
  const ikke = useSelector(selectUser);

  useEffect(() => {
    dispatch(storeRemoveAll());
    if (!token) navigate("/");
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector(selectAllUsers);

  return (
    <Main>
      <VerificationDelete style={{ zIndex: active ? 1 : -1 }}>
        ARE YOU SURE YOU WANT TO DELETE THIS USER? THERE IS NO WAY BACK
        <br />
        <br />
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
              dispatch(deleteUser(id));
              setId(null);
              setActive(!active);
              dispatch(getAllUsers());
            }}
          >
            Delete User
          </button>
          <button
            style={{ width: "150px", height: "40px" }}
            onClick={(e) => {
              e.preventDefault();
              setActive(!active);
            }}
          >
            Cancel
          </button>
        </div>
      </VerificationDelete>
      <Table>
        <thead>
          <tr>
            <th style={{ width: "40%" }}>User</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Privilege</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.admin ? "admin" : "sales"}</td>
                    <td style={{ width: "1px" }}>
                      {!(ikke?.id === user.id) ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setId(user.id);
                            setActive(!active);
                          }}
                        >
                          Delete
                        </button>
                      ) : null}
                    </td>
                  </tr>
                );
              })
            : null}
          {add ? (
            <td>
              <tr>
                <input
                  type="text"
                  placeholder="name"
                  value={newName}
                  onChange={(e) => {
                    e.preventDefault();
                    setNewName(e.target.value);
                  }}
                />
              </tr>
              <tr>
                <input
                  type="email"
                  placeholder="email"
                  value={newEmail}
                  onChange={(e) => {
                    e.preventDefault();
                    setNewEmail(e.target.value);
                  }}
                />
              </tr>
              <tr>
                <input
                  type="number"
                  class="noscroll"
                  placeholder="number"
                  value={newNumber}
                  onChange={(e) => {
                    e.preventDefault();
                    setNewNumber(e.target.value);
                  }}
                />
              </tr>
              <tr>
                <input
                  type="password"
                  placeholder="password"
                  value={newPass}
                  onChange={(e) => {
                    e.preventDefault();
                    setNewPass(e.target.value);
                  }}
                />
              </tr>
              <tr>
                Administrator:
                <input
                  type="checkbox"
                  value={newAdmin}
                  onChange={(e) => {
                    setNewAdmin(!newAdmin);
                  }}
                />
              </tr>
              <tr>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(newAdmin);
                    dispatch(
                      signUp(newName, newEmail, newPass, newNumber, newAdmin)
                    );
                    setNewAdmin("");
                    setNewEmail("");
                    setNewName("");
                    setNewNumber(null);
                    setNewPass("");
                    setAdd(false);
                    dispatch(getAllUsers());
                  }}
                >
                  Add user
                </button>
              </tr>
            </td>
          ) : null}
        </tbody>
        <tfoot>
          <tr>
            <th>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (add) {
                    setNewAdmin("");
                    setNewEmail("");
                    setNewName("");
                    setNewNumber(null);
                    setNewPass("");
                  }
                  setAdd(!add);
                }}
              >
                {add ? "cancel" : "add"}
              </button>
            </th>
          </tr>
        </tfoot>
      </Table>
    </Main>
  );
};

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

const Table = styled.table`
  width: 90%;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #55c2c2;

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

const Title = styled.div`
  font-weight: 400;
  font-size: 15pt;
  width: 30%;
  min-width: 500px;
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: auto;
  margin-top: 50px;
  height: 80%;
  width: 80%;
  border-radius: 15px;
  padding: 20px;
`;

const Add = styled.div`
  width: 100%;
  margin: auto;
  margin: 2px;
`;
