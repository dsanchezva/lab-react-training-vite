import allProfilesJSON from "../data/berlin.json";

function FaceBook() {
  const allProfiles = allProfilesJSON;
  console.log(allProfiles);
  return (
    <div className="allProfiles-container">
      {allProfiles.map((profile, index) => {
        return (
          <div key={index} className="eachProfile-container">
            <img src={profile.img} alt="profile-picture" />
            <div>
              <p>
                <strong>First name: </strong>
                {profile.firstName}
              </p>
              <p>
                <strong>Last name: </strong>
                {profile.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {profile.country}
              </p>
              <p>
                <strong>Type: </strong>
                {profile.isStudent ? "Student" : "Teacher"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
