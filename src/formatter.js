// Format user data using destructuring + template literals
export const formatUser = ({ name, email, address: { city } }) => {
  return `👤 ${name}\n📧 ${email}\n🏙️ ${city}\n`;
};
