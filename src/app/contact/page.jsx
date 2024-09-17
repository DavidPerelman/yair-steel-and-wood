"use client";

import CustomHead from "@/components/customHead/CustomHead";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - צור קשר"
        description="יאיר ברזל ועץ - צור קשר"
      />
      <h1>צור קשר</h1>

      <div className={styles.subContainer}>
        <p>איך אפשר לעזור?</p>
        <p>שלום! אשמח לעזור ולענות על כל שאלה שיש לך.</p>
      </div>

      <h2>דרכי יצירת קשר -</h2>
      <div className={styles.subContainer}>
        <p>טלפון : 0584422401 (יאיר)</p>
        <p>אימייל : yair.steelandwood@gmail.com</p>
        <p>(נעשה כמיטב יכולתנו לענות תוך 48 שעות)</p>
      </div>

      <h2>----טופס יצירת קשר----</h2>
      <div className={styles.subContainer}>
        <p>מלא את הפרטים למטה ונחזיר לך תשובה במהרה :</p>
        <form action="" className={styles.formContent}>
          <label htmlFor="name">שם</label>
          <input type="text" placeholder="שם" />

          <label htmlFor="email">אימייל</label>
          <input type="text" placeholder="אימייל" />

          <label htmlFor="subject">נושא</label>
          <input type="text" placeholder="נושא" />

          <label htmlFor="message">הודעה</label>
          <textarea cols={30} rows={10} name="message" placeholder="הודעה" />
          <button>שלח</button>
        </form>
      </div>

      <h2>ביקור בסטודיו</h2>
      <div className={styles.subContainer}>
        <p>
          אתם מוזמנים לבקר בסטודיו ולהתרשם מעבודות שלי מקרוב. זו הזדמנות בשבילכם
          לראות את היצירות שלי ולהתייעץ אישית לגבי אלה שתרצו. נשמח לראותכם ולשתף
          בכל מה שיש לי להציע!
        </p>
        <p>כתובת הסטודיו: הגפן 3, מושב בני רא&quot;ם</p>
      </div>

      <h2>מדיה חברתית</h2>
      <div className={styles.subContainer}>
        <p>מוזמנים לעקוב אחריי ולשתף ברשתות החברתיות :</p>
        <p>--אייקונים רלוונטים---</p>
      </div>

      <div className={styles.subContainer}>
        <p>
          תודה שבחרתם לפנות אלינו. נשמח לשמוע ממכם ולעזור בכל דרך אפשרית. נתראה
          בקרוב.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
