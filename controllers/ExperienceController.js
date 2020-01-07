class ExperienceController  {

    constructor(props) {
    }
  
    static async experience(req, res, error) {
      res.render('admin/experience', {layout:false});
    }
  
}
  
module.exports = ExperienceController;
      
    