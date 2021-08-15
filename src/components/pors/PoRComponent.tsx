import './PoRComponent.css'

import IMGLogo from '../../assets/img_logo.png'
import VLGLogo from '../../assets/vlg_logo.jpg'

const PoRComponent = () => {

    const pors = [
        {
            organization: "Information Management Group, IIT Roorkee",
            designation: "Project Leader",
            logo: IMGLogo,
            description: "Working with a team of around 50 tech enthusiasts to develop software solutions for the college campus community.",
            url: "https://channeli.in/maintainer_site/"
        },
        {
            organization: "Vision and Language Group, IIT Roorkee",
            designation: "Core Member",
            logo: VLGLogo,
            description: "Core Member at VLG, a student group that promotes Deep Learning research culture at IITR by discussing relevant research papers, organizing workshops and working on related projects.",
            url: "https://vlgiitr.github.io/"
        }
    ]

    const mouseEnter = (index: number) => {
        const front = document.getElementById(`por-${index}-front`)
        const description = document.getElementById(`por-${index}-description`)
        if (front && description) {
            front.style.display = "none"
            description.style.display = "block"
        }
    }

    const mouseLeave = (index: number) => {
        const front = document.getElementById(`por-${index}-front`)
        const description = document.getElementById(`por-${index}-description`)
        if (front && description) {
            front.style.display = "block"
            description.style.display = "none"
        }
    }

    return (
        <div className="container por-container">
            <div className="text-area por-container-margin">
                <div className="section-heading">
                    { window.innerWidth > 400 ? "POSITIONS OF RESPONSIBILITY" : "PoRs"}
                    
                </div>
                <div className="por-list">
                    {
                        pors.map((value, index) => {
                            return (
                                <a
                                    className="por-card"
                                    onMouseEnter={() => mouseEnter(index)}
                                    onMouseLeave={() => mouseLeave(index)}
                                    href={value.url}
                                    key={index}
                                >
                                    <div className="front" id={`por-${index}-front`}>
                                        <div className="image">
                                            <img src={value.logo} alt={value.organization} />
                                        </div>
                                        <div className="organization">
                                            {value.organization}
                                        </div>
                                        <div className="designation">
                                            {value.designation}
                                        </div>
                                    </div>
                                    <div className="description" id={`por-${index}-description`}>
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

export default PoRComponent
