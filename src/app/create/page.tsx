'use client'
import { isEmpty } from 'lodash'
import Editor from "@/components/RichTextEditor";
import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { convertToSlug } from '@/utils/convertToSlug';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import RoundedImage from '@/components/SquareImage';
import { MdAutoMode } from "react-icons/md";


const CATEGORIES = [
  {
    name: 'Bài viết',
    value: 'news'
  },
  {
    name: 'Dịch vụ',
    value: 'service'
  }
]

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API;
  const searchParams = useSearchParams()
  const id = searchParams.get('id');
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [slug, setSlug] = useState('')
  const [keywords, setKeywords] = useState('')
  const [description, setDescription] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('news')
  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/articles/${id}`).then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setThumbnail(res.data.thumbnail);
        setSlug(res.data.slug);
      })
    }
  }, [id])

  // Load saved state from localStorage
  useEffect(() => {
    const savedTitle = localStorage.getItem('article_title');
    const savedContent = localStorage.getItem('article_content');
    const savedThumbnail = localStorage.getItem('article_thumbnail');
    const savedDescription = localStorage.getItem('article_description');
    const savedKeywords = localStorage.getItem('article_keywords');
    const savedSelectedCategory = localStorage.getItem('article_selectedCategory');
    if (!id) {
      setTitle(savedTitle || '');
      setContent(savedContent || '');
      setThumbnail(savedThumbnail || '');
      setDescription(savedDescription || '');
      setKeywords(savedKeywords || '');
      setSelectedCategory(savedSelectedCategory || 'news');
    }
  }, [id]);

  // Save to localStorage whenever title or content changes
  useEffect(() => {
    localStorage.setItem('article_title', title);
    localStorage.setItem('article_content', content);
    localStorage.setItem('article_thumbnail', thumbnail);
    localStorage.setItem('article_description', description);
    localStorage.setItem('article_keywords', keywords);
    localStorage.setItem('article_keywords', keywords);
    localStorage.setItem('article_selectedCategory', selectedCategory);
  }, [title, content, thumbnail, description, keywords, selectedCategory]);


  const generateSlug = useCallback(async () => {
    if (isEmpty(title)) {
      return
    }
    const slug = await axios.post(`http://localhost:3000/articles/create-slug`, {
      title
    })
    setSlug(slug.data)
  }, [title])

  const handleSubmit = async () => {
    if (isEmpty(title) || isEmpty(content)) {
      return
    }
    await axios.post('http://localhost:3000/articles', {
      title,
      content,
      thumbnail: `https://sinhphuctho.com/public/images/${slug}/thumbnail.webp`,
      slug: slug,
      category: selectedCategory,
      description,
    })
    setTitle('')
    setContent('')
    localStorage.clear()
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
      category: selectedCategory
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
    <div className="flex relative flex-col items-center justify-center mt-10 px-20">
      <button className="flex absolute top-0 left-20 px-4 py-2 text-white bg-black rounded hover:bg-gray-700 transition shadow"
        onClick={() => router.push('/')}
      >
        Quay lại
      </button>
      <h1 className="font-bold text-4xl mb-10 uppercase">Tạo bài viết mới</h1>
      <div className='flex flex-row w-full'>
        <div className='w-1/3 px-2'>
          <div className="w-full mb-5">
            <label htmlFor="title" className="block mb-2 font-bold uppercase text-gray-900 dark:text-white">Tiêu đề</label>
            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập tiêu đề"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="title"
              className="flex items-center mb-2 font-bold uppercase text-gray-900 dark:text-white"
            >
              Slug
              <div className="relative group">
                <MdAutoMode className="ml-2 cursor-pointer"
                  onClick={() => generateSlug()}
                />
                <span className="absolute top-1/2 left-full transform ml-2 mb-1 -translate-y-1/2 pl-4 w-40 hidden group-hover:block text-sm text-white bg-gray-800 p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  generate slug
                  <span className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-gray-800 border-l-transparent border-r-transparent"></span>
                </span>
              </div>
            </label>
            <input
              readOnly
              type="text"
              id="thumbnail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={slug}
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="title" className="block mb-2 font-bold uppercase text-gray-900 dark:text-white">Thumbnail</label>
            <input type="text" id="thumbnail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`https://sinhphuctho.com/public/images/${convertToSlug(title)}/thumbnail.webp`}
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
        </div>
        <div className='w-1/3 px-2 flex flex-col'>
          <label htmlFor="select" className="block mb-2 font-bold uppercase text-gray-900 dark:text-white">Category</label>
          <select id="select" className="w-full border rounded-md text-gray-700 focus:ring focus:ring-blue-300 h-10"
            onChange={(e) => {
              setSelectedCategory(e.target.value)
            }}
            value={selectedCategory}
          >
            {CATEGORIES.map((category) => {
              return <option value={category.value} key={category.value}>{category.name}</option>
            })}
          </select>

          <div className="w-full mt-5">
            <label htmlFor="title" className="block mb-2 font-bold uppercase text-gray-900 dark:text-white">Description (Meta)</label>
            <input type="text" id="thumbnail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`description for metadata`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="w-full mt-5">
            <label htmlFor="title" className="block mb-2 font-bold uppercase text-gray-900 dark:text-white">keyword (Meta)</label>
            <input type="text" id="keywords" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={'keyword1, keyword2, keyword3'}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>

        </div>
        <div className='w-1/3 px-2'>
          <label htmlFor="thumbnail" className="block mb-2 font-bold uppercase text-gray-900 dark:text-white">Thumbnail</label>
          <div id='thumbnail'>
            <RoundedImage src={thumbnail} />
          </div>
        </div>
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
