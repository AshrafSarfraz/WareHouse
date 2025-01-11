import { TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { emptyFunction } from '../../../utils/Helper'
import { ACTIVE_OPACITY, pressable } from '../../../data/Types'

const Pressable = (props: pressable) => {
    const { children, onPress = emptyFunction, style, opacity = ACTIVE_OPACITY } = props
    return (
        <TouchableOpacity
            activeOpacity={opacity}
            style={style}
            onPress={() => onPress()}
        >
            {children}
        </TouchableOpacity>
    )
}

export default memo(Pressable)
