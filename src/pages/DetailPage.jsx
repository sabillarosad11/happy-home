import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import IC_Logo from "../assets/ic_happy.png";

const DetailPage = () => {
  let { id } = useParams();
  let result = ''

//   const [datas, setDatas] = useState([]);

  let getAPI = () => {
    Axios.get(`https://misc.superwa.io/archive?doc_id=${id}`).then((res) => {
      result =  res.data.data[0];
    });
  };

  console.log(getAPI)

  useEffect(() => {
    getAPI()
  }, []);

  return (
    <div className="document-wrapper d-flex justify-content-center align-items-center">
      <div className="main-doc-wrapper row text-center p-3">
        <div className="logo-doc">
          <img src={IC_Logo} alt=""></img>
        </div>
        <div className="info-doc mt-2">
          <h2 className="text-center">Informasi Dokumen</h2>
        </div>
        <div className="d-flex justify-content-start align-items-center mt-3 mb-3">
          <div className="d-flex flex-column ">
            <span className="name-doc">
              20220616_RKI_PKWTT_Michelle Caroline Somba
            </span>
            <span className="create-doc">
              Dibuat oleh , PT. Realtegic Korporindo Investama
            </span>
          </div>
          <div className="ms-auto me-4">
            <span className="name-doc">ID DOC# : </span>
            <span className="id-doc">MT38700017524375</span>
          </div>
          <div>
            <span className="name-doc">Tanggal Buat : </span>
            <span className="date-doc">17/06/2022 17:11:17</span>
          </div>
        </div>
        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col" className="left">
                Rincian
              </th>
              <th scope="col" className="status">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left">
                <div>Gito Wahyudi</div>
                <div>(24/06/2022 16:43:39)</div>
              </td>
              <td className="right">Telah Ditandatangani</td>
            </tr>
            <tr>
              <td className="left">
                <div>Michelle Caroline Somba</div>
                <div>(24/06/2022 16:43:39)</div>
              </td>
              <td className="right">Telah Ditandatangani</td>
            </tr>
            <tr>
              <td className="left">
                <div>Gito Wahyudi</div>
                <div>(24/06/2022 16:43:39)</div>
              </td>
              <td className="right">Telah Ditandatangani</td>
            </tr>
            <tr>
              <td className="left">
                <div>Michelle Caroline Somba</div>
                <div>(24/06/2022 16:43:39)</div>
              </td>
              <td className="right">Telah Ditandatangani</td>
            </tr>
            <tr>
              <td className="left">
                <div>Gito Wahyudi</div>
                <div>(24/06/2022 16:43:39)</div>
              </td>
              <td className="right">Telah Ditandatangani</td>
            </tr>
          </tbody>
        </table>
        <div className="check-doc mt-2">
          <h2 className="text-center">Dokumen Lengkap</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
