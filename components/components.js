export const fetchArticles = async (set, load, term) => {
  fetch(`https://ar-backend-production.up.railway.app/${term}`)
  .then((res) => res.json())
  .then((json) => {
    set(json)
    load(false)
  })
  .catch((err) => console.error(err))
}

export const switchTheme = (storage) => {
  const theme = storage.getItem('theme')
  if (theme === '#15202b') {
    storage.setItem('theme', 'black')
  } else {
    storage.setItem('theme', '#15202b')
  }
}