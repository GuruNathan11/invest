Service = require('../Service/Service.js');

exports.index = function(err,type)
{
    Service.Service_index(err,type);
    if (err) return console.error(err);
};

exports.add = function(err,type)
{
    Service.Service_add(err,type);
    if (err) return console.error(err);
}

exports.view = function(err,type)
{
    Service.Service_view(err,type);
    if (err) console.error(err);
}

exports.update = function(err,type)
{
    Service.Service_update(err,type);
    if (err) console.error(err);
}

exports.Delete = function(err,type)
{
    Service.Service_Delete(err,type);
    if (err) console.error(err);
}