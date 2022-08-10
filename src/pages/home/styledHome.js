import { styled } from "@mui/system";
import Box from '@mui/material/Box';

const StyledHome = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.background.default
}));

export default StyledHome;