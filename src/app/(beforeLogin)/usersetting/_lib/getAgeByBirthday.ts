export const calculateAge = (birthYear: number, birthMonth: number, birthDay: number) => {
  const today = new Date();
  let age = today.getFullYear() - birthYear;
  const monthDifference = today.getMonth() - birthMonth;
  const dayDifference = today.getDate() - birthDay;

  // If the current month is before the birth month, or it's the birth month but the day hasn't occurred yet, subtract one year from the age.
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}