const setLocal = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};
const getLocal = (key: string) => {
  window.localStorage.getItem(key);
};
const removeLocal = (key: string) => {
  window.localStorage.removeItem(key);
};
const clearLocal = () => {
  window.localStorage.clear();
};

export { setLocal, getLocal, removeLocal, clearLocal };
