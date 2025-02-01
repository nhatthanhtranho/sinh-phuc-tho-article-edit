import { Box, Typography } from "@mui/material";
interface PropTypes {
    text: string,
    fontSize?: number
}

const PageTitle: React.FC<PropTypes> = (props) => {
    const { text, fontSize } = props

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Typography variant='h5' fontWeight={500} textTransform={'uppercase'} color={'#837500'} component={'h1'} fontSize={fontSize}>
                {text}
            </Typography>
            <Box width={'100px'}
                mt={1}
                borderBottom={"3px solid #837500"}
            ></Box>
        </Box>
    )
}

export default PageTitle