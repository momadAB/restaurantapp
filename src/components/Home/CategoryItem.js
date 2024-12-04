import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryItem = ({ id, categoryName, categoryImage }) => {
  return (
    <TouchableOpacity style={styles.item}>
      {/* <Text>{id}</Text> */}
      {/* <Text>{categoryName}</Text> */}
      <Image source={{ uri: categoryImage }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  item: {
    // height: 40,
    // width: 60,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 40,
    width: 60,
    resizeMode: "stretch",
    borderRadius: 10,
    // elevation: 1,
  },
});
