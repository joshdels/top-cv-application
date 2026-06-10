import { useState } from "react";

export default function EducationInformation() {
  const [isOpen, setIsOpen] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [educationInfo, setEducationInfo] = useState({});
  const [educationList, setEducationList] = useState({});

  const toggler = () => {
    setIsOpen(!isOpen);
  };

  const formToggler = () => {
    setAddForm(!addForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducationInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {isOpen ? (
        <>
          <button onClick={toggler}>Education Information</button>

          <button onClick={formToggler}>Add Education</button>
          {addForm && <EducationForm />}
          {/* Im also thinking of arrays of arrays? huh? hehehe */}
        </>
      ) : (
        <button onClick={toggler}>Education Information</button>
      )}
    </>
  );
}

function EducationForm() {
  return (
    <>
      <form action="">
        <label htmlFor="">school</label>
        <input type="text" name="school" value={} />
        <label htmlFor="">degree</label>
        <input type="text" name="degree" />
        <label htmlFor="">start date</label>
        <input type="text" name="start-date" />
        <label htmlFor="">end date</label>
        <input type="text" name="end-date" />

        <button type="submit">save</button>
      </form>
    </>
  );
}
