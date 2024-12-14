(() => {
    console.info("ready");
    const coursesTable = document.getElementById("CoursesTable");
    fetch("Data/Courses.json")
        .then(response => response.json())
        .then(data => {
            console.dir(data); 
            data["CoursesTable"].forEach((item) => {
                const row = document.createElement("tr");
                const titleCell = document.createElement("td");
                const typeCell = document.createElement("td");
                const summaryCell = document.createElement("td");
                const awardCell = document.createElement("td");
                const ucasCodeCell = document.createElement("td");
                const ucasPointsCell = document.createElement("td");
                const yearOfEntryCell = document.createElement("td");
                const modeCell = document.createElement("td");
                const lengthCell = document.createElement("td");
                const foundationYearCell = document.createElement("td");
                const subjectCell = document.createElement("td");
                const noLongerRecruitingCell = document.createElement("td");

                titleCell.textContent = item.CourseTitle;
                typeCell.textContent = item.CourseType;
                summaryCell.textContent = item.CourseSummary;
                awardCell.textContent = item.CourseAwardName;
                ucasCodeCell.textContent = item.UcasCode;
                ucasPointsCell.textContent = item.UcasPoints;
                yearOfEntryCell.textContent = item.YearOfEntry;
                modeCell.textContent = item.ModeOfAttendance;
                lengthCell.textContent = item.StudyLength;
                foundationYearCell.textContent = item.HasFoundationYear === "true" ? "Yes" : "No";
                subjectCell.textContent = item.CourseSubject;
                noLongerRecruitingCell.textContent = item.NoLongerRecruiting === "true" ? "Yes" : "No";

                row.appendChild(titleCell);
                row.appendChild(typeCell);
                row.appendChild(summaryCell);
                row.appendChild(awardCell);
                row.appendChild(ucasCodeCell);
                row.appendChild(ucasPointsCell);
                row.appendChild(yearOfEntryCell);
                row.appendChild(modeCell);
                row.appendChild(lengthCell);
                row.appendChild(foundationYearCell);
                row.appendChild(subjectCell);
                row.appendChild(noLongerRecruitingCell);
                coursesTable.appendChild(row);
            });
        })
})();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));