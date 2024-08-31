import Image from "next/image";
import styles from "./singleProjectPage.module.css";
import "./singleProjectPage.css";
import { Suspense } from "react";
import { getProject } from "@/lib/data";
import CustomHead from "@/components/customHead/CustomHead";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import SingleProjectContainer from "@/components/singleProjectContainer/SingleProjectContainer";

const SingleProjectPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITHOUT AN API
  const project = await getProject(slug);

  return (
    // <div className={styles.singleProjectPage}>
    //   <CustomHead
    //     title={`יאיר ברזל ועץ - ${project.title}`}
    //     description={`יאיר ברזל ועץ - ${project.title}`}
    //   />
    //   <div className={styles.container}>
    //     <div className={styles.imgContainer}>
    //       <Image src={project.thumbnail} fill alt="" className={styles.img} />
    //     </div>
    //     <div className={styles.textContainer}>
    //       <h1 className={styles.title}>{project.title}</h1>
    //       <div className={styles.detail}>
    //         <Image
    //           src="/noavatar.png"
    //           alt=""
    //           className={styles.avatar}
    //           width={50}
    //           height={50}
    //         />
    //         <Suspense
    //           fallback={
    //             <div>
    //               <LoadingSpinner />
    //             </div>
    //           }
    //         ></Suspense>
    //         <div className={styles.detailText}>
    //           <span className={styles.detailTitle}>Published</span>
    //           <span className={styles.detailValue}>01.01.2024</span>
    //         </div>
    //       </div>
    //       <div className={styles.content}>{project.description}</div>
    //     </div>
    //   </div>
    // </div>

    <>
      <SingleProjectContainer />
    </>
  );
};

export default SingleProjectPage;
