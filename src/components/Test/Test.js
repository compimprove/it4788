import * as React from 'react';
import { List } from 'react-native-paper';
import {View,Button} from 'react-native';

const Test = () => {
  const [expanded, setExpanded] = React.useState(true);

 
  return (
    <View style={{position: 'relative',
      display: 'inline-block',}}>
      <Button style={{ backgroundColor: '#4CAF50',
  color: 'white',
  padding: 16,
  fontSize: 16,
  cursor: 'pointer'}}>rtyu</Button>
      <View style={{postion:'absolute',display:'none'}}>
        <Button>nsns</Button>
        <Button>nynyny</Button>
      </View>
    </View>
  );
};

export default Test ;