// receives rentalStart and rentalEnd under format 2023-06-13T12:30:00
// returns a number of dates of rental (rounded up)

const rentalLength = (rentalStart, rentalEnd) => {
  const startDateTime = new Date(rentalStart);
  const endDateTime = new Date(rentalEnd);

  const rentalLengthMilli = endDateTime - startDateTime;
  const rentalLengthDays = Math.ceil(rentalLengthMilli / 1000 / 60 / 60 / 24);

  return rentalLengthDays;
};

export default rentalLength;
