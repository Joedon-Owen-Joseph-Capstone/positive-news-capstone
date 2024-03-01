import {Router} from 'express'
import {
    getAllTagsController,
    getTagByTagIdController,
    getTagByTagNameController,
    postTagController
} from "./tag.controller";

const basePath = '/apis/tag'

const router = Router()
router.route('/').post(postTagController).get(getAllTagsController)

router.route('/tagId/:tagId').get(getTagByTagIdController)

router.route('/tagName/:tagName').get(getTagByTagNameController)


export const tagRoute = {basePath, router}