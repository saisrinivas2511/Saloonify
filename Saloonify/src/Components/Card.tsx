// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// interface CustomCardProps {
//   title: string;
//   content: string;
//   imageUrl: any;
//   onPressButton?: () => void;
//   buttonText?: string;
// }

// const CustomCard: React.FC<CustomCardProps> = ({
//   title,
//   content,
//   imageUrl,
//   onPressButton,
//   buttonText,
// }) => {
//   return (
//     <View style={styles.cardContainer}>
//       <Image source={imageUrl} style={styles.cardImage} />
//       <View style={styles.cardContent}>
//         <Text style={styles.cardTitle}>{title}</Text>
//         <Text>{content}</Text>
//         {onPressButton && (
//           <TouchableOpacity onPress={onPressButton} style={styles.button}>
//             <Text style={styles.buttonText}>{buttonText ?? "Button"}</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     overflow: "hidden",
//     margin: 10,
//   },
//   cardImage: {
//     height: 200,
//     width: "100%",
//   },
//   cardContent: {
//     padding: 10,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   button: {
//     marginTop: 10,
//     backgroundColor: "#3498db",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });

// export default CustomCard;
import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { COLORS } from "../../Constants/COLORS";

interface CardProps {
  title?: string;
  height?: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  height,
  width,
  style,
  children,
}) => {
  const containerStyle = {
    height: height,
    width: width,
  };

  return (
    <View style={[styles.container, containerStyle, style]}>
      {title ? (
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      ) : (
        <View></View>
      )}
      <View>{children}</View>
    </View>
  );
};

interface CardBodyProps {
  children?: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <View style={styles.cardBody}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: COLORS.transparentBlack1,
    borderRadius: 15,
    shadowColor: COLORS.gray2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
    marginTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 7,
    color: COLORS.white,
    marginLeft: 30,
  },
  titlecontainer: {
    height: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: COLORS.transparentGray,
  },
  cardBody: {
    padding: 20,
  },
});

export { Card, CardBody };
