export function upgradeToPremium(user, paymentToken) {
  user.premium = true;
  // TODO: actually charge paymentToken
  return user;
}