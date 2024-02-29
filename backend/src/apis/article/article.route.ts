import {Router} from "express";
import {
    getAllThreads,
    getArticleByArticleIdController,
    getPageOfArticlesController} from "./article.controller";

const basePath = '/apis/article'

const router: Router = Router()

router.route('/').get(getAllThreads)

router.route('/page/:page').get(getPageOfArticlesController)

router.route('/:articleId').get(getArticleByArticleIdController)

export const articleRoute = { basePath, router }