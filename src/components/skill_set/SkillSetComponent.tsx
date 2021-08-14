import './SkillSetComponent.css'

const SkillSetComponent = () => {

    const languages = ["C++", "Python", "Java", "Javascript"]

    const softwarePackages = [
        "Django", "Django Rest Framework", "Django Channels",
        "ReactJS", "Redux", "Docker", "NGINX", "docker-compose",
        "Material UI", "PyTorch", "MySQL", "PostgreSQL"
    ]

    return (
        <div className="container skill-set-container">
            <div className="text-area">
                <div className="section-heading">
                    MY SKILL SET
                </div>
                <div className="skill-set">
                    <div className="section" id="skill-set-left">
                        <div className="heading">
                            Languages
                        </div>
                        <div className="content">

                            {languages.map((value, index) => {
                                return (
                                    <div className="chip">
                                        {value}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="section" id="skill-set-right">
                        <div className="heading">
                            Software Packages and Utilities
                        </div>
                        <div className="content">

                            {softwarePackages.map((value, index) => {
                                return (
                                    <div className="chip">
                                        {value}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SkillSetComponent
