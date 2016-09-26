var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ShockSchema = new Schema({
  front: {
    length: Number,
    manufacturer: String,
    link: String
  },
  rear:
  {
    length: Number,
    manufacturer: String,
    link: String
  }
});

var LiftBlockSchema = new Schema({
  front: {
      height: Number,
      manufacturer: String,
      link: String
    },
    rear: {
      height: Number,
      manufacturer: String,
      link: String
    }
});

var SpringSchema = new Schema({
  front: {
    length: Number,
    diameter: Number,
    springRate: Number,
    manufacturer: String,
    link: String
  },
  rear: {
    length: Number,
    diameter: Number,
    springRate: Number,
    manufacturer: String,
    link: String
  }
}); 

var SpacerSchema = new Schema({
  front:
  {
    width: Number,
    manufacturer: String,
    link: String
  }
});

var CRVSchema = new Schema({
  year: String,
  trim: String,
  transmission: String,
  color: String,
  tireWidth: Number,
  tireRatio: Number,
  wheelWidth: Number,
  wheelDiameter: Number,
  wheelOffset: Number,
  spacers: SpacerSchema, 
  stockSuspension: Boolean,
  engineModifications: [String],
  springs: SpringSchema,
  shocks: ShockSchema,
  liftBlocks: LiftBlockSchema,
  otherModifications: [String],
  requiredBodyModifications: [String],
  optionalBodyModifications: [String],
  images: [String]
});

CRVSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('CRV', CRVSchema);