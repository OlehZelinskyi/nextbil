export const NAME = 'name'
export const EMAIL = 'email'
export const PASSWORD = 'password'
export const COUNTRY = 'country'
export const SEX = 'sex'
export const AGREEMENTS = 'agreements'
export const VALIDATE = 'validate'
export const MESSAGE = 'message'


export const VALIDATE_CONFIG = {
  [NAME]: {
    [VALIDATE]: (data: string) => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(data) && data.length <= 20,
    [MESSAGE]: 'Please enter a valid name!'
  },
  [EMAIL]: {
    [VALIDATE]: (data: string) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(data) && data.length <= 30,
    [MESSAGE]: 'Please enter a valid email!'
  },
  [PASSWORD]: {
    [VALIDATE]: (data: string) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(data) && data.length <= 30,
    [MESSAGE]: 'Password must consist at least of 8 charachers and contain letters (min. 1 UPPERCASE) and numbers!'

  },
  [COUNTRY]: {
    [VALIDATE]: (data: string) => !!data,
    [MESSAGE]: 'Please select a country!'
  },
  [SEX]: {
    [VALIDATE]: (data: string) => !!data,
    [MESSAGE]: 'Please select a sex!',

  },
  [AGREEMENTS]: {
    [VALIDATE]: (data: string) => !!data,
    [MESSAGE]: 'Please accept the rules!',
  }
}