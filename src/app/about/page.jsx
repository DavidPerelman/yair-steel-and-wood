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
    "שלום וברוכים הבאים למקום בו הברזל והעץ נפגשים.",
    "עבודה עם עץ מאז ומעולם הייתה עבורי תחום מרתק. במהלך השנים לקחתי חלק בפרויקטים שונים בתחום, ועם הזמן גיליתי איך העולם הזה מושך לי את תשומת הלב והדמיון.",
    "לתחום הברזל הגעתי רק אחרי השחרור מהצבא, תחום מורכב, הדורש דיוק וסבלנות, במיוחד בעבודת ריתוך עם חומרים קטנים. ",
    "לאחר תקופה ממושכת של פיתוח כישורים והתמקצעות בטכניקות שונות, נולד השילוב הייחודי בין ברזל לעץ. העוצמה והברק של הברזל, יחד עם הגוונים והחום של העץ, יוצרים ביחד עבודות מוקפדות ומדויקות, בעלות אופי ייחודי.",
    "האתר הזה מציג יצירות שנעשו בקפידה ותוך תשומת לב לפרטים, במטרה להציע פתרונות ייחודיים ומעוצבים. מוזמנים לעיין בעבודות ולהתרשם בכל פרויקט שעשוי להתאים לכם. כמובן, אני כאן כדי לענות על כל שאלה או לסייע בפרויקטים בהתאמה אישית.",
    "מקווה שתהנו מהחומרים ושתמצאו בהם את ההשראה שאתם מחפשים.",
    "יאיר.",
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
              textAlign: "center",
            }}
          >
            אודות
          </h1>
          <div className={styles.textContainer}>
            <div className={styles.whiteFilter}>
              {text.map((item, i) => (
                <p key={i} className={styles.paragrah}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AboutPage;
