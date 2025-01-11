import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useState } from 'react';
import { COLOR, FONT } from '../../../themes/StyleGuides';

const ImagePicker = () => {
  const [fileResponse, setFileResponse] = useState(null);

  const handleDocumentSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
        allowMultiSelection: false, 
      });
      console.log(res);
      setFileResponse(res[0]); // Since multi-selection is off, take the first item from the result array
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.error('Unknown error: ', err);
      }
    }
  };

  return (
    <TouchableOpacity onPress={handleDocumentSelection} style={styles.InputStyle}>
      <Text style={styles.text}>
        {fileResponse ? fileResponse.name : 'Upload Certificates:'}
      </Text>
    </TouchableOpacity>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  InputStyle: {
    width: '92%',
    height: 55,
    alignSelf: 'center',
    paddingHorizontal: '2.5%',
    marginVertical: '2.8%',
    borderBottomWidth: 0.6,
    borderColor: COLOR.white,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONT.OpenSans_Regular,
    fontSize: 15,
    color: COLOR.white,
    marginLeft: '2%',
  },
});
