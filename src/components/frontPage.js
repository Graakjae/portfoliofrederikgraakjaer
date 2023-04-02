import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import frederik from "../images/frederik-graakjaer.png";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledFrontSection = styled.section`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    min-height: 100vh;
    height: 100vh;
    padding: 0;

    @media (max-width: 600px) {
        margin-top: 30px;
    }
    h1 {
        font-size: 80px;
        color: #ccd6f6;

        @media (max-width: 600px) {
            font-size: 35px;
            margin: 0 0 20px 2px;
        }
    }

    h2 {
        margin-top: 5px;
        color: #06d640;
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

    @media (max-width: 600px) {
        display: block;
        width: 100%;
        max-width: 500px;
    }
`;

const StyledPic = styled.div`
    position: relative;
    max-width: 300px;
    margin-left: 30px;


    @media (max-width: 768px) {
        margin: 20px auto 0;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-radius: 5px;
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

        &:after {
            border: 2px solid #06d640;
            top: 20px;
            left: 20px;
            z-index: -1;
            @media (max-width: 600px) {
                border: none;
            }
        }
    }
`;

const FrontPage = () => {
    useEffect(() => {
        Aos.init({});
    }, []);


    const name = <h1 >Frederik Graakjær</h1>;
    const title = <h2 data-aos-delay="100">Frontend developer</h2>;
    const description = (
        <>
            <p data-aos-delay="150">
                I am a multimediadesigner with specialization in frontend development. I build stuff for the web. I’m
                passionate about building beautiful, user-friendly interfaces that help businesses and organizations
                connect with their audiences.
            </p>
        </>
    );

    const items = [name, title, description];

    
    return (
        <div>
            <StyledFrontSection id="top">
                <Wrapper data-aos="fade-up"
                    data-aos-once="false"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="400"
                    >
                    <div>
                        {items.map(item => (
                            <div data-aos="fade-up"
                            data-aos-once="false"
                            data-aos-easing="ease-in-out"
                            data-aos-offset="300"
                            data-aos-duration="400"
                            data-aos-delay="50" key="item">{item}</div>
                        ))}
                    </div>
                    <StyledPic>
                        <div className="wrapper">
                            <Image className="img" data-aos-delay="200" src={frederik} alt="Frederik Graakjær" />
                        </div>
                    </StyledPic>
                </Wrapper>
            </StyledFrontSection>
        </div>
    );
};

export default FrontPage;
