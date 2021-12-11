import { StyleSheet, Dimensions, Platform } from 'react-native';
import {colors} from '../../utils/Colors'
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Platform.OS === "web" ? "100vh" : Dimensions.get("window").height,
    backgroundColor: '#FFFFFF',
  },

  //Top
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingTop: Platform.OS === "ios" ? 100 : 50
  },

  //Bottom
  inputView: {
    backgroundColor: colors.lightSecondary,
    alignSelf: "flex-end",
    width: '100%',
    height: 150,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  focusTxtInput: {
    backgroundColor: colors.primary,
    flex: 0.9,
    padding: 10,
    marginRight: 20,
    height: 40,
    borderRadius: 30,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },

  clearView: {
    backgroundColor: colors.darkSecondary,
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
    width: '100%',
    height: 200,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});