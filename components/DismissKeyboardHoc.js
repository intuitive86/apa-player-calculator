import React from 'react';
import { TouchableWithoutFeedback, Keyboard, Touchable } from 'react-native';

const DismissKeyBoardHoc = ({children}) => (
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    {children}
</TouchableWithoutFeedback>
);

export default DismissKeyBoardHoc;