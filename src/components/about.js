import React from "react";
import styled from "styled-components";
import Image from "next/image";
import frederik from "../images/frederik-graakjaer.png";

const StyledFrontSection = styled.section`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
        height: auto;
        padding-top: var(--nav-height);
    }

    h1 {
        margin: 0 0 30px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: 80px;
        color: #ccd6f6;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h2 {
        margin-top: 5px;
        color: #08f008;
        line-height: 0.9;
    }

    p {
        margin: 20px 0 0;
        max-width: 1000px;
    }
`;

const Wrapper = styled.div`
    justify-content: center;
    max-width: 1000px;
    align-items: center;
    display: flex;
`;

const StyledPic = styled.div`
    position: relative;
    max-width: 300px;

    @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 70%;
    }

    .wrapper {
        display: block;
        position: relative;
        width: 100%;
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

        .img {
            max-width: 300px;
            max-height: 300px;
            position: relative;
            border-radius: 5px;
            /* mix-blend-mode: multiply; */
            filter: grayscale(100%) contrast(1);
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            z-index: 5;
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

        &:before {
            top: 0;
            left: 0;
            /* background-color: green; */
            mix-blend-mode: screen;
        }

        &:after {
            border: 2px solid green;
            top: 20px;
            left: 20px;
            z-index: -5;
        }
    }
`;

const About = () => {
    const name = <h1>Frederik Graakjær</h1>;
    const title = <h2>Frontend developer</h2>;
    const description = (
        <>
            <p>
                I build things for the web. I’m a software engineer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I’m focused on building accessible,
                human-centered products at
            </p>
        </>
    );

    const items = [name, title, description];

    return (
        <StyledFrontSection id="About">
            <Wrapper>
                <div>
                    {items.map(item => (
                        <div key="item">{item}</div>
                    ))}
                </div>
                <StyledPic>
                    <div className="wrapper">
                        <Image className="img" src={frederik} width={500} height={500} alt="Frederik Graakjær" />
                    </div>
                </StyledPic>
            </Wrapper>
        </StyledFrontSection>
    );
};

export default About;
