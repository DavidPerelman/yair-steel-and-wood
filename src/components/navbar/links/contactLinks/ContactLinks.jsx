"use client";
import Link from "next/link";
import styles from "./contactLinks.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ContactLinks = ({ scrolled }) => {
  const pathname = usePathname();

  useEffect(() => {
    const logos = document.querySelectorAll(".logo");

    if (pathname === "/") {
      logos.forEach((item) => item.classList.add(styles.whiteFilter));
      logos.forEach((item) => item.classList.remove(styles.grayFilter));
    } else {
      logos.forEach((item) => item.classList.add(styles.grayFilter));
      logos.forEach((item) => item.classList.remove(styles.whiteFilter));
    }

    if (scrolled) {
      logos.forEach((item) => item.classList.add(styles.grayFilter));
    } else {
      logos.forEach((item) => item.classList.remove(styles.grayFilter));
    }
  }, [pathname, scrolled]);

  return (
    <div className={styles.contactLinks}>
      <Link target="_blank" href="tel:0584422401">
        <Image
          className="logo"
          src="/call.svg"
          width={27}
          height={27}
          alt="phone-logo"
          unoptimized
        />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/yairperlman/">
        <Image
          className="logo"
          src="/instagram.svg"
          width={33}
          height={33}
          alt="instagram-logo"
          unoptimized
        />
      </Link>
      <Link target="_blank" href="https://wa.me/972584422401">
        <Image
          id={styles.whatsappLogo}
          className="logo"
          src="/whatsapp.svg"
          width={26}
          height={26}
          alt="whatsapp-logo"
          unoptimized
        />
      </Link>
      <Link
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=yair.steelandwood@gmail.com"
      >
        <Image
          id={styles.gmailLogo}
          className="logo"
          src="/gmail.svg"
          width={27}
          height={27}
          alt="whatsapp-logo"
          unoptimized
        />
      </Link>
    </div>
  );
};

export default ContactLinks;
