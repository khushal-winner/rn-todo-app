# 📱 React Native Todo App with Real-Time Sync

A feature-rich todo application built with React Native, Expo, and Convex for real-time data synchronization across all devices. Perfect for learning modern mobile development with a powerful backend!

## ✨ Features

### 📝 Todos Management

- ➕ **Add Tasks**: Create new todos with ease
- ✅ **Toggle Completion**: Mark tasks as completed or uncompleted
- 📝 **Edit Tasks**: Modify existing tasks inline
- 🗑️ **Delete Tasks**: Remove unwanted todos
- 📊 **Live Progress**: Real-time progress bar showing completion status

### ⚙️ Settings & Customization

- 📈 **Task Statistics**: View total, completed, and remaining tasks
- 🌙 **Dark Mode**: Fully functional light/dark theme toggle
- 🔔 **Notifications**: Toggle notification preferences (UI ready)
- 🔄 **Auto-Sync**: Enable/disable automatic synchronization (UI ready)
- 🚨 **Danger Zone**: Clear all tasks with confirmation

### 🔄 Real-Time Synchronization

- **Instant Updates**: All changes reflect immediately across all connected devices
- **Convex Backend**: Powered by robust real-time database
- **Cross-Platform**: Works seamlessly on iOS, Android, and web

### 📁 Environment Setup

1. Create a `.env` file in the project root:

```env
CONVEX_DEPLOYMENT=<your_convex_deployment_name>
EXPO_PUBLIC_CONVEX_URL=<your_convex_url>
```

> **Note**: Get these values from your Convex dashboard after setting up your project.

### 📦 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the Expo development server:**

   ```bash
   npx expo start
   ```

3. **Start Convex development server:**

   Open a separate terminal and run:

   ```bash
   npx convex dev
   ```

### 📱 Running the App

- **iOS**: Press `i` in the Expo terminal or scan QR code with Camera app
- **Android**: Press `a` in the Expo terminal or scan QR code with Expo Go app
- **Web**: Press `w` in the Expo terminal

> **No Mac Required!** Test on iOS simulator using Expo's cloud build services or physical devices.

## 🏗️ Project Structure

```
📁 Project Root
├── 📄 .env                 # Environment variables
├── 📄 app.json            # Expo configuration
├── 📄 package.json        # Dependencies
├── 📁 src/
│   ├── 📁 components/     # Reusable UI components
│   ├── 📁 screens/        # App screens (Todos, Settings)
│   ├── 📁 navigation/     # Navigation configuration
│   ├── 📁 hooks/          # Custom React hooks
│   ├── 📁 utils/          # Helper functions
│   └── 📁 styles/         # Styling and themes
├── 📁 convex/             # Backend functions and schema
└── 📄 README.md           # This file
```

## 🛠️ Tech Stack

- **Frontend**: React Native + Expo
- **Navigation**: React Navigation (Tab + Stack)
- **Backend**: Convex (Real-time database)
- **Styling**: React Native StyleSheet + Custom themes
- **State**: React hooks + Convex queries/mutations

## 🌟 Key Learning Outcomes

After completing this project, you'll understand:

1. **Mobile Development Fundamentals**
2. **Real-time Data Synchronization**
3. **Modern Navigation Patterns**
4. **Theming and Responsive Design**
5. **Backend Integration Best Practices**
6. **Cross-Platform Deployment**

## 🤝 Contributing

Feel free to contribute by:

- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the Convex documentation
2. Verify your `.env` configuration
3. Ensure all dependencies are properly installed
4. Check Expo and React Native documentation

---
