"use client";
import { IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { IconBrandLinkedinFilled } from "@tabler/icons-react"; // adjust to your icons

interface ButtonWithIconProps {
  downLoadIcon?: boolean;
  linkdenIcon?: boolean;
}

export function ButtonWithIcon({
  downLoadIcon = false,
  linkdenIcon = false,
}: ButtonWithIconProps) {
  return (
    <>
      {downLoadIcon && (
        <Button asChild className="text-black" variant="outline" size="lg">
          <a href="/resume.pdf" download="Alvaro_Resume.pdf">
            <IconDownload className="mr-2" /> Resume
          </a>
        </Button>
      )}

      {linkdenIcon && (
        <Button
          asChild
          className="text-black hover:bg-gray-400 "
          variant="outline"
          size="lg"
        >
          <a
            href="https://www.linkedin.com/in/alvaro-izquierdo1"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-2xl shadow-white"
          >
            <IconBrandLinkedinFilled className="mr-2" /> LinkedIn
          </a>
        </Button>
      )}
    </>
  );
}
