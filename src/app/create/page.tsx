'use client'
import { isEmpty } from 'lodash'
import RichTextEditor from "@/components/RichTextEditor";
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

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/articles/${id}`).then(res => {
        setTitle(res.data.title)
        setContent(res.data.content)
      })
    }
  }, [id])


  const handleSubmit = async () => {
    if (isEmpty(title) || isEmpty(content)) {
      return
    }
    await axios.post('http://localhost:3000/articles', {
      title,
      content,
      thumbnail: `/images/posts/${convertToSlug(title)}.webp`,
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
      thumbnail: `/images/posts/${convertToSlug(title)}.webp`,
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
    <div className="flex flex-col w-screen h-screen items-center justify-center mt-20">
      <h1 className="font-bold text-2xl mb-10">Tạo bài vết mới</h1>
      <div className="w-full px-12 mb-5">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiêu đề</label>
        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <RichTextEditor value={content} onChange={setContent} />
      <button
        onClick={() => { handleSave(id) }}
        className="mt-[60px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-40"
      >
        Tạo mới
      </button>
    </div>
  );
}
