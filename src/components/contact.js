import React from "react";
import styled from "styled-components";
import Image from "next/image";

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
        @media (max-width: 600px) {
            max-width: 300px;
        }
    }
    .mail {
        text-decoration: underline 1px solid green;
        padding-top: 50px;
        &:hover {
            transform: translateY(-3px);
            transition-duration: 0.3s;
            color: #06d640;
        }
    }
`;

const Contact = () => {
    return (
        <StyledHeroSection id="Contact">
            <div>
                <h2>Contact</h2>
                <p>
                    Thanks for checking out my portfolio! If you’d like to get in touch with me about a project, a job
                    position or just to say hello, please feel free to reach out to me. I’m always interested in hearing
                    about new opportunities, so don’t hesitate to reach out. Looking forward to connecting with you!
                </p>

                <a href="mailto: graakjaer.f@gmail.com" className="mail">
                    graakjaer.f@gmail.com
                </a>
            </div>
        </StyledHeroSection>
    );
};

export default Contact;
