import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  mascot: {
    width: 400,
    height: 400,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: "#FF6347",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 60,
    elevation: 5,
  },
  playButtonText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default styles;
