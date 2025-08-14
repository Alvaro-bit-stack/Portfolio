import { ReactNode } from "react";
import NavBar from "../[components]/NavBar";
export const metadata = {
  title: "Homepage",
  description: "Alvaro Contact Page",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
