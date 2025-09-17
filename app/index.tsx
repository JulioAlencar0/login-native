import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require("../assets/logo-screen.svg")}/>
    <View style={styles.textBox}>
      <Text style={styles.title}>Discover Your Dream Job here</Text>
      <Text style={styles.subtitle}>Explore all the existing job roles based on your interest and study majorWelcome to JobFinder</Text>
      </View>
      <View style={styles.buttonBox}>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}><Text style={{color: '#ffffff', fontSize: 17, fontWeight: '600' }}> Login </Text></TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/register')} style={styles.button2}><Text style={{color: 'black', fontSize: 17, fontWeight: '600' }}> Register </Text></TouchableOpacity>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  image: {
    width: 385,
    height: 422,
  },

  textBox: {
    marginLeft:42,
    marginRight:42,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F41BB',
  },
  
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000000',
    flexDirection: 'row',
  },
  
  buttonBox: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 88,
    width: 160,
    height: 60,
    backgroundColor: '#1F41BB',
    borderRadius: 10,
  }, 
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 88,
    width: 160,
    height: 60,
    backgroundColor: '#ffffff',
  },
 
})
