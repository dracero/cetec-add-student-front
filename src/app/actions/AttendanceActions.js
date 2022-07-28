export const EMAIL = "EMAIL";
export const DATE = "DATE";
export const COURSE = "COURSE";
export const IMAGE = "IMAGE";

export const email = (newEmail) => ({
  type: EMAIL,
  newEmail
});

export const date = (newDate) => ({
  type: DATE,
  newDate
});

export const course = (newCourse) => ({
  type: COURSE,
  newCourse
});

export const image = (newImage) => ({
  type: IMAGE,
  newImage
});