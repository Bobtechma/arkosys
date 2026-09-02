const CONTACT_NUMBERS = [
  '5598987481998',
  '5598986101224',
  '5598981279111'
];

/**
 * Returns a random phone number from the configured list (digits only with country code)
 */
export const getRandomPhone = () => {
  const index = Math.floor(Math.random() * CONTACT_NUMBERS.length);
  return CONTACT_NUMBERS[index];
};

/**
 * Formats a 13-digit Brazilian phone number: 5598987481998 -> (98) 98748-1998
 */
export const formatPhoneNumber = (phone) => {
  const clean = phone.replace(/\D/g, '');
  const ddd = clean.slice(2, 4);
  const part1 = clean.slice(4, 9);
  const part2 = clean.slice(9);
  return `(${ddd}) ${part1}-${part2}`;
};

/**
 * Generates a WhatsApp direct link using a randomized representative phone number
 */
export const createWhatsAppUrl = (message = '') => {
  const selectedPhone = getRandomPhone();
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${selectedPhone}?text=${encodedText}`;
};

export { CONTACT_NUMBERS };
