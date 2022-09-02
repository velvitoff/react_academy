import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    name: 'light',
    palette: {
        type: 'light',
        primary: {
            main: '#2d2d2d',
            iconColor: '#fafafa',
        },
        secondary: {
            main: '#de4747',
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
        text: {
            primary: 'rgba(0,0,0,0.87)',
            secondary: 'rgba(0,0,0,0.54)',
            appBarContrast: '#fafafa',
            dropDownContrast: '#000000'
        },
    },
});

export default lightTheme;