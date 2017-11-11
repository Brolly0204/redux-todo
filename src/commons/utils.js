export const getItem = (key) => {
  let value = localStorage.getItem(key) || '';
  if(value.startsWith('{') || value.startsWith('[')) {
    value = JSON.parse(value);
  }
  return value;
}

export const setItem = (key, value) => {
  switch(typeof value) {
    case 'object':
      value = JSON.stringify(value);
      break;
    case 'number':
      value = '' + value;
      break;
  }
  localStorage.setItem(key, value);
}
