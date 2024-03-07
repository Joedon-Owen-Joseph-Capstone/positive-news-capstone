import {Router} from 'express'
import {
    getAllTagsController,
    getTagByTagProfileIdController,
    getTagByTagCommentIdController,
    postTagController
} from "./tag.controller";

const basePath = '/apis/tag'

const router = Router()
router.route('/').post(postTagController).get(getAllTagsController)

router.route('/tagId/:tagId').get(getTagByTagProfileIdController)

router.route('/tagName/:tagName').get(getTagByTagCommentIdController)


export const tagRoute = {basePath, router}