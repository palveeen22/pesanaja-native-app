import styled from "styled-components/native";
import { Image, Text } from "react-native";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { BlurView } from "expo-blur";
import HomeScreen from "../screens/HomeScreen";
// import TestBox from "../screens/TestBox";
// import ProfileScreen from "../screens/ProfileScreen";
// import ScheduleScreen from "../screens/ScheduleScreen";

const Tab = createBottomTabNavigator();

const ButtonTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //   tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home" : "home";
            const iconColor = focused ? "#39b54a" : "#595959";
            return <Foundation name={iconName} color={iconColor} size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Category"
        component={HomeScreen}
        options={{
          //   tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "scatter-plot" : "scatter-plot";
            const iconColor = focused ? "#39b54a" : "#595959";
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={iconColor}
                size={24}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Products"
        component={HomeScreen}
        options={{
          //   tabBarLabel: "Profile",
          //   tabBarLabel: "Profile",

          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "shopping-basket" : "shopping-basket";
            const iconColor = focused ? "#39b54a" : "#595959";
            return <FontAwesome5 name={iconName} color={iconColor} size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={HomeScreen}
        options={{
          //   tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "favorite-outline" : "favorite-border";
            const iconColor = focused ? "#39b54a" : "#595959";
            return (
              <MaterialIcons name={iconName} color={iconColor} size={24} />
            );
          },
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={TestBox}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? "chatbox-ellipses-outline"
              : "chatbox-ellipses-outline";
            return <Ionicons name={iconName} color="#ff335f" size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "calendar-outline" : "calendar-outline";
            return <Ionicons name={iconName} color="#ff335f" size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const imageSource = focused
              ? {
                  uri: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
                }
              : {
                  uri: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
                };
            return (
              <Image
                source={imageSource}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 50,
                  resizeMode: "cover",
                }}
              />
            );
          },
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default ButtonTab;
