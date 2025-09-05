import { createSettingsStyles } from "@/assets/styles/setting.styles";
import DangerZone from "@/components/DangerZone";
import Prefrences from "@/components/Prefrences";
import ProgressStats from "@/components/ProgressStats";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const { colors } = useTheme();

  const settingStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingStyles.container}
    >
      <SafeAreaView style={settingStyles.safeArea}>
        <View style={settingStyles.header}>
          <View style={settingStyles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingStyles.iconContainer}
            >
              <Ionicons name="settings" size={28} color="#fff" />
            </LinearGradient>
            <Text style={settingStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingStyles.scrollView}
          contentContainerStyle={settingStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />

          <Prefrences />

          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
