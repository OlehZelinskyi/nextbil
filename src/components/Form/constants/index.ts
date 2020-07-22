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
    [VALIDATE]: (data: string) => /^[a-zA-Z]+$/g.test(data) && data.length <= 20,
    [MESSAGE]: 'Please enter a valid name!'
  },
  [EMAIL]: {
    [VALIDATE]: (data: string) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(data) && data.length <= 30,
    [MESSAGE]: 'Please enter a valid email!'
  },
  [PASSWORD]: {
    [VALIDATE]: (data: string) => /^.{6,}$/g.test(data) && data.length <= 30,
    [MESSAGE]: 'Password must consist at least of 6 charachers '

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