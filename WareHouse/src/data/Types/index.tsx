import {ReactNode} from 'react';
import {KeyboardTypeOptions, TextStyle, ViewStyle} from 'react-native';

export const ACTIVE_OPACITY = 0.8;
export const BACKDROP_OPACITY = 0.2;
export interface inputProps {
  placeholder: any;
  keyboardType?: KeyboardTypeOptions;
  onChange?: Function;
  value?: any;
  addLeft?: ReactNode;
  addRight?: ReactNode;
  style?: ViewStyle;
  secureText?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  textStyle?: TextStyle;
  placeholderColor?: string;
  multiline?: boolean;
  onRightPress?: () => void;
  onSubmitEditing?: () => void;
  textAlignVertical?: any;
}

export interface buttonProps {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
  activeOpacity?: number;
  disabled?: boolean;
  textStyle?: Text;
}

export interface pressable {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
  opacity?: number;
}

export interface scrollProps {
  children?: React.ReactNode;
  hasInput?: ReactNode;
  horizontal?: boolean;
  containerStyle?: ViewStyle;
}

export interface textProps {
  children: React.ReactNode;
  style?: any;
}

export interface DatePickprops {
  open?: any;
  date?: any;
  onConfirm?: any;
  onCancel?: () => void;
  ShowData?:any;
  isOpen?:()=>void;
  style?:ViewStyle
}
export interface DropDownProps {
  options?: any;
  isOpen?: any;
  toggleDropdown?: any;
  onSelect?: any;
  selectedOption?: any;
  placeText?: any;
  title?: any;
  container?: any;
  placeHolder?: any;
  DropDownContaianer?: any;
}



export interface HeadersProps{
firstOnpress?:()=>void,
title?:string,
secondOnpress?:()=>void
}


export interface  NavigationProps{
navigation?:any,
data?:any,
CategorieItemsList?:any,
deleteItem?:any,
selectedCategories?:any,
onpressAddCategories?:any,
onpressAllCategories?:()=>void

}



export  interface AddModal{
isOpen?:any,
isOf?:()=>void,
CategorieItemsList?:any,
userId?:any

}


