"use client";

import { uploadToCloudinary } from "@/lib/action";
import styles from "./uploadAboutImageForm.module.css";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const UploadAboutImageForm = ({ setNewImageUrl, setImageThumbnail }) => {
  const [state, formAction] = useFormState(uploadToCloudinary, undefined);

  useEffect(() => {
    if (state !== undefined) {
      setNewImageUrl(state.secure_url);
      setImageThumbnail(state.secure_url);
    }
  }, [state, setNewImageUrl, setImageThumbnail]);

  return (
    <form action={formAction}>
      <div className={styles.changeImageDiv}>
        <p className="mb-6">
          <label htmlFor="image">בחר תמונת תצוגה:</label>
          <br />
        </p>
        <input id="image" type="file" name="image" required />
      </div>
      <button>העלאת תמונה לשרת</button>
    </form>
  );
};

export default UploadAboutImageForm;
