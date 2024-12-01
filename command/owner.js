const axios = require("axios");
const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone'); 

module.exports = {
  name: 'owner',
  description: 'Get owner information and a image',
  author: 'ArYAN',
  async execute(senderId, args, pageAccessToken, sendMessage) {
    try {
      const ownerInfo = {
        name: 'ArYAN',
        gender: 'Male',
        age: '18+',
        height: 'Null',
        facebookLink: 'https://www.facebook.com/ARYAN.NOOBS.404',
        nick: '亗  Ar YANㅤ亗'
      };

      sendMessage(senderId, { text: 'Loading owner information and image...' }, pageAccessToken);

      try {
        // Download the image (same as before)
        const imageUrl ='https://i.imgur.com/vbF4iBJ.jpeg'; // Replace with your Google Drive image id
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        const tmpFolderPath = path.join(__dirname, 'tmp');
        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const imagePath = path.join(tmpFolderPath, 'owner_image.jpeg');
        fs.writeFileSync(imagePath, Buffer.from(imageResponse.data, 'binary'));

        // Construct the response message with a link to the image
        const response = `Owner Information:🧾\nName: ${ownerInfo.name}\nGender: ${ownerInfo.gender}\nAge: ${ownerInfo.age}\nHeight: ${ownerInfo.height}\nFacebook: ${ownerInfo.facebookLink}\nNick: ${ownerInfo.nick}\n\nHere's the video: ${videoUrl}`;

        // Send the message with the image link
        sendMessage(senderId, { text: response }, pageAccessToken);

        // Delete the temporary image file after sending
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log("File deleted successfully:", imagePath);
          }
        });

      } catch (error) {
        console.error("Error occurred:", error);
        sendMessage(senderId, { text: `An error occurred: ${error.message}` }, pageAccessToken);
      } finally {
        sendMessage(senderId, { text: 'Owner information and image loaded!' }, pageAccessToken);
      }

    } catch (error) {
      console.error('Error getting owner information and video:', error);
      sendMessage(senderId, { text: 'There was an error getting owner information and video. Please try again later.' }, pageAccessToken);
    }
  }
};
          
