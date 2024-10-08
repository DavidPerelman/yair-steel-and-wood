import Image from "next/image";
import styles from "./aboutContainer.module.css";
import Link from "next/link";

const AboutContainer = () => {
  const text = [
    "שלום וברוכים הבאים למקום בו הברזל והעץ נפגשים.",
    "עבודה עם עץ היא תחום מרתק.",
    "תחום הברזל הוא תחום מורכב, הדורש דיוק וסבלנות, במיוחד בעבודת ריתוך עם חומרים קטנים. ",
    "השילוב ביניהם מייצר עבודות מוקפדות ומדויקות, בעלות אופי ייחודי.",
    "האתר הזה מציג יצירות שנעשו בקפידה ותוך תשומת לב לפרטים, במטרה להציע פתרונות ייחודיים ומעוצבים.",
  ];

  return (
    <div class={styles.row}>
      <div
        class={styles.column}
        style={{
          textAlign: "right",
          alignContent: "center",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h2>אודות</h2>
          {text.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
          <br />
          <Link href="/about" className={styles.continue}>
            המשך לקרוא
          </Link>
        </div>
      </div>
      <div class={styles.imageColumn}>
        <Image
          className={styles.image}
          src="https://res.cloudinary.com/dflevhwgh/image/upload/v1725387382/ve44cvyyuq7acec8six2.jpg"
          alt=""
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default AboutContainer;
