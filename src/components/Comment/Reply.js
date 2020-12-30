import React from 'react'

const Reply = () => {
  return (
    <div className="row">
      <div className="col-12 align-self-center">
        <div className="media m-0 pb-1 pt-5">
          <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
          <div className="media-body text-break ml-0 p-2 shadow-sm rounded bg-white">
            <small className="float-right text-muted">2020-12-29</small>
            <h6 className="mt-0 mb-1 text-muted">유현규</h6>
              dsdsds<p>sdsdsd<br></br></p>
          </div>
        </div>
        <div className="media m-0 p-0">
          <div className="media-body pl-50 pt-5">
            <div className="link-color-default fs-12">
              <span onclick>답글 쓰기</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 align-self-center">
        <div className="media m-0 p-0">
          <div className="media-body pt-15">
            <div className="link-color-default fs-12">
              <span onclick>답글 더보기</span>
            </div>
          </div>
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

export default Reply;