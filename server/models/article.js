import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Fyll inn en tittel'],
      trim: true,
    },
    slug: String,
    ingress: {
      type: String,
      required: [true, 'Fyll inn ingressen til artikkelen'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Fyll inn innholdsteksten til artikkelen'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Fyll inn en forfatter'],
      trim: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Fyll inn en kategori'],
    },
    admin: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ArticleSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
