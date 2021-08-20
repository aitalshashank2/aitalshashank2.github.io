import LandingComponent from "./landing/LandingComponent"
import AboutComponent from "./about/AboutComponent"
import AchievementsAndEducationComponent from "./achievements_and_education/AchievementsAndEducationComponent"
import SkillSetComponent from "./skill_set/SkillSetComponent"
import ProjectComponent from "./projects/ProjectComponent"
import PoRComponent from "./pors/PoRComponent"
import ContactMeComponent from "./contact_me/ContactMeComponent"

import './common/common.css'

const App = () => {
    return (
        <>
            <LandingComponent />
            <AboutComponent />
            <AchievementsAndEducationComponent />
            <SkillSetComponent />
            <ProjectComponent />
            <PoRComponent />
            <ContactMeComponent />
        </>
    )
}

export default App