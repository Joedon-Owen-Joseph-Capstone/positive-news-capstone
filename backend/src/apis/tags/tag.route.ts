import {Router} from 'express'
import {getTagByTagIdController, postTagController} from "./tag.controller";

const basePath = '/apis/tag'

const router = Router()
router.route('/').post(postTagController)

router.route('/:tagId').get(getTagByTagIdController)

export const tagRoute = {basePath, router}