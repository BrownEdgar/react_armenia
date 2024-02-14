const convertDate = (hours) => {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  return date.toLocaleDateString()
}


export default convertDate