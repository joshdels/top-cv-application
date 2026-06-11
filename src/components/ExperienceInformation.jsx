import { useState } from "react";

export default function ExperienceInformation({
  experienceList,
  setExperienceList,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [experienceInfo, setExperienceInfo] = useState({
    organization: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
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

    setExperienceInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const deleteExperience = (index) => {
    setExperienceList((prev) => prev.filter((_, i) => i !== index));
  };

  const editExperience = (index) => {
    setExperienceInfo(experienceList[index]);
    setEditIndex(index);
    setAddForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      setExperienceList((prev) =>
        prev.map((item, index) =>
          index === editIndex ? experienceInfo : item,
        ),
      );
      setEditIndex(null);
    } else {
      setExperienceList((prev) => [...prev, experienceInfo]);
    }

    setExperienceInfo({
      organization: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    });

    setAddForm(false);
  };

  return (
    <>
      {isOpen ? (
        <>
          <button onClick={toggler}>Experience Information</button>

          {!addForm && (
            <div>
              <ExperienceList
                experienceList={experienceList}
                deleteExperience={deleteExperience}
                editExperience={editExperience}
              />
              <button onClick={formToggler} className="small-btn">
                Add Experience
              </button>
            </div>
          )}

          {addForm && (
            <div>
              <ExperienceForm
                experienceInfo={experienceInfo}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          )}
        </>
      ) : (
        <button onClick={toggler}>Experience Information</button>
      )}
    </>
  );
}

function ExperienceForm({ experienceInfo, handleChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="">organization</label>
        <input
          type="text"
          name="organization"
          value={experienceInfo.organization}
          onChange={handleChange}
        />
        <label htmlFor="">title</label>
        <input
          type="text"
          name="title"
          value={experienceInfo.title}
          onChange={handleChange}
        />
        <label htmlFor="">start date</label>
        <input
          type="text"
          name="startDate"
          value={experienceInfo.startDate}
          onChange={handleChange}
        />
        <label htmlFor="">end date</label>
        <input
          type="text"
          name="endDate"
          value={experienceInfo.endDate}
          onChange={handleChange}
        />
        <label htmlFor="">location</label>
        <input
          type="text"
          name="location"
          value={experienceInfo.location}
          onChange={handleChange}
        />
        <label htmlFor="">description</label>
        <input
          type="text"
          name="description"
          value={experienceInfo.description}
          onChange={handleChange}
        />

        <button type="submit">save</button>
      </form>
    </>
  );
}

function ExperienceList({ experienceList, deleteExperience, editExperience }) {
  return (
    <>
      {experienceList ? (
        experienceList.map((item, index) => (
          <div key={index} className="list">
            <span>{item.organization}</span>
            <div className="buttons">
              <button onClick={() => editExperience(index)}>edit</button>
              <button onClick={() => deleteExperience(index)}>delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No Experience records yet.</p>
      )}
    </>
  );
}
