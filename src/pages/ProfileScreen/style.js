import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff",
  },
  info: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
    textAlign: "left",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
});
