export const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/450x250?text=Project+Image";

// URL eksternal dipakai langsung, file lokal di-resolve dari src/assets
export function getImageSrc(image) {
  if (/^https?:\/\//.test(image)) return image;
  try {
    return require(`@/assets/${image}`);
  } catch (e) {
    return PLACEHOLDER_IMAGE;
  }
}

// Fallback untuk gambar yang gagal dimuat
export function handleImageError(e) {
  e.target.src = PLACEHOLDER_IMAGE;
}
