import { useState } from "react";

export default function EducationInformation({
  educationList,
  setEducationList,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });
  const [editIndex, setEditIndex] = useState(null);

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

  const deleteEducation = (index) => {
    setEducationList((prev) => prev.filter((_, i) => i !== index));
  };

  const editEducation = (index) => {
    setEducationInfo(educationList[index]);
    setEditIndex(index);
    setAddForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      setEducationList((prev) =>
        prev.map((item, index) => (index === editIndex ? educationInfo : item)),
      );
      setEditIndex(null);
    } else {
      setEducationList((prev) => [...prev, educationInfo]);
    }

    setEducationInfo({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    });

    setAddForm(false);
  };

  return (
    <>
      {isOpen ? (
        <>
          <button onClick={toggler}>Education Information</button>

          {!addForm && (
            <div>
              <EducationList
                educationList={educationList}
                deleteEducation={deleteEducation}
                editEducation={editEducation}
              />
              <button onClick={formToggler} className="small-btn">
                Add Education
              </button>
            </div>
          )}

          {addForm && (
            <div>
              <EducationForm
                educationInfo={educationInfo}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          )}
        </>
      ) : (
        <button onClick={toggler}>Education Information</button>
      )}
    </>
  );
}

function EducationForm({ educationInfo, handleChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label>school</label>
        <input
          type="text"
          name="school"
          value={educationInfo.school}
          name="school"
          onChange={handleChange}
        />
        <label>degree</label>
        <input
          type="text"
          name="degree"
          value={educationInfo.degree}
          name="degree"
          onChange={handleChange}
        />
        <label>start date</label>
        <input
          type="text"
          name="startDate"
          value={educationInfo.startDate}
          name="startDate"
          onChange={handleChange}
        />
        <label>end date</label>
        <input
          type="text"
          name="endDate"
          value={educationInfo.endDate}
          name="endDate"
          onChange={handleChange}
        />

        <button type="submit">save</button>
      </form>
    </>
  );
}

function EducationList({ educationList, deleteEducation, editEducation }) {
  return (
    <>
      {educationList ? (
        educationList.map((item, index) => (
          <div key={index} className="list">
            <span>{item.school}</span>
            <div className="buttons">
              <button onClick={() => editEducation(index)}>edit</button>
              <button onClick={() => deleteEducation(index)}>delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No education records yet.</p>
      )}
    </>
  );
}
