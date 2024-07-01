import React, { useState } from "react";
import { SideBar } from "../components";
import {
  AmericanFlag,
  DropDown,
  Home,
  Notification,
  UploadFile,
} from "../assets";
import UploadingModel from "../components/UploadingModel";
import { useDispatch, useSelector } from "react-redux";
import Transcript from "../components/Transcript";
import { deleteProject } from "../redux";

const Project = () => {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState({
    popup: false,
    src: null,
    text: null,
  });

  const [isEdit, setIsEdit] = useState(null);

  const { projects } = useSelector((state) => state.storeProject);

  const handleDelete = (i) => {
    dispatch(deleteProject(i));
  };

  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <div className="project_main">
      {openPopup.popup && (
        <UploadingModel
          src={openPopup.src}
          text={openPopup.text}
          setOpenPopup={setOpenPopup}
        />
      )}
      <SideBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="right_side">
        <div className="upper_navbar">
          <div>
            <Home fill="#7e22ce" />
            <span>/ Sample Project /</span> <span>Upload</span>
          </div>
          <div>
            <DropDown />
            <div>EN</div>
            <img src="/imgs/american_flg.png" alt="" />
            <Notification />
          </div>
        </div>

        {selectedMenu === 1 && (
          <>
            {isEdit !== null ? (
              <Transcript setIsEdit={setIsEdit} index={isEdit} />
            ) : (
              <>
                <h2>Upload</h2>
                <div className="">
                  <div
                    onClick={() =>
                      setOpenPopup({
                        popup: true,
                        src: "/imgs/youtube.png",
                        text: "Youtube Video",
                      })
                    }
                    className="upload_box"
                  >
                    <img src="/imgs/youtube.png" alt="" />
                    <div>
                      Upload <br />
                      Youtube Video
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      setOpenPopup({
                        popup: true,
                        src: "/imgs/spotify.png",
                        text: "Spotify Podcast",
                      })
                    }
                    className="upload_box"
                  >
                    <img src="/imgs/spotify.png" alt="" />
                    <div>
                      Upload <br />
                      Spotify Podcast
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      setOpenPopup({
                        popup: true,
                        src: "/imgs/RSS.png",
                        text: "RSS Feed",
                      })
                    }
                    className="upload_box"
                  >
                    <img src="/imgs/RSS.png" alt="" />
                    <div>
                      Upload <br />
                      RSS Feed
                    </div>
                  </div>
                </div>
                {projects?.length > 0 ? (
                  <>
                    <div className="try_it_out">
                      <h3>
                        All files are processed! Your widget is ready to go!
                      </h3>
                      <button>Try it out!</button>
                    </div>
                    <div className="table">
                      <table>
                        <thead>
                          <th>Name</th>
                          <th>Upload Date & Time</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </thead>
                        <tbody>
                          {projects.map((item, i) => {
                            return (
                              <tr>
                                <td>Sample Name</td>
                                <td>
                                  {item.data} | {item.time}
                                </td>
                                <td>Done</td>
                                <td>
                                  <button
                                    onClick={() => setIsEdit(i)}
                                    className="table_edit_button"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => handleDelete(i)}
                                    className="table_delete_button"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="">
                      <div
                        onClick={() =>
                          setOpenPopup({
                            popup: true,
                            src: "/imgs/youtube.png",
                            text: "Youtube Video",
                          })
                        }
                        className="upload_box"
                      >
                        <img src="/imgs/youtube.png" alt="" />
                        <div>
                          Upload <br />
                          Youtube Video
                        </div>
                      </div>
                      <div
                        onClick={() =>
                          setOpenPopup({
                            popup: true,
                            src: "/imgs/spotify.png",
                            text: "Spotify Podcast",
                          })
                        }
                        className="upload_box"
                      >
                        <img src="/imgs/spotify.png" alt="" />
                        <div>
                          Upload <br />
                          Spotify Podcast
                        </div>
                      </div>
                      <div
                        onClick={() =>
                          setOpenPopup({
                            popup: true,
                            src: "/imgs/RSS.png",
                            text: "RSS Feed",
                          })
                        }
                        className="upload_box"
                      >
                        <img src="/imgs/RSS.png" alt="" />
                        <div>
                          Upload <br />
                          RSS Feed
                        </div>
                      </div>
                    </div>
                    <div className="OR">OR</div>
                    <div className="upload_img">
                      <UploadFile />
                      <span>
                        Select a file or drag and drop here (Podcast Media or
                        Transcription Text)
                      </span>
                      <p>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
                      <button>Select File</button>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}

        {selectedMenu === 2 && (
          <>
            <h2>Configuration</h2>
            <ul className="flex gap-10 p-2 border-b-2 border-[#DADADA]">
              <li className="">General</li>
              <li>Display</li>
              <li>Advance</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
