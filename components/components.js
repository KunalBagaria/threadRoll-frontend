export const fetchArticles = async (set, load) => {
  fetch('https://ar-backend-production.up.railway.app/articles')
  .then((res) => res.json())
  .then((json) => {
    set(json)
    load(false)
  })
  .catch((err) => console.error(err))
}