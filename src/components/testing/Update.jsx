import axios from "axios";
import React, { useEffect, useState } from "react";

function Update() {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);
  // console.log(data)
  const getData = () => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getData();
    // console.log(posts)
  }, []);

  const addSkillsHandler = () => {
    const add = {
        empId: 1,
      portfolio: "CCE",
      empName: "RajTemp",
      skillCategory: "Technology",
      skill: "MySql",
      certificationLevel: 1,
      skillExperianace: 1,
      expertRating: 1,
      skillScore: 2.5,
      }

      axios.post('http://localhost:4000/data',add)
      .catch(err=>console.log(err))
      getData()

  };

  return (
    <div>
      {data &&
        data.map((ele) => {
          return (
            <div key={ele.id}>
              <td className="table_data">{ele.portfolio}</td>
              <td className="table_data">{ele.empId}</td>
              <td className="table_data">{ele.empName}</td>
              <td className="table_data">{ele.skillCategory}</td>
              <td className="table_data">{ele.skill}</td>
              <td className="table_data">{ele.certificationLevel}</td>
              <td className="table_data">{ele.skillExperianace}</td>
              <td className="table_data">{ele.expertRating}</td>

            </div>
          );
        })}

      <button onClick={addSkillsHandler}>Add</button>
    </div>
  );
}

export default Update;
