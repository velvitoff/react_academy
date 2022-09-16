import { styled } from "@mui/system";
import Typography from '@mui/material/Typography';

const StyledTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    textDecoration: 'none',
}));

export default StyledTypography;
