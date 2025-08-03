export const copy = async (content?: string) => {
  if (!content) return;
  try {
    await navigator.clipboard.writeText(content);
  } catch (err) {
    console.error(err);
  }
};
