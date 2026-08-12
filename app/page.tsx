"use client";

import CertificationsSection from "@/components/CertificationsSection";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";

const Page = () => {
  return (
    <main>
      <Header />
      <HomeSection />
      <ResumeSection />
      <ProjectsSection />
      <CertificationsSection />
    </main>
  );
};

export default Page;
