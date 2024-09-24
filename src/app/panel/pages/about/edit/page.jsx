"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./editPage.module.css";
import NewPageForm from "@/components/newPageForm/NewPageForm";
import Loading from "@/app/loading";

const EditAboutPage = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  // const [content, setContent] = useState([]);
  const [editingParagraph, setEditingParagraph] = useState(null);
  const [pageContent, setPageContent] = useState(null);
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([]);
  const [images, setImages] = useState([]);
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const targetSegment = segments[2];

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/pages/${targetSegment}`
      );
      const data = await res.json();
      if (data.page) {
        setTitle(data.page.title);
        setSections(data.page.sections);
        setImages(data.page.images);
        setPageContent(data.page);
      }
      setIsLoading(false);
    };

    // fetchPost();
    if (targetSegment) {
      fetchPost();
    }
  }, [pathname, targetSegment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const _id = pageContent._id;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/pages/${targetSegment}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id, title, sections, images }),
        }
      );
      if (res.ok) {
        router.push("/about");
      } else {
        throw new Error("Failed to update post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSectionChange = (index, value) => {
    const newContent = [...sections];
    newContent[0].paragraphs[index] = value;
    setSections(newContent);
  };

  const addParagraph = () => {
    const updatedSections = sections.map((sec, sectionIndex) => {
      if (sectionIndex === 0) {
        // Assuming you're adding to the first section
        return {
          ...sec,
          paragraphs: [...sec.paragraphs, ""],
        };
      }
      return sec;
    });

    setSections(updatedSections);
  };

  const removeParagraph = (index) => {
    const updatedSections = sections.map((sec, sectionIndex) => {
      if (sectionIndex === 0) {
        // Assuming you only want to update the first section
        return {
          ...sec,
          paragraphs: sec.paragraphs.filter((_, i) => i !== index),
        };
      }
      return sec;
    });

    setSections(updatedSections); // Update the full sections array
  };

  const startEditingParagraph = (index) => {
    setEditingParagraph(index);
  };

  const finishEditingParagraph = () => {
    setEditingParagraph(null);
  };

  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "xexjtgmt");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      const newImages = [...images];
      (newImages[index] = {
        secure_url: data.secure_url,
        public_id: data.public_id,
      }),
        setImages(newImages);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        {Array.isArray(sections) && sections.length > 0 ? (
          sections.map((sec, sectionIndex) => (
            <div key={sectionIndex} className={styles.sections}>
              {Array.isArray(sec.paragraphs) && sec.paragraphs.length > 0 ? (
                sec.paragraphs.map((paragraph, paragraphIndex) => (
                  <div key={paragraphIndex} className={styles.section}>
                    {editingParagraph === paragraphIndex ? (
                      <>
                        <textarea
                          value={paragraph}
                          onChange={(e) =>
                            handleSectionChange(paragraphIndex, e.target.value)
                          }
                          placeholder={`פסקה ${paragraphIndex + 1}`}
                          required
                        />
                        <button type="button" onClick={finishEditingParagraph}>
                          סיום
                        </button>
                      </>
                    ) : (
                      <>
                        <p>{paragraph}</p>
                        <button
                          type="button"
                          onClick={() => startEditingParagraph(paragraphIndex)}
                        >
                          ערוך
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => removeParagraph(paragraphIndex)}
                    >
                      הסר פסקה
                    </button>
                  </div>
                ))
              ) : (
                <p>אין פסקאות</p>
              )}
            </div>
          ))
        ) : (
          <p>No sections available</p>
        )}

        <button type="button" onClick={addParagraph}>
          הוסף פסקה
        </button>

        <div>
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.secure_url}
                alt={`Post image ${index + 1}`}
                width={100}
                height={100}
                unoptimized
                priority
              />
              <input
                type="file"
                onChange={(e) => handleImageChange(e, index)}
                accept="image/*"
              />
              {/* <button type="button" onClick={() => removeImage(index)}>
                הסר תמונה
              </button> */}
            </div>
          ))}
        </div>
        {/* <button type="button" onClick={() => setImages([...images, ""])}>
          הוסף תמונה
        </button> */}
        <button type="submit">שמור שינויים</button>
      </form>
    </div>
  );
};

export default EditAboutPage;
