import React from 'react'
import Banner from '../../components/Banner';
import BoardList from './board/BoardList';

const MainPage = () => {
  const hasNext = true;
  const hasPrevious = false;
  const boardList =[
    {
      bodrdId: 1,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      title: 'New features will add to dashboard soon',
      categoryName: 'spring boot',
      createDate: '2020-12-24'
    },
    {
      bodrdId: 2,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      title: 'New features will add to dashboard soon',
      categoryName: 'spring boot',
      createDate: '2020-12-24'
    },
    {
      bodrdId: 3,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      title: 'New features will add to dashboard soon',
      categoryName: 'spring boot',
      createDate: '2020-12-24'
    },
    {
      bodrdId: 4,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      title: 'New features will add to dashboard soon',
      categoryName: 'spring boot',
      createDate: '2020-12-24'
    },
    {
      bodrdId: 5,
      userId: 'sdwa-wewr-231d-awwd',
      userName: '유현규',
      title: 'New features will add to dashboard soon',
      categoryName: 'spring boot',
      createDate: '2020-12-24'
    },
  ];
  return (
    <div>
      <Banner 
      backgroundImage="url(assets/img/bg-gift.jpg)"
      title="Blog"
      subtitle="Welcome!"
      />
      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <BoardList boardList={boardList}/>
            
            <nav className="flexbox mt-50 mb-50">
              <button className={'btn btn-white ' + (!hasPrevious ? 'disabled' : '')} onClick>
                <i className="ti-arrow-left fs-9 mr-4" />
                Newer
              </button>
              <button className={'btn btn-white ' + (!hasNext ? 'disabled' : '')} onClick>
                Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </button>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MainPage;