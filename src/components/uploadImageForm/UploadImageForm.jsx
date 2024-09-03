"use client";

import { createUpload } from "@/lib/action";

const UploadImageForm = () => {
  return (
    <div>
      <form
        action={createUpload}
        className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6"
      >
        <p className="mb-6">
          <label htmlFor="image" className="block font-semibold text-sm mb-2">
            Select an Image to Upload
          </label>
          <input
            id="image"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="image"
            required
          />
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UploadImageForm;
