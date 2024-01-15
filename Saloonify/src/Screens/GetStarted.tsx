import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import Icons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../Constants/COLORS";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../Constants/DIMENSIONS";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");
const walkthroughTitleList = [
  {
    id: 1,
    title: "Fashion at Your Fingertips",
    desc: "Curate, Explore, Elevate",
    icon: (
      <Image
        style={{
          height: SCREEN_HEIGHT * 0.87,
          width: SCREEN_WIDTH,
          resizeMode: "cover",
        }}
        source={require("../../assets/salon.jpg")}
      />
    ),
  },
  {
    id: 2,
    title: "Be the Future",
    desc: "Redefine The Way You Look",
    icon: (
      <Image
        style={{
          height: SCREEN_HEIGHT * 0.87,
          width: SCREEN_WIDTH,
          resizeMode: "cover",
        }}
        source={require("../../assets/hair-trimmer.jpg")}
      />
    ),
  },
];
const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <View testID="getStartedScreen" style={[styler.container]}>
      <Swiper
        showsButtons={false}
        loop={false}
        activeDotColor="#495d63"
        activeDotStyle={{
          width: 15,
          height: 15,
          marginTop: 30,
          borderRadius: 7,
          marginRight: 10,
          marginLeft: 10,
        }}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 7,
          marginTop: 30,
          backgroundColor: "white",
          borderColor: "#495d63",
          borderWidth: 1,
          marginRight: 10,
          marginLeft: 10,
        }}
        paginationStyle={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: height / 13,
        }}
      >
        {walkthroughTitleList.map((item) => {
          return (
            <View key={item.id} style={[styler.slide]}>
              {item.icon}
              <Text style={[styler.title]}>{item.title}</Text>
              <View
                style={{ flexDirection: "row", alignItems: "stretch" }}
              ></View>
              <Text style={[styler.desc]}>{item.desc}</Text>
              {item.id === walkthroughTitleList.length && (
                <TouchableOpacity
                  testID="login"
                  style={styler.touchablebtn}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text style={{ color: "white", marginRight: 10 }}>
                    Let's go
                  </Text>
                  <Icons name="arrow-forward-ios" size={15} color={"white"} />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};
export default GetStarted;
const styler = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  slide: {
    flex: 1,
    marginBottom: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
  },
  title: {
    color: "black",
    marginTop: 0,
    fontSize: 25,
    marginVertical: 20,
  },
  desc: {
    fontSize: 17,

    color: "black",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  touchableText: {
    color: "white",
    // fontFamily: "Poppins-Bold",
    fontSize: 16,
    justifyContent: "center",
  },
  touchablebtn: {
    ...StyleSheet.absoluteFillObject,
    height: 40,
    width: 100,
    // backgroundColor: '#495D63',
    backgroundColor: COLORS.lightGreen,
    borderRadius: 100,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: SCREEN_WIDTH * 0.7,
    marginTop: SCREEN_HEIGHT * 0.05,
  },
});
