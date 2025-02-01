import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import Introduction from './Introduction';
import { formatDate } from '@/utils/formatDate';
interface ReviewArticleProps {
    id: string;
}

export interface Article {
    title: string;
    content: string;
    createdAt: string;
    _id: string;
    thumbnail: string;
}

const ReviewArticle: React.FC<ReviewArticleProps> = ({ id }) => {
    const [article, setArticle] = React.useState<Article | null>(null);

    React.useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:3000/articles/${id}`);
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);
    return (
        <Box
            minHeight={'100vh'}
            bgcolor={'white'}
            width={{
                lg: '950px',
            }}
        >
            <Chip className='font-bold !text-white' label="Bài viết" sx={{ backgroundColor: '#837500' }} />
            <Typography variant='h5' fontWeight={700} mt={2} color={'#837500'}>
                {article?.title}
            </Typography>
            <Typography mb={4} mt={1} variant='body2'>{formatDate(new Date(article!.createdAt))}</Typography>
            <Box dangerouslySetInnerHTML={{ __html: article?.content || '' }} />
            <Introduction />
        </Box>
    )
};

export default ReviewArticle;