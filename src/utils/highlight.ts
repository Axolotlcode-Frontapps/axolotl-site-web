/**
 * Add a highlight class to text
 * @param text - Text to be highlighted
 * @param className - The class to be added
 */
export const processTextHighlight = (text: string, className: string) => {
  return `<span class="${className}">${text}</span>`;
};
