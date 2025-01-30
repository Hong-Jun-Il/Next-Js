"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState<File[]>([]);
  const handleChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);
    } else {
      alert("실패");
    }
  };

  useEffect(() => {
    console.log(images[0]);
  }, [images]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <main>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          accept="image/*"
          multiple
          name="test"
          required
          onChange={handleChangeFiles}
        />
        <button type="submit">제출</button>
      </form>

      <ul className="w-[500px] grid grid-cols-2">
        {images.map((img) => (
          <img src={URL.createObjectURL(img)} alt={img.name} key={img.name} />
        ))}
      </ul>
    </main>
  );
}
