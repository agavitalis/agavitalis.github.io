class ProjectController  {

  constructor(props) {
  }

  static async project(req, res, error) {

    if(req.method == 'GET'){
      
      Project.find({}).exec()
      .then(function(project){
          
          res.render('admin/project', {layout: false,project});
      })
      .catch(function(error){
          res.render('admin/project',{layout: false, error: error});
      })

    }else{

      var project = new project({

        title: req.body.title,
        start_date: req.body.start_date,
        stop_date: req.body.stop_date,
        roles: {
          title: req.body.roles_title,
          responsibilities: req.body.roles_responsibilities
        }
    
      })

      project.save(function (error) {
        if (error) {
          res.redirect('admin/project/?response='+ error)
        
        } else {
          res.redirect('admin/project/?response= project Created')
        }

      })

    }

    
    
  }
  
  }
  
module.exports = ProjectController;
      
    