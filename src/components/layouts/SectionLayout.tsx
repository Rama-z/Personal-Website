import React from "react";

export default function SectionLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`px-20 pt-10 ${className}`}>{children}</section>;
}
