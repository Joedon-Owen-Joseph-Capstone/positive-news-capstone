import { Router } from 'express';
import { isLoggedInController } from "../../utils/controllers/isLoggedIn.controller";
import {
    postCommentController,
    getCommentsByArticleIdController,
    getCommentsByProfileIdController,
    deleteCommentController,
    selectCommentByCommentIdController
} from "./comment.controller";

// Declare a basePath for this router
const basePath = '/apis/comment';

// Instantiate a new router object
const router = Router();

// Route to post a new comment
router.route('/')
    .post(isLoggedInController, postCommentController);

// Route to get comments by article ID
router.route('/commentArticleId/:commentArticleId')
    .get(getCommentsByArticleIdController);

// Route to get comments by profile ID
router.route('/commentProfileId/:commentProfileId')
    .get(getCommentsByProfileIdController);

// Route to delete a comment by comment ID
// This assumes your deleteCommentController takes a commentId from request.params
router.route('/:commentId')
    .delete(isLoggedInController, deleteCommentController);

// Export the router with the basePath and router object
export const commentRoute = { basePath, router };