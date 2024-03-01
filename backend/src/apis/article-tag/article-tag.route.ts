import {Router} from 'express'
import {
    getAllTagsController,
    getTagByArticleTagTagIdController,
    getTagByArticleTagArticleIdController,
    postArticleTagController
} from "./article-tag.controller";

const basePath = '/apis/tag'

const router = Router()
router.route('/').post(postArticleTagController).get(getAllTagsController)

router.route('/tagId/:tagId').get(getTagByArticleTagTagIdController)

router.route('/tagName/:tagName').get(getTagByArticleTagArticleIdController)


export const tagRoute = {basePath, router}