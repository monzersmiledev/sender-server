const express = require('express'),
    deleteFileEndPoint = express(),
    requestHandeler = require('../controlers/deleteFile').deleteFileHelper;
/*

DELETE /delete/:id

 param "id" is the file id need to delete
*/
deleteFileEndPoint.get('/delete/:id', requestHandeler);

module.exports = deleteFileEndPoint;