import React from "react";
import PropTypes from "prop-types";
import { IconGitHub, IconInstagram, IconLinkedin, IconLoader, IconLogo, IconMail, IconStar, IconXd } from "../icons";
import IconExternal from "./external";
import IconArrow from "./arrow";

const Icon = ({ name }) => {
    switch (name) {
        case "GitHub":
            return <IconGitHub />;
        case "Instagram":
            return <IconInstagram />;
        case "Linkedin":
            return <IconLinkedin />;
        case "Loader":
            return <IconLoader />;
        case "Logo":
            return <IconLogo />;
        case "Star":
            return <IconStar />;
        case "External":
            return <IconExternal />;
        case "Xd":
            return <IconXd />;
        case "Arrow":
            return <IconArrow />;
            case "Mail":
            return <IconMail />;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired
};

export default Icon;
