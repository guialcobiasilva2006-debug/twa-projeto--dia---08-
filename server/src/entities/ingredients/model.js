import mongoose from 'mongoose'

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome do ingrediente é obrigatório.'],
    trim: true,
    minlength: [2, 'O nome deve ter pelo menos 2 caracteres.']
  },
  category: {
    type: String,
    required: [true, 'A categoria é obrigatória.'],
    enum: ['Vegetal', 'Fruta', 'Carne', 'Lacticínios', 'Outro']
  },
  caloriesPer100g: {
    type: Number,
    min: [0, 'As calorias não podem ser negativas.']
  },
  description: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Ingredient', ingredientSchema)