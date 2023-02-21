import React, { useState } from "react";

function Table({ ele,id,handelCheckBox,handleOptionChange }) {

  return (
    <>
      <td>
        <input
          type="checkbox"
          onChange={(event)=>handelCheckBox(event,id) }
          checked={ele.enabled}
          name=""
          id=""

        />
      </td>
      <td className="table_data" name='portfolio'>{ele.portfolio}</td>
      <td className="table_data" name='empId'>{ele.empId}</td>
      <td className="table_data" name='empName'>{ele.empName}</td>
      <td className="table_data" name='skillCategory'>{ele.skillCategory}</td>
      <td className="table_data" name='skill'>{ele.skill}</td>
      {ele.enabled ?
      <>
      <td className="table_data">
          <select name="certificationLevel" id="" className="px-4" onChange={(event) => handleOptionChange(event, id)}>
            <option value={ele.certificationLevel}>{ele.certificationLevel}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            
          </select>
        </td>
        <td className="table_data">
          <select name="skillExperianace" id="" className="px-4" onChange={(event) => handleOptionChange(event, id)}>
            <option value={ele.skillExperianace}>{ele.skillExperianace}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            
          </select>
        </td>
        <td className="table_data">
          <select name="expertRating" id="" className="px-4" onChange={(event) => handleOptionChange(event, id)}>
            <option value={ele.expertRating}>{ele.expertRating}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            
          </select>
        </td>
          </> 
          : <>
          <td className="table_data">{ele.certificationLevel}</td>
          <td className="table_data">{ele.skillExperianace}</td>
          <td className="table_data">{ele.expertRating}</td>
          </>
      }
       

      <td className="table_data">{ele.skillScore}</td>
    </>
  );
}

export default Table;
