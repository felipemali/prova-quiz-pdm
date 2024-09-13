import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#fff",
  },
  settingsContainer: {
    width: "100%",
    padding: 16,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    width: 42,
    height: 42,
    marginRight: 16,
    borderRadius: 10,
  },
  settingText: {
    fontSize: 18,
    color: "#fff",
  },
});
