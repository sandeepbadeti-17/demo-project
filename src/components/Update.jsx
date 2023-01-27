import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import "../styles/update.css";
export default function Update() {
  const authCtx = useContext(AuthContext);
  let data = [
    {
      empId: 1,
      portfolio: "CCE",
      empName: "RajTemp",
      skillCategory: "Technology",
      skill: "MySql",
      certificationLevel: 3,
      skillExperianace: 4,
      expertRating: 3,
      skillScore: 2.5
    },
    {
      empId: 2,
      portfolio: "CCE",
      empName: "RajTemp",
      skillCategory: "Technology",
      skill: "MySql",
      certificationLevel: 3,
      skillExperianace: 4,
      expertRating: 3,
      skillScore: 2.5
    },
    {
      empId: 3,
      portfolio: "CCE",
      empName: "RajTemp",
      skillCategory: "Technology",
      skill: "MySql",
      certificationLevel: 3,
      skillExperianace: 4,
      expertRating: 3,
      skillScore: 2.5
    }
  ];
  return (
    <div className="app">
      <div className="  container update">
        <div className="update_top_btn">
          <button className="update_btn btn">Customer Protfolio Name</button>
          <button className="update_btn btn">Emp ID</button>
          <button className="update_btn btn">Skill Category</button>
          <button className="update_btn btn">Skill</button>
          <button className="update_btn update_btn2 btn">Search</button>
        </div>
        <div>
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
                  <React.Fragment key={ele.empId}>
                    <tr>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td className="table_data">{ele.portfolio}</td>
                      <td className="table_data">{ele.empId}</td>
                      <td className="table_data">{ele.empName}</td>
                      <td className="table_data">{ele.skillCategory}</td>
                      <td className="table_data">{ele.skill}</td>
                      <td className="table_data">{ele.certificationLevel}</td>
                      <td className="table_data">{ele.skillExperianace}</td>
                      <td className="table_data">{ele.expertRating}</td>
                      <td className="table_data">{ele.skillScore}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <div className="update_bottom_btn">
            <button className="update_btn update_btn2 btn">Update</button>
            <button className="update_btn update_btn2 btn">Add</button>
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
