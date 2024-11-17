document.addEventListener("DOMContentLoaded", () => {
    // Dynamic content for About section
    const aboutContent = `
        I am a passionate Product Manager with 2+ years of experience in the B2B SaaS space. 
        I specialize in driving innovation through GenAI and turnkey solutions. 
        My mission is to create impactful products that solve real-world challenges.
    `;
    document.getElementById("about-content").textContent = aboutContent;

    // Dynamic content for Projects section
    const projects = [
        {
            title: "E-Tender Management Tool",
            description: "A comprehensive SaaS platform for managing tenders efficiently in enterprise environments.",
            link: "https://github.com/your-repo"
        },
        {
            title: "Elevator OEM Integration",
            description: "Integrated smart elevator systems with access control for optimized crowd management.",
            link: ""
        },
        {
            title: "Blue-Collar Project Management Platform",
            description: "Enhanced workforce efficiency through a tailored project management tool for Gulf enterprises.",
            link: ""
        }
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ""}
        `;
        projectList.appendChild(projectItem);
    });

    // Dynamic content for Skills section
    const skills = [
        "Product Lifecycle Management",
        "Prototyping and Wireframing",
        "Market Research and Analytics",
        "SaaS Platforms",
        "GenAI Solutions",
        "IoT and API Integration",
        "Agile Scrum"
    ];

    const skillsList = document.getElementById("skills-list");
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
});
