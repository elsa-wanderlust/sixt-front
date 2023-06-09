// receives DOB of driver (day, month and year values) and vehicule's min driving age
// returns an error message if too old or too young, returns empty string otherwise.

const validateDriverAge = (dayDOB, monthDOB, yearDOB, minAge) => {
  // calculate driver's age in milliseconds
  const day = dayDOB < 10 ? `0${dayDOB}` : dayDOB;
  const month = dayDOB < 10 ? `0${monthDOB}` : monthDOB;
  const ageMilli = new Date(`${month}/${day}/${yearDOB}`).getTime();
  // calculate today's date in milliseconds
  const todayMilli = Date.now();
  // calculate drivers age
  let driversAge = 0;
  // if drivers born before 1/1/1970
  if (ageMilli < 0) {
    driversAge = Math.floor(
      (-ageMilli + todayMilli) / 1000 / 3600 / 24 / 365.25
    );
    // if drivers born after 1/1/1970
  } else {
    driversAge = (todayMilli - ageMilli) / 1000 / 3600 / 24 / 365.25;
  }
  // returns message depending on age
  let message = "";
  if (driversAge > 150) {
    message = `${driversAge} ans semble être un âge bien avancé pour louer un véhicule...`;
  } else if (driversAge < minAge) {
    message = `L'âge minimum pour louer ce véhicule est de ${minAge} ans`;
  }
  return message;
};

export default validateDriverAge;
