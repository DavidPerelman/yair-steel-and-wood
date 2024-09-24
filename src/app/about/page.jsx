"use client";

import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import Image from "next/image";
import { callApiGet } from "@/lib/action";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { usePathname } from "next/navigation";

const AboutPage = () => {
  const pathname = usePathname();
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const getPage = async () => {
      try {
        const data = await callApiGet(
          `${process.env.NEXT_PUBLIC_API_URL}/api/pages/${pathname.substring(
            1
          )}`
        );

        const page = data.page;

        if (!page) {
          console.log("Page not found");
        } else {
          setPageContent(page);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    getPage();
  }, [pathname]);

  if (pageContent !== null) {
    console.log(pageContent.sections[0].title);
  }

  return (
    <>
      <CustomHead
        title="יאיר ברזל ועץ - אודות"
        description="יאיר ברזל ועץ - אודות"
      />
      {pageContent !== null ? (
        <>
          <Image
            alt="About page image"
            src={pageContent.images[0].secure_url}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            unoptimized
            className={styles.image}
            priority
          />
        </>
      ) : (
        <></>
      )}
      <div className={styles.textContainer}>
        <div className={styles.textContent}>
          {pageContent !== null ? (
            <>
              <h1 className={styles.first_paragrah}>
                {pageContent.sections[0].title}
              </h1>
              {pageContent.sections[0].paragraphs.map((item, i) => (
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
