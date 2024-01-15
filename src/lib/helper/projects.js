import Kanban from "../../images/kanban.png";
import Audiophile from "../../images/audiophile.png";
import Planets from "../../images/planets.png";
import Skillshare from "../../images/Skillshare.png";

export const projects = [
    {
        name: "Audiophile",
        img: Audiophile,
        number: 300,
        description:
            "I made this audiophile multi-page e-commerce website. It was made in Next.js 13 with React. I used Zustand for state-management to keep track of added items to the cart. The project was made as a challenge from frontendmentor",
        urls: {
            github: "https://github.com/frbarbre/audiophile-ecommerce-site",
            website: "https://audiophile-ecommerce-site.vercel.app"
        },
        imgRigt: false,
        imgLeft: true
    },
    {
        name: "Kanban",
        img: Kanban,
        number: 300,
        description:
            "This project i build a fully-functional task management app with a light/dark mode toggle. It was made in Next.js 13 with React. The project was made as a challenge from frontendmentor",
        urls: {
            github: "https://github.com/frbarbre/kanban-task-management",
            website: "https://kanban-task-management-sigma.vercel.app"
        },
        imgRigt: true,
        imgLeft: false
    },
    {
        name: "Planets",
        img: Planets,
        number: 300,

        description:
            "This is a planet info website with facts about all the planets. It was made in Next.js 13 with React. The project was made as a challenge from frontendmentor",
        urls: {
            github: "https://github.com/Graakjae/planets",
            website: "https://planets-beige.vercel.app"
        },
        imgRigt: false,
        imgLeft: true
    },
    {
        name: "Skillshare",
        img: Skillshare,
        number: 300,
        description:
            "Internal web app for sharing what skills you have, and what projects you are on. I made this solution for IMPACT when i was an intern for them. They had trouble remembering all the skills and projects their employees have.  ",
        urls: {
            github: "https://github.com/Graakjae/skillshare",
            website: "https://skillshare.vercel.app",
            Xd: "https://www.figma.com/proto/1aV5CNOg8iSkLVA3H8RHXL/Skill-share?page-id=0%3A1&node-id=75-292&viewport=194%2C92%2C0.11&scaling=scale-down&starting-point-node-id=75%3A292"
        },
        imgRigt: true,
        imgLeft: false
    }
];
