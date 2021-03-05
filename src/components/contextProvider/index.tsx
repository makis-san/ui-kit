import React, { createContext, useContext, useState } from 'react';
import { ViewStyle } from 'react-native';

export const ThemeContext = createContext({});

interface ITheme {
    roundness: number,
    colors: {
        primary: string,
        secondary: string
    },
    buttonStyle?: ViewStyle,
    fonts?: {
        900?: string,
        800?: string,
        700?: string,
        600?: string,
        500?: string,
        400?: string,
        300?: string,
        200?: string,
        100?: string
    }
}

interface IContext {
    readonly theme: ITheme,
    setTheme: any
}

export const defaultTheme: ITheme = {
    roundness: 15,
    colors: {
        primary: '#4d87dd',
        secondary: '#225197'
    },
    buttonStyle: {
        flex: 0,
        padding: 15,
        width: '100%'
    }
};

const ThemeProvider: React.FC<{}> = ({ children }) => {
    const [theme, setTheme] = useState<any>(defaultTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context as IContext;
};

export default ThemeProvider;