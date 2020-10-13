import * as React from 'react';
import { Drawer } from 'react-native-paper';

const Chose = () => {
  const [active, setActive] = React.useState('');


  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="Nữ"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Nam"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
       <Drawer.Item
        label="Tùy chọn"
        active={active === 'third'}
        onPress={() => setActive('third')}
      />
    </Drawer.Section>
  );
};

export default Chose;