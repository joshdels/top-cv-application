import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./styles/index.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationInformation from "./components/EducationInformation";
import ExperienceInformation from "./components/ExperienceInformation";
import ApplicantInformation from "./components/ApplicantInformation";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullname: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  });
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  return (
    <div className="app">
      <aside>
        <h1>CV Application</h1>

        <button className="download">Download</button>

        <div className="form-toggler">
          <GeneralInformation
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
          <EducationInformation
            educationList={educationList}
            setEducationList={setEducationList}
          />
          <ExperienceInformation
            experienceList={experienceList}
            setExperienceList={setExperienceList}
          />
        </div>
      </aside>
      <main>
        <ApplicantInformation
          generalInfo={generalInfo}
          educationList={educationList}
          experienceList={experienceList}
        />
      </main>
    </div>
  );
}
