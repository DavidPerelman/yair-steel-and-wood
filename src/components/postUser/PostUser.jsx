import styles from "./postUser.module.css";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async () => {
  // FETCH DATA WITH AN API
  //   const user = await getData(userId);

  // FETCH DATA WITHOUT AN API

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
    </div>
  );
};

export default PostUser;
