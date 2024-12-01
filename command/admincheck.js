module.exports = {
  name: 'admincheck',
  description: 'Check if you are an admin',
  author: 'ArYAN',
  async execute(senderId, args, pageAccessToken, sendMessage, adminUIDs) {
    if (adminUIDs.includes(senderId.toString())) {
      sendMessage(senderId, { text: 'You are an admin!' }, pageAccessToken);
    } else {
      sendMessage(senderId, { text: 'You are not an admin.' }, pageAccessToken);
    }
  }
};
