import { useState } from "react";

export default function GeneralInformation({ generalInfo, setGeneralInfo }) {
  const [open, setOpen] = useState(false);

  const toggler = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
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

          <div className="form">
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
          </div>
        </>
      ) : (
        <button onClick={toggler}>Personal Information</button>
      )}
    </div>
  );
}
