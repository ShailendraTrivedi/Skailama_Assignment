import React, { useState } from "react";
import { Home, Notification, PlusCircle, Setting } from "../assets";
import { CreateProjectModel } from "../components";
import { useSelector } from "react-redux";

const NewProject = () => {
  const [showModel, setShowModel] = useState(false);
  const { createNewProject } = useSelector((state) => state.storeNewProject);
  console.log(createNewProject);
  return (
    <>
      <div className="main">
        {showModel && <CreateProjectModel setShowModel={setShowModel} />}
        <div className="logo_main">
          <div className="logo_left">
            <img src="/imgs/directright.png" alt="" className="" />
            <p className="logo_text">LAMA.</p>
          </div>
          <div className="logo_right">
            <Setting />
            <Notification />
          </div>
        </div>
        <button className="back_to_home">
          <Home />
          Back To Home
        </button>
        {createNewProject?.length > 0 ? (
          <div className="new_project_box_true ">
            <div className="">
              <h1>Projects</h1>
              <button onClick={() => setShowModel(true)}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9536 28.0169H20.641V20.6429H28.0157V16.9559H20.641V9.58186H16.9536V16.9559H9.57881V20.6429H16.9536V28.0169ZM18.7973 37.2345C16.2468 37.2345 13.85 36.7503 11.6069 35.7818C9.36372 34.8133 7.41247 33.5001 5.75315 31.8422C4.09383 30.1831 2.78051 28.232 1.81318 25.9891C0.845857 23.7461 0.361581 21.3496 0.360352 18.7994C0.360352 16.2492 0.844628 13.8527 1.81318 11.6097C2.78173 9.36678 4.09506 7.41574 5.75315 5.75658C7.41247 4.09742 9.36372 2.78423 11.6069 1.817C13.85 0.849776 16.2468 0.365548 18.7973 0.364319C21.3477 0.364319 23.7445 0.848547 25.9877 1.817C28.2308 2.78546 30.1821 4.09865 31.8414 5.75658C33.5007 7.41574 34.8147 9.36678 35.7832 11.6097C36.7518 13.8527 37.2354 16.2492 37.2342 18.7994C37.2342 21.3496 36.7499 23.7461 35.7814 25.9891C34.8128 28.232 33.4995 30.1831 31.8414 31.8422C30.1821 33.5014 28.2308 34.8152 25.9877 35.7836C23.7445 36.7521 21.3477 37.2357 18.7973 37.2345Z"
                    fill="#F8F8F8"
                  />
                </svg>
                <h5>Create New Project</h5>
              </button>
            </div>
            <div className="separate_box">
              {createNewProject.map((item, i) => {
                return (
                  <div className="box-i">
                    <div className="">SP</div>
                    <div className="">
                      <div className="">
                        <h4>Sample Project</h4>
                        <span>4 Episodes</span>
                      </div>
                      {/* <div className="">
                        <h4>{item.projectName}</h4>
                        <span>{item.episodes} Episodes</span>
                      </div> */}
                      <p>Last edited a week ago</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="new_project_box">
            <h1 className="heading_1">Create a New Project</h1>
            <img src="/imgs/new_project.png" alt="" className="" />
            <p className="para_new_project">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </p>
            <button
              onClick={() => setShowModel(true)}
              className="button_new_project"
            >
              <div>
                <PlusCircle />
              </div>
              <h5>Create New Project</h5>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewProject;
