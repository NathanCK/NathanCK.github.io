import { experiences } from "./data.js";

function toggleHover() {
    this.classList.toggle('hover');
}

function loadExperience() {
    for (const data of experiences) {
        let hover_over = document.createElement("div");
        hover_over.id = "hover-me";
        hover_over.innerHTML = "Hover over!";

        let experience = document.createElement("div");
        experience.id = "experience";

        let description = document.createElement("div");
        description.id = "description";
        description.addEventListener('touchstart', toggleHover);

        let title = document.createElement("div");
        title.id = "title"
        title.innerHTML = data.title;

        let company_info = document.createElement("div");
        company_info.className = "company-info";
        company_info.innerHTML = data.company;

        let company_name = document.createElement("a");
        company_name.className = "material-icons external";
        company_name.target = "_blank";
        company_name.href = data.link;
        
        company_info.appendChild(company_name);

        let job_description = document.createElement("div");;
        job_description.id = "job-description";
        job_description.innerHTML = data.discription;

        let time = document.createElement("div");
        time.id = "time";
        time.innerHTML = data.period;

        description.append(hover_over, title, company_info, job_description);
        experience.append(description, time);

        document.body.appendChild(experience);
    }
    // document.createElement()
}

window.onload = loadExperience();
