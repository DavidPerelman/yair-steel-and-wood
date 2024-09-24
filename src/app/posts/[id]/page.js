"use client";

// pages/posts/[id].js
import Image from "next/image";
import { useEffect, useState } from "react";

const Post = ({ params }) => {
  const [post, setPost] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      if (data.post) {
        setPost(data.post);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      {post.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {post.images.map((image, index) => (
        <Image
          key={index}
          width={100}
          height={100}
          src={image}
          alt={`Post image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Post;
