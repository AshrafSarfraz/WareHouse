import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DropDownProps} from '../../../data/Types';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';
import { ICons } from '../../../assest';

const DropDown = (props: DropDownProps) => {
  const {
    options,
    isOpen,
    toggleDropdown,
    onSelect,
    selectedOption,
    placeText,
    title,
    container,  
    placeHolder,
    DropDownContaianer
  } = props;
  const handleSelectOption = (option: any) => {
    onSelect(option);
    toggleDropdown();
  };
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[styles.button, container]}>
        <Text style={[styles.buttonText, placeText,{color:selectedOption?COLOR.black:COLOR.gray}]}>
          {selectedOption ? selectedOption:placeHolder&&placeHolder}
        </Text>
        <Image
          source={ICons.dropDown}
          tintColor={COLOR.gray}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={[styles.openDropDown,DropDownContaianer]}>
          <ScrollView>
          {options.map((option: any) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelectOption(option.title)}>
              <Text style={styles.optionText}>{option.title}</Text>
            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default DropDown;

const styles = StyleSheet.create({
  container: {},
  button: {
    width: '88%',
    height: 55,
    alignSelf: 'center',
    paddingHorizontal: '2.5%',
    marginVertical: '2.8%',
    borderBottomWidth: 0.6,
    borderColor: COLOR.white,
    ...commonStyles.verticleView,
  },
  openDropDown: {
    position: 'absolute',
    top: 48,
    left: 15,
    right: 0,
    backgroundColor: COLOR.white,
    zIndex: 1,
    borderWidth: 1,
    borderColor: COLOR.gray,
    borderRadius: 4,
    marginTop: '2%',
    width: '91%',
    height:100,
    

    
  },
  buttonText: {
    fontFamily: FONT.OpenSans_Regular,
    fontSize: 15,
    color: COLOR.white,
  },
  optionText: {
    fontSize: 13,
    color: COLOR.black,
    padding: '2%',
  },
  title: {
    fontSize: 12,
    color: COLOR.gray,
    marginLeft: '6%',
    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
  },
  iconStyle: {width: 10, height: 10, resizeMode: 'contain'},
});
