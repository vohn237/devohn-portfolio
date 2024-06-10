import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/vohn237' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/devohn-hall-13a114140/',
  },
  { icon: <FaTwitter />, path: 'https://x.com/vohnhall' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
