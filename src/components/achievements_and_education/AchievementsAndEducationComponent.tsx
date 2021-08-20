import './AchievementsAndEducationComponent.css'

const AchievementsAndEducationComponent = () => {

    const education = [
        {
            institute: "Indian Institute of Technology, Roorkee",
            degree: "B. Tech. in Computer Science and Engineering",
            grade: "CGPA: 9.452",
            date: "2019 - Present"
        },
        {
            institute: "Nav Krishna Valley Junior College",
            degree: "Higher Secondary Education",
            grade: "Percentage: 94.62%",
            date: "2017 - 2019"
        },
        {
            institute: "St. Alphonsa School, Miraj",
            degree: "Secondary Education",
            grade: "Percentage: 96.00%",
            date: "2017"
        }
    ]

    const achievements = [
        {
            institute: "Joint Entrance Examination (Advanced)",
            description: "Administered by Indian Institutes of Technology",
            achievement: "All India Rank 411",
            date: "2019"
        },
        {
            institute: "Joint Entrance Examination (Main)",
            description: "Taken by more than a million students",
            achievement: "All India Rank 155",
            date: "2019"
        },
        {
            institute: "Higher Secondary Board Exams",
            description: "Organized by Maharashtra State Board",
            achievement: "Division Rank 2",
            date: "2019"
        }
    ]

    return (
        <div className="container aae-container">
            <div className="text-area aae-container-grid">
                <div className="aae-section" id="aae-section-left">
                    <div className="section-heading">
                        Education
                    </div>
                    <div className="aae-list-container">
                        <div className="aae-list">
                            {
                                education.map((value, index) => {
                                    return (
                                        <div className="card" key={index}>
                                            <div id="aae-section-card-left">
                                                <div className="institute">
                                                    {value.institute}
                                                </div>
                                                <div className="degree">
                                                    {value.degree}
                                                </div>
                                            </div>
                                            <div id="aae-section-card-right">
                                                <div className="grade">
                                                    {value.grade}
                                                </div>
                                                <div className="date">
                                                    {value.date}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="aae-section" id="aae-section-right">
                    <div className="section-heading">
                        Achievements
                    </div>
                    <div className="aae-list-container">
                        <div className="aae-list">
                            {
                                achievements.map((value, index) => {
                                    return (
                                        <div className="card" key={index}>
                                            <div id="aae-section-card-left">
                                                <div className="institute">
                                                    {value.institute}
                                                </div>
                                                <div className="degree">
                                                    {value.description}
                                                </div>
                                            </div>
                                            <div id="aae-section-card-right">
                                                <div className="grade">
                                                    {value.achievement}
                                                </div>
                                                <div className="date">
                                                    {value.date}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AchievementsAndEducationComponent