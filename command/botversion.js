module.exports = {
  name: 'botversion',
  description: 'Shows the current version of the bot',
  author: 'ArYAN', // Replace with your name
  async execute(senderId, args, pageAccessToken, sendMessage) {
    const version = '1.15.60'; // Replace with your actual bot version
    sendMessage(senderId, {
      text: `Version bot is ${version}`
    }, pageAccessToken);
  }
};
