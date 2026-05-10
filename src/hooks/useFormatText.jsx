export const useFormatText = (excerpt) => {
  if (!excerpt) return "";

  return excerpt
    .replace(/&hellip;/g, "...")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/<[^>]*>/g, "")
    .trim();
};
