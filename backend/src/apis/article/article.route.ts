import {Router} from "express";
import {
    getAllArticles,
    getArticleByArticleAuthorController,
    getArticleByArticleDatetimeController,
    getArticleByArticleIdController,
    getArticleByArticleSourceCountryController,
    getArticleByArticleTitleController,
    getPageOfArticlesController,
    postArticleController
} from "./article.controller";

const basePath = '/apis/article'

const router: Router = Router()

router.route('/')
    .post(postArticleController)
    .get(getAllArticles)

router.route('/page/:page').get(getPageOfArticlesController)

router.route('/:articleId').get(getArticleByArticleIdController)

router.route('/articleAuthor/:articleAuthor').get(getArticleByArticleAuthorController)

router.route('/articleDatetime/:articleDatetime').get(getArticleByArticleDatetimeController)

router.route('/articleSourceCountry/:articleSourceCountry').get(getArticleByArticleSourceCountryController)

router.route('/articleTitle/:articleTitle').get(getArticleByArticleTitleController)

export const articleRoute = { basePath, router }