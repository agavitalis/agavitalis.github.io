class DashboardController  {

    constructor(props) {
    }
  
    static async dashboard(req, res, error) {
      res.render('admin/dashboard', {layout:false});
    }
  
  }
  
  module.exports = DashboardController;
      
    