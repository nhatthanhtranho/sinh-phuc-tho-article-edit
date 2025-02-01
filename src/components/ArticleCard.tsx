import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ArticleCardProps {
    thumbnail: string;
    title: string;
    id: string;
}

const defaultThumbnail = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'

const ArticleCard: React.FC<ArticleCardProps> = ({ thumbnail, title, id }) => {
    const router = useRouter();
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image className="rounded-t-lg" src={thumbnail || defaultThumbnail} alt="" width={500} height={300}  />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">View the content in the detail page</p>
                    <div 
                    onClick={() =>router.push(`/create?id=${id}`)}
                    className="mr-3 cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Edit
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </div>

                    <div 
                    onClick={() =>router.push(`/review?id=${id}`)}
                    className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Review
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ArticleCard;