import { Comment, CommentSchema } from "../models/comment.model";
import {LikeSchema} from "@/utils/models/like.model";

export async function postComment(commentData: {commentArticleId: string; commentContent: string; commentProfileId: string}): Promise<Comment> {
    const response = await fetch(`${process.env.PUBLIC_API_URL}/apis/comment/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData)
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Error posting comment')
        } else {
            return response.json()
        }    });

    return CommentSchema.parse(response.data);
}

export async function fetchCommentsByArticleId(commentArticleId: string): Promise<Comment[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/comment/commentArticleId/${commentArticleId}`, {
        next:{
            tags: [`comment-${commentArticleId}`]
        }}).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error getting comments')
        } else {
            return response.json()
        }
    })

    return CommentSchema.array().parse(data)

}