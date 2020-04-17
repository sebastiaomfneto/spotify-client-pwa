export function getItem(key) {
  const content = localStorage.getItem(key);

  return JSON.parse(content);
}

export function setItem(key, value) {
  const content = JSON.stringify(value);

  return localStorage.setItem(key, content);
}
