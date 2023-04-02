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
            <Link className="img" href="/" aria-label="home">
                <Image src={Logo} alt="Logo" height={40} width={40} />
            </Link>

            <StyledNav>
                <>
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
                </>
            </StyledNav>
        </StyledHeader>
    );
};
export default Nav;

const StyledHeader = styled.header`
    position: fixed;
    top: 30px;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    align-items: center;
    display: flex;
    @media (max-width: 600px) {
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
    align-items: center;
    justify-content: right;
    position: relative;
    width: 100%;
    color: #a8b2d1;
    z-index: 12;
`;

const StyledLinks = styled.div`
    @media (max-width: 600px) {
        display: none;
    }

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
