import * as React from 'react';
import { List } from 'react-native-paper';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert, Button, Linking, TextInput } from 'react-native'

const MyComponent = () => {
  const [expanded1, setExpanded1] = React.useState(true);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [Name, SetName] = React.useState("");
  const [Age, SetAge] = React.useState("");
  const [PetName, SetPetName] = React.useState("");
  const [Agreement, SetAgreement] = React.useState(false);
  const [NameError, SetError] = React.useState(false);
  const [nameError, Setnerror] = React.useState("");
  const [PetError, SetPetError] = React.useState(false);
  const [petnameError, Setpeterror] = React.useState("");
  const [AgeError, SetAgeError] = React.useState(false);
  const [ageError, Setaerror] = React.useState("");
  const [input,setInput]= React.useState(false)
  const handlePress = () => setExpanded(!expanded);

  const adminEnum = { Cat: 'Cat', Dog: 'Dog', Horse: 'Horse' };


  const FullnameHandler = FullnameText => {
    SetName(FullnameText.replace(/[^A-Za-z]+[^A-Za-z]/g, ''))
    setInput(true)
  }
  const FullpetnameHandler = FullpetnameText => {
    SetPetName(FullpetnameText.replace(/[^A-Za-z]+[^A-Za-z]/g, ''))
  }
  const AgeHandler = AgeText => {
    SetAge(AgeText.replace(/[^0-9]/g, '')),
    setInput(true)
  }

  const checkboxHandler = () => {
    SetAgreement(!Agreement);
  }



  return (
    <List.Section>
      <List.Accordion
        expanded={expanded1}
        title="Personal Info">
        <List.Item title="Name" />
        <TextInput
          style={styles.inputField}
          blurOnSubmit
          autoCorrect={false}
          placeholder='Name'
          keyboardType="ascii-capable"
          onChangeText={FullnameHandler}
          value={Name}
          maxLength={25}
        />
        {!!NameError && (
          <Text style={{ color: "red" }}>{nameError}</Text>
        )}
        <List.Item title="Age" />
        <TextInput
          style={styles.inputField}
          blurOnSubmit
          autoCorrect={false}
          placeholder='Age'
          keyboardType="-capable"
          onChangeText={AgeHandler}
          value={Age}
          type='number'
          min="1"
          maximum='120'
        />
        {!!AgeError && (
          <Text style={{ color: "red" }}>{ageError}</Text>
        )}
        <Button title="Next" onPress={() => {
          if (Name.trim() === "") {
            SetError(true)
            Setnerror("Name required.");
          }
          if (!Name.trim() == "") {
            setInput(true)
            SetError(false)
          }
          if (Age.trim() === "") {
            SetAgeError(true)
            Setaerror("Age required.");
          }
          if (!Age.trim() == "") {
            setInput(true)
            SetAgeError(false)
          }
          console.log('NameError:'+NameError)
          console.log('AgeError:'+AgeError)
          if(NameError==false && AgeError==false){
            if(input==true){
            setExpanded1(false)
            setExpanded2(true)
            setInput(false)
            }
          }
        }
        

        } />
      </List.Accordion>

      <List.Accordion
        title="Pet Info"
        expanded={expanded2}
        onPress={handlePress}>
        <List.Item title="Name" />
        <TextInput
          style={styles.inputField}
          blurOnSubmit
          autoCorrect={false}
          placeholder='Pet Name'
          keyboardType="ascii-capable"
          onChangeText={FullpetnameHandler}
          value={PetName}
        />
        {!!PetError && (
          <Text style={{ color: "red" }}>{ageError}</Text>
        )}
        <List.Item title="Type" />
        <Button title="Next" onPress={() => {
           if (PetName.trim() === "") {
               SetError(true)
               SetPetError("Name required.");
          }
          if (!PetName.trim() == "") {
            SetError(false)
           setInput(true)
        }
        if(PetError==false){
            if(input==true){
              setExpanded2(false)
              setExpanded3(true)
            }
          }
        }} />
      </List.Accordion>
        
      <List.Accordion
        title="Agreement"
        expanded={expanded3}
        onPress={handlePress}>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <Text> I agree to terms and conditions</Text>
          <Button title="Next" onPress={() => {
            if(Agreement==true){
             Alert.alert(
              'All Info',
              'Name: '+Name,
              'Age: '+Age,
              'Pet Name: '+PetName,
              'Pet Type: '
              [
                {text: 'OK'}
              ],
              {cancelable: false},
            );
            setExpanded3(false)
            }
        }} />
      </List.Accordion>
    </List.Section>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 250,
    height: 80,
    // justifyContent: 'center',
    // paddingBottom: 20 ,
    // borderRadius: 10
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  ImageContainer: {
    width: 200,
    height: 80,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default MyComponent;