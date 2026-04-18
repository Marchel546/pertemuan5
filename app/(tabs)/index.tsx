import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  KeyboardAvoidingView, Platform, ScrollView, Alert 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ==========================================
// SCREEN 1: LOGIN
// ==========================================
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      // Mock login berhasil, lempar nama default ke Home
      navigation.navigate('Home', { userName: 'Pengguna' });
    } else {
      Alert.alert('Error', 'Harap isi email dan password.');
    }
  };

  return (
    // Security Logic: Handle Keyboard dengan KeyboardAvoidingView
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <Text style={styles.title}>Login Masuk</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        autoCapitalize="none" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      
      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Belum punya akun? Daftar Disini</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

// ==========================================
// SCREEN 2: REGISTER
// ==========================================
function RegisterScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Security Logic 1: Validasi Email (RegEx)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Alert.alert('Validasi Gagal', 'Format email tidak valid (contoh: user@mail.com).');
    }

    // Security Logic 2: Validasi Phone (Cuma angka & min. 10 digit)
    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return Alert.alert('Validasi Gagal', 'Nomor HP harus berupa angka dan minimal 10 digit.');
    }

    // Security Logic 3: Match Check Password & Confirm Password
    if (password !== confirmPassword) {
      return Alert.alert('Validasi Gagal', 'Password dan Confirm Password harus sama!');
    }

    // Pengecekan kosong
    if (!nama || !password) {
      return Alert.alert('Error', 'Semua kolom harus diisi.');
    }

    // Jika semua validasi lolos
    Alert.alert('Sukses', 'Akun berhasil dibuat!', [
      { text: 'Masuk ke Home', onPress: () => navigation.navigate('Home', { userName: nama }) }
    ]);
  };

  return (
    // Security Logic 4: Handle Keyboard agar tidak menutupi tombol submit
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1, backgroundColor: '#f4f4f4' }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Daftar Akun Baru</Text>
        
        <TextInput style={styles.input} placeholder="Nama Lengkap" value={nama} onChangeText={setNama} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Phone (Min. 10 Digit)" value={phone} onChangeText={setPhone} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

        <TouchableOpacity style={styles.buttonPrimary} onPress={handleRegister}>
          <Text style={styles.buttonText}>Submit Data</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ==========================================
// SCREEN 3: HOME
// ==========================================
function HomeScreen({ route, navigation }) {
  // Menangkap parameter nama dari Register/Login
  const { userName } = route.params || { userName: 'User' };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome!</Text>
      {/* Menampilkan Welcome Message dengan nama user */}
      <Text style={styles.welcomeName}>Halo, {userName} 👋</Text>
      
      <TouchableOpacity 
        style={[styles.buttonPrimary, { backgroundColor: '#ff4757', marginTop: 30 }]} 
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// NAVIGASI UTAMA
// ==========================================
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrasi' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

// ==========================================
// STYLING (CSS)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#2f3542',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ced6e0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonPrimary: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#1e90ff',
    fontSize: 16,
    fontWeight: '600',
  },
  welcomeTitle: {
    fontSize: 24,
    color: '#747d8c',
    textAlign: 'center',
  },
  welcomeName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2f3542',
    textAlign: 'center',
    marginTop: 10,
  }
});