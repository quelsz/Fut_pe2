import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { teams } from "../data/team"; // Verifique se o caminho está correto!

export default function TeamSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o seu Time</Text>

      {/* Botão de Voltar para a Tela de Login */}
      <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.replace("Login")}>
        <Text style={styles.backButtonText}>Sair</Text>
      </TouchableOpacity>

      {Object.keys(teams).map((key) => (
        <TouchableOpacity key={key} onPress={() => navigation.navigate("TeamInfo", { teamKey: key })}>
          <Image source={teams[key].logo} style={styles.logo} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B5191A",
    padding: 90,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
    resizeMode: "contain",
  },
  backButtonContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#B5191A",
  },
  backButtonText: {
    color: "#B5191A",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
