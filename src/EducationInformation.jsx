import { useState } from "react";

export default function EducationInformation() {
  const [open, setOpen] = useState(false);
  const [educationInfo, setEducationInfo] = useState({});
  const [educationList, setEducationList] = useState({});

  const toggle = () => {
    setIsOpen(!open);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    const { name, value } = e.target;

    setEducationInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form action="">
        <label htmlFor="">school</label>
        <input type="text" name="school" />
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
