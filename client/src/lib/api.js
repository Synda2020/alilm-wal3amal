// src/lib/api.js
export const API_BASE = import.meta.env.VITE_API_URL + "/api";

export const getImageUrl = (img) => {
  if (!img) return '';

  // If Strapi gives object with url
  const url = img.url ?? img;

  // If it’s already absolute (http...), just return it
  if (url.startsWith("http")) return url;

  // Otherwise, prefix with backend domain
  return `${import.meta.env.VITE_API_URL}${url}`;
};
