import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Login.styles';
import Button from '../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import showMessageFunction from '../../utils/showMessageFunction';
const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const initialFormValues = {
    userMail: '',
    password: '',
  };

  const handleFormSubmit = async formValues => {
    if (!(formValues.userMail && formValues.password)) {
      showMessage({
        type: 'danger',
        message: 'Lütfen email ve şifrenizi giriniz',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.userMail,
        formValues.password,
      );
      setLoading(false);
      showMessage({type: 'success', message: 'Giriş Başarılı.'});
      navigation.navigate('Odalar');
    } catch (err) {
      console.log(err);
      showMessageFunction(err.code);
      setLoading(false);
    }
  };
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
      {({handleSubmit, handleChange, values}) => (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>codetalks</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="e-posta adresinizi giriniz"
              value={values.userMail}
              onChangeText={handleChange('userMail')}
            />
            <TextInput
              style={styles.textInput}
              placeholder="şifrenizi giriniz"
              placeholderTextColor="white"
              value={values.password}
              secureTextEntry
              onChangeText={handleChange('password')}
            />
            <Button
              access={loading}
              text="Giriş Yap"
              type="primary"
              onPress={handleSubmit}
            />
            <Button
              text="Kayıt Ol "
              type="secondary"
              onPress={() => navigation.navigate('SignInPage')}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
