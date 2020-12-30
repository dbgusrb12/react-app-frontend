import React from 'react';
import CommentList from '../Comment/CommentList';
import ReactHtmlParser from 'react-html-parser';

const BoardDetail = () => {
  let content = `
    <p>
      <img src='/assets/img/blog-img.jpg'alt="..." />
    </p>
    <div class="col-12 col-lg-8 offset-lg-2">
      <p>Assertively empower customized alignments vis-a-vis go forward vortals. Completely monetize inexpensive alignments
        whereas market positioning services. Uniquely revolutionize multifunctional strategic theme areas with adaptive
        architectures. Interactively orchestrate next-generation content with proactive applications. Appropriately
        initiate market-driven results through backend deliverables.</p>
      <ul>
        <li>Energistically coordinate business relationships</li>
        <li>Change via resource-leveling innovation</li>
        <li>Efficiently develop fully researched experiences and integrated</li>
        <li>Assertively empower customized alignments vis-a-vis go forward vortals</li>
      </ul>
      <p>Quickly innovate high-quality catalysts for change via resource-leveling innovation. Seamlessly expedite just
        in time infomediaries vis-a-vis viral manufactured products. Rapidiously network synergistic leadership whereas
        emerging data. Professionally synergize compelling partnerships vis-a-vis leading-edge e-business. Efficiently
        develop fully researched experiences and integrated. Phosfluorescently simplify ubiquitous bandwidth without
        client-centered information. Professionally recaptiualize flexible relationships via performance based synergy.
        Monotonectally mesh interoperable processes through high-quality e-commerce. Dynamically build team building
        models without 24/7 internal or "organic" sources. Compellingly incentivize e-business methods of empowerment
        with.
      </p>
      <blockquote class="blockquote">
        <div class="quote-sign" />
        <p>Objectively grow out-of-the-box results with go forward methodologies. Progressively exploit dynamic functionalities
          without ethical portals. Competently facilitate timely total linkage with.</p>
        <footer>Someone famous in
          <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
      <p>Proactively underwhelm proactive leadership skills whereas plug-and-play paradigms. Credibly whiteboard client-centered
        intellectual capital after B2B total linkage. Progressively innovate technically sound manufactured products
        whereas diverse meta-services. Continually orchestrate ubiquitous core competencies rather than market positioning
        "outside the box" thinking. Dramatically redefine out-of-the-box schemas.</p>
    </div>`;
  const board = {
    boardId: 1,
    userId: 'sdwa-wewr-231d-awwd',
    userName: '유현규',
    categoryName: 'spring boot',
    title: "We've just passed 1,000 customers!",
    content: content,
    createDate: '2020-12-30',
    updateDate: '',
  }
  const replyType = 0;
  const commentList = [
    {
      replyId: 1,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      boardId: 1,
      content: '안녕하세요',
      commentCount: 0,
      createDate: '2020-12-30',
    },
    {
      replyId: 2,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      boardId: 1,
      content: '안녕하세요',
      commentCount: 0,
      createDate: '2020-12-30',
    },
    {
      replyId: 3,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      boardId: 1,
      content: '안녕하세요',
      commentCount: 5,
      createDate: '2020-12-30',
    },
  ];
  return (
    <div>
      {/* Header */}
      <header className="header header-inverse h-fullscreen pb-80" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-cup.jpg)`}} data-overlay={8}>
        <div className="container text-center">
          <div className="row h-full">
            <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
              <p className="opacity-70">{board.categoryName}</p>
              <br />
              <h1 className="display-4 hidden-sm-down">{board.title}</h1>
              <br />
              <br />
              <p>
                <span className="opacity-70 mr-8">By</span>
                <a className="text-white" href="#">{board.userName}</a>
              </p>
              <p>
                <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
              </p>
            </div>
            <div className="col-12 align-self-end text-center">
              <a className="scroll-down-1 scroll-down-inverse" href="#" data-scrollto="section-content">
                <span />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* END Header */}
      {/* Main container */}
      <main className="main-content">
      {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Blog content
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !*/}
        <div className="section" id="section-content">
          <div className="container">
            <div className="row">
              {/* 게시글 들어갈 위치 */}
              {ReactHtmlParser(board.content)}
              <div className="gap-multiline-items-1 mt-30">
                <a className="badge badge-pill badge-default" href="#">Record</a>
                <a className="badge badge-pill badge-default" href="#">Progress</a>
                <a className="badge badge-pill badge-default" href="#">Customers</a>
                <a className="badge badge-pill badge-default" href="#">News</a>
              </div>
            </div>
          </div>
        </div>
        {/*
        |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
        | Comments
        |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
        !*/}
        <div className="section bt-1 pt-20 pb-20 bg-grey">
          <div className="container">
            <div className="row text-center">
              <div className="text-center p-5">
                COMMENTS HERE.
              </div>
            </div>
            <CommentList commentList={commentList} replyType={replyType}/>
          </div>
        </div>
        
      </main>
      {/* END Main container */}
    </div>
  );
};

export default BoardDetail;