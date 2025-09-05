import { createSettingsStyles } from "@/assets/styles/setting.styles";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Prefrences = () => {
  const [isAutoSync, setIsAutoSync] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const settingStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyles.section}
    >
      <Text style={settingStyles.sectionTitle}>Prefrences</Text>

      {/* dark mode */}

      <View style={settingStyles.settingItem}>
        {/* <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingStyles.settingIcon}
          >
            <View style={settingStyles.settingIcon}>
              <Ionicons name="moon" size={20} color="#fff" />
              <Text style={settingStyles.settingText}>Dark Mode</Text>
            </View>
          </LinearGradient>
        </View> */}
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="moon" size={20} color="#fff" />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Dark Mode</Text>
        </View>

        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor="#fff"
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* notifications */}
      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="notifications" size={20} color="#fff" />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationEnabled}
          onValueChange={() => setIsNotificationEnabled(!isNotificationEnabled)}
          thumbColor="#fff"
          trackColor={{ false: colors.border, true: colors.warning }}
          ios_backgroundColor={colors.border}
        />
      </View>
      {/* auto sync */}
      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="notifications" size={20} color="#fff" />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor="#fff"
          trackColor={{ false: colors.border, true: colors.success }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  );
};

export default Prefrences;
