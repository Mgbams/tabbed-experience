import React, { useState, useEffect } from "react";
import SingleExperience from "./SingleExperience";
const url = "https://course-api.com/react-tabs-project";

const ExperienceLists = () => {
  const [user, setUser] = useState([]);
  const [initialData, setInitialData] = useState();

  const fetchUser = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setUser(data);
    setInitialData(data[0]);
    console.log(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container-sm">
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <h1>Experience</h1>
        <div
          style={{ width: "100px", height: "4px", backgroundColor: "green" }}
        ></div>
      </div>

      <div className="row d-flex justify-content-between mt-5">
        <div className="col-2">
          {user.map((user) => {
            return (
              <li
                style={{ listStyleType: "none" }}
                key={user.id}
                className="d-flex mb-3"
              >
                {" "}
                <div
                  style={{
                    width: "3px",
                    height: "40px",
                    backgroundColor: "green",
                  }}
                  className="mr-5"
                ></div>{" "}
                <p>{user.company ? user.company : ""}</p>
              </li>
            );
          })}
        </div>
        <div className="col-10">
          <SingleExperience {...initialData} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceLists;
