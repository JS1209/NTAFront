import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { selectToken } from "./store/user/selectors";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox, NavigationLI } from "./components";
import {
  Homepage,
  Login,
  SignUp,
  CustomerListPage,
  CustomerDetailsPage,
  FormToDocPage_one,
  FormToDocPage_two,
  FormToDocPage_three,
  FormToDocPage_four,
  FormFailedPage,
  FormSucceededPage,
  Home,
  CompanyListPage,
  CompanyDetailsPage,
  DocumentListPage,
  DocumentDetailsPage,
  SuccessfullPage,
  ProfilePage,
  AdminSettingsPage,
} from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const token = useSelector(selectToken);

  return (
    <div>
      <Navigation />
      <div
        style={{
          backgroundColor: "#d5eded",
          minHeight: "870px",
          height: "auto !important",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ height: "80%", display: "flex", flexDirection: "column" }}
        >
          {token ? <NavigationLI /> : null}
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MessageBox />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/signup" element={<SignUp />} /> */}
              <Route path="/form" element={<FormToDocPage_one />} />
              <Route path="/form/upload" element={<FormToDocPage_two />} />
              <Route path="/form/docChoice" element={<FormToDocPage_three />} />
              <Route path="/form/signing" element={<FormToDocPage_four />} />
              <Route path="/form/finish/failed" element={<FormFailedPage />} />
              <Route
                path="/form/finish/succeeded"
                element={<FormSucceededPage />}
              />
              <Route
                path="/loggedIn/customers/list"
                element={<CustomerListPage />}
              />
              <Route path="/loggedIn/" element={<Home />} />
              <Route
                path="/loggedIn/customers/:id"
                element={<CustomerDetailsPage />}
              />
              <Route
                path="/loggedIn/companies/list"
                element={<CompanyListPage />}
              />
              <Route
                path="/loggedIn/companies/:id"
                element={<CompanyDetailsPage />}
              />
              <Route
                path="/loggedIn/documents/list"
                element={<DocumentListPage />}
              />
              <Route path="/loggedIn/success" element={<SuccessfullPage />} />
              <Route path="/loggedIn/profile" element={<ProfilePage />} />
              <Route
                path="/loggedIn/administratorSettings"
                element={<AdminSettingsPage />}
              />
              {/* <Route
                path="/loggedIn/documents/:id"
                element={<DocumentDetailsPage />}
              /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
