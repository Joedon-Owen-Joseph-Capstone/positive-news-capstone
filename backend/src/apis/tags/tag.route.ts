import {
    getTagByPrimaryKeyController,
    getTagByTagNameController,
    getTagByTagIdController,
} from "./tag.controller";
import {Router} from "express";

const basePath = '/apis/tag'


// instantiate a new router object
const router = Router()

// define the endpoint for getting a tag by tagId
router.route('/tagId/:tagId')
    .get(getTagByTagIdController)

// define the endpoint for getting a tag by tagKeywordId
router.route('/tagName/:tagName')
    .get(getTagByTagNameController)

// define the endpoints for getting a tag by tagName and tagId
router.route('/tagName/:tagName/tagId/:tagId')
    .get(getTagByPrimaryKeyController)

// export the router with the basePath and router object
export const tagRoute = {basePath, router}