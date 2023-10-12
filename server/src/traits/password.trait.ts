import Config from "../shared/services/config.service";

const config = new Config();
function isPasswordStrong(password: string): boolean {
  const uppercaseRegex = /[A-Z]/g;
  const lowercaseRegex = /[a-z]/g;
  const digitRegex = /\d/g;
  const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/g;

  const hasMinLength = password.length >= config.minPasswordLength;
  const hasUppercaseLetters =
    (password.match(uppercaseRegex) || []).length >= config.minUppercase;
  const hasLowercaseLetters =
    (password.match(lowercaseRegex) || []).length >= config.minLowercase;
  const hasDigits =
    (password.match(digitRegex) || []).length >= config.minDigits;
  const hasSpecialCharacters =
    (password.match(specialCharacterRegex) || []).length >=
    config.minSpecialCharacters;

  return (
    hasMinLength &&
    hasUppercaseLetters &&
    hasLowercaseLetters &&
    hasDigits &&
    hasSpecialCharacters
  );
}

export default isPasswordStrong;
