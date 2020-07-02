var Experience = require('../models/Experience');

class ExperienceController  {
  constructor(props) {
  }

  static async experience(req, res, error) {

    if(req.method == 'GET'){
      
      Experience.find({}).sort({ createdAt: -1 }).exec()
      .then(function(experience){
          
          res.render('admin/experience', {layout: false,experience});
      })
      .catch(function(error){
          res.render('admin/experience',{layout: false, error: error});
      })

    }else{

      var experience = new Experience({

        title: req.body.title,
        start_date: req.body.start_date,
        stop_date: req.body.stop_date,
        roles: {
          title: req.body.roles_title,
          responsibilities: req.body.roles_responsibilities
        }
    
      })

      experience.save(function (error) {
        if (error) {
          res.redirect('/experience?response='+ error)
        
        } else {
          res.redirect('/experience?response=Experience Created')
        }

      })

    }

    
    
  }
   
}
  
module.exports = ExperienceController;
      
    