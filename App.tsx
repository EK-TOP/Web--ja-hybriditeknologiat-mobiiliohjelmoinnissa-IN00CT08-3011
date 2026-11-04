import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  // määritetään muuttuja modaalin näkyvyydelle
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* nappi joka muutetaan interactiiviseksi ja avaa modal popup ikkunana */}
      <Pressable style={styles.openButton} onPress={() => setVisible(true)}>
        <Text>Open modal</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalBox}>
            <Text>This is the modal...</Text>

            <Pressable
              style={styles.closeButton} /* nappi joka sulkee modal popup ikkunan */
              onPress={() => setVisible(false)} /* muuttaa popup ikkunana näkyvyyden */
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 2,
    borderColor: '#06fb27',
    borderRadius: 12,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#960a30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#040404',
    fontWeight: 'bold',
  },
  openButton: {
    backgroundColor: '#1077ec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
