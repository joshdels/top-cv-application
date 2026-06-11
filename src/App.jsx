import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./styles/index.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationInformation from "./components/EducationInformation";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  return (
    <>
      <h1>CV Application</h1>

      <GeneralInformation />
      <EducationInformation />
    </>
  );
}

function ExperienceInformation() {
  return (
    <>
      <form action="">
        <label htmlFor="">organization</label>
        <input type="text" id="organization" />
        <label htmlFor="">title</label>
        <input type="text" id="title" />
        <label htmlFor="">start date</label>
        <input type="text" id="start-date" />
        <label htmlFor="">end date</label>
        <input type="text" id="end-date" />
        <label htmlFor="">description</label>
        <input type="text" id="description" />

        <button type="submit">save</button>
      </form>
    </>
  );
}
