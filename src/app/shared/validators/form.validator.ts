export const PATTERN_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PASSWORD_MINLENGTH = 8;
export const PATTERN_PASSWORD = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
export const NAME_MAXLENGTH = 20;
export const PATTERN_BIRTHDAY = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
export const PATTERN_PHONE = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

export function emailValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    pattern: {
      value: PATTERN_EMAIL,
      message: 'Email is invalid',
    }
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
export function firstNamedValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    maxLength: {
      value: NAME_MAXLENGTH,
      message: "First name cannot exceed 20 characters"
    }
  }
}
export function lastNamedValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    maxLength: {
      value: NAME_MAXLENGTH,
      message: "Last name cannot exceed 20 characters"
    }
  }
}
export function birthdayValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    pattern: {
      value: PATTERN_BIRTHDAY,
      message: 'Date of Birth must be a valid date in the format DD-MM-YYYY',
    }
  }
}
export function phoneValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    pattern: {
      value: PATTERN_PHONE,
      message: 'Phone number is 10 digit with format xxx-xxx-xxxx',
    }
  }
}
export function displayNameValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    }
  }
}
