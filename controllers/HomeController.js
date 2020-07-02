var Experience = require('../models/Experience');

class HomeController  {

  constructor(props) {
  }

  static async home(req, res, error) {

    Experience.find({}).sort({ createdAt: -1 }).exec()

    .then(function(experience){ 
      res.render('index', {layout: false,experience});
    })
    .catch(function(error){
        res.render('index',{layout: false, error: error});
    })

  }

  static async details(req, res, error) {
    res.render('details', {layout:false});
  }

  static async download(req, res, error) {
    res.download('views/public/VitalisCV.pdf');
  }
  
}

module.exports = HomeController;
    
  