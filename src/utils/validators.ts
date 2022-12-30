import { FORM_MESSAGES } from "./contants";
import { domainRegex, nameOnlySpacesRegex, nameRegex } from "./regex";

export const NameValidations = [
  {
    required: true,
    message: FORM_MESSAGES.NAME,
  },
  {
    message: FORM_MESSAGES.INVALID_NAME,
    validator: (_: any, value: string) => {
      if (nameRegex.test(value)) {
        return Promise.resolve();
      } else {
        return Promise.reject("Error");
      }
    },
  },
  {
    message: FORM_MESSAGES.INVALID_NAME,
    validator: (_: any, value: string) => {
      if (!nameOnlySpacesRegex.test(value)) {
        return Promise.resolve();
      } else {
        return Promise.reject("Error");
      }
    },
  },
];

export const DomainValidations = [
  {
    required: true,
    message: FORM_MESSAGES.DOMAIN,
  },
  {
    message: FORM_MESSAGES.INVALID_DOMAIN,
    validator: (_: any, value: string) => {
      if (domainRegex.test(value)) {
        return Promise.resolve();
      } else {
        return Promise.reject("Error");
      }
    },
  },
];
