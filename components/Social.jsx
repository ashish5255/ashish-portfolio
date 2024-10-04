import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ashish5255" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ashish-adhikari-6292a927a/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            className={iconStyles}
            target="blank"
            key={index}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
