export function getItem(key) {
  const content = sessionStorage.getItem(key);

  return JSON.parse(content);
}

export function setItem(key, value) {
  const content = JSON.stringify(value);

  return sessionStorage.setItem(key, content);
}
