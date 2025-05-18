import { DefaultTheme } from '@react-navigation/native';
const Light = {
    dark: false,
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
        white: '#ffffff',
        black: '#000000',
        primary: '#238ae6',
        secondary: '#F1F3F6',
        grey: '#9d9fa3',
        success: '#38C2B7',
        error: '#E14161',
        text1: '#1B1D28',
        text2: '#3A4276',
        text3: '#7B7F9E',
        titre: '#238ae6',
        boxBackground: '#F1F3F6',

        lightGray: "#F5F7F9",
        lightGray2: '#FAFBFD',
        gray: "#BEC1D2",
        blue: '#42B0FF',
        darkgray: '#898C95',
        yellow: '#FFD573',
        lightBlue: '#95A9B8',
        darkgreen: '#008159',
        peach: '#FF615F',
        purple: '#8e44ad',
        red: '#FF0000',
    },
    sizes: {
        // global sizes
        base: 8,
        font: 14,
        radius: 12,
        padding: 24,
        padding2: 36,
    
        // font sizes
        largeTitle: 50,
        h1: 30,
        h2: 22,
        h3: 16,
        h4: 14,
        body1: 30,
        body2: 20,
        body3: 16,
        body4: 14,
    
    },
};

export default Light;
