import React from 'react'
import ReactLoading from "react-loading";

const Preloaders = () => {
  return (
    <div className="preloaders d-flex flex-column align-items-center justify-content-center">
      <ReactLoading type={"bars"} color={"salmon"} height={200} width={230} />
    </div>
  );
}

export default Preloaders