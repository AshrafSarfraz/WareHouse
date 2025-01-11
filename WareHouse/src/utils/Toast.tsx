import { showMessage } from 'react-native-flash-message';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { COLOR } from '../themes/StyleGuides';

const showSuccessToast = (message: string, type: any = 'success') => {
    showMessage({
        position:"top",
        message: message,
        type: type,
        floating: true,
        icon: props => (
            <FontAwesome
                name="check-circle"
                size={24}
                color={COLOR.white}
                style={{ paddingRight: 10 }}
            />
        ),
        style: {
            marginTop: 0,
            backgroundColor: COLOR.green,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
};

const showErrorToast = (message: string, type: any = 'error') => {

    showMessage({
        position:"top",
        message: message,
        type: type,
        floating: true,
        icon: props => (
            <FontAwesome
                name="exclamation-circle"
                size={24}
                color={COLOR.white}
                style={{ paddingRight: 10 }}
            />
        ),
        style: {
            marginTop: 0,
            backgroundColor: COLOR.red,
            alignItems: 'center',
            justifyContent: 'center',
            position:"absolute"
        },
    });
};

export { showSuccessToast, showErrorToast };