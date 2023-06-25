import React from "react";

const TypographyVariant: Readonly<string[]> = [
  "j1",
  "j2",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "s1",
  "s2",
  "s3",
  "s4",
  "b1",
  "b2",
  "b3",
  "c1",
  "c2",
];

const TypographyColor = [
  "primary",
  "secondary",
  "tertiary",
  "danger",
  "none",
] as const;

const TypographyFont: Readonly<string[]> = ["poppins", "sans"];

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  color?: typeof TypographyColor[number];
  variant?: typeof TypographyVariant[number];
  font?: typeof TypographyFont[number];
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

type TypographyComponent = <T extends React.ElementType = "p">(
  props: TypographyProps<T>
) => React.ElementType | null;

export default function Typography() {
  return (
    <>
      <h1>Typography1</h1>
      <h2>Typography2</h2>
      <h3>Typography3</h3>
    </>
  );
}
