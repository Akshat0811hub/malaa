/**
 * Central image fallback utility ensuring no image on the site ever fails to display.
 */
export const FALLBACK_ARCHITECTURAL_IMG =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop';

export const handleImageError = (e) => {
  if (e && e.currentTarget && e.currentTarget.src !== FALLBACK_ARCHITECTURAL_IMG) {
    e.currentTarget.src = FALLBACK_ARCHITECTURAL_IMG;
  }
};
