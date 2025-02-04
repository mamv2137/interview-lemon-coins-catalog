import { statusCodes } from '@react-native-google-signin/google-signin';

const errorMessages = {
  default: 'Hubo un error, intenta mas tarde',
  [statusCodes.SIGN_IN_CANCELLED]: 'El usuario cancelo el proceso de autenticacion',
};

export const getMessageErrorByType = (type: string) => {
  return errorMessages[type] || errorMessages.default;
};
