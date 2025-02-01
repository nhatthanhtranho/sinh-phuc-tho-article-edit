
import React from 'react';
import { Sms, Call, Youtube, Location, Facebook, Book } from 'iconsax-react';

import { Box, Grid, Stack, Theme, SxProps, Container, Typography } from '@mui/material';
import Link from 'next/link';

interface PropTypes {
    sx?: SxProps<Theme>;
    className?: string,
}

const Footer: React.FC<PropTypes> = (props) => {
    const { className, sx } = props;

    return (
        <footer>
            <Box component="footer" className={'flex flex-col w-full bg-white shadow pt-8 border-t custom-box-shadow-2' + className} sx={sx} mt={{
                xs: 5,
                md: 10
            }}>
                <Container maxWidth={false}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={5} lg={6}>
                            <Stack display={'flex'} flexDirection={'column'}>
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'fit-content'}>
                                    <Box component={'img'} src='https://sinhphuctho.com/logo.svg' width={40} loading='lazy'
                                        alt="mai tang tron goi gia re tphcm | Cơ sở mai táng trại hòm Sinh Phúc Thọ Gò Vấp"
                                    />
                                    <Typography variant='h6' fontWeight={700}>SINH PHÚC THỌ</Typography>
                                    <span className="w-fit font-semibold text-[20px]">Tận tâm - Chuyên nghiệp - Minh bạch</span>
                                </Box>

                                <Box width={{
                                    lg: 450
                                }}>
                                    <p>
                                        Với hơn 20 năm kinh nghiệm, Sinh Phúc Thọ tự hào là một trong những đơn vị hàng đầu tại TPHCM, chuyên cung cấp dịch vụ mai táng trọn gói chất lượng cao với chi phí hợp lý. Chúng tôi cam kết mang đến cho gia đình bạn một lễ tang trang trọng, chu đáo và đầy đủ, giúp bạn vượt qua nỗi đau mất mát.<br />
                                        <strong>Tại sao chọn Sinh Phúc Thọ?</strong><br />
                                        <strong>Dịch vụ trọn gói:</strong> Tiết kiệm thời gian và công sức cho gia đình.<br />
                                        <strong>Chi phí hợp lý: </strong>Nhiều gói dịch vụ đa dạng, phù hợp với mọi nhu cầu.<br />
                                        <strong>Chuyên nghiệp:</strong> Đội ngũ nhân viên giàu kinh nghiệm, tận tâm.<br />
                                        <strong>Uy tín:</strong> Được hàng ngàn khách hàng tin tưởng và lựa chọn.<br />
                                        <strong>Dịch vụ của chúng tôi:</strong><br />
                                        Tư vấn và hỗ trợ 24/7<br />
                                        Chuẩn bị lễ tang trọn gói<br />
                                        Các dịch vụ mai táng trọn gói<br />
                                        Các gói tang lễ đi kèm (hoa tươi, xe đưa, nhạc lễ, ...)<br />
                                        <strong>Liên hệ ngay với chúng tôi để được tư vấn miễn phí!</strong><br />
                                        <strong>SĐT: 0913 673 661 (Thanh Thời)</strong><br />

                                    </p>
                                </Box>
                            </Stack>
                            <Grid container mt={2} spacing={2}>
                                <Grid item xs={12} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                    <Book
                                        size="20"
                                    />
                                    <Typography variant="body2" pl={1} width={'250px'} color="text.secondary" component="a" href="https://maps.google.com/?q=Số 119 Nguyễn Du, Phường 7, Quận Gò Vấp, TP. HCM" className="flex items-center gap-2">

                                        Mã số hộ kinh doanh 8408782580  do phòng tài chính kế hoạch TPHCM cấp ngày 12/4/2021
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2" color="text.secondary" component="a" href="https://maps.google.com/?q=Số 119 Nguyễn Du, Phường 7, Quận Gò Vấp, TP. HCM" className="flex items-center gap-2">
                                        <Location
                                            size="20"
                                        />
                                        Số 119 Nguyễn Du, Phường 7, Quận Gò Vấp, TP. HCM
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} lg={6} xl={4}>
                                    <Typography variant="body2" color="text.secondary" component="a" href="mailto:contact@onair.today" className="flex items-center gap-2">
                                        <Sms
                                            size="20"
                                        />
                                        sinhphuctho@gmail.com
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} lg={6} xl={4}>
                                    <Typography variant="body2" color="text.secondary" component="a" href="tel:+84913673661" className="flex items-center gap-2">
                                        <Call
                                            size="20"
                                        />
                                        0913.673.661 (Thanh Thời)
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} lg={6} xl={4}>
                                    <Typography variant="body2" color="text.secondary" component="a" href="tel:+84913673661" className="flex items-center gap-2">
                                        <Call
                                            size="20"
                                        />
                                        0986.124.780 (Kim Hương)
                                    </Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid item xs={12} sm={3} lg={3} className="text-[#3E5463]">
                            <Stack justifyContent={'center'}>
                                <Typography variant="subtitle1" mb={2} component={'h1'} fontWeight={700}>Dịch vụ nổi bật</Typography>
                                <Link href={'#'} className='mb-4'><Typography variant='body1' component={'h2'}>Gói mai táng tiết kiệm</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant='body1' component={'h2'}>Gói mai táng tiêu chuẩn</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant='body1' component={'h2'}>Gói mai táng trang trọng</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant='body1' component={'h2'}>Gói mai táng cao cấp</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant='body1' component={'h2'}>Gói mai táng Phúc Thọ</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant='body1' component={'h2'}>Dịch vụ thêm</Typography></Link>

                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={4} lg={3} className="text-[#3E5463] whitespace-nowrap">
                            <Stack>
                                <Typography variant="subtitle1" mb={2} component={'h1'} fontWeight={700}>Liên kết</Typography>
                                <Link href={'#'} className='mb-4'><Typography variant="body1" >Trang chủ</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant="body1" component={'h2'}>Giới thiệu</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant="body1" component={'h2'}>Gói dịch vụ</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant="body1" component={'h2'}>Áo quan</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant="body1" component={'h2'} color="#637381">Dịch vụ thêm</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant="body1" color="#637381" component={'h2'}>Cẩm nang</Typography></Link>
                                <Link href={'#'} className='mb-4'><Typography variant="body1" color="#637381" component={'h2'}>Liên hệ</Typography></Link>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'end',
                        mt: 2
                    }}>
                        <iframe
                            loading="lazy"
                            title="bản đồ google đến cơ sở mai táng trại hòm giá rẻ gò vấp TPHCM"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8035123523077!2d106.68370087451784!3d10.826343658272107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fa41549927%3A0xb54d6c5e90acceb0!2zQ8ahIFPhu58gTWFpIFTDoW5nIFRy4bqhaSBIw7JtIFNpbmggUGjDumMgVGjhu40!5e0!3m2!1svi!2s!4v1723447174285!5m2!1svi!2s"
                            width="100%"
                            height="450"
                            frameBorder={0}
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </Box>

                    <Grid container className="flex flex-row items-center justify-between border-t-[1px] border-solid border-[#DCE3E8] py-6 mt-8">
                        <Grid item xs={12} sm={6}>
                            <span className="text-sm text-primary">
                                © 2024 - Bản quyền thuộc về Cơ Sở Mai Táng Trại Hòm Sinh Phúc Thọ Gò Vấp
                            </span>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box className="flex flex-row justify-left sm:justify-end items-center gap-5 mt-3 sm:mt-0">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <Facebook variant="Bold" />
                                </a>
                                <a href="#" target="_blank" rel="noreferrer">
                                    <Youtube variant="Bold" />
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer >
    );
};

export default Footer;
