import React from 'react'
import Board from '../../../components/Board/board';

const BoardList = ({ boardList }) => {

  let List = boardList.map((item) =>(
    <Board key={item.id} title={item.title} category={item.category} date={item.date}/>
  ));

  return (
    <div>
      {List}
    </div>
  )
}

export default BoardList;