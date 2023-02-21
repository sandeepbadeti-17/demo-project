import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import axios from "axios";
import "../styles/update.css";
import Table from "./Table";
export default function Update() {

//now try onclick push elements to array and use put method
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState(null);
  //get data
  const getData = () => {
  
    axios
      .get("http://localhost:4001/data")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        
        // console.log(counter)
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
    // console.log(posts)
  }, []);

  const handelCheckBox = (event,id)=>{
    setData(
      data.map(row=>{
        if(row.id === id){
          return {
            ...row,enabled:event.target.checked
          }
        }else{
          return row
        }
      })
    )
  }

  const handleOptionChange = (event,id)=>{
    console.log(event.target.name,event.target.value)

    setData(data.map(row=>{
        if(row.id ===id ){
          return{
            ...row, [event.target.name]:event.target.value
          }
        }else{
          return row
        }})
        )
  }
  const updateHandler = () => {
    // console.log(data)
    data.forEach(row=>{
      if(row.enabled){
       console.log(row)
        axios
        .put(`http://localhost:4001/data/${row.id}`, {...row, enabled:false})
        .catch(err=>console.log(err))
        
      }else{
        console.log('nothing updated')
      }
    })

    getData()
};


  const addSkillsHandler = () => {
    let add = {
      empId: 1,
      portfolio: "CCE",
      empName: "RajTemp",
      skillCategory: "Technology",
      skill: "MySql",
      certificationLevel: 1,
      skillExperianace: 1,
      expertRating: 1,
      skillScore: 2.5,
    };

    axios
      .post("http://localhost:4000/data/", add)
      .then((res) => getData())
      .catch((err) => console.log(err));
  };
  return (
    <div className="app">
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
            
              {data.map((row) => {
                return (
                  <React.Fragment key={row.id}>
                    <tr>
                      <Table ele={row} handelCheckBox={handelCheckBox}
                      checked={row.enabled}  id={row.id} handleOptionChange={handleOptionChange}  />     
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
          <button
            className=" btn update_btn update_logout"
            onClick={() => {
              authCtx.logout();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
