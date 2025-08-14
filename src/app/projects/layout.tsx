import { ReactNode } from "react";
import NavBar from "../[components]/NavBar";
export const metadata = {
  title: "Homepage",
  description: "Alvaro Projects Page",
};

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
