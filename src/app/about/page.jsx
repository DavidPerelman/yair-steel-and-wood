import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";
import { getPost } from "@/lib/data";
// import PostContainer from "@/components/postContainer/PostContainer";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
// import { Fragment } from "react";
// import FullScreenImage from "@/components/fullScreenImage/FullScreenImage";

const AboutPage = async () => {
  const data = await getPost("about");
  // const postData = JSON.parse(JSON.stringify(data));

  const first_paragrah = "שלום וברוכים הבאים למקום בו הברזל והעץ נפגשים";

  const text = [
    "עבודה עם עץ מאז ומעולם הייתה עבורי תחום מרתק. במהלך השנים לקחתי חלק בפרויקטים שונים בתחום, ועם הזמן גיליתי איך העולם הזה מושך לי את תשומת הלב והדמיון.",
    "לתחום הברזל הגעתי רק אחרי השחרור מהצבא, תחום מורכב, הדורש דיוק וסבלנות, במיוחד בעבודת ריתוך עם חומרים קטנים. ",
    "לאחר תקופה ממושכת של פיתוח כישורים והתמקצעות בטכניקות שונות, נולד השילוב הייחודי בין ברזל לעץ. העוצמה והברק של הברזל, יחד עם הגוונים והחום של העץ, יוצרים ביחד עבודות מוקפדות ומדויקות, בעלות אופי ייחודי.",
    "האתר הזה מציג יצירות שנעשו בקפידה ותוך תשומת לב לפרטים, במטרה להציע פתרונות ייחודיים ומעוצבים. מוזמנים לעיין בעבודות ולהתרשם בכל פרויקט שעשוי להתאים לכם. כמובן, אני כאן כדי לענות על כל שאלה או לסייע בפרויקטים בהתאמה אישית.",
    "מקווה שתהנו מהחומרים ושתמצאו בהם את ההשראה שאתם מחפשים",
    "יאיר",
  ];

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
          <h1 className={styles.first_paragrah}>אודות</h1>
          <p className={styles.first_paragrah}>{first_paragrah}</p>
          {text.map((item, i) => (
            <p key={i} className={styles.paragrah}>
              {item}
            </p>
          ))}
        </div>
        {/* <div className={styles.footer}>
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default AboutPage;
