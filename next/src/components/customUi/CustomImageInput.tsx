"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChangeEvent, ComponentProps, forwardRef, useState } from "react";

const imageNameSet = new Set<string>();

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
    let selectedImages = Array.from(e.target.files);

    // images 배열에 담긴 이미지가 최대일 경우
    if (images && maxImages && images.length >= maxImages) {
      alert(`${maxImages}장 이하의 이미지만 업로드 가능합니다.`);
      return;
    }

    // 현재 이미지 배열 + 새로 입력된 이미지들의 개수가 최대치를 초과할 경우
    if (
      images &&
      maxImages &&
      images.length + selectedImages.length > maxImages
    ) {
      alert(`${maxImages}장 이하의 이미지만 업로드 가능합니다.`);
      return;
    }

    // 사용자가 이미지를 한꺼번에 최대치보다 더 많이 넣은 경우
    if (selectedImages && maxImages && selectedImages.length > maxImages) {
      alert(`${maxImages}장 이하의 이미지만 업로드 가능합니다.`);
      return;
    }

    // set에 image의 name을 저장 후 걸러냄(파일 중복 방지)
    selectedImages = selectedImages.filter((img) => {
      if (imageNameSet.has(img.name)) {
        return false;
      }

      imageNameSet.add(img.name);
      return true;
    });

    setImages((prev) => {
      // 기존에 images 배열에 selected가 담겨있을 경우
      if (prev && prev.length > 0) {
        return [...prev, ...selectedImages];
      }

      return selectedImages;
    });
  };

  const handleImageDelete = (target: string) => {
    imageNameSet.delete(target);

    setImages((prev) => {
      if (!prev) return null;
      return prev.filter((e) => e.name !== target);
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
              <button
                className="top-0 right-0 text-red-500 cursor-pointer absolute z-10"
                type="button"
                onClick={() => handleImageDelete(img.name)}
              >
                삭제
              </button>
              <Image src={URL.createObjectURL(img)} alt={img.name} fill />
            </li>
          ))}
        </ul>
      )}
      <label
        htmlFor={id}
        className={cn(
          "bg-black flex items-center justify-center aspect-square text-[18px] text-[#FDFDFD] cursor-pointer w-[100px] rounded-lg",
          images && maxImages && images.length >= maxImages ? "hidden" : ""
        )}
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
