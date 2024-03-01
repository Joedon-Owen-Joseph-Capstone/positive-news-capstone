import {Router} from 'express'
import {
    getAllArticleTagsController,
    getTagByArticleTagTagIdController,
    getTagByArticleTagArticleIdController,
    postArticleTagController
} from "./article-tag.controller";

const basePath = '/apis/tag'

const router = Router()
router.route('/').post(postArticleTagController).get(getAllArticleTagsController)

router.route('/tagId/:tagId').get(getTagByArticleTagTagIdController)

router.route('/tagName/:tagName').get(getTagByArticleTagArticleIdController)


export const tagRoute = {basePath, router}