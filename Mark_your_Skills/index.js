let skillList = [
  {
    skillName: "HTML",
    uniqueNo: 1
  },
  {
    skillName: "CSS",
    uniqueNo: 2
  },
  {
    skillName: "JavaScript",
    uniqueNo: 3
  }
];

let skillsListEl = document.getElementById("skillsList");

function createAndAppendSkill(skill) {
  let skillLiElId = "li" + skill.uniqueNo;
  let inputElId = "checkbox" + skill.uniqueNo;
  let labelElId = "label" + skill.uniqueNo;

  let skillLiEl = document.createElement("li");
  skillLiEl.id = skillLiElId;
  skillsListEl.appendChild(skillLiEl);

  let inputEl = document.createElement("input");
  let labelEl = document.createElement("label");
  inputEl.id = inputElId;
  inputEl.type = "checkbox";
  inputEl.classList.add("mr-2");
  inputEl.onclick = function () {
    labelEl.classList.toggle("text-success");
  };
  labelEl.id = labelElId;
  labelEl.textContent = skill.skillName;
  labelEl.setAttribute("for", inputElId);

  skillLiEl.appendChild(inputEl);
  skillLiEl.appendChild(labelEl);
}

for (let eachSkill of skillList) {
  createAndAppendSkill(eachSkill);
}
