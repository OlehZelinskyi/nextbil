export const hasErrors = (data: { [key: string]: any }) => {
  return Object.values(data).some((result) => typeof result === "string");
};