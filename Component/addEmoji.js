import React, { Component } from 'react'
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Item, Input, Segment } from "native-base";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet
} from "react-native";
import { Ionicons } from '@expo/vector-icons';




const { width } = Dimensions.get("window");
export default class AddEmoji extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };
    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    }
    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={() => { alert('Về trang đăng bài') }}>
                            <Ionicons name="md-arrow-back" size={24} color="white" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Bạn đang cảm thấy gì?</Title>
                    </Body>
                </Header>
                <View style={styles.contentEmoji}>
                    <View style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
                        <View style={styles.tabEmoji}>
                            <Animated.View
                                style={{
                                    position: "absolute",
                                    width: "50%",
                                    height: "100%",
                                    top: 0,
                                    left: 0,
                                    backgroundColor: "#007aff",
                                    borderRadius: 4,
                                    transform: [
                                        {
                                            translateX
                                        }
                                    ]
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderWidth: 1,
                                    borderColor: "#007aff",
                                    borderRadius: 4,
                                    borderRightWidth: 0,
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0
                                }}
                                onLayout={event =>
                                    this.setState({
                                        xTabOne: event.nativeEvent.layout.x
                                    })
                                }
                                onPress={() =>
                                    this.setState({ active: 0 }, () =>
                                        this.handleSlide(xTabOne)
                                    )
                                }
                            >
                                <Text
                                    style={{
                                        color: active === 0 ? "#fff" : "#007aff", fontSize: 20
                                    }}
                                >Cảm xúc</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderWidth: 1,
                                    borderColor: "#007aff",
                                    borderRadius: 4,
                                    borderLeftWidth: 0,
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0
                                }}
                                onLayout={event =>
                                    this.setState({
                                        xTabTwo: event.nativeEvent.layout.x
                                    })
                                }
                                onPress={() =>
                                    this.setState({ active: 1 }, () =>
                                        this.handleSlide(xTabTwo)
                                    )
                                }
                            >
                                <Text
                                    style={{
                                        color: active === 1 ? "#fff" : "#007aff", fontSize: 20
                                    }}
                                >Hoạt động
                            </Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView>
                            <Animated.View
                                style={{
                                    transform: [{
                                        translateX: translateXTabOne
                                    }]
                                }}
                                onLayout={event =>
                                    this.setState({
                                        translateY: event.nativeEvent.layout.height
                                    })
                                }
                            >
                                <View searchBar rounded style={{ marginLeft: 10 }}>
                                    <Item>
                                        <Icon name="ios-search" />
                                        <Input placeholder="Search" />
                                    </Item>
                                </View>
                                <View style={styles.menuEmoji}>
                                    <View style={styles.leftmenuEmoji}>
                                        <TouchableOpacity style={styles.itemEmoji}>
                                            <View style={styles.leftItemEmoji}>
                                            <Ionicons name="md-happy" size={60} color="black" />
                                            </View>
                                        <View style={styles.rightItemEmoji}>
                                            <Text style={{fontSize:20, marginLeft:10}}>Vui vẻ</Text>
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.itemEmoji}>
                                        <View style={styles.leftItemEmoji}>
                                        <Ionicons name="md-sad" size={60} color="black" />
                                        </View>
                                        <View style={styles.rightItemEmoji}>
                                        <Text style={{fontSize:20, marginLeft:10}}>Buồn</Text>
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.itemEmoji}>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.itemEmoji}>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.itemEmoji}>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.itemEmoji}>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.itemEmoji}>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.itemEmoji}>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.itemEmoji}>

                                        </TouchableOpacity>
                                        

                                    </View>
                                    <View style={styles.rightmenuEmoji}>

                                    </View>

                                </View>
                            </Animated.View>

                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            translateX: translateXTabTwo
                                        },
                                        {
                                            translateY: -translateY
                                        }
                                    ]
                                }}
                            >
                                <View searchBar rounded style={{ marginLeft: 10 }}>
                                    <Item>
                                        <Icon name="ios-search" />
                                        <Input placeholder="Search" />
                                    </Item>
                                </View>

                            </Animated.View>
                        </ScrollView>

                    </View>
                </View>





            </Container>






        )
    }
}
const styles = StyleSheet.create({
    postEmoji: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    contentEmoji: {
        flex: 1,
    },
    tabEmoji: {
        flexDirection: 'row',
        height: 50,
        marginBottom: 5,
        borderRadius: 5,
        position: 'relative',

    },
    menuEmoji: {

        flexDirection: 'row',
    
    },
    leftmenuEmoji: {
        flex: 5,
        flexDirection: 'column',


    },
    rightmenuEmoji: {
        flex: 5,
        flexDirection: 'column',
    },
    itemEmoji:{
        borderWidth:1,
        flexDirection:'row',
        height:100,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
        
    },
    leftItemEmoji:{
        flex:4,
    alignItems:'center'
    },
    rightItemEmoji:{
flex:6,
alignItems:'flex-start'
    },
})