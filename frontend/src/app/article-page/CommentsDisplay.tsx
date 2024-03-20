import {fetchCommentsByArticleId} from "@/utils/http/comment.http";
import {Comment} from "@/utils/models/comment.model";
import {Article} from "@/utils/models/article.model";
import {Profile} from "@/utils/models/profile.model"
import {CommentDisplay} from "@/app/article-page/[articleId]/CommentDisplay";

type Props = {
    comments:Comment[]
    article:Article
}
export async function CommentsDisplay (props:Props) {
    const {article} = props
    const comments =  await getCommentData(article.articleId)
    return (
        <>

        {/* Comment Display*/}
            {comments.map(comment => (<CommentDisplay comment={comment} key = {comment.commentId}/> ))}
    <section className="bg-gray-800 p-5 rounded-b-xl">

        {/* Comment box */}
        <form className='flex items-center gap-2 pt-4'>
        <textarea className='bg-gray-200 text-black rounded-lg p-3' rows={1} cols={64} name='comment'
                  id='comment' placeholder='Comment'/>
            <button type='submit'><img src='/send-fill.svg' alt='submit comment'/></button>
        </form>
    </section>

            </>
    )
}
async function getCommentData (articleId: string) {

    return await fetchCommentsByArticleId(articleId)
}