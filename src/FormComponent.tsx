import React from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

interface FormComponentProps {}

interface FormComponentState {
  fname: string;
  lname: string;
  email: string;
}

class FormComponent extends React.Component<
  FormComponentProps,
  FormComponentState
> {
  constructor(props: FormComponentProps) {
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
    };
  }

  handleChangeEmail = (e: any) => {
    this.setState({email: e});
  };
  handleChangeFname = (e: any) => {
    this.setState({fname: e});
  };
  handleChangeLname = (e: any) => {
    this.setState({lname: e});
  };

  render() {
    console.log({...this.state});
    return (
      <>
        <View>
          <Text style={styles.containerText}>Please Fill This Details</Text>
        </View>

        <View>
          <TextInput
            style={styles.textInputs}
            placeholder="First Name"
            onChangeText={(e: any) => this.handleChangeFname(e)}
            value={this.state.fname}
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.textInputs}
            placeholder="Last Name"
            onChangeText={(e: any) => this.handleChangeLname(e)}
            value={this.state.lname}
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.textInputs}
            placeholder="email"
            onChangeText={(e: any) => this.handleChangeEmail(e)}
            value={this.state.email}
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.viewButton}>
          <View style={styles.viewButton1}>
            <Button
              title="submit"
              color={'red'}
              onPress={() => {
                // eslint-disable-next-line no-alert
                Alert.alert(`your submited data is 
            ${JSON.stringify({...this.state})} `);
              }}
            />
          </View>
        </View>
      </>
    );
  }
}

export default FormComponent;

const styles = StyleSheet.create({
  containerText: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 20,
  },
  textInputs: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    fontSize: 20,
    color: '#000',
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  viewButton1: {
    width: '90%',
    marginTop: 20,
  },
});
