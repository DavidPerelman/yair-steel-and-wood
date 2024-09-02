"use client";

import { usePathname } from "next/navigation";
import styles from "./loading.module.css";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { useEffect } from "react";

const Loading = () => {
  const pathname = usePathname();

  useEffect(() => {
    const loading = document.querySelector("#loading");

    if (pathname === "/") {
      loading.classList.add(styles.home);
    } else {
      loading.classList.remove(styles.home);
    }
  }, []);

  return (
    <div id="loading" className={styles.loading}>
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
