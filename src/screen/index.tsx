import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTheme, defaultTheme } from '../components/contextProvider';

import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';
import RadioButton from '../components/radioButton';
import Input from '../components/input';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const ExampleScreen = () => {
    const { setTheme } = useTheme();
    const theme: any = {
        ...defaultTheme,
        roundness: 0,
        fonts: {
            100: 'Inter_100Thin',
            200: 'Inter_200ExtraLight',
            300: 'Inter_300Light',
            400: 'Inter_400Regular',
            500: 'Inter_500Medium',
            600: 'Inter_600SemiBold',
            700: 'Inter_700Bold',
            800: 'Inter_800ExtraBold',
            900: 'Inter_900Black'
        }
    };

    useEffect(() => {
        setTheme(theme);
    }, [])

    return (
        <View style={styles.container}>
            <RadioButton onChange={(enabled) => console.log('new state => ' + enabled)} />
            <Button label='Label' onPress={() => console.log(':D')} />
            <Input placeholderTextColor='#777777' placeholder='TextInput' right={<MaterialCommunityIcons size={18} name={'ab-testing'} />} />
            <StatusBar style='auto' />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ExampleScreen;