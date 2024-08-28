import CustomHead from "@/components/customHead/CustomHead";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <CustomHead
        title="יאיר ברזל ועץ - אודות"
        description="יאיר ברזל ועץ - אודות"
      />
      <h1>אודות</h1>
    </div>
  );
};

export default AboutPage;
