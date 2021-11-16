export const PATTERN_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PATTERN_PASSWORD = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
export const PASSWORD_MINLENGTH = 8;
export const NAME_MAXLENGTH = 20;

export function emailValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    pattern: {
      value: PATTERN_EMAIL,
      message: 'Email is invalid',
    },
  }
}

export function passwordValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    minLength: {
      value: PASSWORD_MINLENGTH,
      message: "Password must have at least 8 characters"
    },
    pattern: {
      value: PATTERN_PASSWORD,
      message: 'Password must contain at least one number and lowercase letter',
    }
  }
}
export function firstNameValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    minLength: {
      value: NAME_MAXLENGTH,
      message: "First name cannot exceed 20 characters"
    }
  }
}
export function lastNameValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    minLength: {
      value: NAME_MAXLENGTH,
      message: "Last name cannot exceed 20 characters"
    }
  }
}
