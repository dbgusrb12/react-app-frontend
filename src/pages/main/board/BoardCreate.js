import React, { useState, useEffect } from 'react'
import Banner from '../../../components/Banner';
import MyEditor from '../../../components/draft/Editor';

const BoardCreate = () => {
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  
  const toolbarHidden = false;
  const categoryList = [
    {
      categoryId: 1,
      categoryName: 'spring boot',
    },
    {
      categoryId: 2,
      categoryName: 'spring framework',
    },
    {
      categoryId: 3,
      categoryName: 'java',
    },
    {
      categoryId: 4,
      categoryName: 'javaScript',
    },
    {
      categoryId: 5,
      categoryName: 'react.js',
    },
  ];
  let list = categoryList.map((category) => (
    <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
  ));
  
  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  }

  const onCategoryHandler = (event) => {
    setCategory(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 글쓰기 액션 호출 후 상세보기 페이지로 라우팅
  }

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <div>
      <Banner
      backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
      title="Write an Article"
      />
      {/* END Header */}
      {/* Main container */}
      <main className="main-content">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <form className="p-30 bg-gray rounded" onSubmit={onSubmitHandler}>
                  <div className="row">
                    <div className="form-group col-12 col-md-6">
                      <input className="form-control form-control-lg" type="text" value={title} onChange={onTitleHandler} placeholder="Title"/>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <select onChange={onCategoryHandler} className="form-control form-control-lg">
                        {list}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <MyEditor toolbarHidden={toolbarHidden} content={content} setContent={setContent}/>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-lg btn-primary" type="submit">글쓰기</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* END Main container */}
    </div>

  );
}

export default BoardCreate;
