import Skillshare from "../../images/skillshare.png";
import Sailmore from "../../images/Sailmore.png";
import FitnessTracker from "../../images/fitness-tracker.png";
import Audiophile from "../../images/audiophile.png";
import Planets from "../../images/planets.png";
import Dictionary from "../../images/dictionary.png";

export const projects = [
    {
        name: "Audiophile",
        img: Audiophile,
        number: 300,
        description:
            "I made this audiophile multi-page e-commerce website. It was made in Next.js 13 with React. I used Zustand for state-management to keep track of added items to the cart. The project was made as a challenge from frontendmentor",
        urls: {
            github: "https://github.com/frbarbre/audiophile-ecommerce-site",
            website: "https://audiophile-ecommerce-site-4g7au1mgv-frbarbre.vercel.app"
        },
        imgRigt: false,
        imgLeft: true
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
        imgRigt: true,
        imgLeft: false
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
        imgRigt: false,
        imgLeft: true
    },
    {
        name: "Dictionary",
        img: Dictionary,
        number: 300,

        description:
            "I made this dictionary application with a dictionary api. It was made in Next.js 13 with React. The project was made as a challenge from frontendmentor",
        urls: {
            github: "https://github.com/Graakjae/dictionary",
            website: "https://dictionary-two-livid.vercel.app"
        },
        imgRigt: true,
        imgLeft: false
    },
    {
        name: "Sailmore",
        img: Sailmore,
        number: 300,
        description:
            "A web app for sailors and captains to get together and plan a sailing. Sailmore needed an easier way for sailors and captains to get in touch. As a sailor you can search for all the sailings available and ask if you can join, and the other way around for captains.",
        urls: {
            github: "https://github.com/Graakjae/sailmore",
            website: "https://sailmore.vercel.app",
            Xd: "https://xd.adobe.com/view/9ed1ba04-612d-484c-ba48-3b545fccd31b-cb82/"
        },
        imgRigt: false,
        imgLeft: true
    },
    {
        name: "Fitness Tracker",
        img: FitnessTracker,
        number: 300,
        description:
            "Fitness tracker web app for tracking workouts. In the app you can create your own workouts and also find excisting workouts. You can write how much lift in a exercise and how many sets and reps you do. Then it saves it in the app and you can have a overview of your progression",
        urls: {
            github: "https://github.com/Graakjae/fitness-track",
            website: "https://fitness-track.vercel.app",
            Xd: "https://xd.adobe.com/view/f32cdec2-c9f6-4cab-9a3d-50b2babac6d2-a67f/"
        },
        imgRigt: true,
        imgLeft: false
    }
];
