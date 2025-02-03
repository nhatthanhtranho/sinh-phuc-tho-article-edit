'use client'
import { isEmpty } from 'lodash'
import Editor from "@/components/RichTextEditor";
import { useEffect, useState } from "react";
import axios from 'axios';
import { convertToSlug } from '@/utils/convertToSlug';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id');
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/articles/${id}`).then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setThumbnail(res.data.thumbnail);
      })
    }
  }, [id])

  // Load saved state from localStorage
  useEffect(() => {
    const savedTitle = localStorage.getItem('article_title');
    const savedContent = localStorage.getItem('article_content');
    const savedThumbnail = localStorage.getItem('article_thumbnail');

    if (!id && savedTitle && savedContent && savedThumbnail) {
      setTitle(savedTitle);
      setContent(savedContent);
      setThumbnail(savedThumbnail);
    }
  }, [id]);

  // Save to localStorage whenever title or content changes
  useEffect(() => {
    localStorage.setItem('article_title', title);
    localStorage.setItem('article_content', content);
    localStorage.setItem('article_thumbnail', thumbnail);
  }, [title, content, thumbnail]);


  const handleSubmit = async () => {
    if (isEmpty(title) || isEmpty(content)) {
      return
    }
    await axios.post('http://localhost:3000/articles', {
      title,
      content,
      thumbnail: `https://sinhphuctho.com/public/images/${convertToSlug(title)}/thumbnail.webp`,
      slug: convertToSlug(title),
      category: 'news'
    })
    setTitle('')
    setContent('')
    router.push('/')
  }
  const handleUpdate = async (id: string) => {
    if (isEmpty(title) || isEmpty(content)) {
      return
    }
    await axios.put(`http://localhost:3000/articles/${id}`, {
      title,
      content,
      thumbnail: thumbnail ? thumbnail : `https://sinhphuctho.com/public/images/${convertToSlug(title)}/thumbnail.webp`,
      slug: convertToSlug(title),
      category: 'news'
    })
    setTitle('')
    setContent('')
    router.push('/')
  }

  const handleSave = async (id: string | null) => {
    if (id) {
      await handleUpdate(id)
    } else {
      await handleSubmit()
    }
  }
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-20">
      <h1 className="font-bold text-4xl mb-10 uppercase">Tạo bài viết mới</h1>
      <div className="w-full mb-5">
        <label htmlFor="title" className="block mb-2 font-bold uppercase text-gray-900 dark:text-white">Tiêu đề</label>
        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full mb-5">
        <label htmlFor="title" className="block mb-2 font-bold uppercase text-gray-900 dark:text-white">Thumbnail</label>
        <input type="text" id="thumbnail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`https://sinhphuctho.com/public/images/${convertToSlug(title)}/thumbnail.webp`}
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>
      <Editor content={content} setContent={setContent} key={'my editor'} />
      <button
        onClick={() => { handleSave(id) }}
        className="mt-[60px] mb-[30px]  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-40"
      >
        Tạo mới
      </button>
    </div>
  );
}
