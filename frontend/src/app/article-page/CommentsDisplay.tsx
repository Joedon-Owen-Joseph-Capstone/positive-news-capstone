import {fetchCommentsByArticleId} from "@/utils/http/comment.http";
import {Comment} from "@/utils/models/comment.model";
import {Article} from "@/utils/models/article.model";
import {Profile} from "@/utils/models/profile.model"
import {CommentDisplay} from "@/app/article-page/[articleId]/CommentDisplay";
import {CommentForm} from "@/app/shared/CommentForm";
import {Session} from "@/utils/fetchSession";

type Props = {
    comments:Comment[]
    article:Article
    session: Session | undefined
}
export async function CommentsDisplay (props:Props) {
    const {article, session} = props
    const comments =  await getCommentData(article.articleId)
    return (
        <>

            {/* Comment Display*/}
            <div className={"max-h-96 overflow-y-auto"}>
            {comments.map(comment => (<CommentDisplay comment={comment} key = {comment.commentId}/> ))}
            </div>

            <CommentForm session={session} article={article}/>

        </>
    )
}
async function getCommentData (articleId: string) {

    return await fetchCommentsByArticleId(articleId)
}