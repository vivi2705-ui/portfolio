import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl:string
  title: string
  description: string
  gitUrl?:string |null
  previewUrl?:string |null
}

const ProjectCard = ({ imgUrl, title, description, gitUrl = "/", previewUrl = "/" }: ProjectCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md border border-[#c9c0f0]">
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#0f0a2e] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
  {gitUrl && (
    <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-white hover:border-[#ec4899] group/link">
      <CodeBracketIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#ec4899]" />
    </Link>
  )}
  {previewUrl && (
    <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#ec4899] group/link">
      <EyeIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#ec4899]" />
    </Link>
  )}
</div>
        {/* <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#0f0a2e] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-white hover:border-[#ec4899] group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#ec4899]" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#ec4899] group/link"
          >
            <EyeIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#ec4899]" />
          </Link>
        </div> */}
      </div>
      <div className="bg-white py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-[#0f0a2e]">{title}</h5>
        <p className="text-[#3d2f8f]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
