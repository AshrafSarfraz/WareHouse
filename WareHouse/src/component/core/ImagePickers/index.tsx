// ImagePickers.js

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Modal,
} from 'react-native';
import {FONT, COLOR, commonStyles} from '../../../themes/StyleGuides';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {CameraPermission} from '../../other/CameraPermission';
import {ICons} from '../../../assest';

interface PropType {
  EditProfile?: any;
  title?: any;
  EditProfileContainer?: any;
  Icon?: any;
  EditButtomCOntainer?: any;
  cameraIcon?: any;
pickImage?:any
imageUri?:any

}

const ImagePickers = (prop: PropType) => {
  const {
    EditProfile,
    title,
    EditProfileContainer,
    Icon,
    EditButtomCOntainer,
    cameraIcon,
    pickImage,
    imageUri
    
  } = prop;
  const [openModal, setopenModal] = useState(false);
  const [imagePic, setImagePic] = useState('');
// console.log("imageUri",Icon)
  const handleImagePicker = async () => {
    await CameraPermission();

    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.errorCode) {
        const imageUri = response.assets[0].uri;
        setImagePic(imageUri);
        pickImage(imageUri)
        setopenModal(false);
      }
    });
  };
  const handleCameraPicker = async () => {
    await CameraPermission();

    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchCamera(options, response => {
      if (!response.didCancel && !response.errorCode) {
        const imageUri = response.assets[0].uri;
        setImagePic(imageUri);
        console.log(imageUri)
        pickImage(imageUri)
        setopenModal(false);
      }
    });
  };

  return (
    <View>
      <Modal visible={openModal} transparent>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            setopenModal(false);
          }}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose your profile picture</Text>
            <TouchableOpacity
              style={styles.imagePicfiled}
              onPress={() => handleImagePicker()}>
              <Image style={styles.modalIcon} source={ICons.image_gallery} />
              <Text style={styles.ModalButoonname}>
                Select photo from phone
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imagePicfiled}
              onPress={() => handleCameraPicker()}>
              <Image style={styles.modalIcon} source={ICons.camera} />
              <Text style={styles.ModalButoonname}>Take new photo</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {EditProfile ? (
        <TouchableOpacity
          style={[EditProfileContainer]}
          onPress={() => {
            handleImagePicker();
          }}>
          {imagePic ? (
            <Image
              style={{width: 100, height: 100, borderRadius: 5}}
              source={imagePic ? {uri: 'file://' + imagePic} : ICons.camera}
            />
          ) : (
            <Image style={styles.IconStyle} source={Icon} />
          )}
        </TouchableOpacity>
      ) : (
        <View>
          <View style={styles.profileContainer}>
            <View style={styles.ProfilePicContainer}>
              <Image
                style={styles.Profile}
                source={Icon ? {uri: 'file://' + Icon} : ICons.user}
              />

              <TouchableOpacity
                style={[styles.EditButtomCOntainer, EditButtomCOntainer]}
                onPress={() => {
                  setopenModal(true);
                }}>
                <Image
                  style={styles.EditButton}
                  source={cameraIcon ? cameraIcon : ICons.camera}
                />
              </TouchableOpacity>
            </View>
          </View>
          {title && <Text style={styles.titleStyle}>{title}</Text>}
        </View>
      )}
    </View>
  );
};
export default ImagePickers;
const styles = StyleSheet.create({
  profileContainer: {
    marginTop: '3%',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 19,
    fontFamily: FONT.OpenSans_Bold,
    color: COLOR.black,
    alignSelf: 'center',
  },
  IconStyle: {width: 45, height: 45, resizeMode: 'stretch'},
  Profile: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 35,
  },
  EditButtomCOntainer: {
    position: 'absolute',
    bottom: '20%',
    alignSelf: 'flex-end',
    ...commonStyles.center,
    right: 5,
  },
  EditButton: {
    width: 20,
    height: 20,
    resizeMode: 'center',
  },
  ProfilePicContainer: {
    width: 80,
    height: 80,
    // backgroundColor:'red',
    alignSelf:"center"
  },
  ProfileEdit: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 10,
    marginLeft: '5%',
    marginTop: '1%',
  },
  modalContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: COLOR.white,
    borderRadius: 10,
    paddingVertical: '5%',
    marginTop: '35%',
    elevation: 5,
  },

  imagePicfiled: {
    width: '90%',
    height: 50,
    backgroundColor: COLOR.white,
    borderWidth: 1,
    borderColor: COLOR.white,
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    marginVertical: '3%',
    elevation: 5,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: FONT.OpenSans_SemiBold,
    color: COLOR.jetBlack,
    marginLeft: '5.5%',
    marginBottom: '5%',
  },
  modalIcon: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    marginLeft: '4%',
    marginRight: '4%',
  },
  ModalButoonname: {
    fontSize: 14,
    fontFamily: FONT.OpenSans_Medium,
    color: COLOR.jetBlack,
  },
});
