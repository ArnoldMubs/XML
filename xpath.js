const input_xml = documentquerySelector("#input_xml");
const input_xpath = documentquerySelector("#input_xpath");

//outputs

const out_root = documentquerySelector("#out_root");
const out_count = documentquerySelector("#out_count");
const out_children = documentquerySelector("#out_children");

input_xml.onkeyup = function(){
    console.log(this.value);
};

input_xpath.onkeyup = function(){
    console.log(this.value);
};