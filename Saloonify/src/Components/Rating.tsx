import React from "react";
import { View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface RatingProps {
  value: number;
  size?: number; // Optional size prop
}

const Rating = ({ value, size = 25 }: RatingProps) => {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesome
        testID="full-star"
        key={i}
        name="star"
        size={size} // Use the size prop value
        color="#ffa500"
        style={{ marginRight: 2.5 }}
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FontAwesome
        key={fullStars}
        testID="half-star"
        name="star-half-o"
        size={size} // Use the size prop value
        color="#ffa500"
        style={{ marginRight: 2.5 }}
      />
    );
  }

  // Add empty stars to fill remaining space
  for (let i = stars.length; i < 5; i++) {
    stars.push(
      <FontAwesome
        testID="empty-star"
        key={i}
        name="star-o"
        size={size} // Use the size prop value
        color="#ffa500"
        style={{ marginRight: 2.5 }}
      />
    );
  }

  return (
    <View testID="ratingView" style={{ flexDirection: "row" }}>
      {stars}
    </View>
  );
};

export default Rating;
