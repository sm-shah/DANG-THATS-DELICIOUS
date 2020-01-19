const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs')

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is Required BRO!!!'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]
});
storeSchema.pre('Save', function (next) {
    if (!this.isModified('name')) {
        next();
        return;
    }
    this.slug = slug(this.name);
    // TODO make more relient so slugs are unique;  
    next();
})

module.exports = mongoose.model('Store', storeSchema);