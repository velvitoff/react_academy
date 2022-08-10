import { styled } from "@mui/system";
import LogoDevIcon from '@mui/icons-material/LogoDev';

const StyledIcon = styled(LogoDevIcon)(({theme}) => ({
    color: theme.palette.primary.iconColor
}));

export default StyledIcon;