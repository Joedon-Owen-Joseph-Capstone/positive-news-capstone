class ArticleTag {
    public article_tag_article_id: string;
    public article_tag_tag_id: string;

    constructor(article_tag_article_id: string, article_tag_tag_id: string) {
        this.article_tag_article_id = article_tag_article_id;
        this.article_tag_tag_id = article_tag_tag_id;
    }

}

export default ArticleTag;