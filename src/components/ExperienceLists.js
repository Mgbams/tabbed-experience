import React, { useState, useEffect } from "react";
import SingleExperience from "./SingleExperience";
const url = "https://course-api.com/react-tabs-project";

const ExperienceLists = () => {
  const [user, setUser] = useState([]);
  const [initialData, setInitialData] = useState(); // used to display the side nav
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    let response = await fetch(url);
    let data = await response.json();
    if (data) {
      setIsLoading(false);
    }
    setUser(data[value]);
    setInitialData(data);
    //console.log(user);
  };

  useEffect(() => {
    fetchUser();
    console.log("reloaded page " + value);
  }, [value]);

  if (isLoading) {
    return (
      <div className="mt-3">
        <h1 className="text-center mt-5 font-weight-bold display-3">
          Loading ....
        </h1>
      </div>
    );
  } else {
    return (
      <div className="container-sm mt-5">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h1 className="font-weight-bold mt-3">Experience</h1>
          <div
            style={{ width: "100px", height: "4px", backgroundColor: "green" }}
          ></div>
        </div>

        <div className="row d-flex justify-content-between mt-5">
          <div className="col-md-3">
            {initialData?.map((user, index) => {
              return (
                <li
                  style={{ listStyleType: "none" }}
                  key={user.id}
                  className="d-flex mb-4"
                >
                  {" "}
                  {initialData[value].id === user.id && (
                    <div
                      style={{
                        width: "3px",
                        height: "40px",
                        backgroundColor: "green",
                      }}
                    ></div>
                  )}
                  <p className="ml-5 showdivOnHover">
                    <button type="button" onClick={() => setValue(index)}>
                      {" "}
                      {user.company ? user.company : ""}
                    </button>
                  </p>
                </li>
              );
            })}
          </div>
          <div className="col-md-9">
            <SingleExperience {...user} />
          </div>
        </div>
      </div>
    );
  }
};

export default ExperienceLists;
