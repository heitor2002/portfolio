const completeInformations = () => {
  const tagListProjects = document.querySelector("[listProjects]");
  const tagInfoAvatar = document.querySelector('[infoAvatar="infoAvatar"]');
  const tagSkillsPoints = document.querySelector('[skills="skillsPoints"]');

  const listProjects = projects.reduce((accumulator, item) => {
    accumulator += `
        <li class="card_project">
              <a href="${item.link}">
                <div class="card_image" style="background-image: url('${item.image}');"></div>
                <div class="card_content">
                  <h2>${item.name}</h2>
                  <p>
                    ${item.content}
                  </p>
                </div>
                <!--cart_content-->
              </a>
            </li>
        `;
    return accumulator;
  }, "");

  const avatarInformations = `
  <li><span>Full name:</span> ${infoHeitor.avatar.name}</li>
  <li><span>Age:</span> ${infoHeitor.avatar.age} years</li>
  <li><span>Ocuppation:</span> ${infoHeitor.avatar.ocuppation}</li>
  <li><span>Instagram:</span> ${infoHeitor.avatar.instagram}</li>
  `;

  const listSkills = skills.reduce((accumulator, info) => {
    accumulator += `
    <h1>${info.title}</h1>
    <div class="skills_bar">
    <div class="skills_progress" style="width: ${info.points}%;"></div>
    </div>
    `;
    return accumulator;
  }, "");

  tagListProjects.innerHTML = listProjects;
  tagInfoAvatar.innerHTML = avatarInformations;
  tagSkillsPoints.innerHTML = listSkills;
};

completeInformations();
