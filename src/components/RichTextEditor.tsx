import dynamic from "next/dynamic";
import { useRef } from "react";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill (Fixes SSR issue in Next.js)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface EditorProps {
    content: string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    setContent: Function;
}


const Editor: React.FC<EditorProps> = ({ content, setContent }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const quillRef = useRef<any>(null); // TypeScript Fix

  const insertImageByURL = () => {
    const url = prompt("Nhập Image URL:");
    const altText = prompt("Nhập Image Alt");

    if (url && quillRef.current) {
      const editor = quillRef.current.getEditor(); // Fix: Use `.getEditor()`
      const range = editor?.getSelection(); // Get cursor position
      editor?.insertEmbed(range.index, "image", { src: url, alt: altText });
    }
  };

  const handleTextAlignment = (alignment: string) => {
    const editor = quillRef.current?.getEditor();
    editor?.format("align", alignment); // Apply the alignment
  };

  return (
    <div className="w-full">
      <button
  onClick={insertImageByURL}
  className="px-4 py-2 bg-red-500 text-white text-sm rounded mb-3 shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
>
  Insert Image by URL
</button>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={content}
        onChange={(content: string) => setContent(content)}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3,4,5, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
            [{ align: "" }, { align: "center" }, { align: "right" }],
          ],
        }}

        style={{height: '500px'}}

      />
    </div>
  );
};

export default Editor;
