import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
    <View style={styles.backBox}> 
        <TouchableOpacity onPress={() => router.push('/login')}><Text style={{color: '#000000ff', fontSize: 14, fontWeight: '700' }}> Back to Login </Text></TouchableOpacity>
    </View>
    <View style={styles.textBox}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>This is my first React Native App.</Text>
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
  backBox: {
    position: 'absolute',
    top: 70,  
    left: 20,
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
 
})
