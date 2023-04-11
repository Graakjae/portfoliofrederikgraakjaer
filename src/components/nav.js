import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    const navLinks = [
        {
            name: "Skills"
        },
        {
            name: "Projects"
        },
        {
            name: "Contact"
        }
    ];

    return (
        <StyledHeader>
            <StyledNav>
                <Link className="img" href="/" aria-label="home">
                    <Image src={Logo} alt="Logo" height={40} width={40} />
                </Link>
                
                    <StyledLinks>
                        <ol>
                            {navLinks &&
                                navLinks.map(({ name }, i) => (
                                    <div key={i}>
                                        <Link href={`#${name}`}>{name}</Link>
                                    </div>
                                ))}
                        </ol>
                    </StyledLinks>
                
            </StyledNav>
        </StyledHeader>
    );
};
export default Nav;

const StyledHeader = styled.header`
    position: fixed;
    z-index: 11;
    padding: 20px 80px;
    width: 100%;
    align-items: center;
    background-color: #282c33;
    opacity: 1;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.25);
    @media (max-width: 600px) {
        position: relative;
        width: 100%;
        max-width: 600px;
    }
    .img {
        @media (max-width: 600px) {
            width: 100%;
            justify-content: center;
            display: flex;
            align-items: center;
        }
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    color: #a8b2d1;
    z-index: 12;
    @media (max-width: 600px) {
        display: none;
    }
`;

const StyledLinks = styled.div`
    

    ol {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            display: flex;

            margin: 0 5px;
            position: relative;
            font-size: var(--fz-xs);

            a {
                padding: 10px;
                cursor: pointer;
                color: white;

                &:hover {
                    color: #06d640;
                }
            }
        }
    }
`;
