import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import FormComponent from './src/FormComponent';
const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={require('./bg.jpeg')}
          resizeMode="cover"
          style={styles.image}>
          <FormComponent />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  image: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
});
