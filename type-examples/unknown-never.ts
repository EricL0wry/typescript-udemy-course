let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput;

function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);