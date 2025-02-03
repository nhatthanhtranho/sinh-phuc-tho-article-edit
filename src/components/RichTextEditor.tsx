import dynamic from "next/dynamic";
import { useRef } from "react";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill (Fixes SSR issue in Next.js)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface EditorProps {
    content: string;
    setContent: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ content, setContent }) => {
  const quillRef = useRef<ReactQuill | null>(null);

  const insertImageByURL = () => {
    const url = prompt("Nhập Image URL:");
    const altText = prompt("Nhập Image Alt:");

    if (url && quillRef.current) {
      const editor = quillRef.current.getEditor();
      const range = editor?.getSelection();
      if (range) {
        // Insert custom <img> tag with alt attribute
        const imgTag = `<img src="${url}" alt="${altText || ""}" style="max-width:100%; height:auto;" />`;
        editor.clipboard.dangerouslyPasteHTML(range.index, imgTag);
      }
    }
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
        onChange={setContent}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
            [{ align: [] }],
          ],
        }}
        style={{ height: "500px" }}
      />
    </div>
  );
};

export default Editor;
