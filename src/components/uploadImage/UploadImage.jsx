"use client";

import { useEdgeStore } from "@/lib/edgestore";
import { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState();
  const [urls, setUrls] = useState();
  const { edgestore } = useEdgeStore();

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      />
      <button
        onClick={async () => {
          if (file) {
            const res = await edgestore.myPublicImages.upload({ file });

            setUrls({ url: res.url, thumbnailUrl: res.thumbnailUrl });
          }
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadImage;
