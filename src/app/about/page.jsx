import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import { getPost } from "@/lib/data";
import PostContainer from "@/components/postContainer/PostContainer";
import Image from "next/image";
import { Fragment } from "react";
import FullScreenImage from "@/components/fullScreenImage/FullScreenImage";

const AboutPage = async () => {
  const data = await getPost("about");
  const postData = JSON.parse(JSON.stringify(data));

  const text = [
    "שלום וברוכים הבאים לאתר שלי. ",
    "‏‎עבודה בעץ תמיד הייתה תחום שעניין אותי. הפרויקט הראשון היה הנדנדה של סבא שלי, שראיתי וניסיתי לשחזר בכוחות עצמי. עם הזמן גיליתי איך העולם הזה מושך לי את תשומת הלב והדמיון ובמהלך השנים לקחתי חלק בפרויקטים מסוגים שונים.",
    "לתחום הברזל הגעתי רק אחרי השחרור מהצבא. עבודת הריתוך בחומרים קטנים היא מורכבת ועדינה ודורשת סבלנות, אז הקדשתי זמן בסדנה עם רתכת וערימה של אלקטרודות עד שהתקרבתי לאיכות הרצויה. כך, לאט לאט, הידע והכישורים שלי השתפרו, והתחלתי להשתמש בהם ליצירה.",
    "מהר מאוד גיליתי את היופי שבשילוב בין ברזל ועץ, העוצמה והברק של הברזל השחור יחד עם החום והגוון של העץ החי פתחו בפניי עולם שלם של יצירה, פשוטה ומלאת דיוק. ",
  ];

  return (
    <>
      <CustomHead
        title="יאיר ברזל ועץ - אודות"
        description="יאיר ברזל ועץ - אודות"
      />
      {/* <div
      // className={styles.container}
      // style={{ backgroundImage: `url(${postData.images[0]})` }}
      // style={{
      //   backgroundImage: `url(${postData.images[0]})`,
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      //   width: "100vw",
      //   height: "100vh",
      // }}
      > */}
      {postData && (
        <>
          {/* <Image
              src={postData.images[0]}
              width={0}
              height={0}
              alt=""
              style={{ width: "100%", height: "100%" }}
            /> */}
          {/* {postData.description.map((post, i) => (
              <Fragment key={i}>
                <p key={`${i}-text`}>{post}</p>
                <br key={`${i}-br`} />
              </Fragment>
            ))} */}
        </>
      )}
      {/* </div> */}
      {/* <PostContainer data={postData} /> */}
      {/* <FullScreenImage /> */}
      <>
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dflevhwgh/image/upload/v1725387382/ve44cvyyuq7acec8six2.jpg"
            alt="Mountains with snow"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1
            style={{
              paddingTop: "25vh",
              // fontFamily: "monospace",
              // fontSize: "3.5rem",
              // fontWeight: "bold",
              textAlign: "center",
            }}
          >
            אודות
          </h1>
          <div className={styles.whiteFilter}>
            {text.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default AboutPage;
