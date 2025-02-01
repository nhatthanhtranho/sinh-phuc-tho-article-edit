'use client'
import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './style.css'

interface Props {
    value: string;
    onChange: (value: string) => void;
}


const RichTextEditor: React.FC<Props> = ({ value, onChange }) => {
    const quillRef = useRef<ReactQuill>(null);

    useEffect(() => {
        console.log(value)
      }, [value])

      
    return (
        <ReactQuill
            ref={quillRef}
            theme="snow"
            placeholder="Start writing..."
            modules={{
                toolbar: {
                    container: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        [{ size: [] }],
                        ["bold", "italic", "underline", "strike", "blockquote"],
                        [
                            { list: "ordered" },
                            { list: "bullet" },
                            { indent: "-1" },
                            { indent: "+1" },
                        ],
                        ["link", "image", "video"],
                        ["code-block"],
                        ["clean"],
                    ],
                },
                clipboard: {
                    matchVisual: false,
                },
            }}
            formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "indent",
                "link",
                "image",
                "video",
                "code-block",
            ]}
            value={value}
            onChange={onChange}
        />
    );
};

export default RichTextEditor;