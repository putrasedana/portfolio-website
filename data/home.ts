import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const stats = [
  { num: 8, text: "Months of Experience", path: "/resume?tab=Experience" },
  { num: 9, text: "Projects Completed", path: "/projects" },
  { num: 10, text: "Core Technologies", path: "/resume?tab=Skills" },
  { num: 4, text: "Certifications Completed", path: "/resume?tab=Certifications" },
];

const socials = [
  {
    icon: FaGithub,
    path: "https://github.com/putrasedana",
    label: "GitHub Profile",
  },
  {
    icon: MdEmail,
    path: "mailto:putrasedana03@gmail.com",
    label: "Send Email",
  },
];

export { stats, socials };
