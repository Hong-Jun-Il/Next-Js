"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function ImageTest() {
  const [images, setImages] = useState<File[]>([]);
  const handleChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);
    } else {
      alert("실패");
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/test`, {
      method: "post",
      cache: "no-store",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("HTTP ERROR");
    }

    return res.json();
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          accept="image/*"
          multiple
          name="images"
          required
          onChange={handleChangeFiles}
        />
        <button type="submit">제출</button>
      </form>

      <ul className="w-[500px] grid grid-cols-2 aspect-[1/1]">
        {images.map((img) => (
          <li key={img.name}>
            <img src={URL.createObjectURL(img)} alt={img.name} />
          </li>
        ))}
      </ul>
    </main>
  );
}
