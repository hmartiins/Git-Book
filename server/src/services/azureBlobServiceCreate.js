const config = require('../config/config');
const azure = require('azure-storage');
const crypto = require('crypto');

function azureCreate(blobContainerName, image) {
  const blobService = azure.createBlobService(config.containerConnectionString);

  let fileName = crypto.randomBytes(20).toString('hex') + '.png';

  const rawDataImage = image;
  const matches = rawDataImage.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  const type = matches[1];
  const buffer = new Buffer.from(matches[2], 'base64');

  let publisher_logo =
    `https://gitbook.blob.core.windows.net/${blobContainerName}/${fileName}`;

  blobService.createBlockBlobFromText(blobContainerName, fileName, buffer, {
    contentType: type
  }, (err, result, response) => {
    if (err) {
      fileName = 'default-publisher.png'
    }
  });

  return publisher_logo;
}

module.exports = azureCreate;
