import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CharactersList from './components/CharactersList';

export default function Characters() {
  return (
    <ScrollView>
      <CharactersList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
