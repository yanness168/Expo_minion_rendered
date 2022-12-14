import { Image, StyleSheet, View } from 'react-native';
const captain = require('./assets/minion_captain.jpg');
const koushui = require('./assets/minion_koushui.jpg');
const otto = require('./assets/minion_otto.jpg');
const panda = require('./assets/minion_panda.jpg');
const sleep = require ('./assets/minion_sleep.jpg');
const soccer = require ('./assets/minion_soccer.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri:captain}} style={[styles.child, {backgroundColor:'#eaeaea'} ]}/>
      <Image source={{uri:koushui}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:otto}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:panda}} style={[styles.child, {backgroundColor: 'yellow'}]}/>
      <Image source={{uri:sleep}} style={[styles.child, {backgroundColor: 'pink'} ]}/>
      <Image source={{uri:soccer}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:captain}} style={[styles.child, {backgroundColor:'#eaeaea'} ]}/>
      <Image source={{uri:koushui}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:otto}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:panda}} style={[styles.child, {backgroundColor: 'yellow'}]}/>
      <Image source={{uri:sleep}} style={[styles.child, {backgroundColor: 'pink'} ]}/>
      <Image source={{uri:soccer}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:captain}} style={[styles.child, {backgroundColor:'#eaeaea'} ]}/>
      <Image source={{uri:koushui}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:otto}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:panda}} style={[styles.child, {backgroundColor: 'yellow'}]}/>
      <Image source={{uri:sleep}} style={[styles.child, {backgroundColor: 'pink'} ]}/>
      <Image source={{uri:soccer}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:captain}} style={[styles.child, {backgroundColor:'#eaeaea'} ]}/>
      <Image source={{uri:koushui}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:otto}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:panda}} style={[styles.child, {backgroundColor: 'yellow'}]}/>
      <Image source={{uri:sleep}} style={[styles.child, {backgroundColor: 'pink'} ]}/>
      <Image source={{uri:soccer}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:captain}} style={[styles.child, {backgroundColor:'#eaeaea'} ]}/>
      <Image source={{uri:koushui}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:otto}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:panda}} style={[styles.child, {backgroundColor: 'yellow'}]}/>
      <Image source={{uri:sleep}} style={[styles.child, {backgroundColor: 'pink'} ]}/>
      <Image source={{uri:soccer}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:captain}} style={[styles.child, {backgroundColor:'#eaeaea'} ]}/>
      <Image source={{uri:koushui}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:otto}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:panda}} style={[styles.child, {backgroundColor: 'yellow'}]}/>
      <Image source={{uri:sleep}} style={[styles.child, {backgroundColor: 'pink'} ]}/>
      <Image source={{uri:soccer}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:captain}} style={[styles.child, {backgroundColor:'#eaeaea'} ]}/>
      <Image source={{uri:koushui}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:otto}} style={[styles.child, {backgroundColor: '#eaeaea'} ]}/>
      <Image source={{uri:panda}} style={[styles.child, {backgroundColor: 'yellow'}]}/>
      <Image source={{uri:sleep}} style={[styles.child, {backgroundColor: 'pink'} ]}/>
      <Image source={{uri:soccer}} style={[styles.child, {backgroundColor: 'black'} ]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  child: {
    width: 100, 
    height: 100,
    margin: 10,
    borderWidth:1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    direction: 'ltr',
    alignItems: 'flex-start',
  },
});
