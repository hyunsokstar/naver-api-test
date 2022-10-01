import React, { useState, useEffect } from 'react'
import axios from "axios";
import api from "../../utils/api"
// import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function App() {
  return <DataGrid columns={columns} rows={rows} />;
}



type Props = {}

function NaverAddAdminContainer({ }: Props) {
  useEffect(() => {
    // get_data_for_naver_add();
  }, [])
  // const get_data_for_naver_add = () => {
  //   // try {
  //   //   const response = await axios.post(`${api.naver_add}/customer-links`, {}, );
  //   //   console.log("response.data.data : ", response.data.data);
  //   // } catch (error) {
  //   //   console.log("error : ", error);
  //   }

  return (
    <div>
      <h2>
        네이버 광고 api 호출 해보기 23
      </h2>
      <div style={{display:"flex", justifyContent:"center", border:"1px solid "}}>
        <div>방문자: 374</div>
        <div>페이지뷰 : 1823</div>
        <div>광고 클릭수 : 31</div>
        <div>30회 이상 클릭한 IP : 0</div>
      </div>

      1234
      <App />

    </div>
  )
}

export default NaverAddAdminContainer