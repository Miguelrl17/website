import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      <li className="text-xs">
        <a
          className="block hover:text-slate-200 transition"
          href="https://github.com/Miguelrl17"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
        >
          <Github className="h-6 w-6" />
        </a>
      </li>
      <li className="text-xs">
        <a
          className="block hover:text-slate-200 transition"
          href="https://linkedin.com/miguelruizlicea"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </li>
      <li className="text-xs">
        <a
          className="block hover:text-slate-200 transition"
          href="mailto:hello@example.com"
          aria-label="Email (opens in a new tab)"
        >
          <Mail className="h-6 w-6" />
        </a>
      </li>
    </ul>
  );
}
