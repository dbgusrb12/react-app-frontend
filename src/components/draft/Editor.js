import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../assets/editor.css';

const MyEditor = ({ toolbarHidden }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),)

  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  return (
      <Editor
        toolbarHidden={toolbarHidden}
        // 에디터와 툴바 모두에 적용되는 클래스
        wrapperClassName="wrapper-class"
        // 에디터 주변에 적용된 클래스
        editorClassName="editor"
        // 툴바 주위에 적용된 클래스
        toolbarClassName="toolbar-class"
        // 툴바 설정
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'history'],
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          inline: {inDropdown: true},
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }} 
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: 'ko',
        }}
        // 초기값 설정
        editorState={editorState}
        // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        onEditorStateChange={onEditorStateChange}
      />
  );
};

export default MyEditor;