import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const stats = [
  { num: 8, text: "Months of Experience" },
  { num: 20, text: "Projects Completed" },
  { num: 8, text: "Core Technologies" },
  { num: 16, text: "Courses Completed" },
];

const socials = [
  {
    icon: FaGithub,
    path: "https://github.com/putrasedana",
    label: "GitHub Profile",
  },
  // {
  //   icon: FaLinkedin ,
  //   path: "",
  //   label: "LinkedIn Profile",
  // },
  {
    icon: MdEmail,
    path: "mailto:putrasedana03@gmail.com",
    label: "Send Email",
  },
];

export { stats, socials };
