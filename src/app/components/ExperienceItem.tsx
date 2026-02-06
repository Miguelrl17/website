import { ExternalLink } from 'lucide-react';
import { TechPill } from './TechPill';

interface ExperienceItemProps {
  dateRange: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  link?: string;
}

export function ExperienceItem({
  dateRange,
  role,
  company,
  description,
  technologies,
  link
}: ExperienceItemProps) {
  return (
    <div className="group relative grid gap-4 pb-12 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={dateRange}>
        {dateRange}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${role} at ${company}`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {role} · {company}
                {link && (
                  <ExternalLink className="inline-block ml-1 mb-1 h-3 w-3 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" aria-hidden="true" />
                )}
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">{description}</p>
        <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </ul>
      </div>
    </div>
  );
}
