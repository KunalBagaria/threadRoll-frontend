export const userArticles = async (uid) => {
    const homePage = await fetch(`https://ar-backend-production.up.railway.app/getarticle?user=${uid}`)
    const trendingPage = await fetch(`https://ar-backend-production.up.railway.app/savedtrending?user=${uid}`)
    const homeArticles = await homePage.json()
    const trendingArticles = await trendingPage.json()
    return [...homeArticles, ...trendingArticles];
}