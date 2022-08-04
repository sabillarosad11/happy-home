import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Nodata from '../components/Nodata';
import DetailPage from '../pages/DetailPage';
import Search from '../pages/Search'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/no-data" element={<Nodata />} />
      <Route path="/*" element={<Search />} />
    </Routes>
  );
}

export default Router