import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    category: {
      type: String,
      required: [true, 'Fyll inn navn på kategori'],
      trim: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CategorySchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'category',
  justOne: false,
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
