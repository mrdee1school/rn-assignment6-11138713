import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Item = ({ productImage, name, price, description }: any) => {
  return (
    <View>
      <View className="py-3 px-0">
        <Image source={productImage} className="w-[190px] h-[30vh]" />
        <TouchableOpacity className="absolute">
          <Image source={require("@/assets/images/addCircle.png")} className="top-64 left-[160px]" />
        </TouchableOpacity>
      </View>
      <Text className="text-lg">{name}</Text>
      <Text className="text-base">{description}</Text>
      <Text className="font-semibold text-orange-600 text-base">${price}</Text>
    </View>
  );
};

export default Item;
