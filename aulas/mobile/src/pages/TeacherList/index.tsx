import React from "react";

import { View, Text, TextInput } from "react-native";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
// import StudyTabs from "../../routes/StudyTabs";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponiveis">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
            style={styles.input}
            placeholder="Qual a matéria?"
            placeholderTextColor="#c1bccc"
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Dia da semana</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual o dia?"
              placeholderTextColor="#c1bccc"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Horário</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual horário?"
              placeholderTextColor="#c1bccc"
            />
          </View>
        </View>
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
