import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Tytuł taksa!
        </Text>
        <View style={styles.items}>
          <Task text="Task 1"></Task>
          <Task text="Task 2"></Task>
          <Task text="Task 3"></Task>
        </View>
      </View>
      <View style={styles.items}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#n8eaed',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  items: {
    marginTop: 30,
  }
});
