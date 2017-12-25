
const IP_ADDRESS = '185.82.202.214';
const PORT = '3000';
const URL = `http://${IP_ADDRESS}:${PORT}`;

export const facebook = {
  clientID: '806797486157972',
  clientSecret: 'd52b0bf85fdbfdd57073d27afcf28fcf',
  callbackURL: `${URL}/auth/facebook/callback`,
  profileFields: ['id', 'name', 'displayName', 'picture', 'email'],
};

export const vkontakte = {
  clientID: '6116024',
  clientSecret: 'ytJDkCm5PFg0ZFQqO1LR',
  callbackURL: `${URL}/auth/vkontakte/callback`,
  // scope: ['status', 'email', 'friends', 'notify'] 
};
