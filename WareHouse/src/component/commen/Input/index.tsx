import React, { memo } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { inputProps } from '../../../data/Types';
import { COLOR, commonStyles, FONT } from '../../../themes/StyleGuides';

const Input = (props: inputProps) => {
    const { placeholder, keyboardType, onChange, value, addLeft, addRight, style, secureText, onFocus, onBlur, textStyle, placeholderColor, onRightPress, textAlignVertical, onSubmitEditing } = props
    return (

        <View style={[styles.InputStyle, style]}>
            {addLeft}
            <TextInput
                style={[styles.Input, textStyle]}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor ? placeholderColor : COLOR.gray}
                keyboardType={keyboardType}
                onChangeText={x => onChange && onChange(x)}
                value={value}
                secureTextEntry={secureText}
                onFocus={onFocus}
                autoCapitalize="none"
                onBlur={onBlur}
                onSubmitEditing={onSubmitEditing}
                textAlignVertical={textAlignVertical} />
            {<TouchableOpacity onPress={onRightPress}>
                {addRight}
            </TouchableOpacity>}
        </View>
    );
};

export default memo(Input)

const styles = StyleSheet.create({
    InputStyle: {
        ...commonStyles.justifyView,
        width: '92%',
        height: 55,
        alignSelf: 'center',
        paddingHorizontal: '2.5%',
        marginVertical: '2.8%',
        borderBottomWidth: .6,
        borderColor: COLOR.primary,
        borderRadius: 10,
    },
    Input: {
        flex: 1,
        fontFamily: FONT.OpenSans_Regular,
        fontSize: 15,
        color: COLOR.black,
    },

});
