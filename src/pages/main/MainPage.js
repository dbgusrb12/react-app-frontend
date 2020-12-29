import React from 'react'
import Banner from '../../components/Banner';
import BoardList from './board/BoardList';

const MainPage = () => {
  const boardList = [
    {
      id: 1,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 2,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 3,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 4,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 5,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 6,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 7,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 8,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 9,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
    },
    {
      id: 10,
      title: 'New features will add to dashboard soon',
      category: 'spring boot',
      date: '2020-12-24'
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
              <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" />
                Newer
              </a>
              <a className="btn btn-white" href="#">
                Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </a>
            </nav>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MainPage;