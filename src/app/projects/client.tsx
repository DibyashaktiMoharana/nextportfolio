"use client"
import { useState, useEffect } from 'react';
import Navbar from "../ui/navbar";
import PageTransition from "../ui/PageTransition";
import ProjectsIcon from "@icons/ProjectsIcon";
import dynamic from 'next/dynamic';

const ServerContent = dynamic(() => import('./server'), { ssr: false });

const ClientContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pt-[60px]">
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 md:w-full w-full">
        <Navbar />
      </div>
      <PageTransition>
        <main className="pt-[60px]">
          <section id="proyectos" data-section="proyectos" className="relative flex flex-col min-h-screen dark max-w-2xl mx-auto">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white ml-4">
              <ProjectsIcon />
              Projects
            </h2>
            {isLoaded && <ServerContent />}
          </section>
        </main>
      </PageTransition>
    </div>
  );
}

export default ClientContent;