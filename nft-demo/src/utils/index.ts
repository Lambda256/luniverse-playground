// Function for common use

// Get now date and time
export const convertToTwoDigits = (num: number | string)  => {
  return ("0" + num).slice(-2);
}

export const getNowYYYYMMDD = (): string => {
  const now = new Date(Date.now())
  const yyyy = now.getFullYear();
  const mm = convertToTwoDigits(now.getMonth() + 1);
  const dd = convertToTwoDigits(now.getDate());

  return `${yyyy}-${mm}-${dd}`
}

export const shortAddress = (address: string): string => {
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
};