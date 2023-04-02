import React from "react";
import styled from "styled-components";
import { Icon } from "../images/icons";

const StyledSocialList = styled.ul`
    position: fixed;
    bottom: 0px;
    left: 30px;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    @media (max-width: 600px) {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        left: 0;
        margin-bottom: 50px;
    }

    &:after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: #a8b2d1;
        @media (max-width: 600px) {
            display: none;
        }
    }

    li {
        &:last-of-type {
            margin-bottom: 25px;
        }
        a {
            padding: 0px;

            svg {
                width: 30px;
                height: 30px;
                color: #a8b2d1;
                padding: 5px;
                margin-top: 15px;

                &:hover,
                &:focus {
                    transform: translateY(-3px);
                    transition-duration: 0.3s;
                    color: #06d640;
                }
                @media (max-width: 600px) {
                    margin: 0 20px;
                    width: 35px;
                    height: 35px;
                }
            }
        }
    }
`;

const socialMedia = [
    {
        name: "GitHub",
        url: "https://github.com/Graakjae"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/frederik_graakjaer/"
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/frederik-graakjær-b29360206/"
    }
];

const Social = () => (
    <div>
        <StyledSocialList>
            {socialMedia.map(({ url, name }, i) => (
                <li key={i}>
                    <a href={url} target="_blank">
                        <Icon name={name} />
                    </a>
                </li>
            ))}
        </StyledSocialList>
    </div>
);

export default Social;
