import { styled } from "@mui/system";
import Box from '@mui/material/Box';

const StyledHomeBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.background.default
}));

export default StyledHomeBox;