import * as React from 'react';
import { List } from 'react-native-paper';

const FooterLog = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section >
      <List.Accordion style={{height:40}}
        title="Xem thêm"
        left={props => <List.Icon {...props} icon="view-grid-plus" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
      <List.Accordion style={{height:40}}
        title="Trợ giúp và hỗ trợ"
        left={props => <List.Icon {...props} icon="comment-question" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
      <List.Accordion style={{height:40}}
        title="Cài đặt thông báo đẩy"
        left={props => <List.Icon {...props} icon="settings" />}>
        <List.Item title="First item" />
        <List.Item style={{height:20}} title="Second item" />
      </List.Accordion>
      <List.Accordion style={{height:40}}
        title="Đăng nhập"
        left={props => <List.Icon {...props} icon="logout" />}>
       
      </List.Accordion>
    </List.Section>
  );
};

export default FooterLog;