import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { memo } from 'react'
import { buttonProps } from '../../../data/Types'
import { COLOR, commonStyles, FONT, TEXT_STYLE } from '../../../themes/StyleGuides'

const Button = (props: buttonProps) => {
    const { style, onPress, disabled, activeOpacity, title, textStyle } = props
    return (
        <TouchableOpacity style={[styles.ButtonContainer, style]} onPress={onPress} activeOpacity={activeOpacity} disabled={disabled}>
            <Text style={[styles.ButtonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default memo(Button)

const styles = StyleSheet.create({
    ButtonContainer: {
        height: 55,
        width: '92%',
        alignSelf: 'center',
        backgroundColor: COLOR.primary,
        ...commonStyles.center,
        borderRadius: 12,
    },
    ButtonText: {
        color: COLOR.black,
        fontSize:16,
        fontFamily:FONT.OpenSans_SemiBold
    },
})