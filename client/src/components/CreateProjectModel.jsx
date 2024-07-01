import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AddInput from "./AddInput";
import { useDispatch } from "react-redux";
import { createNewProjectAction } from "../redux";

const createProjectValidationSchema = Yup.object({
  projectName: Yup.string().required("Please enter your Project Name!"),
});

const CreateProjectModel = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="create_project_model"></div>
      <div className="box_project_model">
        <Formik
          initialValues={{ projectName: "" }}
          validationSchema={createProjectValidationSchema}
          onSubmit={(values) => {
            values = {
              ...values,
              episodes: 4,
            };
            dispatch(createNewProjectAction(values));
            props.setShowModel(false);
          }}
        >
          {() => (
            <Form className="create_project_form">
              <h3>Create Project</h3>
              <AddInput
                type={"text"}
                label={"Enter Project Name:"}
                name={"projectName"}
                placeholder={"Type here"}
              />
              <div className="forimk_new_project_buttons">
                <button onClick={() => props.setShowModel(false)} type="cancel">
                  Cancel
                </button>
                <button type="submit">Create</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateProjectModel;
