import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
    marginBottom: 10,
    fontSize: 10,
    width: '100%',
    // height: '100%'
  },
  labelText:{
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputStyles:{
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    width:'100%',
  },
  inputArea:{
    borderColor: 'black',
    borderWidth: 2,
    width:'100%',
    height: 100,
    textAlignVertical: 'top',
  },
  buttonText:{
    fontSize: 25,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    color:'white',
    fontWeight: 'bold',
    backgroundColor: 'black',
    marginTop: 30,
  },
  imageTop:{
    padding: 40,
    alignItems: 'flex-end',
  }
});