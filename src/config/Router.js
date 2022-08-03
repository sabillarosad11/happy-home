import React from 'react'
import { Routes, Route} from 'react-router-dom'
import DetailPage from '../pages/DetailPage';
import Search from '../pages/Search'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default Router