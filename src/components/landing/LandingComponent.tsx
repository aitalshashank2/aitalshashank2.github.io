import { useEffect } from 'react'

import './LandingComponent.css'

const LandingComponent = () => {

    const bgCircle = () => {
        const bg = document.getElementById('bg-circle')
        if(bg !== null){
            bg.style.top = `-${(2550 - document.documentElement.clientHeight)}px`
            bg.style.left = `-${(1250 - document.documentElement.clientWidth/2)}px`
        }
    }

    useEffect(() => {
        bgCircle()
    }, [])

    useEffect(() => {
        window.addEventListener("resize", bgCircle)
    }, [])

    return (
        <div style={{width: "100vw", overflow: "hidden", position: "relative"}}>
            <div className="bg" id="bg-circle">
            </div>
            <div className="landingContainer">
                <div className="textAreaLanding">
                    <div className="greeting">
                        H E L L O ! &nbsp; I ' M
                    </div>
                    <div className="name">
                        SHASHANK AITAL
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingComponent