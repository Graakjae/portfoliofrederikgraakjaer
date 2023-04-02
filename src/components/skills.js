import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { skillIcons } from "@/lib/helper/skillIcons";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledFrontSection = styled.section`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;

    h2 {
        margin-top: 0px;
        color: #ccd6f6;
        font-size: 40px;
        margin-bottom: 50px;
        @media (max-width: 600px) {
            margin-bottom: 20px;
        }
    }

    p {
        margin: 20px 0 0;
        max-width: 1000px;
    }
`;

const Wrapper = styled.div`
    justify-content: center;
    max-width: 1000px;
    /* align-items: center; */
    display: flex;
    @media (max-width: 600px) {
        display: block;
    }
`;

const StyledIcons = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
    width: 100%;
    @media (max-width: 768px) {
        margin: 50px auto 0;
    }

    .grid {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
        row-gap: 30px;
        width: 100%;
        .imgCenter {
            justify-content: center;
            align-items: center;
            display: flex;
        }
        .img {
            border-radius: 5px;
            z-index: 5;
            width: 64px;
            height: 64px;
            @media (max-width: 600px) {
                width: 30px;
                height: 30px;
            }
        }
        @media (max-width: 600px) {
            grid-template-columns: repeat(4, 1fr);
            column-gap: 10px;
            row-gap: 20px;
            font-size: 15px;
        }
    }
`;

const Skills = () => {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <StyledFrontSection id="Skills">
            <Wrapper>
                <div>
                    <h2
                        className="section-heading"
                        data-aos="fade-up"
                        data-aos-once="false"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"
                        data-aos-duration="400"
                        data-aos-delay="50"
                    >
                        Skills
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-once="false"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="150"
                        data-aos-duration="400"
                        data-aos-delay="100"
                    >
                        I am experienced in developing web applications in HTML, CSS, JavaScript, TypeScript, React, and
                        WordPress. Most of my projects is made as a singe page application (SPA) and made in a react
                        app. I have en eye for good UX/UI and graphic design and i have experience in Xd, Figma,
                        Photoshop and Illustrator.
                    </p>
                </div>
                <StyledIcons>
                    <div className="grid">
                        {skillIcons.map(icon => (
                            <div
                                key="icon"
                                data-aos="fade-up"
                                data-aos-once="false"
                                data-aos-easing="ease-in-out"
                                data-aos-offset="150"
                                data-aos-duration="400"
                                data-aos-delay={icon.number}
                            >
                                <div className="imgCenter">
                                    <Image className="img" src={icon.img} alt={icon.name} />
                                </div>
                                <p>{icon.name}</p>
                            </div>
                        ))}
                    </div>
                </StyledIcons>
            </Wrapper>
        </StyledFrontSection>
    );
};

export default Skills;
