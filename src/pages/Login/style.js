import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.01)",
  },
  container: {
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "#343a40",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: "#343a40",
    fontSize: 16,
    borderWidth: 0,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#FF6347",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupButton: {
    marginTop: 10,
    backgroundColor: "#eee",
    padding: 7,
    borderRadius: 10,
  },
  signupText: {
    color: "#343a40",
    fontSize: 16,
  },
});

export default styles;
