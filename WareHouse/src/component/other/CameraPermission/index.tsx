// PermissionUtils.js

import { Platform } from 'react-native';
import { request, PERMISSIONS, RESULTS, check } from 'react-native-permissions';

export const CameraPermission = async () => {
    try {
        const cameraPermission =
            Platform.OS === 'ios'
                ? PERMISSIONS.IOS.CAMERA
                : PERMISSIONS.ANDROID.CAMERA;

        const result = await check(cameraPermission);

        if (result === RESULTS.GRANTED) {
            console.log('Camera permission already granted');
        } else if (result === RESULTS.DENIED) {
            const permissionRequestResult = await request(cameraPermission);
            if (permissionRequestResult === RESULTS.GRANTED) {
                console.log('Camera permission granted');
            } else {
                console.log('Camera permission denied');
            }
        } else {
            console.log('Camera permission is unavailable');

        }
    } catch (error) {
        console.error('Error requesting camera permission:', error);
    }
};
