import { useState } from "react";

export default function GeneralInformation() {
  const [open, setOpen] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    fullname: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  });

  const toggler = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    const { name, value } = e.target;

    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="card">
      {open ? (
        <>
          <button onClick={toggler}>Personal Information</button>

          <label htmlFor="">full name</label>
          <input
            type="text"
            name="fullname"
            value={generalInfo.fullname}
            onChange={handleChange}
          />
          <label htmlFor="" id="phone">
            phone
          </label>
          <input
            type="number"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
          />
          <label htmlFor="">email</label>
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
          />
          <label htmlFor="">linkedIn</label>
          <input
            type="text"
            name="linkedin"
            value={generalInfo.linkedin}
            onChange={handleChange}
          />
          <label htmlFor="">github</label>
          <input
            type="text"
            name="github"
            value={generalInfo.github}
            onChange={handleChange}
          />
        </>
      ) : (
        <button onClick={toggler}>Personal Information</button>
      )}
    </div>
  );
}
