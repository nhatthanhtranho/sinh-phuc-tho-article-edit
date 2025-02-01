'use client'

import ReviewArticle from '@/components/ReviewArticle/ReviewArticle';
import { useSearchParams } from 'next/navigation';
const ReviewPage = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id');    
    if(!id) {
        return null;
    }
    return (
        <ReviewArticle id={id}/>
    );
};

export default ReviewPage;