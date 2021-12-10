import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../utils/Colors'
export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    width: Dimensions.get('window').width,
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
    width: Dimensions.get('window').width /1.5,
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column"
  },

  startPauseBtnView:{
    width: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems: "center"
  },

  navigationView:{
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: Dimensions.get('window').width,
    padding: 30,
    justifyContent: "space-between"
  }
})