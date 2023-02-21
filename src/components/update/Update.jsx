import axios from "axios";
import React, { useEffect, useState } from "react";

function Update() {
  const [data, setData] = useState([]);


   //get data
   const getData = () => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        
        // console.log(counter)
      })
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    getData();
  }, []);



  return (
    <div className="container update">
        <div className="update_top_btn">
          <button className="update_btn btn">Customer Protfolio Name</button>
          <button className="update_btn btn">Emp ID</button>
          <button className="update_btn btn">Skill Category</button>
          <button className="update_btn btn">Skill</button>
          <button className="update_btn update_btn2 btn">Search</button>
        </div>
        <div>
          {data != null ?
          <table className="table table-bordered ">
            <thead className="thead ">
              <tr className="table_header_row">
                <th className="tabel_checkbox_header"></th>
                <th className="table_header">Protfolio</th>
                <th className="table_header">EmpID</th>
                <th className="table_header">Emp Name</th>
                <th className="table_header">skillCategory</th>
                <th className="table_header">SKill</th>
                <th className="table_header">certificationLevel</th>
                <th className="table_header">skillExperianace</th>
                <th className="table_header">expertRating</th>
                <th className="table_header">Skiill Score</th>
              </tr>
            </thead>
            <tbody>
            
              {data.map((ele) => {
                return (
                  <React.Fragment key={ele.id}>
                    <tr>
                      <Table ele={ele} setId={setId} dataArray={dataArray} setDataArray={setDataArray} setCertLevel={setCertLevel} setSkillExp={setSkillExp} setExpertRating={setExpertRating}/>
                     
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table> : '' }
        </div>
        <div>
          <div className="update_bottom_btn">
            <button
              className="update_btn update_btn2 btn"
              onClick={updateHandler}
            >
              Update
            </button>
            <button
              className="update_btn update_btn2 btn"
              onClick={addSkillsHandler}
            >
              Add
            </button>
            <button className="btn update_btn update_btn2 ">Download</button>
          </div>
        
        </div>
      </div>
  )
}

export default Update