import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native'
import { View, Text, TouchableHighlight } from 'react-native';
import { useTheme } from '../contextProvider';

interface IButton {
    label?: string,
    buttonColor?: string,
    labelColor?: string,
    buttonStyle?: StyleProp<ViewStyle>,
    labelStyle?: TextStyle,
    onPress(): any,
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,

    icon?: JSX.Element
}

const Button: React.FC<IButton> = ({ label, buttonColor, labelColor = 'black', buttonStyle, labelStyle, icon, onPress, weight = 300 }) => {
    const { theme } = useTheme();
    return (
        <TouchableHighlight
            onPress={onPress}
            style={[buttonStyle, theme.buttonStyle, {
                borderRadius: theme.roundness,
                backgroundColor: buttonColor ? buttonColor : theme.colors.primary
            }]}
        >
            <Text style={[labelStyle, {
                fontFamily: theme.fonts?.[weight],
                fontWeight: weight.toString() as any,
                color: labelColor,
                textAlign: 'center'
            }]}>
                {label}
                {icon}
            </Text>
        </TouchableHighlight>

    );
};

export default Button;