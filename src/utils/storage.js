function get(key){
    const value = localStorage.getItem(key) ? localStorage.getItem(key) : '';
    return JSON.parse(value)
}

function set(key, value){
  const strValue = JSON.stringify(value)
  localStorage.setItem(key, strValue)
}

function remove (key) {
  localStorage.removeItem(key)
}
export default {
  get,
  set,
  remove
}
