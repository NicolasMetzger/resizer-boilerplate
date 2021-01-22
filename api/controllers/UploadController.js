/**
 * UploadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	create: async function (req, res) {
	  req.file('image').upload({
		// don't allow the total upload size to exceed ~10MB
		maxBytes: 10000000
	  },function whenDone(err, uploadedFiles) {
		if (err) {
		  return res.serverError(err);
		}
		
		console.log(uploadedFiles);

		// If no files were uploaded, respond with an error.
		if (uploadedFiles.length === 0){
		  return res.badRequest('No file was uploaded');
		}
		
		Image.create({
		  name: uploadedFiles[0].name,
		  path: uploadedFiles[0].fd,
		  uploader: req.user.id,
		})
		.exec(function (err){
		  if (err) return res.serverError(err);
		  return res.ok();
		});
	  });
	},

	show: async function (req, res){
		
	}

};

