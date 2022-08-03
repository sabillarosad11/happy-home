import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IC_Logo from "../assets/ic_happy.png";

const Search = () => {
    let navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const handleInput = (e) => {
    const text = e.target.value;
    console.log(text);
    setSearchText(text);
  };

  const handleButton = () => {
    const encoded = encodeURIComponent(searchText)
    if (!searchText) {
      navigate('/')
    } else {
      navigate(`/detail/${encoded}`);
    }
    
  }

  return (
    <div className="d-flex justify-content-center align-items-center main-wrapper">
      <div className="search-wrapper d-flex flex-column align-items-center p-4">
        <div className="logo-search mt-4 mb-4">
          <img src={IC_Logo} alt=""></img>
        </div>
        <div className="mt-4 mb-4 text-search">
          <h5>Masukan ID Dokumen</h5>
        </div>
        <div className="input-search mb-3">
          <input type="text" onChange={handleInput} value={searchText} required></input>
        </div>
        <div className="button-search mt-4 mb-4">
          <button className="btn btn-danger btn-search" onClick={handleButton}>Cari Dokumen</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
