import React, { useState } from 'react';
import { Appbar, Avatar, Card, Paragraph, Button, TextInput } from 'react-native-paper';
import { ScrollView, StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Modal, Alert } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons, AntDesign, Octicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Right, Item, Left, ListItem, Icon, Input,List } from 'native-base';



function MainPost({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Appbar style={styles.appbarHead}>
          <Appbar.BackAction onPress={() => { }} />
          <Appbar.Content title="Van A" titleStyle={styles.appbarTitle} />
          <Appbar.Action
            icon="magnify"
            size={28}
            onPress={() => { }}
          />
        </Appbar>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.dividerPost} />
        <Card>
          <Card.Title title="Van A" subtitle="Vừa xong"
            left={(props) => <Avatar.Image size={50} source={{ uri: 'https://picsum.photos/id/1/200' }} />}
            right={(props) =>
              <TouchableOpacity
                style={styles.moreButton}
                onPress={() => {
                  setModalVisible(true);
                  setModalVisible1(false)
                }}
              >
                <Feather name="more-horizontal" size={40} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            }
          />
          <Card.Content>
            <Paragraph selectable>
              Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
              Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
              Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
              Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions style={styles.justifySpaceBetween}>
            <Text>
              <Button icon="thumb-up">2</Button>
            </Text>
            <Text>23 Comments</Text>
          </Card.Actions>
          <View style={styles.postSeparator}>

          </View>
          <Card.Actions style={styles.justifySpaceBetween}>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
              <Button uppercase={false} icon="thumb-up-outline">Like</Button>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
              <Button uppercase={false} icon="comment-outline" >Comment</Button>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#dddddd" onPress={() => { }}>
              <Button uppercase={false} icon="share-outline" >Share</Button>
            </TouchableHighlight>
          </Card.Actions>
        </Card>
        <View style={styles.comment}>
          <Avatar.Image size={50} source={{ uri: 'https://picsum.photos/700' }} style={styles.avatarComment} />
          <View style={styles.commentBody}>
            <View style={styles.commentBackground}>
              <Text style={styles.userName}>Van B</Text>
              <Text style={styles.commentContent}>Lorem ipsum dolor sit amet, in quo dolorum ponderumLorem ipsum dolor sit amet, in quo dolorum ponderumLorem ipsum dolor sit amet, in quo dolorum ponderum</Text>
            </View>
            <Text style={styles.timeComment}>Vừa xong</Text>
          </View>
        </View>
        <View style={styles.comment}>
          <Avatar.Image size={50} source={{ uri: 'https://picsum.photos/500' }} style={styles.avatarComment} />
          <View style={styles.commentBody}>
            <View style={styles.commentBackground}>
              <Text style={styles.userName}>Van C</Text>
              <Text style={styles.commentContent}>Lorem ipsum dolor sit amet</Text>
            </View>
            <Text style={styles.timeComment}>1 day</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.separator}></View>
      {/* Modal 1 */}
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
            <View style={styles.topModal}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <AntDesign name="down" size={20} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.contentModal}>
              <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Lưu bài viết") }}>
                <View style={styles.leftItemModal}>
                  <Feather name="bookmark" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 25 }}>Lưu bài viết</Text>
                  <Text style={{ fontSize: 15 }}>Thêm vào danh sách các mục đã lưu</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Ẩn bài viết") }}>
                <View style={styles.leftItemModal}>
                  <MaterialCommunityIcons name="comment-remove-outline" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 25 }}>Ẩn bài viết</Text>
                  <Text style={{ fontSize: 15 }}>Ẩn bớt các bài viết tương tự</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Tạm ẩn") }}>
                <View style={styles.leftItemModal}>
                  <AntDesign name="clockcircleo" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 25 }}>Tạm ẩn Van A trong 30 ngày</Text>
                  <Text style={{ fontSize: 15 }}>Tạm thời dừng xem bài viết</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Ẩn tất cả") }}>
                <View style={styles.leftItemModal}>
                  <MaterialCommunityIcons name="comment-remove" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 25 }}>Ẩn tất cả từ Van A</Text>
                  <Text style={{ fontSize: 15 }}>Không xem bài viết từ người này nữa</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Xem thêm") }}>
                <View style={styles.leftItemModal}>
                  <AntDesign name="caretdown" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 25 }}>Xem thêm</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Lý do") }}>
                <View style={styles.leftItemModal}>
                  <AntDesign name="infocirlceo" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 20 }}>Tại sao tôi nhìn thấy bài viết này?</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemModal} onPress={() => { setModalVisible(false), setModalVisible1(true), setModalVisible2(false) }}>
                <View style={styles.leftItemModal}>
                  <Octicons name="report" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 20 }}>Báo cáo bài viết</Text>
                  <Text style={{ fontSize: 15 }}>Tôi lo ngại về bài viết này</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Bật thông báo") }}>
                <View style={styles.leftItemModal}>
                  <MaterialIcons name="notifications-active" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 20 }}>Bật thông báo về bài viết này</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Sao chép") }}>
                <View style={styles.leftItemModal}>
                  <AntDesign name="link" size={30} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 20 }}>Sao chép liên kết</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>
      </View>


      {/* Modal 2 */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible(true), setModalVisible1(false)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.topModal}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                  setModalVisible(!modalVisible1);
                }}>
                <AntDesign name="close" size={20} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.contentModal}>
              <View style={styles.textModal}>
                <Octicons name="report" size={30} color="orange" />
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Vui lòng chọn vấn đề để tiếp tục</Text>
                <Text style={{ fontSize: 15 }}>Bạn có thể báo cáo bài viết sau khi chọn vấn đề</Text>
              </View>
              <View style={styles.reportModal}>
                <View style={styles.rowReport}>
                  <View style={styles.itemReport}>
                    <Button title="Ảnh khỏa thân" onPress={() => { }}>Ảnh khỏa thân</Button>
                  </View>
                  <View style={styles.itemReport}>
                    <Button title="Bạo lực" onPress={() => { }}>Bạo lực</Button>
                  </View>
                  <View style={styles.itemReport}>
                    <Button title="Quấy rối" onPress={() => { }}>Quấy rối</Button>
                  </View>
                </View>
                <View style={styles.rowReport}>
                  <Button style={styles.itemReport} title="Tự gây thương tích" onPress={() => { }}>Tự gây thương tích</Button>
                  <View style={styles.itemReport}>
                    <Button title="Tin giả" onPress={() => { }}>Tin giả</Button>
                  </View>
                  <View style={styles.itemReport}>
                    <Button title="Spam" onPress={() => { }}>Spam</Button>
                  </View>
                </View>
                <View style={styles.rowReport}>
                  <View style={styles.itemReport}>
                    <Button title="Bán hàng trái phép" onPress={() => { }}><Text style={{ fontSize: 12 }}>Bán hàng trái phép</Text></Button>
                  </View>
                  <View style={styles.itemReport}>
                    <Button title="Ngôn từ gây thù ghét" onPress={() => { }}><Text style={{ fontSize: 12 }}>Ngôn từ gây thù ghét</Text></Button>
                  </View>
                </View>
                <View style={styles.rowReport}>
                  <View style={styles.itemReport}>
                    <Button title="Khủng bố" onPress={() => { }}>Khủng bố</Button>
                  </View>
                  <View style={styles.itemReport}>
                    <Button title="Khác" onPress={() => { setModalVisible(false), setModalVisible1(false), setModalVisible3(true) }}>
                      <AntDesign name="search1" size={18} color="black" />
                      <Text>Vấn đề khác</Text>
                    </Button>
                  </View>
                </View>
              </View>
              <View style={styles.separator} />
              <View style={styles.textModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Các bước khác mà bạn có thể thực hiện</Text>
              </View>
              <View style={styles.contentModal}>
                <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Chăn") }}>
                  <View style={styles.leftItemModal}>
                    <MaterialCommunityIcons name="account-remove-outline" size={35} color="black" />
                  </View>
                  <View style={styles.rightItemModal}>
                    <Text style={{ fontSize: 25 }}>Chặn Van A</Text>
                    <Text style={{ fontSize: 15 }}>Các bạn sẽ không thể thấy hoặc liên hệ với nhau</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Bỏ theo dõi") }}>
                  <View style={styles.leftItemModal}>
                    <SimpleLineIcons name="user-unfollow" size={35} color="black" />
                  </View>
                  <View style={styles.rightItemModal}>
                    <Text style={{ fontSize: 25 }}>Bỏ theo dõi Van A</Text>
                    <Text style={{ fontSize: 15 }}>Dừng xem bài viết nhưng vẫn là bạn bè</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.itemModal} >
                <View style={styles.leftItemModal}>
                  <Feather name="info" size={35} color="black" />
                </View>
                <View style={styles.rightItemModal}>
                  <Text style={{ fontSize: 15 }}>Nếu bạn nhận thấy ai đó đang gặp nguy hiểm, đừng chần chừ mà hãy báo cáo ngay cho dịch vụ cấp cứu tại địa phương</Text>
                </View>
              </View>
              <Button title="Tiếp tục" onPress={() => { setModalVisible(false), setModalVisible1(false), setModalVisible2(true) }} style={{ borderRadius: 8, backgroundColor: '#BDBDBD' }}>Tiếp</Button>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal 3 */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible(false),
              setModalVisible1(true),
              setModalVisible2(false)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.topModal}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                  setModalVisible1(!modalVisible2);
                  setModalVisible(!modalVisible2);
                }}>
                <AntDesign name="close" size={20} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.contentModal}>
              <View style={styles.textModal}>
                <Octicons name="report" size={40} color="orange" style={{ marginLeft: "45%" }} />
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: "35%", marginTop: 20 }}>Bạn đã chọn</Text>
              </View>
              <View style={styles.selectionReportModal}>
                <View style={styles.itemReport}>
                  <Button title="Khủng bố" >Khủng bố</Button>
                </View>
                <View style={styles.itemReport}>
                  <Button title="Ngôn ngữ gây thù ghét" >Ngôn ngữ gây thù ghét</Button>
                </View>
              </View>
              <View style={styles.textModal}>
                <Text style={{ fontSize: 20, textAlign: "center", }}>
                  Bạn có thể báo cáo nếu cho răng nội dung này vi phạm <Text style={{ fontWeight: 'bold' }}>Tiêu chuẩn cộng đồng</Text> của chúng tôi. Xin lưu ý rằng đội ngũ xét duyệt của chúng tôi hiện có ít nhân lực hơn.
                </Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.textModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Các bước khác mà bạn có thể thực hiện</Text>
              </View>
              <View style={styles.contentModal}>
                <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Chăn trên Mess") }}>
                  <View style={styles.leftItemModal}>
                    <SimpleLineIcons name="user-unfollow" size={35} color="black" />
                  </View>
                  <View style={styles.rightItemModal}>
                    <Text style={{ fontSize: 23 }}>Chỉ chăn Van A trên Messenger</Text>
                    <Text style={{ fontSize: 15, marginRight: 5 }}>Các bạn sẽ không nhận được tin nhắn hoặc cuộc gọi của nhau, nhưng vẫn có thể tương tác với nhau trên Facebook</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Chăn") }}>
                  <View style={styles.leftItemModal}>
                    <MaterialCommunityIcons name="account-remove-outline" size={35} color="black" />
                  </View>
                  <View style={styles.rightItemModal}>
                    <Text style={{ fontSize: 25 }}>Chặn Van A</Text>
                    <Text style={{ fontSize: 15 }}>Các bạn sẽ không thể thấy hoặc liên hệ với nhau</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemModal} onPress={() => { alert("Bỏ theo dõi") }}>
                  <View style={styles.leftItemModal}>
                    <SimpleLineIcons name="user-unfollow" size={35} color="black" />
                  </View>
                  <View style={styles.rightItemModal}>
                    <Text style={{ fontSize: 25 }}>Bỏ theo dõi Van A</Text>
                    <Text style={{ fontSize: 15 }}>Dừng xem bài viết nhưng vẫn là bạn bè</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal 4 */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            setModalVisible(false),
              setModalVisible1(true),
              setModalVisible3(false)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.contentModal}>
              <View style={styles.searchModal}>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => {
                    setModalVisible3(!modalVisible1);
                    setModalVisible1(!modalVisible1);
                    setModalVisible(!modalVisible1);
                  }}>
                  <Ionicons name="md-arrow-round-back" size={40} color="black" />
                </TouchableOpacity>
                <Item rounded style={{ marginLeft: 10, height: 40, borderRadius: 32, width: "85%" }}>
                  <Input placeholder="Tìm kiếm" />
                </Item>
              </View>
              <View style={styles.textModal}>
                  <Text style={{fontWeight:'bold',fontSize:25}}>Ví dụ</Text>
              </View>
              <List>
                <ListItem selected>
                  <Left>
                    <Text style={{fontSize:20}}>Quyền sở hữu trí tuệ</Text>
                  </Left>
                  <Right>
                  <Ionicons name="ios-arrow-forward" size={20} color="black" />
                  </Right>  
                </ListItem>
                <ListItem selected>
                  <Left>
                    <Text style={{fontSize:20}}>Gian lận lừa đảo</Text>
                  </Left>
                  <Right>
                  <Ionicons name="ios-arrow-forward" size={20} color="black" />
                  </Right>  
                </ListItem>
                <ListItem selected>
                  <Left>
                    <Text style={{fontSize:20}}>Chế diễu nạn nhân</Text>
                  </Left>
                  <Right>
                  <Ionicons name="ios-arrow-forward" size={20} color="black" />
                  </Right>  
                </ListItem>
                <ListItem selected>
                  <Left>
                    <Text style={{fontSize:20}}>Bắt nạt</Text>
                  </Left>
                  <Right>
                  <Ionicons name="ios-arrow-forward" size={20} color="black" />
                  </Right>  
                </ListItem>
                <ListItem selected>
                  <Left>
                    <Text style={{fontSize:20}}>Lạm dụng trẻ em</Text>
                  </Left>
                  <Right>
                  <Ionicons name="ios-arrow-forward" size={20} color="black" />
                  </Right>  
                </ListItem>
              </List>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#ffffff"
  },
  appbarTitle: {
    fontSize: 24
  },
  appbarHead: {
    elevation: 0,
    backgroundColor: '#ffffff',
    height: 70,
    left: 0,
    right: 0,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },

  separator: {
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
    elevation: 0,
    marginBottom: 5,
    marginTop: 5

  },
  postSeparator: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  dividerPost: {
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 10,
    elevation: 0,
  },
  userName: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  comment: {
    marginTop: 20,
    flexDirection: 'row',
    flexShrink: 1
  },
  commentContent: {
    marginLeft: 10,
    flexShrink: 1
  },
  commentBody: {
    marginHorizontal: 10,
    flex: 1,
  },
  commentBackground: {
    padding: 10,
    backgroundColor: '#e6e6fa',
    borderRadius: 20,
    alignSelf: 'baseline'
  },
  avatarComment: {
    marginLeft: 10,
  },
  timeComment: {
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 20,
    height: 600,
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },
  contentModal: {
    backgroundColor: 'white',
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column'
  },
  itemModal: {
    flexDirection: "row",
    marginBottom: 10,
  },
  leftItemModal: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: 'center',
    marginLeft: 10
  },
  rightItemModal: {
    flex: 8,
    alignItems: "flex-start",

  },
  closeButton: {
    alignItems: 'flex-end',
    marginRight: 15
  },
  backButton: {
    alignItems: 'flex-start',
    marginLeft: 10
  },
  textModal: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 8
  },
  reportModal: {
    flexDirection: 'column',
    marginTop: 10
  },
  searchModal: {
    flexDirection: 'row'
  },
  rowReport: {
    flexDirection: "row",
    marginTop: 5
  },
  itemReport: {
    backgroundColor: '#BDBDBD',
    borderRadius: 16,
    marginLeft: 5,
    fontSize: 5,
    marginBottom: 5,
    marginRight: 5
  },
})
export default MainPost;