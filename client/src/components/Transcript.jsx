import React, { useState } from "react";
import { Pencil, Search } from "../assets";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setEdit } from "../redux";

const Transcript = ({ setIsEdit, index }) => {
  const dispatch = useDispatch();
  const [edit, setEditing] = useState(false);
  const [textArea, setTextArea] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error eveniet necessitatibus dolor! Totam commodi nihil deleniti placeat mollitia libero voluptates tempora quo autem vitae asperiores numquam praesentium aperiam nam suscipit eum ut quae, debitis consectetur, accusantium, repudiandae nulla maxime? Odio adipisci minus sed! Assumenda odio fuga nihil nesciunt natus eligendi aspernatur dolor exercitationem. Iste facilis aperiam dolore fugit quos voluptatibus, eligendi ea eveniet earum, cupiditate maiores nostrum, nesciunt omnis itaque. Harum ab, molestiae quam nesciunt adipisci recusandae ut nulla, maiores aliquid error accusamus doloremque voluptate ullam facere? Velit debitis veritatis aliquam deserunt vero voluptatum nostrum expedita quos natus facere?"
  );
  const handleEdit = () => {
    dispatch(setEdit({ index, text: textArea }));
    setEditing(false);
    setIsEdit(null);
  };
  return (
    <>
      <div className="edit_main_box">
        <div>
          <h2>Edit Transcript</h2>
          <div>
            {edit && (
              <>
                <button
                  onClick={() => setEditing(false)}
                  className="discard_edit"
                >
                  Discard
                </button>
                <button onClick={handleEdit} className="save_exit_edit">
                  Save & exit
                </button>
              </>
            )}
          </div>
        </div>
        <div className="edit_box">
          <div>
            <button onClick={() => setEditing(true)}>
              <Pencil />
              Edit Mode
            </button>
            <div>
              <Search />
            </div>
          </div>

          <div className="text">
            <h3>Speaker</h3>
            {edit ? (
              <textarea
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
              />
            ) : (
              <p>{textArea}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transcript;
