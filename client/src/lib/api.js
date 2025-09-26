// src/lib/api.js
export const API_BASE =
  import.meta.env.VITE_API_BASE ?? '/api'; // Netlify will proxy this

export const getImageUrl = (img) => {
  if (!img) return '';
  const url = img.url ?? img;
  if (url.startsWith('/uploads')) return `/uploads${url.replace('/uploads', '')}`;
  return url;
};
