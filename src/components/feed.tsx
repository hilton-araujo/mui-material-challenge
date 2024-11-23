import { Box, Skeleton, Stack } from "@mui/material";
import Post from "./post";
import { useState, useEffect } from "react";

const Feed = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Box flex={4} p={{ xs: 0, md: 2 }}>
            {loading ? (
                <Stack spacing={1}>
                    <Skeleton variant="text" height={100} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="text" height={20} />
                    <Skeleton variant="rectangular" height={300} />
                </Stack>
            ) : (
                <>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </>
            )}
        </Box>
    );
};

export default Feed;
