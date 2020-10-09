import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Container, Header, List, Item, ListItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Header1 from '../Header/Header1';
export default class EditPage extends Component {

    render() {
        return (
            <Container>
                <Header1 />
                <Content style={{ margin: 10 }}>
                    <List>
                        <View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 20,
                                paddingBottom: 10
                            }}>
                                <Text style={styles.main_Text}>Ảnh đại diện</Text>
                                <Text style={styles.edit_text}>Chỉnh sửa</Text>
                            </View>
                            <Avatar.Image style={styles.avatar} size={200} source={require('../Login/image/dog.jpg')} onPress={() => { }} />
                        </View>
                        <Item style={{ paddingTop: 20 }}></Item>
                        <View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 20,
                                paddingBottom: 20
                            }}>
                                <Text style={styles.main_Text}>Ảnh bìa</Text>
                                <Text style={styles.edit_text}>Chỉnh sửa</Text>
                            </View>
                            <Image style={styles.image1}
                                source={require('../Login/image/face.jpg')} onPress={() => { }} />
                        </View>
                        <Item style={{ paddingTop: 20 }}></Item>
                        <View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 20,
                                paddingBottom: 20
                            }}>
                                <Text style={styles.main_Text}>Tiểu sử</Text>
                                <Text style={styles.edit_text}>Tìm hiểu thêm</Text>
                            </View>
                            <Text style={styles.des_text}>Mô tả bản thân...</Text>
                        </View>

                        <Item style={{ paddingTop: 20 }}></Item>
                        <View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 20,
                                paddingBottom: 20
                            }}>
                                <Text style={styles.main_Text}>Chi tiết</Text>
                                <Text style={styles.edit_text}>Chỉnh sửa</Text>
                            </View>
                            <View style={{ marginRight: 10, marginLeft: 10 }}>
                                <Text><Icon style={styles.text_} type="FontAwesome" name='graduation-cap' />   Đã học tại <Text style={styles.text}>Trường THPT Nghi Lộc 5</Text></Text>
                                <Text><Icon style={styles.text_} type="Ionicons" name='md-time' />    Tham gia vào<Text style={styles.text}>Tháng 8 năm 2016</Text></Text>
                                <Text><Icon style={styles.text_} type="FontAwesome" name='home' />   Tỉnh thành phố hiện tại <Text style={styles.text}>Đà Nẵng</Text></Text>
                                <Text><Icon style={styles.text_} type="Entypo" name='briefcase' />    Nơi làm việc</Text>
                                <Text><Icon style={styles.text_} type="FontAwesome" name='map-marker' />     Quê quán</Text>
                                <Text><Icon style={styles.text_} type="MaterialCommunityIcons" name='account-heart' />   Tình trạng mối quan hệ</Text>
                            </View>
                        </View>
                        <Item style={{ paddingTop: 20 }}></Item>
                        <View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 20,
                                paddingBottom: 20
                            }}>
                                <Text style={styles.main_Text}>Sở thích</Text>
                                <Text style={styles.edit_text}>Thêm</Text>
                            </View>
                        </View>
                        <Item></Item>
                        <View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 20,
                                paddingBottom: 20
                            }}>
                                <Text style={styles.main_Text}>Đáng chú ý</Text>
                            </View>

                            <Image style={styles.image_trial}
                                source={require('../Login/image/face.jpg')} onPress={() => { }} />
                            <Text style={styles.text_trial}>
                                Hãy thêm một số tin, ảnh hoặc video yêu thích vào phần Đáng chú ý để mọi người hiểu về bạn hơn
            </Text>
                            <Button style={styles.trial} block light onPress={() => { }}>
                                <Text>Dùng thử</Text>
                            </Button>
                        </View>
                        <Item></Item>
                        <View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 20,
                                paddingBottom: 20
                            }}>
                                <Text style={styles.main_Text}>Liên kết</Text>
                                <Text style={styles.edit_text}>Thêm</Text>
                            </View>
                        </View>
                        <Item></Item>
                        <Button style={styles.editIntroduce} block onPress={() => { }}>
                            <Text style={styles.textIntroduce}><Icon style={styles.iconIntroduce} type="FontAwesome5" name='user-edit' /> Chỉnh sửa thông tin giới thiệu</Text>
                        </Button>
                    </List>
                </Content>
                <Footer>
                    <FooterTab>

                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    iconIntroduce: {
        color: 'blue',
        fontSize: 20
    },
    textIntroduce: {
        color: 'blue',
        fontWeight: 'bold'
    },
    iconHeader: {
        fontSize: 20,
        color: 'black'
    },
    editIntroduce: {
        borderRadius: 5,
        margin: 10,
        height: 50,
        backgroundColor: 'lightblue'
    },
    image_trial: {
        height: 100,
        width: '100%',
        position: 'relative',
    },
    text_trial: {
        color: 'grey',
        textAlign: 'center',
        paddingTop: 20
    },
    trial: {
        borderRadius: 5,
        height: 35,
        margin: 10
    },
    text_: {
        color: 'grey'
    },
    des_text: {
        color: 'grey',
        fontSize: 20,
        textAlign: 'center'
    },
    text: {
        fontWeight: 'bold',

    },
    main_Text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',

    },
    edit_text: {
        color: 'blue',
    },
    avatar: {
        marginLeft: '25%',
        marginRight: '21%',
    },
    image1: {
        height: 200,
        width: '100%',
        borderRadius: 5
    },
});
