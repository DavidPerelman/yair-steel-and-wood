// app/posts/create/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([""]);
  const [images, setImages] = useState([]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, images }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
      // You might want to set an error state here and display it to the user
    }
  };

  const handleContentChange = (index, value) => {
    const newContent = [...content];
    newContent[index] = value;
    setContent(newContent);
  };

  const addParagraph = () => {
    setContent([...content, ""]);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "xexjtgmt"); // Replace with your Cloudinary upload preset

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setImages([...images, data.secure_url]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      {content.map((paragraph, index) => (
        <textarea
          key={index}
          value={paragraph}
          onChange={(e) => handleContentChange(index, e.target.value)}
          placeholder={`Paragraph ${index + 1}`}
          required
        />
      ))}
      <button type="button" onClick={addParagraph}>
        Add Paragraph
      </button>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      <div>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Uploaded image ${index + 1}`}
            width={100}
            height={100}
          />
        ))}
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}
