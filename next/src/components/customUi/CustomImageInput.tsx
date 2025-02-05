"use client";

import Image from "next/image";
import { ChangeEvent, ComponentProps, forwardRef, useState } from "react";

export const CustomImageInput = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<"input">, "type"> & {
    id: string;
    name: string;
    maxImages?: number;
  }
>(({ name, id, maxImages, ...props }, ref) => {
  const [images, setImages] = useState<File[] | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);

    // images 배열에 담긴 이미지가 최대일 경우
    if (images && maxImages && images.length >= maxImages) {
      alert(`${maxImages}장 이하의 이미지만 업로드 가능합니다.`);
      return;
    }

    // 현재 이미지 배열 + 새로 입력된 이미지들의 개수가 최대치를 초과할 경우
    if (
      images &&
      maxImages &&
      images.length + selectedFiles.length > maxImages
    ) {
      alert(`${maxImages}장 이하의 이미지만 업로드 가능합니다.`);
      return;
    }

    // 사용자가 이미지를 한꺼번에 최대치보다 더 많이 넣은 경우
    if (selectedFiles && maxImages && selectedFiles.length > maxImages) {
      alert(`${maxImages}장 이하의 이미지만 업로드 가능합니다.`);
      return;
    }

    setImages((prev) => {
      // 기존에 images 배열에 selected가 담겨있을 경우
      if (prev && prev.length > 0) {
        return [...prev, ...selectedFiles];
      }

      return selectedFiles;
    });
  };

  return (
    <div className="flex">
      {images && images.length > 0 && (
        <ul className="flex">
          {images.map((img) => (
            <li
              key={img.name}
              className="relative rounded-lg aspect-square w-[100px] overflow-hidden bg-black"
            >
              <Image src={URL.createObjectURL(img)} alt={img.name} fill />
            </li>
          ))}
        </ul>
      )}
      <label
        htmlFor={id}
        className="bg-black flex items-center justify-center aspect-square text-[18px] text-[#FDFDFD] cursor-pointer w-[100px] rounded-lg"
        hidden={(images && maxImages && images.length >= maxImages) || false}
      >
        +
      </label>
      <input
        type="file"
        name={name}
        id={id}
        accept="image/*"
        ref={ref}
        hidden
        onChange={handleImageChange}
        {...props}
      />
    </div>
  );
});

CustomImageInput.displayName = "Input";
