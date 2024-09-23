"use client";

import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import Image from "next/image";
import { callApiGet } from "@/lib/action";
import { useEffect, useState } from "react";
import Loading from "../loading";

const AboutPage = () => {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/about`
        );

        if (data.data) setPageContent(data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPageContent();
  }, []);

  return (
    <>
      <CustomHead
        title="יאיר ברזל ועץ - אודות"
        description="יאיר ברזל ועץ - אודות"
      />
      <Image
        alt="About page image"
        src="https://res.cloudinary.com/dflevhwgh/image/upload/v1726405722/udoshrfrk8fxarnrhfea.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        unoptimized
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <div className={styles.textContent}>
          {pageContent !== null ? (
            <>
              <h1 className={styles.first_paragrah}>{pageContent.header}</h1>
              <p className={styles.first_paragrah}>{pageContent.content[0]}</p>
              {pageContent.content.slice(1).map((item, i) => (
                <p key={i} className={styles.paragrah}>
                  {item}
                </p>
              ))}
            </>
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
