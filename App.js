import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FooterLog from './src/components/Logout/FooterLog';
import Logout from './src/components/Logout/Logout';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Logout />
);

export default MyComponent;