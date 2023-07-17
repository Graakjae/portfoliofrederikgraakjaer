import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import { Icon } from "../images/icons";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const StyledHeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 250px;
    
    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 768px) {
        height: auto;
        padding-bottom: 50px;
    }

    h2 {
        margin-top: 0px;
        color: #ccd6f6;
        font-size: 40px;
        margin-bottom: 20px;
        @media (max-width: 768px) {
            font-size: 30px;
        }
    }

    p {
        max-width: 540px;
        margin-bottom: 20px;
        @media (max-width: 768px) {
            max-width: 300px;
        }
    }
    .mail {
        padding: 10px;
        &:hover {
            color: #06d640;
        }
    }
    .Link {
        background-color: #181a1f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.25);
    max-width: 350px;
    cursor: pointer;
    &:hover {
        a,
        svg {
            color: #06d640;
        }
    }
`;

const StyledIcon = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 10px;

    li {
        a {
            padding: 0px;
            svg {
                width: 22px;
                height: 22px;
                color: #a8b2d1;
                margin-left: 10px;

                &:hover,
                &:focus {
                    color: #06d640;
                }
            }
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
                <h2
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="100"
                    data-aos-duration="400"
                    data-aos-delay="100"
                >
                    Contact
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="100"
                    data-aos-duration="400"
                    data-aos-delay="200"
                >
                    Thanks for checking out my portfolio! If you’d like to get in touch with me about a project, a job
                    position or just to say hello, please feel free to reach out to me. I’m always interested in hearing
                    about new opportunities, so don’t hesitate to reach out!
                </p>
                <div className="flex">
                    <div className="Link">
                        <StyledIcon>
                            <li>
                                <a href="mailto: graakjaer.f@gmail.com">
                                    <Icon name={"Mail"} />
                                </a>
                            </li>
                        </StyledIcon>
                        <a className="mail" href="mailto: graakjaer.f@gmail.com">
                            graakjaer.f@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </StyledHeroSection>
    );
};

export default Contact;
