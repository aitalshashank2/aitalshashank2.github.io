import LandingComponent from "./landing/LandingComponent"
import AboutComponent from "./about/AboutComponent"
import SkillSetComponent from "./skill_set/SkillSetComponent"
import ProjectComponent from "./projects/ProjectComponent"
import PoRComponent from "./pors/PoRComponent"

import './common/common.css'

const App = () => {
    return (
        <>
            <LandingComponent />
            <AboutComponent />
            <SkillSetComponent />
            <ProjectComponent />
            <PoRComponent />
        </>
    )
}

export default App