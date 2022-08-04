import React from "react";
import { useNavigate } from "react-router-dom";
import IC_Logo from "../assets/ic_happy.png";

const Nodata = () => {
  let navigate = useNavigate();
  const handleButton = () => {
    navigate("/");
  };
  return (
    <div className="document-wrapper d-flex justify-content-center align-items-center">
      <diV className="main-doc-wrapper row text-center p-3">
        <div className="logo-doc">
          <img src={IC_Logo} alt=""></img>
        </div>
        <div className="info-doc mt-2">
          <h2 className="text-center">Informasi Dokumen</h2>
        </div>
        <div className="no-data">
          <h1>Oopss ...</h1>
          <h3>Kamu Salah Masukan ID Dokumen</h3>
          <button className="btn btn-danger" onClick={handleButton}>Back to Search</button>
        </div>
      </diV>
    </div>
  );
};

export default Nodata;
