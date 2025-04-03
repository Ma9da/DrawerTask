import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import ProfileInfo from "@/components/ProfileInfo";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout pressed");
  };

  const handleSettings = () => {
    // Add your settings logic here
    console.log("Settings pressed");
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ drawerStyle: styles.drawer }}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            {/* Profile Info Section */}
            <ProfileInfo />
            <DrawerItemList {...props} />
            <View style={styles.spacer} />
            <DrawerItem
              label="العربية"
              labelStyle={styles.label}
              style={styles.drawerItem}
              onPress={handleSettings}
            />
            <DrawerItem
              label="Logout"
              labelStyle={styles.label}
              style={styles.drawerItem}
              onPress={handleLogout}
            />
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen
          name="Shop"
          options={{
            title: "Shop",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Shop",
          }}
        />
        <Drawer.Screen
          name="Categories"
          options={{
            title: "Categories",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Categories",
          }}
        />
        <Drawer.Screen
          name="Favorites"
          options={{
            title: "Favorites",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Favorites",
          }}
        />
        <Drawer.Screen
          name="MyBasket"
          options={{
            title: "My Basket",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "My Basket",
          }}
        />
        <Drawer.Screen
          name="ViewOrder"
          options={{
            title: "View Order",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "View Order",
          }}
        />
        <Drawer.Screen
          name="Wallet"
          options={{
            title: "Wallet",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Wallet",
          }}
        />
        <Drawer.Screen
          name="LoyaltyPoints"
          options={{
            title: "Loyalty Points",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Loyalty Points",
          }}
        />
        <Drawer.Screen
          name="Referral"
          options={{
            title: "Referral",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Referral",
          }}
        />
        <Drawer.Screen
          name="TermsAndConditions"
          options={{
            title: "Terms & Conditions",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Terms & Conditions",
          }}
        />
        <Drawer.Screen
          name="ContactUs"
          options={{
            title: "Contact Us",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Contact Us",
          }}
        />
        <Drawer.Screen
          name="DeleteAccount"
          options={{
            title: "Delete Account",
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: "Delete Account",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: Colors.light.lightBg,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  label: {
    color: Colors.dark.darkGray,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
  },
  drawerItemContainer: {
    paddingHorizontal: 24,
    paddingVertical: 17,
  },
  drawerItem: {
    borderBottomColor: Colors.light.lighterGray,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 16,
    marginHorizontal: 0,
  },
  spacer: {
    height: 10, // Optional: adds a small space before the custom items
  },
});