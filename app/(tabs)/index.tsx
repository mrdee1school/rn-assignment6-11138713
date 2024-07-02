import ItemCard from '@/components/ItemCard';
import { Image, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex-row justify-between px-5">
        <View>
          <Image source={require("@/assets/images/Menu.png")} />
        </View>
        <View>
          <Image source={require("@/assets/images/Logo.png")} />
        </View>
        <View className="flex-row items-center">
          <View className="pr-2">
            <Image source={require("@/assets/images/Search.png")} />
          </View>
          <View className="pl-2">
            <Image source={require("@/assets/images/shoppingBag.png")} />
          </View>
        </View>
      </View>

      <View className="flex-row justify-between px-5 pt-8 pb-4">
        <View>
          <Text className="text-4xl">Our Story</Text>
        </View>
        <View className="flex-row">
          <View className="bg-gray-300 rounded-full p-4 mr-2">
            <Image source={require("@/assets/images/Listview.png")} />
          </View>
          <View className="bg-gray-300 rounded-full p-4 ml-2">
            <Image source={require("@/assets/images/Filter.png")} />
          </View>
        </View>
      </View>

      <ItemCard />
    </SafeAreaView>
  );
}