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
    </div>
  );
};

export default ContactPage;
