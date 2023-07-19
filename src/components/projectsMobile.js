import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "@/lib/helper/projects";
import { Icon } from "../images/icons";
import { nanoid } from "nanoid";

const StyledProjects = styled.section`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    h2 {
        margin-top: 0px;
        color: #ccd6f6;
        font-size: 30px;
        margin-bottom: 30px;
    }

    h3 {
        color: #ccd6f6;
        font-size: 25px;
    }

    p {
        margin-right: 10px;
        width: 100%;
    }
`;

const Wrapper = styled.div`
    justify-content: space-between;
    display: block;
    margin-bottom: 50px;
    @media (min-width: 768px) {
        max-width: 700px;
    }
`;

const StyledIcons = styled.ul`
    list-style: none;
    padding: 10px 0;
    li {
        a {
            padding: 0px;

            svg {
                width: 22px;
                height: 22px;
                color: #a8b2d1;
                margin-right: 15px;

                &:hover,
                &:focus {
                    color: #06d640;
                }
            }
        }
    }
`;

const StyledPic = styled.div`
    position: relative;
    width: 100%;
    .img {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 5px;
        z-index: 5;
        margin-top: 10px;
    }

    .wrapper {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 100%;
        border-radius: 5px;
    }
`;

const ProjectHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 80%;
`;

const ProjectsMobile = () => {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <StyledProjects id="Projects">
            <div>
                <h2
                    className="section-heading"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="300"
                    data-aos-duration="400"
                    data-aos-delay="50"
                >
                    Projects
                </h2>
                {projects.map(({ name, number, urls, img, description }, i) => (
                    <Wrapper
                        key={nanoid()}
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="250"
                        data-aos-duration="400"
                        data-aos-delay={number}
                    >
                        <div>
                            <ProjectHeader>
                                <h3>{name}</h3>
                            </ProjectHeader>
                            <p>{description}</p>
                            <StyledIcons>
                                <li key={i}>
                                    <a href={urls.github} target="_blank">
                                        <Icon name="GitHub" />
                                    </a>
                                    <a href={urls.website} target="_blank">
                                        <Icon name="External" />
                                    </a>
                                    {urls.Xd === undefined ? null : (
                                        <a href={urls.Xd} target="_blank">
                                            <Icon name="Xd" />
                                        </a>
                                    )}
                                </li>
                            </StyledIcons>
                        </div>

                        <StyledPic>
                            <div className="wrapper">
                                <Image className="img" src={img} alt={name} />
                            </div>
                        </StyledPic>
                    </Wrapper>
                ))}
            </div>
        </StyledProjects>
    );
};

export default ProjectsMobile;
