import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {blueGrey, deepOrange, deepPurple, green, purple, red, yellow} from '@mui/material/colors';
import Button from '@mui/material/Button';

export const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: yellow[300],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

export default function Palette() {
    return (
        <ThemeProvider theme={theme}>
            <Button>Primary</Button>
            <Button color="secondary">Secondary</Button>
        </ThemeProvider>
    );
}