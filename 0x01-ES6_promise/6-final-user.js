import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(filename);
  const promises = [promise1, promise2];
  return Promise.allSettled(promises).then((values) => {
    const result = [];
    values.forEach((value) => {
      if (value.status === 'fulfilled') {
        result.push({ status: value.status, value: value.value });
      } else {
        result.push({ status: value.status, value: `${value.reason}` });
      }
    });
    return result;
  });
}
