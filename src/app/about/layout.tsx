import { ReactNode } from "react";
import NavBar from "../[components]/NavBar";
export const metadata = {
  title: "Homepage",
  description: "Alvaro About Page",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
