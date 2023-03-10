import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *, *::after, *::before {
          -webkit-tap-highlight-color: transparent;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        body: {
          width: 100%;
          border: 1px solid green;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          background: "#fff",
          color: "rgba(0,0,0,0.7)",
        },

        
      },
    }

  }
});

export default theme;