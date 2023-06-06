const validatePersonalDetails = (
  firstName,
  lastName,
  email,
  street,
  city,
  zipCode,
  phoneNum,
  yearDOB,
  monthDOB,
  dayDOB
) => {
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  if (!firstName || !lastName || !street || !city || !isValidEmail(email)) {
    return false;
  } else if (phoneNum < 100000000 || phoneNum > 9999999999) {
    return false;
  } else if (zipCode < 10000 || zipCode > 99999) {
    return false;
  } else if (yearDOB < 1920 || yearDOB > 2005) {
    return false;
  } else if (monthDOB < 1 || monthDOB > 12) {
    return false;
  } else if (dayDOB < 1 || dayDOB > 31) {
    return false;
  } else {
    return true;
  }
};

export default validatePersonalDetails;
