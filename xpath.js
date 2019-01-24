const input_xml = document.querySelector("#input_xml");
const input_xpath = document.querySelector("#input_xpath");

//outputs

const out_root = document.querySelector("#out_root");
const out_count = document.querySelector("#out_count");
const out_children = document.querySelector("#out_children");

//parser

const parser = new DOMParser();
let xmldoc;

input_xml.onkeyup = function(){
    xmldoc = parser.parseFromString(this.value, 'text/xml');
    out_root.innerText = xmldoc.documentElement.tagName;
    out_count.innerText = xmldoc.documentElement.childElementCount;
    out_children.innerText = xmldoc.documentElement.children[0].tagName;
    console.log(this.value);
};

input_xpath.onkeyup = function(){
    console.log(this.value);
};