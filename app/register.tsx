import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter(); 

  function Register() {
   let msg = "Entrar com o Google";
   Alert.alert(msg)
  }
  return (
    <View style={styles.container}>
      <View style={styles.backBox}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "#000000ff", fontSize: 14, fontWeight: "700" }}>
            {" "}
            Back{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Create an account so you can explore all the existing jobs
        </Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#626262"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#626262"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#626262"
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={() => router.push("/final")}
          style={styles.button}
        >
          <Text style={styles.signText}> Sign up </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/login")}
          style={styles.create}
        >
          <Text style={styles.createText}> Already have an account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherLogin}>
        <Text style={styles.continueColor}> Or Continue With </Text>
        <View style={styles.iconBox}>
          <TouchableOpacity style={styles.iconBtn} onPress={Register}>
            <MaterialCommunityIcons name="google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="logo-facebook" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <AntDesign name="apple" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  backBox: {
    position: "absolute",
    top: 70,
    left: 20,
  },

  textBox: {
    position: "absolute",
    top: 120,
    marginLeft: 42,
    marginRight: 42,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F41BB",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    width: 326,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
    color: "#000000",
    flexDirection: "row",
  },
  inputBox: {
    marginTop: 40,
    gap: 20,
  },
  input: {
    width: 350,
    height: 60,
    outline: "none",
    backgroundColor: "#F1F4FF",
    borderRadius: 10,
    paddingLeft: 20,
    justifyContent: "center",
  },
  forgot: {
    alignItems: "flex-end",
    marginBottom: 10,
    marginTop: 10,
  },
  forgotText: {
    color: "#1F41BB",
    fontWeight: "600",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 60,
    backgroundColor: "#1F41BB",
    borderRadius: 10,
  },
  signText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
  },

  create: {
    justifyContent: "center",
    alignItems: "center",
  },
  createText: {
    color: "#494949",
    fontSize: 14,
    fontWeight: "600",
  },
  otherLogin: {
    position: "absolute",
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  continueColor: {
    color: "#1F41BB",
    fontSize: 14,
    fontWeight: "600",
  },
  iconBox: {
    flexDirection: "row",
    gap: 20,
  },
  iconBtn: {
    backgroundColor: "#ECECEC",
    width: 60,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
