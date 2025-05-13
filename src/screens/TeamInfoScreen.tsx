import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TeamInfoScreen({ route }) {
  const { teamKey } = route.params;

  const times = {
    sport: {
      nome: "Sport Club do Recife",
      fundacao: "13 de maio de 1905",
      sede: "Recife, Pernambuco",
      historia: "O Sport é um dos clubes mais tradicionais do Nordeste...",
      cultura: "Torcida apaixonada, rivalidade com Náutico e Santa Cruz...",
      rivalidades: "Principal rival: Santa Cruz. Também tem rivalidade com o Náutico.",
      simbolos: "Leão, cores vermelho e preto, Ilha do Retiro...",
    },
    nautico: {
      nome: "Clube Náutico Capibaribe",
      fundacao: "7 de abril de 1901",
      sede: "Recife, Pernambuco",
      historia: "Fundado como clube de remo, virou potência no futebol...",
      cultura: "Torcida alvirrubra fiel, forte tradição no remo...",
      rivalidades: "Rival histórico: Sport. Clássico dos Clássicos com o Santa Cruz.",
      simbolos: "Cores vermelho e branco, timbu como mascote, estádio dos Aflitos...",
    },
    santa: {
      nome: "Santa Cruz Futebol Clube",
      fundacao: "3 de fevereiro de 1914",
      sede: "Recife, Pernambuco",
      historia: "Santa Cruz tem uma história marcada por superações e paixão popular...",
      cultura: "Clube do povo, forte presença nas classes populares...",
      rivalidades: "Rival de longa data: Sport. Também rivaliza com o Náutico.",
      simbolos: "Cobra coral, cores tricolores (preto, branco e vermelho)...",
    },
  };

  const time = times[teamKey];

  if (!time) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Time não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{time.nome}</Text>
      <Text style={styles.item}><Text style={styles.bold}>Fundação:</Text> {time.fundacao}</Text>
      <Text style={styles.item}><Text style={styles.bold}>Sede:</Text> {time.sede}</Text>
      <Text style={styles.item}><Text style={styles.bold}>História:</Text> {time.historia}</Text>
      <Text style={styles.item}><Text style={styles.bold}>Cultura:</Text> {time.cultura}</Text>
      <Text style={styles.item}><Text style={styles.bold}>Rivalidades:</Text> {time.rivalidades}</Text>
      <Text style={styles.item}><Text style={styles.bold}>Símbolos:</Text> {time.simbolos}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#B5191A",
  },
  item: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
  bold: {
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
