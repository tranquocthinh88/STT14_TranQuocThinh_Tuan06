import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from 'react';
const DATA = [
    {
        image: require('../assets/hotpot.png'),
        title: 'Ca nấu lẩu, nấu mì mini...',
        shop: "Shop Devang"
        // id: '1'
    },
    {
        image: require('../assets/chicken.png'),
        title: '1KG KHÔ GÀ BƠ TỎI ...',
        shop: "Shop LTD Food"
    },
    {
        image: require('../assets/cranes.png'),
        title: 'Xe cần cẩu đa năng',
        shop: "Shop Thế giới đồ chơi"
    },
    {
        image: require('../assets/toy.png'),
        title: 'Đồ chơi dạng mô hình',
        shop: "Shop Thế giới đồ chơi"
    },
    {
        image: require('../assets/lanhdao.png'),
        title: 'Lãnh đạo giản đơn',
        shop: "Shop Minh Long Book"
    },
    {
        image: require('../assets/youngbook.png'),
        title: 'Hiểu lòng con trẻ',
        shop: "Shop Minh Long book"
    },
    {
        image: require('../assets/trump.png'),
        title: 'Donald Trump Thiên tài',
        shop: "Shop Devang"
    },
];

const Item = ({ image, title, shop }) => (
    <View style={styles.item}>
        <Image style={styles.img} source={image} />
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.shop}>{shop}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Chat</Text>
        </TouchableOpacity>
    </View>
);

const Chat = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../assets/arrow.png')} />
                </TouchableOpacity>

                <Text style={styles.text}>Chat</Text>

                <TouchableOpacity onPress={()=> {navigation.navigate("Usb")}}>

                    <Image style={styles.icon2} source={require('../assets/cart.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.text1}>
                Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại
            </Text>
            <Text style={styles.text2}>
                chát với shop!
            </Text>

            <View style={styles.body}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Item title={item.title} image={item.image} shop={item.shop} />
                    )}
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image style={styles.group} source={require('../assets/Group.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.home} source={require('../assets/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.stroke} source={require('../assets/stroke.png')} />
                </TouchableOpacity>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e4e4',
    },
    header: {
        flex: 1,
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    body: {
        flex: 9,
        backgroundColor: '#e8e4e4',
    },
    footer: {
        flex: 1,
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        color: 'white',
    },
    icon: {
        marginLeft: 20,
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    icon2: {
        marginRight: 20,
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    text1: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16,
        color: 'black',
    },
    text2: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        marginBottom: 10,

    },
    group: {
        marginLeft: 20,
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    home: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    stroke: {
        marginRight: 20,
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    item: {
        flex: 1,
        // backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 10,
        borderTopColor: 'gray',
        borderTopWidth: 1,
    },
    title: {
        fontSize: 16,
        color: 'black',
        marginTop: 10,
    },
    shop: {
        fontSize: 14,
        color: 'gray',
        marginTop: 10,
    },
    img: {
        width: 80,
        height: 80,
        resizeMode: 'contain',

    },
    content: {
        marginLeft: 10,

    },
    button: {
        backgroundColor: 'red',
        width: 100,
        height: 40,
        position: 'absolute',
        right: 15,
        marginTop: 25,
    },
    textBtn: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
    }

});
export default Chat;