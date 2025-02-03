import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center'
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 22
  },
  name: {
    fontSize: 12
  },
  button: {
    padding: 14,
    borderRadius: 20,
    backgroundColor: '#D1D5DB'
  }
});

export default styles;
