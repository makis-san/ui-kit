import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from '../contextProvider';
import StyledText from '../styledText';

const RadioButton: React.FC<{ enabled?: boolean, style?: ViewStyle, onChange(enabled: boolean): any }> = ({ enabled = false, style, onChange }) => {
    const [isEnabled, setEnabled] = useState<boolean>(enabled);
    const { theme } = useTheme();

    const handleToggle = async () => {
        setEnabled(!isEnabled);
        await onChange(isEnabled);
        return;
    };

    return (
        <View style={[{ margin: 5 }, style]}>
            <TouchableOpacity onPress={handleToggle} style={{
                borderRadius: 100,
                width: 20,
                height: 20,
                borderColor: 'gray',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {isEnabled ?
                    <View style={{
                        borderRadius: 100,
                        width: 12,
                        height: 12,
                        backgroundColor: theme.colors.primary
                    }} /> : null}
            </TouchableOpacity>
        </View>
    );
};

export default RadioButton;