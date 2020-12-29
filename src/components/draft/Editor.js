import React, { useState, useEffect, useRef } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../assets/editor.css';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const MyEditor = ({ toolbarHidden, content, setContent }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const rendered = useRef(false);

  const onEditorStateChange = (editorState) => {
    const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    // editorState에 값 설정
    setContent(editorToHtml);
    setEditorState(editorState);
    console.log(editorToHtml);
  };
  useEffect(() => {
    if(rendered.current) {
      return;
    }
    rendered.current = true;
    const blocksFromHtml = htmlToDraft(content);
    if(blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, [content]);

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