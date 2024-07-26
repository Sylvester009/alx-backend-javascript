#!/usr/bin/node

import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const uploadPhotoPromise = await uploadPhoto();
    const createUserPromise = await createUser();

    const [uploadPhotoResponse, createUserResponse] = await
      Promise.all([uploadPhotoPromise, createUserPromise]);

    return {
      photo: uploadPhotoResponse,
      user: createUserResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
