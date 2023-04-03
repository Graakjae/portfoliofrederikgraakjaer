import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledHeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 250px;
    @media (max-width: 700px) {
        height: auto;
        padding-bottom: 50px;
    }

    h2 {
        margin-top: 0px;
        color: #ccd6f6;
        font-size: 40px;
        margin-bottom: 50px;
        @media (max-width: 600px) {
            font-size: 30px;
            margin-bottom: 20px;
        }
    }

    p {
        max-width: 540px;
        margin-bottom: 20px;
        @media (max-width: 600px) {
            max-width: 300px;
        }
    }
    .mail {
        &:hover {
            color: #06d640;
        }
    }
`;

const Contact = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    
    return (
        <StyledHeroSection id="Contact">
            <div>
                <h2 data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"
                        data-aos-duration="400"
                        data-aos-delay="50">Contact</h2>
                <p data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"
                        data-aos-duration="400"
                        data-aos-delay="50">
                    Thanks for checking out my portfolio! If you’d like to get in touch with me about a project, a job
                    position or just to say hello, please feel free to reach out to me. I’m always interested in hearing
                    about new opportunities, so don’t hesitate to reach out. Looking forward to connecting with you!
                </p>

                <a data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"
                        data-aos-duration="400"
                        data-aos-delay="50" href="mailto: graakjaer.f@gmail.com" className="mail">
                    graakjaer.f@gmail.com
                </a>
            </div>
        </StyledHeroSection>
    );
};

export default Contact;
