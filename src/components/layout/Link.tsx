import React from 'react';

interface LinkProps {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Link({ href, icon, children }: LinkProps) {
  return (
    <a 
      href={href} 
      className="flex items-center space-x-1 hover:text-green-200 transition-colors"
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </a>
  );
}