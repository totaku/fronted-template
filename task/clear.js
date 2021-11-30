const del = require('del');

const path = require('../config/path');

module.exports = function clear() {
    return del(path.root)
}