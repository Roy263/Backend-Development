const NodeCache = require('node-cache');
const myCache = new NodeCache();

exports.SetCache=(key,value)=>{
    myCache.set(key,value);
}
exports.GetCache=(key)=>{
    return myCache.get(key);
}