export default function ApplicantInformation({
  generalInfo,
  educationList,
  experienceList,
}) {
  return (
    <>
      <div className="paper">
        <header>
          <h1>{generalInfo.fullname}</h1>
          <div>
            <p>{generalInfo.email}</p>
            <p>{generalInfo.phone}</p>
            <p>{generalInfo.linkedin}</p>
            <p>{generalInfo.github}</p>
          </div>
        </header>

        <section className="education">
          {educationList.length > 0 && (
            <>
              <h1>Education</h1>

              {educationList.map((education, index) => (
                <div key={index} className="school">
                  <div className="header">
                    <h2>{education.school}</h2>
                    <span>
                      <p>{education.startDate}</p>

                      <p>{education.endDate}</p>
                    </span>
                  </div>

                  <div>
                    <p>{education.degree}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </section>

        <section className="experience">
          {experienceList.length > 0 && (
            <>
              <h1>Experience</h1>

              {experienceList.map((experience, index) => (
                <div key={index} className="experience-content">
                  <div className="header">
                    <h2>{experience.organization}</h2>
                    <div>
                      <p>{experience.startDate}</p>
                      <p>{experience.endDate}</p>
                    </div>
                  </div>
                  <div class="italic">
                    <p>{experience.title}</p>
                    <p>{experience.location}</p>
                  </div>
                  <ul>
                    <li>{experience.description}</li>
                  </ul>
                </div>
              ))}
            </>
          )}
        </section>
      </div>
    </>
  );
}
