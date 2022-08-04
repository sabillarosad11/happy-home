import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import IC_Logo from "../assets/ic_happy.png";
import Preloaders from "../components/Preloaders";
import Nodata from "../components/Nodata";

const DetailPage = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [datas, setDatas] = useState([]);
  const [done, setDone] = useState(undefined);

  let getAPI = () => {
    Axios.get(`https://misc.superwa.io/archive?doc_id=${id}`)
    .then((res) => {
      let result =  res.data.data[0];
      setDatas(result);
      setDone(true);
    });
  };

  const handleButton = () => {
    navigate('/')
  }


  useEffect(() => {
    setTimeout(() => {
      getAPI();
    }, 2000);
  }, []);

  return (
    <>
      {!done ? (
        <Preloaders />
      ) : (
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
                    <span className="name-doc">{datas["Nama File"]}</span>
                    <span className="create-doc">
                      Dibuat oleh , {datas["Dibuat Oleh"]}
                    </span>
                  </div>
                  <div className="ms-auto me-4">
                    <span className="name-doc">ID DOC# : </span>
                    <span className="id-doc">{datas["Kode Dokumen"]}</span>
                  </div>
                  <div>
                    <span className="name-doc">Tanggal Buat : </span>
                    <span className="date-doc">
                      {datas["Date of Issue (NUP)"]}
                    </span>
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
                    {datas.ttd.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="left">
                            <div>{item.nama}</div>
                            <div>({item.tgl})</div>
                          </td>
                          {!item.tgl ? (
                            <td className="right">Belum Ditandatangani</td>
                          ) : (
                            <td className="right">Telah Ditandatangani</td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="check-doc mt-2">
                  <h2 className="text-center">{datas["Status"]}</h2>
                </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
