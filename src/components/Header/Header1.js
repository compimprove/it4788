import * as React from 'react';
import {StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Chỉnh sửa thông tin cá nhân" />
     
    </Appbar.Header>
  );
};

export default Header;
const styles = StyleSheet.create({
header: {
 color:'black',
 backgroundColor:'white'
},
 
});
