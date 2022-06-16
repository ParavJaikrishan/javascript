const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const year = document.querySelector("#year-of-birth");
const about = document.querySelector("#about-you");
const achievements = document.querySelector("#achievements");
const grade = document.querySelector("#grade");
const form = document.querySelector("form");

for(let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.innerHTML = i;
    grade.appendChild(option);
}

const validName = name => /^[a-zA-Z]/.test(name) ? true : "Enter a valid name";
const validEmail = email => email.includes("@gmail.com") ? true : "Enter a valid gmail.com email";
const validYear = year => year >= 2006 && year <= 2018 ? true : "Enter a valid year of birth";
const validDesc = desc => desc !== "" ? true : "Entire a valid description";
const validGrade = grade => grade >= 1 && grade <= 12 ? true : "Enter a valid grade";

form.addEventListener("submit", e => {
    e.preventDefault();
    let values = [
        validName(nameInput.value),
        validEmail(email.value),
        validYear(year.value),
        validDesc(about.value),
        validDesc(achievements.value),
        validGrade(grade.value)
    ];
    let check = values.every(v => v === true);
    if(check) {
        alert(`
            Name: ${nameInput.value}
            Email: ${email.value}
            Year of birth: ${year.value}
            About: ${about.value}
            Achievements: ${achievements.value}
            Grade: ${grade.value}
        `)
    } else {
        alert(values.find(value => typeof value === "string"));
    }
});