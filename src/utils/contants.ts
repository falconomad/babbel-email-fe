export const GENERATE = "Generate Email";

export const FORM_MESSAGES = {
  NAME: "Please input your full name",
  DOMAIN: "Please input your company domain",
  INVALID_NAME: "Invalid name format",
  INVALID_DOMAIN: "Invalid domain format",
};

export const FORM_LABELS = {
  NAME: "Full Name",
  DOMAIN: "Company Domain",
};

export const domainRegex =
  /^(?!www\.)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})+$/;
export const nameRegex = /^[a-zA-Z ]*$/;

export const nameOnlySpacesRegex = /^\s*$/;

export const AppTitle = "Email-Id Generator";
