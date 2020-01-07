class ProjectController  {

    constructor(props) {
    }
  
    static async projects(req, res, error) {
      res.render('admin/project', {layout:false});
    }
  
  }
  
module.exports = ProjectController;
      
    