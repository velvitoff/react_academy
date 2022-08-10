import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#282831',
            iconColor: '#fafafa'
        },
        secondary: {
            main: '#de4747',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
    },
});

export default darkTheme;