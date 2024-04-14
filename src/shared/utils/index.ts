export const setItem = (key: string, val: any) => {
  if (typeof window !== "undefined")
    localStorage.setItem(key, JSON.stringify(val));
};
export const getItem = (key: string) => {
  if (typeof window !== "undefined")
    return JSON.parse(localStorage.getItem(key) as string);
};

export const validateString = (pattern: RegExp, string: string) =>
  pattern.test(string);
