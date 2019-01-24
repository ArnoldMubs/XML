const input_xml = document.querySelector("#input_xml");
const input_xpath = document.querySelector("#input_xpath");

//outputs

const out_root = document.querySelector("#out_root");
const out_count = document.querySelector("#out_count");
const out_children = document.querySelector("#out_children");
const out_xpath = document.querySelector("#out_xpath");


//parser

const parser = new DOMParser();
let xmldoc;
let nodes;
let result;

input_xml.onkeyup = function(){
    xmldoc = parser.parseFromString(this.value, 'text/xml');
    out_root.innerText = xmldoc.documentElement.tagName;
    out_count.innerText = xmldoc.documentElement.childElementCount;
    out_children.innerText = xmldoc.documentElement.children[0].tagName;
    //console.log(this.value);
};

let str;
input_xpath.onkeyup = function(){
    let concat = ""
    nodes = xmldoc.evaluate(this.value, xmldoc, null,
        XPathResult.ANY_TYPE, null);
    try {
        result = nodes.iterateNext();
        while (result) {
            str = new XMLSerializer().serializeToString(result);
            concat += "<td>"+str+"</td>";
            result = nodes.iterateNext();
        }
        out_xpath.innerHTML = concat;
    }catch (e) {
        out_xpath.innerText = 'Erreur : L\'arbre du document a été modifié pendant l\'itération ' + e ;
    }


};