import * as React from 'react';
import { List } from 'react-native-paper';

const FooterLog = ({logout}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section >
      <List.Accordion
        title="Xem thêm"
        left={props => <List.Icon {...props} icon="view-grid-plus" />}>
      </List.Accordion>
      <List.Accordion
        title="Trợ giúp và hỗ trợ"
        left={props => <List.Icon {...props} icon="comment-question" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
      <List.Accordion
        title="Cài đặt thông báo đẩy"
        left={props => <List.Icon {...props} icon="settings" />}>
      </List.Accordion>
      <List.Accordion
        title="Đăng xuất"
        onPress={() => {logout()}}
        left={props => <List.Icon {...props} icon="logout" />}>
      </List.Accordion>
    </List.Section>
  );
};

export default FooterLog;