const db = require("../models");
const Pixls = db.pixls;


// Create and Save a new Pixls
exports.create = (req, res) => {
  
};

// Retrieve all Pixls from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    Pixls.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while pixls."
        });
      });
};


exports.findOneFilter = (req, res) => {
    const tokenId = req.params.id;

    var condition = tokenId ? { 'tokenId': tokenId } : {};
    console.log(condition);
    Pixls.find(condition)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Pixls with id " + tokenId });
      else {
        //delete data[0]['_id'];
        var temp = data[0];
        console.log(ret)
        var ret = {
          tokenId: temp.tokenId,
          name: temp.name,
          description: temp.description,
          image: temp.image,
          fileName: temp.fileName
        }
        
        res.send(ret);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Pixls with id=" + tokenId });
    });
}

exports.findFilter = (req, res) => {
    const condition_array = [];
    var condition = {};
    const rocket = req.query.rocket;
    const moon = req.query.moon;
    const window = req.query.window;
    const pattern = req.query.pattern;
    const patternSize = req.query.patternSize;
    const baseColor = req.query.baseColor;
    const colorScheme = req.query.colorScheme;
    const achromatic = req.query.achromatic;
    const dashedLines = req.query.dashedLines;
    if(rocket){
      condition_array.push({"attributes.rocket": {$regex: new RegExp(rocket), $options: "i" }});
    }
    if(moon){
      condition_array.push({"attributes.moon": {$regex: new RegExp(moon), $options: "i" }});
    }
    if(window){
      condition_array.push({"attributes.window": {$regex: new RegExp(window), $options: "i" }});
    }
    if(pattern){
      condition_array.push({"attributes.pattern": {$regex: new RegExp(pattern), $options: "i" }});
    }
    if(patternSize){
      condition_array.push({"attributes.patternSize": {$regex: new RegExp(patternSize), $options: "i" }});
    }
    if(baseColor){
      condition_array.push({"attributes.baseColor": {$regex: new RegExp(baseColor), $options: "i" }});
    }
    if(colorScheme){
      condition_array.push({"attributes.colorScheme": {$regex: new RegExp(colorScheme), $options: "i" }});
    }
    if(achromatic){
      condition_array.push({"attributes.achromatic": {$regex: new RegExp(achromatic), $options: "i" }});
    }
    if(dashedLines){
      condition_array.push({"attributes.dashedLines": {$regex: new RegExp(dashedLines), $options: "i" }});
    }
    var flag = (rocket || moon || window || pattern || patternSize || baseColor || colorScheme || achromatic || dashedLines) ? true: false;

    condition = flag ? {
      $and: condition_array
    } : {};
    
    Pixls.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while pixls."
      });
    });
}
// Find a single Pixls with an id
exports.findOne = (req, res) => {
  
};

