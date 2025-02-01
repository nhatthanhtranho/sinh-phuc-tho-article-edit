'use client'

import { Box, Chip, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { KEYWORDS } from "./constant";
import PageTitle from "./PageTitle";
interface PropTypes {
    tags?: string[]
}

const Introduction: React.FC<PropTypes> = (props) => {
    const { tags } = props
    const refinedTags = [...KEYWORDS, ...tags || []]
    const router = useRouter()
    const hoatang = [{
        name: 'Hỏa táng tiết kiệm',
        price: '30.000.000 đ',
        link: ''
    },
    {
        name: 'Hỏa táng tiêu chuẩn',
        price: '35.000.000 đ',
        link: ''

    },
    {
        name: 'Hỏa táng trang trọng',
        price: '45.000.000 đ',
        link: ''

    },
    {
        name: 'Hỏa táng cao cấp',
        price: '60.000.000 đ',
        link: ''
    },
    {
        name: 'Hỏa táng Phúc Thọ',
        price: 'Liên hệ',
        link: ''
    }
    ]

    const antang = [{
        name: 'An táng tiết kiệm',
        price: '70.000.000 đ',
        link: ''
    },
    {
        name: 'An táng tiêu chuẩn',
        price: '85.000.000 đ',
        link: ''
    },
    {
        name: 'An táng trang trọng',
        price: '110.000.000 đ',
        link: ''
    },
    {
        name: 'An táng cao cấp',
        price: '140.000.000 đ',
        link: ''
    },
    {
        name: 'An táng Phúc Thọ',
        price: 'Liên hệ',
        link: ''
    }]
    return (
        <>
            <Box display={'flex'} flexDirection={'column'} height={'fit-content'} position={'relative'} mt={5}>
                <PageTitle text="Bảng giá dịch vụ hỏa táng trọn gói" />
                <TableContainer component={Paper} sx={{ mb: 5 }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="subtitle1" component={'h1'} fontWeight={700}>Gói dịch vụ</Typography></TableCell>
                                <TableCell align="right"><Typography variant="subtitle1" component={'h1'} fontWeight={700}>Giá tham khảo</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {hoatang.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}>
                                    <TableCell component="th" scope="row" className="cursor-pointer"
                                        onClick={() => {
                                            router.push(row.link)
                                        }}
                                    >
                                        <Typography component={'h1'} variant="subtitle1"

                                        >{row.name}</Typography>
                                    </TableCell>
                                    <TableCell align="right"
                                        onClick={() => {
                                            router.push(row.link)
                                        }}
                                    ><strong>{row.price}</strong></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <PageTitle text="Bảng giá dịch vụ an táng trọn gói" />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="subtitle1" component={'h1'} fontWeight={700}>Gói dịch vụ mai táng trọn gói</Typography></TableCell>
                                <TableCell align="right"><Typography variant="subtitle1" component={'h1'} fontWeight={700}>Giá tham khảo</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {antang.map((row) => (
                                <TableRow
                                    className="cursor-pointer"
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row"
                                        onClick={() => {
                                            router.push(row.link)
                                        }}
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right"
                                        onClick={() => {
                                            router.push(row.link)
                                        }}
                                    ><strong>{row.price}</strong></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box mt={5}>
                    <Typography sx={{ typography: { xs: 'h6', sm: 'h5' } }} fontWeight={500} textTransform={'uppercase'} color={'#837500'} mt={2}>
                        tại sao chọn <Box display={{
                            xs: 'inherit',
                            sm: 'none'
                        }}>
                        </Box> Dịch vụ mai táng trọn gói Sinh Phúc Thọ Gò Vấp
                    </Typography>
                    <Box width={'100px'}
                        mt={1}
                        borderBottom={"3px solid #837500"}
                    ></Box>
                </Box>
                {/* SỬA CHỖ NÀY */}
                <ul>
                    <li>
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}
                        >
                            <span>•</span> <strong>Dịch vụ trọn gói, linh hoạt:</strong> Đáp ứng mọi nhu cầu, từ lễ tang truyền thống đến hiện đại.
                        </Typography>
                    </li>
                    <li >
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}
                        >
                            <span>•</span> <strong>Chi phí minh bạch:</strong>  Không phát sinh thêm bất kỳ khoản phí nào ngoài hợp đồng.
                        </Typography>
                    </li>
                    <li>
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}
                        >
                            <span>•</span> <strong>Đội ngũ chuyên nghiệp:</strong> Đảm bảo mọi nghi thức diễn ra trang trọng, chu đáo.
                        </Typography>
                    </li>
                    <li>
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}
                        >
                            <span>•</span> <strong>Hệ thống cơ sở vật chất hiện đại: </strong> Đầy đủ tiện nghi, đáp ứng mọi yêu cầu.
                        </Typography>
                    </li>
                    <li>
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}
                        >
                            <span>•</span> <strong>Hơn 20 năm kinh nghiệm: </strong>  Đảm bảo uy tín và chất lượng dịch vụ.
                        </Typography>
                    </li>

                    <Box>
                        <Typography sx={{ typography: { xs: 'h6', sm: 'h5' } }} fontWeight={500} textTransform={'uppercase'} color={'#837500'} mt={2} component={"h1"}>
                            cam kết dịch vụ
                        </Typography>
                        <Box width={'100px'}
                            mt={1}
                            borderBottom={"3px solid #837500"}
                        ></Box>
                    </Box>
                    <li>
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}
                        >
                            <span>•</span> <strong>TẬN TÂM: </strong>  Hiểu và chia sẻ nỗi đau mất mát của gia đình.
                        </Typography>
                    </li>
                    <li>
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}
                        >
                            <span>•</span> <strong>CHU ĐÁO: </strong> Chuẩn bị mọi chi tiết, từ nhỏ đến lớn.
                        </Typography>
                    </li>
                    <li>
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}
                        >
                            <span>•</span> <strong>CHẤT LƯỢNG: </strong> Đảm bảo dịch vụ tốt nhất với giá cả hợp lý.
                        </Typography>
                    </li>

                </ul>
                <Box
                    width={{ lg: '1320px', xs: '100%' }}
                    display={'flex'}
                    flexDirection={{
                        xs: 'column',
                    }}
                >
                    <Box mt={5}>
                        <PageTitle text="về chúng tôi" />
                        <Typography mt={1}
                            component={'p'}
                            color={'#777'}
                            letterSpacing={.5}>
                            <strong>Sinh Phúc Thọ </strong> là đơn vị hàng đầu tại TPHCM, tự hào với hơn 20 năm kinh nghiệm trong lĩnh vực dịch vụ mai táng. Chúng tôi cam kết mang đến dịch vụ chuyên nghiệp, tận tâm và chu đáo nhất. Đội ngũ nhân viên của chúng tôi được đào tạo bài bản, giàu kinh nghiệm và luôn sẵn sàng hỗ trợ 24/7. Chúng tôi sử dụng các phương pháp hiện đại, đảm bảo mọi nghi lễ diễn ra trang trọng, đúng chuẩn và tiết kiệm thời gian cho gia đình. Với <strong>Sinh Phúc Thọ</strong>, gia đình có thể hoàn toàn yên tâm về mọi khâu tổ chức tang lễ, từ khâu chuẩn bị đến khâu hậu sự.            </Typography>
                    </Box>

                    <Box mt={5}>
                        <PageTitle text="phương châm làm việc" />
                        <Grid container mt={2} spacing={5}>
                            <Grid item display={'flex'} flexDirection={'column'} xs={12} sm={6} lg={4}>
                                <Box>
                                    <Typography sx={{ typography: { xs: 'h6' } }} component={'h1'} fontWeight={500} textTransform={'uppercase'} color={'#837500'}>
                                        Tận tâm
                                    </Typography>
                                    <Box width={'60px'}
                                        mt={1}
                                        borderBottom={"3px solid #837500"}
                                    ></Box>
                                </Box>
                                <Typography mt={2} color={'#444'} component={'p'}>
                                    Với dịch vụ mai táng trọn gói chuyên nghiệp, chúng tôi đáp ứng mọi nhu cầu của gia đình, từ nghi lễ truyền thống đến các dịch vụ hiện đại, linh hoạt.<br />
                                    <strong>Sinh Phúc Thọ</strong> tự hào là đơn vị tiên phong trong việc cung cấp dịch vụ mai táng đa dạng, đáp ứng mọi yêu cầu của từng gia đình.
                                </Typography>
                            </Grid>
                            <Grid item display={'flex'} flexDirection={'column'} xs={12} sm={6} lg={4}>
                                <Box>
                                    <Typography sx={{ typography: { xs: 'h6' } }} component={'h1'} fontWeight={500} textTransform={'uppercase'} color={'#837500'}>
                                        CHUYÊN NGHIỆP
                                    </Typography>
                                    <Box width={'60px'}
                                        mt={1}
                                        borderBottom={"3px solid #837500"}
                                    ></Box>
                                </Box>
                                <Typography mt={2} color={'#444'}>
                                    Với sự tận tâm và chuyên nghiệp, Sinh Phúc Thọ sẽ giúp gia đình tổ chức một lễ tang trang trọng, chu đáo và đầy ý nghĩa.<br />
                                    Chúng tôi cam kết mang đến dịch vụ mai táng trọn gói, đáp ứng mọi nhu cầu của gia đình một cách chuyên nghiệp và chu đáo nhất.

                                </Typography>
                            </Grid>
                            <Grid item display={'flex'} flexDirection={'column'} xs={12} sm={6} lg={4}>
                                <Box>
                                    <Typography sx={{ typography: { xs: 'h6' } }} component={'h1'} fontWeight={500} textTransform={'uppercase'} color={'#837500'}>
                                        Minh bạch
                                    </Typography>
                                    <Box width={'60px'}
                                        mt={1}
                                        borderBottom={"3px solid #837500"}
                                    ></Box>
                                </Box>
                                <Typography mt={2} color={'#444'} component={'p'}>
                                    Sinh Phúc Thọ cam kết minh bạch trong mọi khâu, từ tư vấn đến thực hiện. Tất cả chi phí đều được niêm yết rõ ràng, không phát sinh thêm bất kỳ khoản nào.<br />
                                    Chúng tôi xây dựng quy trình làm việc minh bạch, giúp khách hàng nắm rõ từng bước trong quá trình tổ chức lễ tang.<br />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Typography variant="h6" component={'h1'} mt={10} fontWeight={700}>Từ khóa:</Typography>
                <Grid container gap={1}>
                    {
                        refinedTags?.map((item, index) => {
                            return <Grid item key={index}>
                                < Chip label={item} />
                            </Grid>
                        })
                    }
                </Grid>
            </Box>
        </>
    );
}

export default React.memo(Introduction);