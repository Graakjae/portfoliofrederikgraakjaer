import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "@/lib/helper/projects";
import { Icon } from "../images/icons";

const StyledProjects = styled.section`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin-top: 0px;
        color: #ccd6f6;
        font-size: 40px;
        margin-bottom: 50px;
    }

    h3 {
        color: #ccd6f6;
        font-size: 30px;
    }

    p {
        margin-right: 10px;
        width: 350px;
    }
`;

const Wrapper = styled.div`
    justify-content: space-between;
    max-width: 1000px;
    display: flex;
    margin-bottom: 100px;
`;

const StyledIcons = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 0 10px 0 10px;

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

const StyledPic = styled.div`
    position: relative;
    width: 100%;

    .img {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 5px;
        filter: grayscale(100%) contrast(1);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        z-index: 5;
    }

    .wrapper {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 90%;
        border-radius: 5px;
        /* z-index: 6; */
        &:hover,
        &:focus {
            outline: 0;

            &:after {
                top: 15px;
                left: 15px;
            }

            .img {
                filter: none;
                mix-blend-mode: normal;
            }
        }

        &:before,
        &:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        &:after {
            border: 2px solid #06d640;
            top: 20px;
            left: 20px;
            z-index: -5;
        }
    }
    .wrapper2 {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 90%;
        border-radius: 5px;

        &:hover,
        &:focus {
            outline: 0;

            &:after {
                top: 15px;
                right: 15px;
            }

            .img {
                filter: none;
                mix-blend-mode: normal;
            }
        }

        &:before,
        &:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        &:after {
            border: 2px solid #06d640;
            top: 20px;
            right: 20px;
            z-index: -5;
        }
    }
`;

const ProjectHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Projects = () => {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <StyledProjects id="Projects">
            <div>
                <h2
                    className="section-heading"
                    data-aos="fade-up"
                    data-aos-once="false"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="300"
                    data-aos-duration="400"
                    data-aos-delay="50"
                >
                    Projects
                </h2>
                {projects.map(({ name, number, urls, img, description, imgRigt, imgLeft }, i) => (
                    <Wrapper
                        key="icon"
                        data-aos="fade-up"
                        data-aos-once="false"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="250"
                        data-aos-duration="400"
                        data-aos-delay={number}
                    >
                        {imgLeft && (
                            <StyledPic>
                                <div className="wrapper2">
                                    <Image className="img" src={img} alt={name} />
                                </div>
                            </StyledPic>
                        )}
                        <div>
                            <ProjectHeader>
                                <h3>{name}</h3>
                                <StyledIcons>
                                    <li key={i}>
                                        <a href={urls.github} target="_blank">
                                            <Icon name="GitHub" />
                                        </a>
                                        <a href={urls.website} target="_blank">
                                            <Icon name="External" />
                                        </a>
                                        <a href={urls.Xd} target="_blank">
                                            <Icon name="Xd" />
                                        </a>
                                    </li>
                                </StyledIcons>
                            </ProjectHeader>
                            <p>{description}</p>
                        </div>
                        {imgRigt && (
                            <StyledPic>
                                <div className="wrapper">
                                    <Image className="img" src={img} alt={name} />
                                </div>
                            </StyledPic>
                        )}
                    </Wrapper>
                ))}
            </div>
        </StyledProjects>
    );
};

export default Projects;
