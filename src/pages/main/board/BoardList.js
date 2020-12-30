import React, { useState } from 'react'
import Board from '../../../components/Board/board';

const BoardList = (props) => {
  const [boardList, setBoardList] = useState(props.boardList);

  let List = props.boardList.map((item) =>(
    <Board 
    key={item.boardId} 
    boardId={item.boardId} 
    userId={item.userId} 
    userName={item.userName} 
    title={item.title} 
    categoryName={item.categoryName} 
    createDate={item.createDate}/>
  ));

  return (
    <div>
      {List}
    </div>
  )
}

export default BoardList;