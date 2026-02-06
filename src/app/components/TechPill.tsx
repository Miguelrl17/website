interface TechPillProps {
  children: React.ReactNode;
}

export function TechPill({ children }: TechPillProps) {
  return (
    <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {children}
    </li>
  );
}
