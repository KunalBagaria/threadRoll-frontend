export const fetchArticles = async (set, load, term) => {
  fetch(`https://ar-backend-production.up.railway.app/${term}`)
  .then((res) => res.json())
  .then((json) => {
    set(json)
    load(false)
  })
  .catch((err) => console.error(err))
}