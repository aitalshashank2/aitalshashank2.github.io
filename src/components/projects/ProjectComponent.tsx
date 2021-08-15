import './ProjectComponent.css'

const ProjectComponent = () => {

    const projects = [
        {
            title: "Floo",
            description: "Floo is a video calling platform implemented using WebRTC, in which people can create meetings, record screens, create teams, post on a global forum and collaborate in real-time.",
            url: "https://github.com/aitalshashank2/Floo"
        },
        {
            title: "Content Management System, IITR",
            description: "CMS is a multi-user interface for managing, updating and publishing digital content on IITRs oﬃcial website.",
            url: "https://www.iitr.ac.in/"
        },
        {
            title: "Heimdall",
            description: "Heimdall is a GitHub based server login manager which eases the process of granting access to servers and tracking server login activity in an organization.",
            url: "https://github.com/aitalshashank2/Heimdall-Master"
        },
        {
            title: "The Meeting Sphinx",
            description: "The Meeting Sphinx is a cross-platform application that detects if the attendees in a meeting start recording their screens. This is useful for those professionals who wish to keep their content safe.",
            url: "https://github.com/aitalshashank2/The-Meeting-Sphinx"
        },
        {
            title: "ArxivApp",
            description: "ArxivApp gives a personalised experience to users while accessing research papers from arXiv. It allows the users to bookmark papers and also, write blogs on them. Users can rate the blogs and comment on them.",
            url: "https://github.com/aitalshashank2/ArxivAppBackend-Pro"
        },
        {
            title: "Chronicles",
            description: "Chronicles facilitates the process of testing a software for an organization. Testers can report bugs, assign it to another user and users can comment in real time.",
            url: "https://github.com/aitalshashank2/ArxivAppBackend-Pro"
        }
    ]

    const mouseEnter = (index: number) => {
        const title = document.getElementById(`project-${index}-title`)
        const description = document.getElementById(`project-${index}-description`)
        if (title && description) {
            title.style.display = "none"
            description.style.display = "block"
        }
    }

    const mouseLeave = (index: number) => {
        const title = document.getElementById(`project-${index}-title`)
        const description = document.getElementById(`project-${index}-description`)
        if (title && description) {
            title.style.display = "block"
            description.style.display = "none"
        }
    }

    return (
        <div className="container project-container">
            <div className="text-area project-container-margin">
                <div className="section-heading">
                    MY PROJECTS
                </div>
                <div className="project-list">
                    {
                        projects.map((value, index) => {
                            return (
                                <a
                                    className="project-card"
                                    onMouseEnter={() => mouseEnter(index)}
                                    onMouseLeave={() => mouseLeave(index)}
                                    href={value.url}
                                    key={index}
                                >
                                    <div className="title" id={`project-${index}-title`}>
                                        {value.title}
                                    </div>
                                    <div className="description" id={`project-${index}-description`}>
                                        {value.description}
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default ProjectComponent
