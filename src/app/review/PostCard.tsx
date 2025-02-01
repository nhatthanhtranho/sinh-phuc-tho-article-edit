'use client'

import { Box, Tooltip, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface PropTypes {
    title: string,
    bannerURL: string,
    publishDate: string
    url: string
    variant?: 'left-card' | 'center-card' | 'right-card'
    showContent?: boolean
    content?: string
}

const PostCard: React.FC<PropTypes> = (props) => {
    const router = useRouter()
    const { title, bannerURL, publishDate, url, variant, showContent, content } = props
    if (variant === 'left-card') {
        return (
            <Link href={'#'}>
                <Box display={'flex'} flexDirection={'row'} pb={2}
                    sx={{
                        borderBottom: '1px solid #cbd5e1',
                        cursor: 'pointer'
                    }}

                >
                    <Box component={'img'}
                        loading='lazy'
                        borderRadius={1}
                        width={120}
                        height={80}
                        src={bannerURL}
                        alt="Dịch vụ mai táng trọn gói giá rẻ tại TPHCM - Sinh Phúc Thọ Gò Vấp | Hoả táng trọn gói, An táng trọn gói"
                    ></Box>
                    <Tooltip title={title}>
                        <Box sx={{ overflow: 'hidden' }}>
                            <Typography variant='body2' ml={1} fontWeight={550}
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '3',
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>
                    </Tooltip>
                </Box>
            </Link>

        )
    }
    if (variant === 'center-card') {
        return (
            <Link href={'#'}>
                <Box display={'flex'} flexDirection={'column'} pb={2} sx={{ cursor: 'pointer' }}
                >
                    <Box component={'img'}
                        loading='lazy'
                        borderRadius={1}
                        width={'100%'}
                        height={300}
                        src={bannerURL}
                        sx={{ objectFit: 'cover' }}
                        alt="Dịch vụ mai táng trọn gói giá rẻ tại TPHCM - Sinh Phúc Thọ Gò Vấp | Hoả táng trọn gói, An táng trọn gói"
                    ></Box>
                    <Tooltip title={title} >
                        <Box sx={{ overflow: 'hidden' }} mt={2}>
                            <Typography variant='h5' ml={1} fontWeight={550}
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '4',
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {title}
                            </Typography>
                            {showContent && <Typography variant='body2' ml={1} pr={3} mt={1}
                                color={'#444'}
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '4',
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {content}
                            </Typography>}
                        </Box>
                    </Tooltip>
                </Box>
            </Link>
        )
    }
    if (variant === 'right-card') {
        return (
            <Link href={'#'}>
                <Box display={'flex'} flexDirection={'column'} pb={2} sx={{ cursor: 'pointer' }} onClick={() => {
                    router.push(url)
                }}>
                    <Box component={'img'}
                        loading='lazy'
                        borderRadius={1}
                        width={'100%'}
                        height={150}
                        alt="Dịch vụ mai táng trọn gói giá rẻ tại TPHCM - Sinh Phúc Thọ Gò Vấp | Hoả táng trọn gói, An táng trọn gói"
                        src={bannerURL}></Box>
                    <Tooltip title={title} >
                        <Box sx={{ overflow: 'hidden' }} mt={2}>
                            <Typography variant='subtitle2' ml={1} fontWeight={550}
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '3',
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>
                    </Tooltip>
                </Box>
            </Link>
        )
    }
    return (
        <Link href={'#'}>
            <Box
                display={'flex'} flexDirection={'row'} borderBottom={'1px solid #708090'}
                width={'312px'}
                sx={{
                    cursor: 'pointer'
                }}
                pb={2}
            >
                <Box component={'img'}
                    loading='lazy'
                    borderRadius={2}
                    width={80}
                    height={80}
                    src={bannerURL}
                    alt="Dịch vụ mai táng trọn gói giá rẻ tại TPHCM - Sinh Phúc Thọ Gò Vấp | Hoả táng trọn gói, An táng trọn gói"
                ></Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Tooltip title={title}>
                        <Typography variant='body2' ml={1} fontWeight={550} className='line-clamp-2'>
                            {title}
                        </Typography>
                    </Tooltip>
                    <Typography variant='body2' ml={1} fontWeight={400}
                        mt={'auto'}
                        marginLeft={'auto'}
                    >
                        {publishDate}
                    </Typography>
                </Box>
            </Box>
        </Link>

    )
}


export default PostCard