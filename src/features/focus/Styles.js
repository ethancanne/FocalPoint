import { StyleSheet, Dimensions, Platform } from 'react-native';
import {colors} from '../../utils/Colors'
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Platform.OS === "web" ? "100vh" : Dimensions.get("window").height,
    backgroundColor: colors.lightSecondary,
  },
  focusSubjectTxt:{
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 40
  },
  btnAndTimerView:{
    position: "relative",
    backgroundColor: colors.primary,
    width: "100%",
    height: 180,
    marginTop: 100,
  },
  timerView:{
    position: "absolute",
    top: -60,
    alignSelf: 'center',

    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.04,
    shadowRadius: 8,
    backgroundColor: colors.primary,

    height: 120,
    width: "50%",
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column"
  },

  startPauseBtnView:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  navigationView:{
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 30,
    justifyContent: "space-between"
  }
})