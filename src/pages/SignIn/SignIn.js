import React, {useState} from 'react';
import {View, Text, TextInput, NavigatorIOS} from 'react-native';
import styles from './SignIn.style';
import Button from '../../components/Button';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import showMessageFunction from '../../utils/showMessageFunction';

const SignIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const initialFormValues = {
    userMail: '',
    password: '',
    repassword: '',
  };
  const handleFormSubmit = formValues => {
    if (
      !(formValues.userMail && formValues.password && formValues.repassword)
    ) {
      return showMessage({
        type: 'danger',
        message: 'Lütfen gerekli yerleri doldurun',
      });
    }

    if (formValues.password !== formValues.repassword) {
      showMessage({
        type: 'warning',
        message: 'Şifreler aynı olmak zorunda ',
      });
      return;
    }
    setLoading(true);

    auth()
      .createUserWithEmailAndPassword(formValues.userMail, formValues.password)
      .then(result => {
        showMessage({type: 'success', message: 'Created Succesfully'});
        setLoading(false);

        navigation.navigate('LoginPage');
      })
      .catch(err => {
        showMessageFunction(err.code);
        setLoading(false);
      });
  };
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
      {({handleChange, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>codetalks</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoFocus
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
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <TextInput
              style={styles.textInput}
              value={values.repassword}
              placeholder="şifrenizi tekrar giriniz"
              placeholderTextColor="white"
              onChangeText={handleChange('repassword')}
              secureTextEntry
            />
            <Button
              text="Kayıt Ol "
              type="primary"
              onPress={handleSubmit}
              access={loading}
            />
            <Button
              text="Geri Dön"
              type="secondary"
              onPress={() => navigation.goBack()}
              access={true}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
