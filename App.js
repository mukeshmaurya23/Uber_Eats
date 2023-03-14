import * as React from "react";
import { SafeAreaView } from "react-native";
import RootNavigation from "./navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <RootNavigation />
    </SafeAreaView>
  );
}
