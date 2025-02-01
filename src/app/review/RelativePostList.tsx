'use client'

import { Box, Grid, Typography } from "@mui/material";
import PostCard from "./PostCard";
import { useMemo } from "react";

interface Post {
    url: string;
    title: string;
    publishDate: string | Date;
    banner: string;
}

interface PropTypes {
    posts: Post[];
}

const RelativePostList: React.FC<PropTypes> = ({ posts }) => {
    const renderPosts = useMemo(() => {
        if (!posts || posts.length === 0) {
            return (
                <Grid item xs={12} sm={6} lg={12}>
                    <Typography variant="body2" color="text.secondary">
                        Không có bài viết nào
                    </Typography>
                </Grid>
            );
        }

        return posts.map((item) => (
            <Grid item xs={12} sm={6} lg={12} key={item.title}>
                <PostCard
                    url={item.url}
                    title={item.title}
                    publishDate={item.publishDate + ''}
                    bannerURL={`.${item.banner}`}
                />
            </Grid>
        ));
    }, [posts]);

    return (
        <Box sx={{ mt: 5 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>
                BÀI VIẾT NỔI BẬT
            </Typography>
            <Grid container spacing={2} mt={{ xs: 3, lg: 0 }}>
                {renderPosts}
            </Grid>
        </Box>
    );
};

export default RelativePostList;