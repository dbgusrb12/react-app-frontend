import React from 'react'

const CommentList = () => {
  return (
    <div className="section bt-1 pt-20 pb-20 bg-grey">
      <div className="container">
        <div className="row text-center">
          <div className="text-center p-5">
            COMMENTS HERE.
          </div>
        </div>
        <div className="row">
          <div className="col-12 align-self-center">
            <div className="media pb-1 pt-5">
              <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
              <div className="media-body ml-0 p-2 shadow-sm rounded bg-white">
                <small className="float-right text-muted">2020-12-29</small>
                <h6 className="mt-0 mb-1 text-muted">유현규</h6>
                  dsdsds<p>sdsdsd<br></br></p>
              </div>
            </div>
            <div className="media p-0">
              <div className="pl-50 pt-5 link-color-default fs-12">
                <span onclick>답글 보기</span>
              </div>
            </div>
          </div>
          <div className="col-12 align-self-center">
            <div className="media pb-1 pt-5">
              <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
              <div className="media-body ml-0 p-2 shadow-sm rounded bg-white">
                <small className="float-right text-muted">2020-12-29</small>
                <h6 className="mt-0 mb-1 text-muted">유현규</h6>
                  dsdsds<p>sdsdsd<br></br></p>
              </div>
            </div>
            <div className="media p-0">
              <div className="pl-50 pt-5 link-color-default fs-12">
                <span onclick>답글 보기</span>
              </div>
            </div>
          </div>
          
          <div className="pl-25 pt-10 link-color-default">
            <span onclick>댓글 더보기</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 align-self-center">
            <form>
              <div className="media pt-5 pb-5">
                <textarea className="form-control"/>
                <button className="btn btn-primary align-self-center" type="submit">댓글쓰기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentList;