import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { Platform } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Test = () => (
    <Appbar.Header>
      <Button icon="camera">
  Press me
</Button>
    </Appbar.Header>
    
);

export default Test;