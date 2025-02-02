'use client'

import RelativePostList from "./RelativePostList";
import { Box } from "@mui/material";
import { usePathname } from 'next/navigation';
import postData from './postdata.json';
import Header from "@/components/ReviewArticle/Header";
import Footer from "@/components/ReviewArticle/Footer";
interface Props {
    children: React.ReactNode;
}

const PostLayout = ({ children }: Props) => {
    const pathname = usePathname();
    if (pathname === "/cam-nang" || pathname === "/cam-nang.html") {
        return <>
            {children}
        </>
    }
    return (
        <div className="flex flex-col items-center">
            <Header />
            <Box
                display={'flex'}
                bgcolor={'white'}
                justifyContent={'center'}
            >
                <Box
                    display={'flex'}
                    flexDirection={{
                        xs: 'column',
                        lg: 'row'
                    }}
                    bgcolor={'white'}
                    width={{
                        xs: '100%',
                        lg: '1320px'
                    }}
                    px={{
                        xs: 0
                    }}
                    justifyContent={'space-between'}>
                    <Box px={{
                        xs: 2,
                        lg: 6
                    }}>
                        {children}
                    </Box>
                    <RelativePostList posts={postData} />
                </Box>
            </Box>
            <Footer />
        </div >
    );
};

export default PostLayout;