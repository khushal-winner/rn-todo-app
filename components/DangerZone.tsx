import { createSettingsStyles } from "@/assets/styles/setting.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
  const { colors } = useTheme();

  const settingStyles = createSettingsStyles(colors);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  const handleResetApp = async () => {
    Alert.alert("Reset App", "Are you sure you want to reset the app?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete All",
        style: "destructive",
        onPress: async () => {
          try {
            const result = await clearAllTodos();
            Alert.alert(
              "App Reset",
              `Succesfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset`
            );
          } catch (error) {
            console.error("Error clearing todos:", error);
            Alert.alert("Error", "Failed to clear todos.");
          }
        },
      },
    ]);
  };
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyles.section}
    >
      <Text style={settingStyles.sectionTitle}>Danger Zone</Text>

      <TouchableOpacity
        style={[settingStyles.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
        activeOpacity={0.7}
      >
        <View style={settingStyles.actionLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={settingStyles.actionIcon}
          >
            <Ionicons name="trash" size={20} color="#fff" />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Reset App</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
