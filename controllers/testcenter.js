
module.exports.home=(req,resp)=>{
    console.log("hello");
     resp.render("test_location");
}


const testcenter=require('../model/test_location');
const map=require('../model/map');

module.exports.add=(req, resp) =>{
    console.log(req.body);
    
    try {
          testcenter.create({
            name: req.body.name1,
            x: req.body.x,
            y: req.body.y,
            count: req.body.count,
            max: req.body.max,
          })

          map.create({
            name: req.body.name1,
            x: req.body.x,
            y: req.body.y,
          });
          
          resp.redirect('/home');

    } catch (error) {
        console.log(`${error}`)
        return resp.send(error);

    }

  

}
