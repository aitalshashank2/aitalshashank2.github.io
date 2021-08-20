import {
    Facebook,
    GitHub,
    Instagram,
    Linkedin,
    Mail,
    Twitter,
} from 'react-feather'

import './ContactMeComponent.css'

const ContactMeComponent = () => {

    const links = [
        {
            link: "https://www.facebook.com/shashank.aital.96/",
            logo: <Facebook color="#385898" />
        },
        {
            link: "https://www.linkedin.com/in/aitalshashank2/",
            logo: <Linkedin color="#0072b1" />
        },
        {
            link: "https://www.github.com/aitalshashank2/",
            logo: <GitHub color="#333" />
        },
        {
            link: "https://twitter.com/AitalShashank",
            logo: <Twitter color="#1da1f2" />
        },
        {
            link: "https://www.instagram.com/shashankaital/",
            logo: <Instagram color="#c13584" />
        },
        {
            link: "mailto:aitalshashank2@gmail.com",
            logo: <Mail color="rgba(182,133,77,.6)" />
        }
    ]

    return (
        <div className="container cm-container">
            <div className="text-area cm-text-area">
                <div className="cm-contact-links">
                    <div className="title">
                        Find me here
                    </div>
                    <div className="icon-bar">
                        {
                            links.map((value, index) => {
                                return (
                                    <a href={value.link} key={index}>
                                        {value.logo}
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="credits">
                        Designed by Nikita Tripathy
                    </div>
                    <div className="credits">
                        Developed and maintained by Shashank Aital
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMeComponent