"use client";

import CustomHead from "@/components/customHead/CustomHead";
import styles from "./contact.module.css";
import Link from "next/link";
import ContactLinks from "@/components/navbar/links/contactLinks/ContactLinks";
import Image from "next/image";
import { useFormState } from "react-dom";
import { handleSubmit } from "@/lib/action";
import { useEffect } from "react";

const ContactPage = () => {
  const [state, formAction] = useFormState(handleSubmit, undefined);

  useEffect(() => {
    if (state !== undefined) {
      alert("קיבלנו את הודעתך נענה במהירות");
      document.getElementById("form").reset();
    }
  }, [state]);

  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - צור קשר"
        description="יאיר ברזל ועץ - צור קשר"
      />
      <div className={styles.row}>
        <div className={styles.right_column}>
          <h1>צור קשר</h1>

          <div className={styles.subContainer}>
            <p className={styles.paragraph}>
              שלום! נשמח לעזור ולענות על כל שאלה,
            </p>
          </div>

          <div className={styles.subContainer}>
            <p className={styles.paragraph}>
              מלא את הפרטים למטה ונחזיר לך תשובה במהרה :
            </p>
            <form action={formAction} className={styles.formContent} id="form">
              <label className={styles.label} htmlFor="name">
                שם
              </label>
              <input
                className={styles.input}
                type="text"
                name="fullname"
                required
              />

              <label className={styles.label} htmlFor="email">
                אימייל
              </label>
              <input
                className={styles.input}
                type="text"
                name="email"
                required
              />

              <label className={styles.label} htmlFor="subject">
                נושא
              </label>
              <input
                className={styles.input}
                type="text"
                name="subject"
                required
              />

              <label className={styles.label} htmlFor="message">
                הודעה
              </label>
              <textarea
                className={styles.input}
                cols={30}
                rows={10}
                name="message"
                required
              />

              <button className={styles.button}>שלח</button>
            </form>
          </div>
        </div>

        <div className={styles.left_column}>
          <Image
            className={styles.image}
            src="https://res.cloudinary.com/dflevhwgh/image/upload/v1725547762/ovpztfvhohqbazu22ael.png"
            alt="About container image"
            width={0}
            height={0}
            unoptimized
          />
        </div>
      </div>

      <div className={styles.bottom_column}>
        <h2>דרכים נוספות ליצירת קשר</h2>
        <div className={styles.subContainer}>
          <p className={styles.paragraph}>
            טלפון :
            <Link className={styles.link} href="tel:0584422401">
              0584422401
            </Link>
            (יאיר)
          </p>
          <p className={styles.paragraph}>
            אימייל :
            <Link
              className={styles.link}
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yair.steelandwood@gmail.com"
            >
              yair.steelandwood@gmail.com
            </Link>
          </p>
          <p className={styles.paragraph}>
            (נעשה כמיטב יכולתנו לענות תוך 48 שעות)
          </p>
        </div>

        <h2>ביקור בסטודיו</h2>
        <div className={styles.subContainer}>
          <p className={styles.paragraph}>
            אתם מוזמנים לבקר בסטודיו ולהתרשם מעבודות שלי מקרוב. זו הזדמנות
            בשבילכם לראות את היצירות שלי ולהתייעץ אישית לגבי אלה שתרצו. נשמח
            לראותכם ולשתף בכל מה שיש לי להציע!
          </p>
          <p className={styles.paragraph}>
            כתובת הסטודיו: הגפן 3, מושב בני רא&quot;ם
          </p>
        </div>

        <h2>מדיה חברתית</h2>
        <div className={styles.subContainer}>
          <p className={styles.paragraph}>
            מוזמנים לעקוב אחריי ולשתף ברשתות החברתיות :
          </p>
          <div className={styles.contactLinks}>
            <ContactLinks />
          </div>
        </div>

        <div className={styles.subContainer}>
          <p className={styles.paragraph} style={{ marginTop: "20px" }}>
            תודה שבחרתם לפנות אלינו, נשמח לשמוע ממכם ולעזור בכל דרך אפשרית.
            נתראה בקרוב.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
