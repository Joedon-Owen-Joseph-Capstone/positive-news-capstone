import {Router} from "express";
import {
    getAllArticles,
    getArticleByArticleIdController,
    getPageOfArticlesController, postArticleController
} from "./article.controller";

const basePath = '/apis/article'

const router: Router = Router()

router.route('/')
    .post(postArticleController)
    .get(getAllArticles)

router.route('/page/:page').get(getPageOfArticlesController)

router.route('/:articleId').get(getArticleByArticleIdController)

export const articleRoute = { basePath, router }