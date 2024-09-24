// app/posts/edit/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EditPost({ params }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingParagraph, setEditingParagraph] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${params.id}`);
      const data = await res.json();
      if (data.post) {
        setTitle(data.post.title);
        setContent(data.post.content);
        setImages(data.post.images);
      }
      setIsLoading(false);
    };

    // fetchPost();
    if (params.id) {
      fetchPost();
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/posts/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, images }),
      });

      if (res.ok) {
        router.push(`/posts/${params.id}`);
        console.log(`/posts/${params.id}`);
      } else {
        throw new Error("Failed to update post");
      }
    } catch (error) {
      console.error("Error:", error);
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

  const removeParagraph = (index) => {
    const newContent = content.filter((_, i) => i !== index);
    setContent(newContent);
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
      newImages[index] = data.secure_url;
      setImages(newImages);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const removeImage = (index) => {
    console.log("dsd");

    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  if (isLoading) return <div>Loading...</div>;

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
        <div key={index}>
          {editingParagraph === index ? (
            <>
              <textarea
                value={paragraph}
                onChange={(e) => handleContentChange(index, e.target.value)}
                placeholder={`Paragraph ${index + 1}`}
                required
              />
              <button type="button" onClick={finishEditingParagraph}>
                Done Editing
              </button>
            </>
          ) : (
            <>
              <p>{paragraph}</p>
              <button
                type="button"
                onClick={() => startEditingParagraph(index)}
              >
                Edit
              </button>
            </>
          )}
          <button type="button" onClick={() => removeParagraph(index)}>
            Remove Paragraph
          </button>
        </div>
      ))}
      <button type="button" onClick={addParagraph}>
        Add Paragraph
      </button>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Post image ${index + 1}`}
              width={100}
              height={100}
            />
            <input
              type="file"
              onChange={(e) => handleImageChange(e, index)}
              accept="image/*"
            />
            <button type="button" onClick={() => removeImage(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setImages([...images, ""])}>
        Add New Image
      </button>
      <button type="submit">Update Post</button>
    </form>
  );
}
