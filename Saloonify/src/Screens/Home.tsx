import { View, Text, Image, FlatList, StyleSheet, Button } from "react-native";
import React from "react";
import { Card } from "../Components/Card";
import saloonData from "../../Constants/saloonData";
import Rating from "../Components/Rating";
import RoundedButton from "../Components/Button";
import TopNavigationBar from "../Components/TopBarNavigation";

const Home = ({navigation}) => {
 const handleButtonPress = (saloonId: number) => {
   navigation.navigate("Appointment", { saloonId });
 };
  const renderSaloonItem = ({ item }: { item: any }) => (
    <Card>
      <Image source={item.image} style={styles.saloonImage} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.saloonName}>{item.name}</Text>
        <View style={{ marginTop: 10, marginRight: 15 }}>
          <Rating value={item.rating} />
        </View>
      </View>

      <Text style={styles.saloonCity}>City: {item.city}</Text>
      <RoundedButton
        title="Book Appointment"
        onPress={() => handleButtonPress(item.id)}
      />
    </Card>
  );
  return (
    <>
      <TopNavigationBar />
      <Text style={styles.title}>Select A Saloon</Text>
      <FlatList
        data={saloonData}
        renderItem={renderSaloonItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};
const styles = StyleSheet.create({
  saloonItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    margin: 10,
  },
  saloonImage: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 200,
    width: "100%",
  },
  saloonName: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 5,
    marginLeft: 5,
  },
  saloonRating: {
    marginLeft: 5,
    fontSize: 16,
    marginBottom: 5,
  },
  saloonCity: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
  },
  title: { fontSize: 25, fontWeight: "bold", marginVertical: 5, marginLeft: 5 },
});
export default Home;
