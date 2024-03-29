import './AboutComponent.css'

import profilePicture from '../../assets/profile_picture.jpeg'

const AboutComponent = () => {
    return (
        <div className="container">
            <div className="text-area">
                <div className="aboutContainer">
                    <div className="aboutImageContainer">
                        <img src={profilePicture} alt="Shashank Aital" className="aboutImage" />
                    </div>

                    <div className="aboutContentContainer">
                        
                        {/* <div className="aboutGreetingContainer">
                            <div className="aboutGreetingBackground">
                                ABOUT
                            </div>
                            <div className="aboutGreeting">
                                Hi! I'm Shashank Aital
                            </div>
                        </div> */}

                        <div className="aboutGreetingBackground">
                            ABOUT
                        </div>

                        <div className="aboutTextContainer">
                            <div>
                                <div className="aboutGreeting">
                                    Hi! I'm Shashank Aital
                                </div>
                                <div className="aboutDescription">
                                    An inquisitive computer scientist (in the making), exploring the world of computer science and engineering.
                                </div>
                                {/* <a href="/Shashank_Resume.pdf" className="aboutResume">Checkout my Resume</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent