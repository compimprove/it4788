import React from "react";
import { ActivityIndicator, StyleSheet, Text, View ,TextInput, Image, ScrollView, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SearchVideo({ navigation }) {
    return (
        <View>
        <View style={styles.container1}>
            <TouchableOpacity
             onPress={() => navigation.navigate('Video')}>
            <Ionicons style={{marginTop: 3}}  name="md-arrow-round-back" size={26} color="black" />

            </TouchableOpacity>
         <TextInput
            style={styles.input} 
                placeholder="Tìm kiếm Watch"
       ></TextInput>

        </View>
        <Text style={{width: "100%", height: 1, backgroundColor: "#d6d7db"}}></Text>
        <View style={{flexDirection: "row",justifyContent: "space-between", padding:10}}>
            <Text style={{fontWeight: "bold"}}>Video bạn đã xem</Text>
            <MaterialIcons name="navigate-next" size={24} color="black" />

        </View>
        <Text style={{width: "100%", height: 1, backgroundColor: "#d6d7db"}}></Text>
        <View style={styles.list}>
            <ScrollView>
            <Text style={{fontWeight: "bold", marginTop: 10}}>Trang được gợi ý cho bạn</Text>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            <View style={styles.item}>
                <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                <View style={{paddingLeft: 10, }}>
                    <Text style={{fontWeight: "bold"}}>Luật khoa Tạp chí</Text>
                    <Text style={{color: "gray", fontSize: 12}}>148K người theo dõi</Text>

                </View>
            </View>
            </ScrollView>

        </View>


    </View>
      
    );
  }


const styles = StyleSheet.create({
    container1:{
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
         justifyContent: "space-between",
         //alignItems: "center",
         marginTop: 10
         
    },
    input:{
        backgroundColor: "#d6d7db",
        width: "90%",
        height: 35,
        borderRadius: 20,
        paddingLeft: 20,
        marginBottom: 8,

    },
    list:{
        paddingLeft: 10,
    },
    imgUser:{
        width: 50,
        height: 50,
        borderRadius: 50

    },
    item:{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 5,
    }
});

export default SearchVideo;