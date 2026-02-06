import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
} from 'react-icons/si';

// experience data
const experience = {
  title: 'My Experience',
  description:
    "Through hands-on projects and structured courses, I've continuously developed my skills and deepened my understanding of web development.",
  items: [
    {
      company: 'Roamin Creative',
      position: 'Front-end Developer Intern',
      duration: 'Sep 2024 - Dec 2024',
    },
    {
      company: 'Opscale Info',
      position: 'Web Developer Intern',
      duration: 'Jun 2025 - Sep 2025',
    },
  ],
};

// education data
const education = {
  title: 'My Education',
  description:
    'I have pursued formal education and certifications to strengthen my foundation in web development. Here are some of the key educational milestones in my career.',
  items: [
    {
      institution: 'Primakara University',
      degree: 'Bachelor of Information System',
      duration: '2022 - Present',
    },
    {
      institution: 'Dicoding Academy',
      degree: 'Full Stack Web Development',
      duration: '2022 - Present',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  description:
    'My skill set includes a range of technologies and tools that I have worked with through projects and learning experiences.',
  skillsList: [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3 },
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
  ],
};

// certifications data
const certifications = {
  title: 'My Certifications',
  items: [
    {
      title: 'React Certification',
      image: '/assets/react-certificate.png',
      link: 'https://www.dicoding.com/certificates/KEXL25GM0ZG2',
    },
    {
      title: 'Front-End Certification',
      image: '/assets/frontend-certificate.png',
      link: 'https://www.dicoding.com/certificates/MRZMYMGDLZYQ',
    },
    {
      title: 'Back-End Certification',
      image: '/assets/backend-certificate.png',
      link: 'https://www.dicoding.com/certificates/2VX3K60YNXYQ',
    },
    {
      title: 'JavaScript Certification',
      image: '/assets/javascript-certificate.png',
      link: 'https://drive.google.com/file/d/1WNki5f-hkoFEdmUNcqUtl23hI3CkAJVS/view',
    },
  ],
};

// about data
const about = {
  title: 'About Me',
  description:
    'I am a dedicated web developer with experience gained from self-learning and academic studies. I enjoy building responsive, user-friendly web applications and continuously learning modern web technologies.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'I Made Putra Sedana',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+6285704128095',
    },
    {
      fieldName: 'Experience',
      fieldValue: '8 months',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Indonesian',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indonesian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'putrasedana03@gmail.com',
    },
    {
      fieldName: 'Address',
      fieldValue: 'Denpasar, Bali',
    },
    {
      fieldName: 'Major',
      fieldValue: 'Information System',
    },
  ],
};

export { experience, education, skills, certifications, about };
