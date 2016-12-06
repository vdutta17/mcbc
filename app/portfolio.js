exports.findAll = function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};

exports.findByType = function(req, res) {
    res.send({type:req.params.type, filelocation: "service_1.JPG", name: "Black BoB", description:"Black BoB" , subImages :[{filelocation: "service_1_1.JPG"},{filelocation: "service_1_2.JPG"},{filelocation: "service_1_3.JPG"},{filelocation: "service_1_4.JPG"},{filelocation: "service_1_5.JPG"},{filelocation: "service_1_6.JPG"},{filelocation: "service_1_7.JPG"},{filelocation: "service_1_8.JPG"},{filelocation: "service_1_9.JPG"},{filelocation: "service_1_10.JPG"}]});
};