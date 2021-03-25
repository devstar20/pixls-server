const mongoose = require('mongoose');

const AttrSchema = new mongoose.Schema({
        tokenId: {
          type: Number,
          required: true
        },
        artworkId: {
          type: Number
        }
      },
      { timestamps: true }
    );
  
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });
   module.exports = mongoose.model('Pixls', PixlsSchema)
