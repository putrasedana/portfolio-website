import { socials } from "@/data/home-page";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};
export default Social;
