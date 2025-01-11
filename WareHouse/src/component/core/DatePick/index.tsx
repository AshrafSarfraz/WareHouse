import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {DatePickprops} from '../../../data/Types';
import {COLOR, FONT} from '../../../themes/StyleGuides';
import {useState} from 'react';

const DatePick = (props: DatePickprops) => {
  const {open, date, onConfirm, onCancel, ShowData, isOpen, style} = props;
  const [formattedDate, setFormattedDate] = useState(ShowData || 'Enter EXp');

  const formatDate = (selectedDate: Date) => {
    const dateOnly = new Date(selectedDate.setHours(0, 0, 0, 0));
    return dateOnly.toLocaleDateString('en-CA');
  };

  const handleConfirm = (selectedDate: Date) => {
    const expDate = formatDate(selectedDate);
    setFormattedDate(expDate); 
    onConfirm(selectedDate); 
  };

  return (
    <View>
      <TouchableOpacity style={[styles.InputStyle, style]} onPress={isOpen}>
        <Text style={styles.text}>{formattedDate}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date instanceof Date ? date :  new Date()} 
        onConfirm={handleConfirm}
        onCancel={onCancel}
        mode="date" 
      />
    </View>
  );
};

export default DatePick;

const styles = StyleSheet.create({
  container: {},
  InputStyle: {
    width: '92%',
    height: 55,
    alignSelf: 'center',
    paddingHorizontal: '2.5%',
    marginVertical: '2.8%',
    borderBottomWidth: 0.6,
    borderColor: COLOR.gray,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONT.OpenSans_Regular,
    fontSize: 15,
    color: COLOR.gray,
    marginLeft: '2%',
  },
});
