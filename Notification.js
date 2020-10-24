import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal, TouchableHighlight, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function AllFriends({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, marginTop: 30 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>Thông báo</Text>
                    <Fontisto name="search" size={25} color="black" />
                </View>
                <View style={styles.list}>
                    <TouchableOpacity onPress={() => { alert('Đến nội dung thông báo') }}>
                        <View style={styles.notification}>
                            <View style={styles.leftNotification}  >
                                <Image
                                    style={styles.imgUser}
                                    source={{ uri: 'https://picsum.photos/700' }}
                                />
                            </View>
                            <View style={styles.middleNotification}>
                                <View style={styles.contentNotification}>
                                    <Text style={{ marginLeft: 5, fontSize:20 }}>
                                    Quang đã cập nhật trạng thái của anh ấy</Text>

                                </View>
                                <View style={styles.timeNotification}>
                                    <Text style={{marginLeft:5, color:"gray"}}>1 phút trước</Text>
                                </View>

                            </View>
                            <View style={styles.rightNotification}>
                                <TouchableOpacity
                                    style={styles.loginButton}
                                    onPress={() => {
                                        setModalVisible(true);
                                    }}
                                >
                                    <Feather name="more-horizontal" size={30} color="black" marginRight={10} />

                                </TouchableOpacity>
                            </View>

                        </View>
                        
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.userModal}>
                                <TouchableOpacity style={styles.leftModal} onPress={() => {
                                    alert('Gỡ thông báo')
                                }}>
                                    <MaterialCommunityIcons name="comment-remove" size={40} color="black" />
                                    <Text style={{ fontWeight: "bold", marginLeft: 10, fontSize: 25 }}>Gỡ thông báo này</Text>
                                </TouchableOpacity>

                                <View style={styles.rightModal}>
                                    <TouchableOpacity
                                        style={styles.loginButton}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Entypo name="chevron-thin-down" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        justifyContent: "space-between",



    },
    list: {
        width: "94%",
        marginLeft: "3%"

    },
    notification: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    leftNotification: {
        flex: 2,
    },
    imgUser: {
        width: 55,
        height: 55,
        borderRadius: 50
    },
    middleNotification: {
        flex: 8,
        flexDirection: "column",


    },
    contentNotification:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    rightNotification: {
        flex: 1
    },
    userModal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10

    },
    leftModal: {
        flexDirection: "row",
        marginLeft: 10,
        flex: 9
    },
    rightModal: {
        flex: 1
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    right: {
        marginRight: 5

    },
    
    //
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        //alignItems: "center",
        marginTop: 20,
        height: 600,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'

    },
    modalView: {

        //margin: 20,
        //marginBottom: 0,
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        //padding: 65,
        paddingTop: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default AllFriends;