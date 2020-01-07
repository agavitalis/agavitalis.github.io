class HomeController  {

  constructor(props) {
  }

  static async home(req, res, error) {
    res.render('index', {layout:false});
  }

  static async details(req, res, error) {
    res.render('details', {layout:false});
  }
  

}

module.exports = HomeController;
    
  