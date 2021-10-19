import {showMessage} from 'react-native-flash-message';

export default type => {
  switch (type) {
    case 'auth/email-already-in-use':
      return showMessage({
        type: 'danger',
        message: 'Mail adresiniz zaten kayıtlı ',
      });
    case 'auth/wrong-password':
      return showMessage({
        type: 'danger',
        message: 'Lütfen şifrenizi tekrar giriniz',
      });
    case 'auth/invalid-email':
      return showMessage({
        type: 'warning',
        message: 'Lütfen düzgün bir mail adresi giriniz',
      });
    case 'auth/weak-password':
      return showMessage({type: 'warning', message: 'Zayıf Şifre'});

    case 'auth/user-not-found':
      return showMessage({
        type: 'danger',
        message: 'Böyle bir kullanıcı bulunamadı',
      });
    default:
      break;
  }
};
