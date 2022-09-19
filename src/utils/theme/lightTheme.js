import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    name: 'light',
    palette: {
        type: 'light',
        primary: {
            main: '#2d2d2d',
            iconColor: '#fafafa',
            searchBar: 'rgba(0,0,0,0.05)',
            articleBackground: 'rgba(0,0,0,0.02)'
        },
        secondary: {
            main: '#de4747',
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff',
            iconColor: '#303030'
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