import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useTheme } from '../contextProvider';


const StyledText: React.FC<{ style?: TextStyle, weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 }> = ({ style, weight = 300, children }) => {
    const { theme } = useTheme();
    return (
        <Text style={[{
            fontFamily: theme.fonts?.[weight],
            fontWeight: weight.toString() as any,
        }, style]}>
            {children}
        </Text>
    );
}

export default StyledText;