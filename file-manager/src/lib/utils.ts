import path from "path";
import { ALLOWED_TYPES } from "./constants";

// 파일 이름에 알파벳 소문자, 숫자, ., _를 제외한 모든 문자를 제거하는 함수
export const sanitizeFileName = (fileName: string): string => {
  const name = path.basename(fileName);

  return (
    name
      // 소문자로 변환하고
      .toLowerCase()
      // 알파벳 소문자, 숫자, -, -를 제외한 모든 문자를 제거
      .replace(/[^a-z0-9._]/g, "_")
      // 위의 replace에서 __가 될 수 있으므로 _가 연속으로 하나 이상 들어간다면 _로 만듦
      .replace(/_+/g, "_")
  );
};

// 타입 가드 함수 ALLOWED_TYPES Object의 key 타입으로 타입을 좁힘
export const isAllowedMimeType = (
  type: string
): type is keyof typeof ALLOWED_TYPES => {
  return type in ALLOWED_TYPES;
};

// 브라우저에서 보여줄 수 있는 파일명인지 검사하는 함수
export const canShowInBrowser = (fileExt: string): boolean => {
  const browserViewableTypes = [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".pdf",
    ".txt",
    ".mp3",
    ".wav",
    ".mp4",
    ".webm",
  ];

  return browserViewableTypes.includes(fileExt.toLowerCase());
};

export const getMimeTypeFromExtension = (fileExt: string): string | null => {
  for (const [mimeType, extensions] of Object.entries(ALLOWED_TYPES)) {
    if (extensions.includes(fileExt.toLowerCase())) {
      return mimeType;
    }
  }
  return null;
};

// bytes로 받은 파일의 사이즈를 소수점 둘째 자리까지 단위 변환하는 함수
export const formatFileSize = (bytes: number): string => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
};

export const getFileType = (extension: string): string => {
  const typeMap: Record<string, string> = {
    ".jpg": "image",
    ".jpeg": "image",
    ".png": "image",
    ".gif": "image",
    ".webp": "image",
    ".svg": "image",

    ".pdf": "document",
    ".doc": "document",
    ".docx": "document",
    ".xls": "document",
    ".xlsx": "document",
    ".txt": "document",
    ".csv": "document",

    ".mp3": "audio",
    ".wav": "audio",

    ".mp4": "video",
    ".webm": "video",
  };
  return typeMap[extension] || "other";
};

export const groupFilesByType = (files: string[]) => {
  return files.reduce((acc, file) => {
    const ext = path.extname(file).toLowerCase();
    const type = getFileType(ext);
    if (!acc[type]) acc[type] = [];
    acc[type].push(file);
    return acc;
  }, {} as Record<string, string[]>);
};
