import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, Pressable, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import ProfileInfo from "@/components/ProfileInfo";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import i18n from "@/i18n/i18n";
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
  const handleSettings = () => {
    // Add your settings logic here
    console.log("Settings pressed");
  };
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout pressed");
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          drawerStyle: styles.drawer,
          headerTitleStyle: styles.pageTitle,
          headerTitleContainerStyle: styles.pageTitleContainer,
          headerTitleAlign: "center",
          headerLeft: () => (
            <Pressable onPress={() => navigation.toggleDrawer()}>
              <Image
                source={require("../assets/images/drawerIcon.png")}
                style={{
                  width: 18,
                  height: 18,
                  resizeMode: "contain",
                  marginLeft: 16,
                }}
              />
            </Pressable>
          ),
        })}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            {/* Profile Info Section */}
            <ProfileInfo />
            <DrawerItemList {...props} />
            <DrawerItem
              label={i18n.locale.includes("en") ? "العربية" : "English"}
              labelStyle={styles.label}
              style={styles.drawerItem}
              onPress={() => {
                // Toggle language
                const newLocale = i18n.locale.includes("en") ? "ar" : "en";
                i18n.locale = newLocale;
                // You might need to trigger a re-render or update state
              }}
            />
            <DrawerItem
              label={i18n.t("logout")}
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
            title: i18n.t("shop"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("shop"),
          }}
        />
        <Drawer.Screen
          name="Categories"
          options={{
            title: i18n.t("categories"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("categories"),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          options={{
            title: i18n.t("favorites"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("favorites"),
          }}
        />
        <Drawer.Screen
          name="MyBasket"
          options={{
            title: i18n.t("myBasket"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("myBasket"),
          }}
        />
        <Drawer.Screen
          name="ViewOrder"
          options={{
            title: i18n.t("viewOrder"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("viewOrder"),
          }}
        />
        <Drawer.Screen
          name="Wallet"
          options={{
            title: i18n.t("wallet"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("wallet"),
          }}
        />
        <Drawer.Screen
          name="LoyaltyPoints"
          options={{
            title: i18n.t("loyaltyPoints"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("loyaltyPoints"),
          }}
        />
        <Drawer.Screen
          name="Referral"
          options={{
            title: i18n.t("referral"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("referral"),
          }}
        />
        <Drawer.Screen
          name="TermsAndConditions"
          options={{
            title: i18n.t("termsAndConditions"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("termsAndConditions"),
          }}
        />
        <Drawer.Screen
          name="ContactUs"
          options={{
            title: i18n.t("contactUs"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("contactUs"),
          }}
        />
        <Drawer.Screen
          name="DeleteAccount"
          options={{
            title: i18n.t("deleteAccount"),
            drawerLabelStyle: styles.label,
            drawerItemStyle: styles.drawerItem,
            drawerContentContainerStyle: styles.drawerItemContainer,
            drawerLabel: i18n.t("deleteAccount"),
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
  pageTitle: {
    color: Colors.dark.darkGray,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
  pageTitleContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
});
