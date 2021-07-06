export const fetchArticles = async (set) => {
  fetch('https://ar-backend-production.up.railway.app/articles')
  .then((res) => res.json())
  .then((json) => {
    set(json)
  })
  .catch((err) => console.error(err))
}