export const EMAIL = "EMAIL";
export const NAME = "NAME";
export const IMAGE = "IMAGE";

export const email = (newEmail) => ({
  type: EMAIL,
  newEmail
})

export const name = (newName) => ({
  type: NAME,
  newName
});

export const image = (newImage) => ({
  type: IMAGE,
  newImage
});