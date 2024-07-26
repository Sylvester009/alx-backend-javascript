import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const settled = [];

  try {
    const user = await signUpUser(firstName, lastName);
    settled.push({
      status: 'fulfilled',
      value: user,
    });
  } catch (error) {
    settled.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  try {
    const photo = await uploadPhoto(fileName);
    settled.push({
      status: 'fulfilled',
      value: photo,
    });
  } catch (error) {
    settled.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return settled;
}
