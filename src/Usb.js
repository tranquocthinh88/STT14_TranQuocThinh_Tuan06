import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView, TouchableOpacity, TextInput
} from "react-native";
import React from "react";


const DATA = [
  {
    image: require("../assets/giacchuyen.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/daynguon.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/dauchuyentron.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/dauchuyendoi1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/carbusbtops.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
  {
    image: require("../assets/daucamtim.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    coupon: "39%",
  },
];
const Item = ({ image, title, price, coupon }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={image} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.star} source={require("../assets/rate.png")} />
    </View>
    <View style={styles.priceCoupon}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.coupon}>{coupon}</Text>
    </View>
  </View>
);
export default function Usb({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=> {navigation.navigate("Chat")}}>
            <Image
              style={styles.icon}
              source={require("../assets/arrow.png")}
            />
          </TouchableOpacity>
          <View style={styles.textInput}>
            <Image style={styles.icon3} source={require('../assets/dot.png')}/>
            <TextInput style={styles.input} placeholder='Dây cáp usb' ></TextInput>
          </View>
          
          <TouchableOpacity>
            <View style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image style={styles.icon2} source={require('../assets/cart.png')}></Image>
              <View style={styles.circle}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text2}>...</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={2}
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} image={item.image} price={item.price} coupon={item.coupon} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  img: {
    resizeMode: "contain",
    height: 155,
    width: "100%",
  },
  content: {
    flex: 3,
    marginLeft: 20,

  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  star: {
    resizeMode: "contain",
    height: 16,
    width: 115,
    marginTop: 5,
    marginBottom: 5,
  },
  priceCoupon: {
    flex: 1,
    // borderWidth: 1,
    flexDirection: "row",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
  },
  coupon: {
    fontSize: 15,
    fontWeight: "500",
    color: "#969DAA",
    marginLeft: 20,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  icon: {
    marginLeft: 20,
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  icon2: {
    marginRight: 20,
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  icon3: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    marginTop: 5,
  },
  textInput: {
    width: 200,
    height: 40,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginRight: 10,
  },
  circle: {
    position: 'absolute',
    top: -4,
    right: 15,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'red',
  },
  text2: {
    marginRight: 20,
    fontSize: 50,
    color: "white",
    marginBottom: 30,
  },
});
