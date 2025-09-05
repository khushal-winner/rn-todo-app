import IonIcons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

import useTheme from "@/hooks/useTheme";

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderWidth: 1,
          height: 90,
          borderTopColor: "yellow",
          paddingBottom: 30,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <IonIcons size={28} name="flash-outline" color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <IonIcons size={28} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
