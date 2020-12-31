import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import CommentList from './CommentList'

const Comment = (props) => {
  const [replyType, setReplyType] = useState(1);
  const [replyFlag, setReplyFlag] = useState(false);
  const [comment, setComment] = useState(props);
  const hasNext = true;
  const commentList = [
    {
      replyId: 1,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      boardId: 1,
      content: 'dsdsds<p>sdsdsd<br/>sdsd</p>',
      commentCount: 0,
      createDate: '2020-12-30',
    },
    {
      replyId: 2,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      boardId: 1,
      content: 'dsdsds<p>sdsdsd<br/>sdsd</p>',
      commentCount: 0,
      createDate: '2020-12-30',
    },
    {
      replyId: 3,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      boardId: 1,
      content: 'dsdsds<p>sdsdsd<br/>sdsd</p>',
      commentCount: 5,
      createDate: '2020-12-30',
    },
  ];

  const reCommentHandler = () => {
    setReplyFlag(!replyFlag);
  }

  return (
    <>
      <div className="col-12 align-self-center">
        <div className="media m-0 pb-1 pt-5">
          <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
          <div className="media-body text-break ml-0 p-2 shadow-sm rounded bg-white">
            <small className="float-right text-muted">{comment.createDate}</small>
            <h6 className="mt-0 mb-1 text-muted">{comment.userName}</h6>
              {ReactHtmlParser(comment.content)}
          </div>
        </div>
        <div className="media m-0 p-0">
          {comment.commentCount > 0 &&
            <div className="media-body pl-50 pt-5">
              <div className="link-color-default fs-12">
                <span onClick={reCommentHandler}>{replyFlag ? '답글 닫기' : `답글 보기(${comment.commentCount})`}</span>
              </div>
              {replyFlag && <CommentList commentList={commentList} replyType={replyType} hasNext={hasNext}/>}
            </div>
          }
            
        </div>
      </div>
      
    </>
  )
}

export default Comment;