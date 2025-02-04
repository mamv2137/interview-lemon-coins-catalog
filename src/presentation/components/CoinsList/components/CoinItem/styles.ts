import { StyleSheet } from "react-native";
import style from "../../styles";

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 30,
    width: 30,
  },
  content: {

  },
  values: {
    gap: 3
  },
  price: {
    fontSize: 14,
    color: '#6B7280',
  },
  boxLoad: {
    width: 'auto',
    height: 20,
    backgroundColor: '#D4D4D4',
    borderRadius: 15
  },
  circleLoad: {
    height: 24,
    width: 24,
    borderRadius: 25,
  },
});

export default styles;
