"use client";

import { useEdgeStore } from "@/lib/edgestore";
// import { getProjects } from "@/lib/data";
import styles from "./projects.module.css";
import { useState } from "react";
import Link from "next/link";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/projects", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const ProjectsPage = () => {
  const [file, setFile] = useState();
  const [urls, setUrls] = useState();
  const { edgestore } = useEdgeStore();

  // const posts = await getProjects();

  return (
    <div className={styles.container}>
      <h1>הפרויקטים שלנו</h1>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      />
      <button
        onClick={async () => {
          if (file) {
            const res = await edgestore.myPublicImages.upload({ file });

            setUrls({ url: res.url, thumbnailUrl: res.thumbnailUrl });
          }
        }}
      >
        Upload
      </button>
      {urls?.url && (
        <Link href={urls.url} target="_blank">
          URL
        </Link>
      )}
      {urls?.thumbnailUrl && (
        <Link href={urls.thumbnailUrl} target="_blank">
          THUMBNAIL
        </Link>
      )}
      {/* {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))} */}
    </div>
  );
};

export default ProjectsPage;
