// validate if personal details are correct before enabling button
// NB - at this stage, only checks if driver is born between the years 1000 and 3000
// (specific age requirements is checked with "validateDriverAge" function, called in handleSubmit function

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
  } else if (yearDOB < 1000 || yearDOB > 3000) {
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
