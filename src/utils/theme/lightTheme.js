import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#2d2d2d',
            iconColor: '#fafafa'
        },
        secondary: {
            main: '#de4747',
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
    },
});

export default lightTheme;