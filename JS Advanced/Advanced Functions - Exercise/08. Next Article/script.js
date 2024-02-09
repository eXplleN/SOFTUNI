function getArticleGenerator(articles) {
    
    let arrFromArticles = articles;

    function takeArticle() {
        if (arrFromArticles.length === 0) {
            return;
        }
        let text = arrFromArticles.shift();
        let art = document.createElement("article");
        art.textContent = text;
        let target = document.getElementById("content");
        target.appendChild(art);
    }
    return takeArticle 
}
