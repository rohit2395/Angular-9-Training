export const ERROR_MESSAGE = {
    required: () => `This field is required`,
    minlength: (par) => `Min ${par.requiredLength} chars is required`,
    zipCode: (par) => `Allowed pincode is ${par.allowedCode}`,
  };
  