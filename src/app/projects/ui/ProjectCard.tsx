import React from 'react';
import IconButton from '../../ui/IconButton';
import Image from 'next/image';

import ExternalLinkIcon from '@/app/ui/icons/ExternalLinkIcon';
import GitHubIcon from '@/app/ui/icons/GithubIcon';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  githubUrl?: string;
  previewUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, githubUrl, previewUrl }) => {
  return (
    <div className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col sm:flex-row sm:w-42em overflow-hidden" style={{ maxWidth: '100%' }}>
      <div className="w-full sm:w-1/2 relative" style={{ paddingBottom: '30%' }}>
      <Image 
        src={image} 
        alt={title} 
        width={216}
        height={216}
        className="absolute top-0 left-0 w-full h-full border-2 rounded-lg border-white/[0.2] object-cover object-center" 
      />
      </div>
      <div className="p-4 w-full sm:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="mb-4">{description}</p>
        </div>

        {/* status indicator */}
      <div>
      <span
        className={`inline-flex items-center px-2 py-0 text-xs font-semibold pointer-events-auto border rounded-full dark:border-neutral-700 px-2 py-1 mb-5`}
      >
        {/* green ping circle */}
        <span className="mr-1.5 flex justify-center items-center h-2 w-2">
          <span
            className="absolute flex w-2 h-2 rounded-full opacity-75 animate-ping bg-lime-400"
          ></span>
          {/* color bg-lime-400 diya hai */}
          <span
            className="relative flex w-1 h-1 rounded-full bg-lime-400"
          ></span>
        </span>

        {/* shows status name */}
        <span className="dark:text-neutral-500">Completed</span>
        {/* ye text hai completed ka */}
      </span>
    </div>


        <div className="flex flex-nowrap gap-2">
          <IconButton href={previewUrl} className="hover:bg-gray-900 hover:border-gray-900" disabled={!previewUrl}>
            <ExternalLinkIcon /> Preview
          </IconButton>
          <IconButton href={githubUrl} className="hover:bg-gray-800 hover:border-gray-800" disabled={!githubUrl}>
            <GitHubIcon /> GitHub
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;