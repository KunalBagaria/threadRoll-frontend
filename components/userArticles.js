export const userArticles = async (uid) => {
    const articles = await fetch(`https://ar-backend-production.up.railway.app/getarticle?user=${uid}`)
    return articles.json()
}