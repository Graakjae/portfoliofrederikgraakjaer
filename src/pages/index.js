import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import FrontPage from "@/components/frontPage";
import Nav from "@/components/nav";
import Social from "@/components/social";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Skills from "@/components/skills";
import ProjectsMobile from "@/components/projectsMobile";
import useMediaQuery from "../hooks/media";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const isDesktop = useMediaQuery("(min-width: 1100px)");

    return (
        <>
            <Head>
                <title>Frederik Graakjær - Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Nav />
                <FrontPage />
                <Skills />
                {isDesktop ? <Projects /> : <ProjectsMobile />}
                <Contact />
                <Social />
            </main>
        </>
    );
}
