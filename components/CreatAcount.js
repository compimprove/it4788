import React from "react";
import { ActivityIndicator, StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const width_proportion = '100%';
const CreatAcount = () => (
    <View>
        <View style={styles.container1}>
        <TouchableOpacity 
            
            onPress={() => {
                alert('Quay lại')
            }}
            >
                <MaterialIcons name="keyboard-backspace" size={24} color="black" />

            </TouchableOpacity>
            <Text style={{marginLeft: 10}}> Tạo tài khoản</Text>

        </View>
        <Text style={styles.linefull}></Text>
        <View style={styles.container_center}>
            <FontAwesome5 style={styles.home_group} name="home" size={160} color="#4d82f6" />    
            <Text style={{fontWeight: "bold", marginBottom: 15}}>Tham gia Facebook</Text>
            <Text style={{color: "gray"}}>Chúng tôi sẽ giúp bạn tạo tài khoản </Text>
            <Text style={{color: "gray"}}> mới sau vài bước dế dàng</Text>
            <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => {
                alert('Đến trang Tạo tài khoản')
            }}
            >
              <Text style={styles.nextButtonText}> Tiếp</Text>
            </TouchableOpacity>

        </View>
        

    </View>
    
);

const styles = StyleSheet.create({
    container1:{
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20


    },
    linefull:{
        alignItems: 'stretch',
        
        height: 1,
        backgroundColor: '#696969'
    },
    container_center:{
        alignItems: "center", 
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    home_group:{
       
        marginTop: 50,
        marginBottom: 30

    },
    nextButton:{
        
        backgroundColor: "#1777f2",
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 30,
        width: width_proportion,
        borderRadius: 7
       
        


    },
    nextButtonText:{
        textAlign: "center",
        color: "white",
        fontSize: 15
    }
});

export default CreatAcount;