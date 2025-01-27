export const calculateReadingTime = (text, wordsPerMinute = 150) => {
  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read `;
};
