'use client'

import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/components/ReviewArticle/ReviewArticle';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

const Page: React.FC = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/articles');
                console.log(response.data[0].thumbnail);
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);

    const renderArticles = useMemo(() => {
        if (!articles) return <>Chưa có bài viết</>;
        return articles.map((article: Article, index: number) => {
            return <ArticleCard key={index} title={article.title} thumbnail={article.thumbnail} id={article._id} />;
        })
    }, [articles])


    return (
        <div className="page flex flex-col items-center justify-center">
            <div className='flex flex-row items-center justify-center relative w-full'>
                <h1 className="text-3xl font-bold text-center my-10">Danh sách bài viết</h1>
                <button className="mr-12 absolute right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-40" onClick={() => window.location.href = '/create'}>Tạo mới</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
                {renderArticles}
            </div>
        </div>
    );
};

export default Page;