const mongoose = require('mongoose');

const PixlsSchema = new mongoose.Schema({
        tokenId: {
          type: Number,
          required: true
        },
        artworkId: {
          type: Number
        },
        name: {
          type: String
        },
        description: {
          type: String
        },
        external_url: {
          type: String
        },
        image: {
          type: String
        },
        hash_256: {
          type: String
        },
        hash_ipfs: {
          type: String
        },
        attributes: {
          hitchHider: {
            type: String
          },
          rocket: {
            type: String
          },
          moon: {
            type: String
          },
          window: {
            type: String
          },
          pattern: {
            type: String
          },
          patternSize: {
            type: String
          },
          baseColor: {
            type: String
          },
          colorScheme: {
            type: String
          },
          achromatic: {
            type: String
          },
          dashedLines: {
            type: String
          }
        },
        published: Boolean
      },
      { timestamps: true }
    );
  
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });
   module.exports = mongoose.model('Pixls', PixlsSchema)
