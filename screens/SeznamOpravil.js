import React, { useState, useEffect } from 'react'; // Uvozimo glavno knjižnico React in hook-e useState in useEffect
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'; // Uvozimo komponente iz knjižnice React Native za gradnjo uporabniškega vmesnika
import moment from 'moment'; // Uvozimo knjižnico moment za delo z datumi
import DateTimePickerModal from 'react-native-modal-datetime-picker'; // Uvozimo komponento za izbiro datuma in časa iz knjižnice react-native-modal-datetime-picker
import { KeyboardAvoidingView } from 'react-native'; // Uvozimo komponento za prilagajanje postavitve glede na prikazano tipkovnico iz knjižnice React Native
import styles from '../styles/styles'; // Uvozimo stile

// Komponenta SeznamOpravil je glavna komponenta za prikaz seznama opravil
const SeznamOpravil = () => {
  // Uporabimo Hook useState za shranjevanje seznama opravil v stanju komponente
  const [todoList, setTodoList] = useState([]);
  // Uporabimo Hook useState za shranjevanje vnešenega opravila v stanju komponente
  const [todoText, setTodoText] = useState('');
  // Uporabimo Hook useState za shranjevanje izbranega datuma in časa opravila v stanju komponente
  const [taskDate, setTaskDate] = useState('');
  // Uporabimo Hook useState za shranjevanje vidnosti modala za izbiro datuma in časa opravila v stanju komponente
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Funkcija, ki dodaja novo opravilo v seznam
  const addTodo = () => {
    // Če je vnešeno opravilo prazno, ne naredimo ničesar
    if (!todoText) return;
    // Sestavimo novo opravilo iz vnešenega teksta, id-ja in datuma in časa
    const todo = { text: todoText, id: Date.now(), date: taskDate };
    // Dodamo opravilo v seznam in ponastavimo vrednost vnešenega opravila v stanju komponente
    setTodoList([...todoList, todo]);
    setTodoText('');
  };

  // Funkcija, ki izbriše opravilo iz seznama po id-ju
  const removeTodo = id => setTodoList(todoList.filter(todo => todo.id !== id));

  // Uporabimo useEffect za izvedbo kode ob spremembi stanja todoList
  useEffect(() => {
    // Tukaj lahko vpišete kodo, ki jo želite izvesti ob spremembi stanja todoList
    console.log('Seznam opravil je bil spremenjen!');
  }, [todoList]);

  // Funkcija za prikaz modala za izbiro datuma in časa opravila
  const showDatePicker = () => setDatePickerVisibility(true);

  // Funkcija za skrivanje modala za izbiro datuma in časa opravila
  const hideDatePicker = () => setDatePickerVisibility(false);

  // Funkcija za spremembo datuma in časa opravila
  const handleConfirm = date => {
    // Izbrani datum in čas shranimo v stanje komponente in skrijemo modal
    setTaskDate(moment(date).format('DD-MM-YYYY HH:mm'));
    hideDatePicker();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <FlatList
        style={styles.list}
        data={todoList}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <Text style={styles.todoText}>{item.text}</Text>
            <Text style={[styles.todoDate]}>{item.date}</Text>
            <TouchableOpacity style={styles.button} onPress={() => removeTodo(item.id)}>
              <Text style={styles.buttonText}>Odstrani</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Vnesite novo opravilo"
          value={todoText}
          onChangeText={text => setTodoText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>Izberite datum in čas</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Dodaj</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SeznamOpravil;
