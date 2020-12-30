import React, { useState } from 'react'
import Comment from '../../components/Comment/Comment';
import '../../assets/custom.css';
const CommentList = (props) => {
  const [commentList, setCommentList] = useState(props.commentList);
  const [replyType, setReplyType] = useState(props.replyType);
  const [hasNext, setHasNext] = useState(props.hasNext);
  let List;
  if(replyType === 0) {
    List = commentList.map((comment, index) => (
      <Comment
      key={comment.replyId}
      replyId={comment.replyId}
      userId={comment.userId}
      userName={comment.userName}
      parentId={comment.boardId}
      content={comment.content}
      commentCount={comment.commentCount}
      createDate={comment.createDate}
      replyType={replyType}
      />
    ));

  }else {
    List = (<div></div>);
  }

  return (
    <div className="row">
    {List}
    <div className="col-12 align-self-center">
        <div className="media m-0 p-0">
          {hasNext && 
            <div className="media-body pt-15">
              <div className="link-color-default">
                <span onclick>댓글 더보기</span>
              </div>
            </div>
          }
        </div>
        <form>
          <div className="media m-0 pt-5 pb-5">
            <textarea className="form-control"/>
            <button className="btn btn-primary align-self-center" type="submit">댓글쓰기</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CommentList;