import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiWordpress, SiWix } from "react-icons/si";

// experience data
const experience = {
  title: "Experience",
  description: "",
  items: [
    {
      company: "Roamin Creative",
      position: "Front-end Developer Intern",
      duration: "Sep 2024 - Dec 2024",
    },
    {
      company: "Opscale Info",
      position: "Web Developer Intern",
      duration: "Jun 2025 - Sep 2025",
    },
  ],
};

// education data
const education = {
  title: "Education",
  description: "",
  items: [
    {
      institution: "Primakara University",
      degree: "Bachelor of Information System",
      duration: "2022 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "Skills",
  description: "",
  skillsList: [
    { name: "WIX", icon: SiWix },
    { name: "WordPress", icon: SiWordpress },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
  ],
};

// certifications data
const certifications = {
  title: "Certifications",
  items: [
    {
      title: "React Certification",
      image: "/assets/react-certificate.png",
      link: "https://www.dicoding.com/certificates/KEXL25GM0ZG2",
    },
    {
      title: "Front-End Certification",
      image: "/assets/frontend-certificate.png",
      link: "https://www.dicoding.com/certificates/MRZMYMGDLZYQ",
    },
    {
      title: "Back-End Certification",
      image: "/assets/backend-certificate.png",
      link: "https://www.dicoding.com/certificates/2VX3K60YNXYQ",
    },
    {
      title: "JavaScript Certification",
      image: "/assets/javascript-certificate.png",
      link: "https://drive.google.com/file/d/1WNki5f-hkoFEdmUNcqUtl23hI3CkAJVS/view",
    },
  ],
};

// about data
const about = {
  title: "About Me",
  description: "I enjoy building responsive, user-friendly websites and continuously learning modern web technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "I Made Putra Sedana",
    },
    {
      fieldName: "Phone",
      fieldValue: "+6285704128095",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Internships",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Email",
      fieldValue: "putrasedana03@gmail.com",
    },
    {
      fieldName: "Address",
      fieldValue: "Denpasar, Bali",
    },
    {
      fieldName: "Major",
      fieldValue: "Information System",
    },
  ],
};

export { experience, education, skills, certifications, about };
