export const PATTERN_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PATTERN_PASSWORD = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
export const PATTERN_BIRTHDAY = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
export const PATTERN_PHONE = /^[0]\d{9,9}$/;
export const PASSWORD_MINLENGTH = 8;
export const NAME_MAXLENGTH = 20;
export const TITLE_MINLENGTH = 20;
export const DESCRIPTION_MINLENGTH = 50;
export const CONTENT_MINLENGTH = 100;

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
      message: 'Password must have at least 8 characters'
    },
    pattern: {
      value: PATTERN_PASSWORD,
      message: 'Password must contain at least one number and lowercase letter and special character',
    }
  }
}
export function userNameValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    }
  }
}
export function firstNameValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    maxLength: {
      value: NAME_MAXLENGTH,
      message: 'First name cannot exceed 20 characters'
    }
  }
}
export function lastNameValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    maxLength: {
      value: NAME_MAXLENGTH,
      message: 'Last name cannot exceed 20 characters'
    }
  }
}
export function birthDayValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    pattern: {
      value: PATTERN_BIRTHDAY,
      message: 'Date of Birth must be a valid date in the format DD-MM-YYYY'
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
      message: 'Phone number is 10 digit with format 0xxxxxxxxx'
    }
  }
}
export function titleValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    minLength: {
      value: TITLE_MINLENGTH,
      message: 'Title should be from 20 characters'
    }
  }
}
export function descriptionValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    minLength: {
      value: DESCRIPTION_MINLENGTH,
      message: 'Description should be from 50 characters'
    }
  }
}
export function contentValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    },
    minLength: {
      value: CONTENT_MINLENGTH,
      message: 'Content should be from 100 characters.'
    }
  }
}
export function requireValidator(isRequired?: boolean) {
  return {
    required: {
      value: isRequired || true,
      message: 'This field is required'
    }
  }
}

