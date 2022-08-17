import { styled } from "@mui/system";
import LogoDevIcon from '@mui/icons-material/LogoDev';

const StyledLogoDevIcon = styled(LogoDevIcon)(({theme}) => ({
    color: theme.palette.primary.iconColor
}));

export default StyledLogoDevIcon;