import React from "react";
import { ExternalLink } from "lucide-react";
import { CertificateData } from "../types";
import Image from "next/image";

interface CertificateCardProps {
  data: CertificateData;
}

export const CertificateCard = ({ data }: CertificateCardProps) => {
  return (
    <div className="group rounded-lg shadow-2xl overflow-hidden max-w-lg mx-auto transition-shadow duration-300 hover:shadow-4xl">
      <a 
        href={data.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="" 
      >
      <div className="relative h-60 overflow-hidden"
      >
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
        />

        <div className="absolute top-2 right-6 bg-[var(--color-accent-secondary)] text-gray-900 px-3 py-1 text-xs font-bold rounded-md">
          {data.tag}
        </div>
      </div>
      </a>

      <div className="p-6 text-left relative">
        <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">{data.title}</h3>
        <div className="absolute top-4 right-4 bg-[var(--color-accent-secondary)] text-gray-900 px-3 py-1 text-xs font-bold rounded-md flex flex-col items-center justify-center h-12 w-12">
          <span className="text-lg leading-none">
            {data.date.split(" ")[0]}
          </span>
          <span className="text-xs leading-none">
            {data.date.split(",")[0].split(" ")[1]}
          </span>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">{data.subtitle}</p>
        <p className="text-[var(--color-text-secondary)] text-sm mb-4">{data.description}</p>
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent-secondary)] font-semibold text-sm hover:text-[var(--color-accent-secondary)] transition-colors flex items-center"
        >
          View Credential <ExternalLink size={14} className="ml-2" />
        </a>
      </div>
    </div>
  );
};
