import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Update from "./components/Update";
import AsOfDate from "./components/AsOfDate";
import AuthContext from "./store/auth-context";

export default function App() {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {authCtx.isLoggedin && <Route path="/home" element={<Home />} />}
        {authCtx.isLoggedin && <Route path="/update" element={<Update />} />}
        {authCtx.isLoggedin && (
          <Route path="/asofdate" element={<AsOfDate />} />
        )}
        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
    </BrowserRouter>
  );
}
