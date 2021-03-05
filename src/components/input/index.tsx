import React, { useEffect, useState } from 'react';
import { useTheme, defaultTheme } from '../contextProvider';
import { ColorValue, TextInput, TextInputProps, View } from 'react-native';

const Input: React.FC<TextInputProps & { right?: () => JSX.Element, left?: JSX.Element }> = (props) => {
    const { left, right, ...other } = props;
    return (
        <View style={{
            backgroundColor: '#c2c2c2',
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 5,
            width: '100%',
            flexDirection: 'row'

        }}>
            {props.left ?
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {props.left}
                </View>
                : null}

            <View style={{ flex: 3 }}>
                <TextInput
                    {...other}
                />
            </View>
            {props.right ?
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {props.right}
                </View>
                : null}
        </View>

    );
};

export default Input;