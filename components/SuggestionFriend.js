import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function SuggestionFriend({ navigation }) {
    return (
        <View>
      <View style={styles.container1}>
            <View style={{flexDirection: "row"}}>
            <TouchableOpacity 
            
            onPress={() => navigation.navigate('Friend')}
            >
                <MaterialIcons name="keyboard-backspace" size={24} color="black" />

            </TouchableOpacity>
            <Text style={{marginLeft: 10}}> Gợi ý</Text>

            </View>
            <Text style={{marginRight: 10}}>
                <FontAwesome5  name="search" size={20} color="black" />

            </Text>


        </View>
        <Text style={{backgroundColor: "gray", height: 1}}></Text>
        <ScrollView>
        <View style={{flexDirection: "row",justifyContent: "space-between",padding: 10}}>
              <Text style={{fontWeight: "bold"}}>Những người bạn có thể biết</Text>
        </View>
        <View style={styles.list}>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>
         <View style={styles.user}>
             <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
            />
              
            <View style={styles.box}>
                <View style={styles.name}>
                    <Text style={{fontWeight: "bold", fontSize:15}}>Hàn Trung Kiên</Text>
                </View>
                <View style={styles.btn}>
                <TouchableOpacity 
                     style={[styles.singleButton,styles.btnAcept]}
                      onPress={() => {
                        alert('Đến trang Đăng nhập')
                     }}
                 >
                 <Text style={{fontSize: 13,color: "white", textAlign: "center", padding: 8, fontWeight: "bold"}}> Thêm bạn bè</Text>
                </TouchableOpacity>
                 <TouchableOpacity 
                         style={[styles.singleButton, styles.btnDelete]}
                         onPress={() => {
                              alert('Đến trang Đăng nhập')
                        }}
                     >
                    <Text style={{fontSize: 13,textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                 </TouchableOpacity>

                </View>
            </View>

          </View>

        </View>
        </ScrollView>
  </View>
      
    );
  }


const styles = StyleSheet.create({
    container1:{
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        justifyContent: "space-between",
        


    },
    user:{
        flexDirection: "row",
        marginBottom: 15,
        marginLeft: 10
        

    },
    imgUser:{
        width: 70,
        height: 70,
        borderRadius: 50

    },
    box:{
        width: "72%",
        //backgroundColor: "red",
        marginLeft: 10,

    },
    name:{
        flexDirection: "row",
         justifyContent: "space-between"
    },
    btn:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    }, 
    singleButton:{
       
        backgroundColor: "green",
        borderRadius: 5,
        
        
    },
    btnAcept:{
        backgroundColor: "#1776f5",
        width: "55%",


    },
    btnDelete:{
        backgroundColor: "#d6d7db",
        width: "43%",


    }
    
});

export default SuggestionFriend;