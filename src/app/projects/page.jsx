// import { useEdgeStore } from "@/lib/edgestore";
// import { getProjects } from "@/lib/data";
import Image from "next/image";
import { backendClient } from "../api/edgestore/[...edgestore]/route";
import styles from "./projects.module.css";
// import { getImages } from "@/lib/action";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/projects", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const ProjectsPage = async () => {
  // const images = getImages();

  const res = await backendClient.myPublicImages.listFiles();
  const images = res.data;

  return (
    <div className={styles.container}>
      <h1>הפרויקטים שלנו</h1>

      {/* {urls?.url && (
        <Link href={urls.url} target="_blank">
          URL
        </Link>
      )}
      {urls?.thumbnailUrl && (
        <Link href={urls.thumbnailUrl} target="_blank">
          THUMBNAIL
        </Link>
      )} */}
      {images.map((image) => (
        <div key={image.path}>
          <Image src={image.url} width={50} height={50} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
