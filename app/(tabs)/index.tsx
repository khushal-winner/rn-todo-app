import { createHomeStyles } from "@/assets/styles/home.styles";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const { colors } = useTheme();
  const [editText, setEditText] = useState("");
  const [editingTodoId, setEditingTodoId] = useState<Id<"todos"> | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);

  const homeStyles = createHomeStyles(colors);

  const isLoading = todos === undefined;

  type Todo = Doc<"todos">;

  const handleDeleteTodo = async (id: Id<"todos">) => {
    Alert.alert("Delete todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteTodo({ todoId: id });
          } catch (error) {
            console.error("Error deleting todo:", error);
            Alert.alert("Error", "Failed to delete todo.");
          }
        },
      },
    ]);
  };

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ todoId: id });
    } catch (error) {
      console.error("Error toggling todo:", error);
      Alert.alert("Error", "Failed to toggle todo.");
    }
  };

  const handleEditTodo = (id: Id<"todos">) => {
    setEditingTodoId(id);
    setEditText(todos?.find((todo) => todo._id === id)?.text || "");
    setIsEditing(true);
  };
  const handelSaveEdit = async () => {
    if (editingTodoId) {
      try {
        await updateTodo({ todoId: editingTodoId, text: editText.trim() });
        setEditingTodoId(null);
        setEditText("");
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating todo:", error);
        Alert.alert("Error", "Failed to update todo.");
      }
    }
  };
  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditText("");
    setIsEditing(false);
  };

  const renderTodoItem = ({ item }: { item: Todo }) => (
    <View style={homeStyles.todoItemWrapper}>
      <LinearGradient
        colors={colors.gradients.surface}
        style={homeStyles.todoItem}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          style={homeStyles.checkbox}
          activeOpacity={0.7}
          onPress={() => handleToggleTodo(item._id)}
        >
          <LinearGradient
            colors={
              item.isCompleted
                ? colors.gradients.primary
                : colors.gradients.muted
            }
            style={[
              homeStyles.checkboxInner,
              { borderColor: item.isCompleted ? "transparent" : colors.border },
            ]}
          >
            {item.isCompleted && (
              <Ionicons name="checkmark" size={20} color="#fff" />
            )}
          </LinearGradient>
        </TouchableOpacity>

        {isEditing ? (
          <View style={homeStyles.editContainer}>
            <TextInput
              style={homeStyles.editInput}
              value={editText}
              onChangeText={setEditText}
              autoFocus
              multiline
              placeholder="Edit todo..."
              placeholderTextColor={colors.textMuted}
            />

            <View style={homeStyles.editButtons}>
              <TouchableOpacity
                onPress={() => handelSaveEdit()}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={colors.gradients.success}
                  style={homeStyles.editButton}
                >
                  <Ionicons name="checkmark" size={14} color="#fff" />
                  <Text style={homeStyles.editButtonText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleCancelEdit} activeOpacity={0.8}>
                <LinearGradient
                  colors={colors.gradients.muted}
                  style={homeStyles.editButton}
                >
                  <Ionicons name="close" size={14} color="#fff" />
                  <Text style={homeStyles.editButtonText}>Cancel</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={homeStyles.todoTextContainer}>
            <Text
              style={[
                homeStyles.todoText,
                item.isCompleted && {
                  textDecorationLine: "line-through",
                  color: colors.textMuted,
                  opacity: 0.6,
                },
              ]}
            >
              {item.text}
            </Text>

            <View style={homeStyles.todoActions}>
              <TouchableOpacity
                onPress={() => handleEditTodo(item._id)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={colors.gradients.warning}
                  style={homeStyles.actionButton}
                >
                  <Ionicons name="pencil" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteTodo(item._id)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={colors.gradients.danger}
                  style={homeStyles.actionButton}
                >
                  <Ionicons name="trash" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar
        style={
          colors.statusBarStyle as
            | "auto"
            | "inverted"
            | "light"
            | "dark"
            | undefined
        }
      />
      <SafeAreaView style={homeStyles.container}>
        <Header />

        <TodoInput />

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id} // this is to help React identify unique items
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
          ListEmptyComponent={<EmptyState />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Index;
