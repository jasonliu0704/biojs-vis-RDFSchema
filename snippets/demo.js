// if you don't specify a html file, the sniper will generate a div
var app = require("biojs-vis-RDFSchema");


// data from neo4j
var dbData;

new app({el: yourDiv, name: 'biojs'});

var $ = app.jQuery();

// add filter box
$('<input type="text" id="filterBox" name="search" placeholder="Filter..">').appendTo("body");


var checkExist = "SELECT (count(distinct ?type) as ?count) WHERE { <@input> a ?type . FILTER (!isBlank(?s)) }"

// hand copy data for demo
var dbData = {};
dbData.links = [
  {
    "source": "9727",
    "target": "9730",
    "id": "7078",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9727",
    "target": "9729",
    "id": "7077",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9727",
    "target": "9728",
    "id": "7076",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9731",
    "target": "9734",
    "id": "7081",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9731",
    "target": "9733",
    "id": "7080",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9731",
    "target": "9732",
    "id": "7079",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9735",
    "target": "9738",
    "id": "7084",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9735",
    "target": "9737",
    "id": "7083",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9735",
    "target": "9736",
    "id": "7082",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9739",
    "target": "9742",
    "id": "7087",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9739",
    "target": "9741",
    "id": "7086",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9739",
    "target": "9740",
    "id": "7085",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9743",
    "target": "9746",
    "id": "7090",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9743",
    "target": "9745",
    "id": "7089",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9743",
    "target": "9744",
    "id": "7088",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9747",
    "target": "9750",
    "id": "7093",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9747",
    "target": "9749",
    "id": "7092",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9747",
    "target": "9748",
    "id": "7091",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9751",
    "target": "9754",
    "id": "7096",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9751",
    "target": "9753",
    "id": "7095",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9751",
    "target": "9752",
    "id": "7094",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9755",
    "target": "9758",
    "id": "7099",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9755",
    "target": "9757",
    "id": "7098",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9755",
    "target": "9756",
    "id": "7097",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9759",
    "target": "9762",
    "id": "7102",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9759",
    "target": "9761",
    "id": "7101",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9759",
    "target": "9760",
    "id": "7100",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9763",
    "target": "9766",
    "id": "7105",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9763",
    "target": "9765",
    "id": "7104",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9763",
    "target": "9764",
    "id": "7103",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9767",
    "target": "9770",
    "id": "7108",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9767",
    "target": "9769",
    "id": "7107",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9767",
    "target": "9768",
    "id": "7106",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9771",
    "target": "9774",
    "id": "7111",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9771",
    "target": "9773",
    "id": "7110",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9771",
    "target": "9772",
    "id": "7109",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9775",
    "target": "9778",
    "id": "7114",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9775",
    "target": "9777",
    "id": "7113",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9775",
    "target": "9776",
    "id": "7112",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9779",
    "target": "9782",
    "id": "7117",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9779",
    "target": "9781",
    "id": "7116",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9779",
    "target": "9780",
    "id": "7115",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9783",
    "target": "9786",
    "id": "7120",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9783",
    "target": "9785",
    "id": "7119",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9783",
    "target": "9784",
    "id": "7118",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9787",
    "target": "9790",
    "id": "7123",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9787",
    "target": "9789",
    "id": "7122",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9787",
    "target": "9788",
    "id": "7121",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9791",
    "target": "9794",
    "id": "7126",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9791",
    "target": "9793",
    "id": "7125",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9791",
    "target": "9792",
    "id": "7124",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9795",
    "target": "9798",
    "id": "7129",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9795",
    "target": "9797",
    "id": "7128",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9795",
    "target": "9796",
    "id": "7127",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9799",
    "target": "9802",
    "id": "7132",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9799",
    "target": "9801",
    "id": "7131",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9799",
    "target": "9800",
    "id": "7130",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9803",
    "target": "9806",
    "id": "7135",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9803",
    "target": "9805",
    "id": "7134",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9803",
    "target": "9804",
    "id": "7133",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9807",
    "target": "9810",
    "id": "7138",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9807",
    "target": "9809",
    "id": "7137",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9807",
    "target": "9808",
    "id": "7136",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9811",
    "target": "9814",
    "id": "7141",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9811",
    "target": "9813",
    "id": "7140",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9811",
    "target": "9812",
    "id": "7139",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9815",
    "target": "9818",
    "id": "7144",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9815",
    "target": "9817",
    "id": "7143",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9815",
    "target": "9816",
    "id": "7142",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9819",
    "target": "9822",
    "id": "7147",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9819",
    "target": "9821",
    "id": "7146",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9819",
    "target": "9820",
    "id": "7145",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9823",
    "target": "9826",
    "id": "7150",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9823",
    "target": "9825",
    "id": "7149",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9823",
    "target": "9824",
    "id": "7148",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9827",
    "target": "9830",
    "id": "7153",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9827",
    "target": "9829",
    "id": "7152",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9827",
    "target": "9828",
    "id": "7151",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9831",
    "target": "9834",
    "id": "7156",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9831",
    "target": "9833",
    "id": "7155",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9831",
    "target": "9832",
    "id": "7154",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9835",
    "target": "9838",
    "id": "7159",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9835",
    "target": "9837",
    "id": "7158",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9835",
    "target": "9836",
    "id": "7157",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9839",
    "target": "9842",
    "id": "7162",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9839",
    "target": "9841",
    "id": "7161",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9839",
    "target": "9840",
    "id": "7160",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9843",
    "target": "9846",
    "id": "7165",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9843",
    "target": "9845",
    "id": "7164",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9843",
    "target": "9844",
    "id": "7163",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9847",
    "target": "9850",
    "id": "7168",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9847",
    "target": "9849",
    "id": "7167",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9847",
    "target": "9848",
    "id": "7166",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9851",
    "target": "9854",
    "id": "7171",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9851",
    "target": "9853",
    "id": "7170",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9851",
    "target": "9852",
    "id": "7169",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9855",
    "target": "9858",
    "id": "7174",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9855",
    "target": "9857",
    "id": "7173",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9855",
    "target": "9856",
    "id": "7172",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9859",
    "target": "9862",
    "id": "7177",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9859",
    "target": "9861",
    "id": "7176",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9859",
    "target": "9860",
    "id": "7175",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9863",
    "target": "9866",
    "id": "7180",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9863",
    "target": "9865",
    "id": "7179",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9863",
    "target": "9864",
    "id": "7178",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9867",
    "target": "9870",
    "id": "7183",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9867",
    "target": "9869",
    "id": "7182",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9867",
    "target": "9868",
    "id": "7181",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9871",
    "target": "9874",
    "id": "7186",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9871",
    "target": "9873",
    "id": "7185",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9871",
    "target": "9872",
    "id": "7184",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9875",
    "target": "9878",
    "id": "7189",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9875",
    "target": "9877",
    "id": "7188",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9875",
    "target": "9876",
    "id": "7187",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9879",
    "target": "9882",
    "id": "7192",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9879",
    "target": "9881",
    "id": "7191",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9879",
    "target": "9880",
    "id": "7190",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9883",
    "target": "9886",
    "id": "7195",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9883",
    "target": "9885",
    "id": "7194",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9883",
    "target": "9884",
    "id": "7193",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9887",
    "target": "9890",
    "id": "7198",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9887",
    "target": "9889",
    "id": "7197",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9887",
    "target": "9888",
    "id": "7196",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9891",
    "target": "9894",
    "id": "7201",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9891",
    "target": "9893",
    "id": "7200",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9891",
    "target": "9892",
    "id": "7199",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9895",
    "target": "9898",
    "id": "7204",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9895",
    "target": "9897",
    "id": "7203",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9895",
    "target": "9896",
    "id": "7202",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9899",
    "target": "9902",
    "id": "7207",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9899",
    "target": "9901",
    "id": "7206",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9899",
    "target": "9900",
    "id": "7205",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9903",
    "target": "9906",
    "id": "7210",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9903",
    "target": "9905",
    "id": "7209",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9903",
    "target": "9904",
    "id": "7208",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9907",
    "target": "9910",
    "id": "7213",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9907",
    "target": "9909",
    "id": "7212",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9907",
    "target": "9908",
    "id": "7211",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9911",
    "target": "9914",
    "id": "7216",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9911",
    "target": "9913",
    "id": "7215",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9911",
    "target": "9912",
    "id": "7214",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9915",
    "target": "9918",
    "id": "7219",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9915",
    "target": "9917",
    "id": "7218",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9915",
    "target": "9916",
    "id": "7217",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9919",
    "target": "9922",
    "id": "7222",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9919",
    "target": "9921",
    "id": "7221",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9919",
    "target": "9920",
    "id": "7220",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9923",
    "target": "9926",
    "id": "7225",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9923",
    "target": "9925",
    "id": "7224",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9923",
    "target": "9924",
    "id": "7223",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9927",
    "target": "9930",
    "id": "7228",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9927",
    "target": "9929",
    "id": "7227",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9927",
    "target": "9928",
    "id": "7226",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9931",
    "target": "9934",
    "id": "7231",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9931",
    "target": "9933",
    "id": "7230",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9931",
    "target": "9932",
    "id": "7229",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9935",
    "target": "9938",
    "id": "7234",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9935",
    "target": "9937",
    "id": "7233",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9935",
    "target": "9936",
    "id": "7232",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9939",
    "target": "9942",
    "id": "7237",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9939",
    "target": "9941",
    "id": "7236",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9939",
    "target": "9940",
    "id": "7235",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9943",
    "target": "9946",
    "id": "7240",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9943",
    "target": "9945",
    "id": "7239",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9943",
    "target": "9944",
    "id": "7238",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9947",
    "target": "9950",
    "id": "7243",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9947",
    "target": "9949",
    "id": "7242",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9947",
    "target": "9948",
    "id": "7241",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9951",
    "target": "9954",
    "id": "7246",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9951",
    "target": "9953",
    "id": "7245",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9951",
    "target": "9952",
    "id": "7244",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9955",
    "target": "9958",
    "id": "7249",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9955",
    "target": "9957",
    "id": "7248",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9955",
    "target": "9956",
    "id": "7247",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9959",
    "target": "9962",
    "id": "7252",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9959",
    "target": "9961",
    "id": "7251",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9959",
    "target": "9960",
    "id": "7250",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9963",
    "target": "9966",
    "id": "7255",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9963",
    "target": "9965",
    "id": "7254",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9963",
    "target": "9964",
    "id": "7253",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9967",
    "target": "9970",
    "id": "7258",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9967",
    "target": "9969",
    "id": "7257",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9967",
    "target": "9968",
    "id": "7256",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9971",
    "target": "9974",
    "id": "7261",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9971",
    "target": "9973",
    "id": "7260",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9971",
    "target": "9972",
    "id": "7259",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9975",
    "target": "9978",
    "id": "7264",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9975",
    "target": "9977",
    "id": "7263",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9975",
    "target": "9976",
    "id": "7262",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9979",
    "target": "9982",
    "id": "7267",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9979",
    "target": "9981",
    "id": "7266",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9979",
    "target": "9980",
    "id": "7265",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9983",
    "target": "9986",
    "id": "7270",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9983",
    "target": "9985",
    "id": "7269",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9983",
    "target": "9984",
    "id": "7268",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9987",
    "target": "9990",
    "id": "7273",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9987",
    "target": "9989",
    "id": "7272",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9987",
    "target": "9988",
    "id": "7271",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9991",
    "target": "9994",
    "id": "7276",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9991",
    "target": "9993",
    "id": "7275",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9991",
    "target": "9992",
    "id": "7274",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9995",
    "target": "9998",
    "id": "7279",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9995",
    "target": "9997",
    "id": "7278",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9995",
    "target": "9996",
    "id": "7277",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "9999",
    "target": "10002",
    "id": "7282",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "9999",
    "target": "10001",
    "id": "7281",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "9999",
    "target": "10000",
    "id": "7280",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10003",
    "target": "10006",
    "id": "7285",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10003",
    "target": "10005",
    "id": "7284",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10003",
    "target": "10004",
    "id": "7283",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10007",
    "target": "10010",
    "id": "7288",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10007",
    "target": "10009",
    "id": "7287",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10007",
    "target": "10008",
    "id": "7286",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10011",
    "target": "10014",
    "id": "7291",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10011",
    "target": "10013",
    "id": "7290",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10011",
    "target": "10012",
    "id": "7289",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10015",
    "target": "10018",
    "id": "7294",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10015",
    "target": "10017",
    "id": "7293",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10015",
    "target": "10016",
    "id": "7292",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10019",
    "target": "10022",
    "id": "7297",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10019",
    "target": "10021",
    "id": "7296",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10019",
    "target": "10020",
    "id": "7295",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10023",
    "target": "10026",
    "id": "7300",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10023",
    "target": "10025",
    "id": "7299",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10023",
    "target": "10024",
    "id": "7298",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10027",
    "target": "10030",
    "id": "7303",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10027",
    "target": "10029",
    "id": "7302",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10027",
    "target": "10028",
    "id": "7301",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10031",
    "target": "10034",
    "id": "7306",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10031",
    "target": "10033",
    "id": "7305",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10031",
    "target": "10032",
    "id": "7304",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10035",
    "target": "10038",
    "id": "7309",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10035",
    "target": "10037",
    "id": "7308",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10035",
    "target": "10036",
    "id": "7307",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10039",
    "target": "10042",
    "id": "7312",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10039",
    "target": "10041",
    "id": "7311",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10039",
    "target": "10040",
    "id": "7310",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10043",
    "target": "10046",
    "id": "7315",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10043",
    "target": "10045",
    "id": "7314",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10043",
    "target": "10044",
    "id": "7313",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10047",
    "target": "10050",
    "id": "7318",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10047",
    "target": "10049",
    "id": "7317",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10047",
    "target": "10048",
    "id": "7316",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10051",
    "target": "10054",
    "id": "7321",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10051",
    "target": "10053",
    "id": "7320",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10051",
    "target": "10052",
    "id": "7319",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10055",
    "target": "10058",
    "id": "7324",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10055",
    "target": "10057",
    "id": "7323",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10055",
    "target": "10056",
    "id": "7322",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10059",
    "target": "10062",
    "id": "7327",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10059",
    "target": "10061",
    "id": "7326",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10059",
    "target": "10060",
    "id": "7325",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10063",
    "target": "10066",
    "id": "7330",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10063",
    "target": "10065",
    "id": "7329",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10063",
    "target": "10064",
    "id": "7328",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10067",
    "target": "10070",
    "id": "7333",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10067",
    "target": "10069",
    "id": "7332",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10067",
    "target": "10068",
    "id": "7331",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10071",
    "target": "10074",
    "id": "7336",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10071",
    "target": "10073",
    "id": "7335",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10071",
    "target": "10072",
    "id": "7334",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10075",
    "target": "10078",
    "id": "7339",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10075",
    "target": "10077",
    "id": "7338",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10075",
    "target": "10076",
    "id": "7337",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10079",
    "target": "10082",
    "id": "7342",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10079",
    "target": "10081",
    "id": "7341",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10079",
    "target": "10080",
    "id": "7340",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10083",
    "target": "10086",
    "id": "7345",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10083",
    "target": "10085",
    "id": "7344",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10083",
    "target": "10084",
    "id": "7343",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10087",
    "target": "10090",
    "id": "7348",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10087",
    "target": "10089",
    "id": "7347",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10087",
    "target": "10088",
    "id": "7346",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10091",
    "target": "10094",
    "id": "7351",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10091",
    "target": "10093",
    "id": "7350",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10091",
    "target": "10092",
    "id": "7349",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10095",
    "target": "10098",
    "id": "7354",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10095",
    "target": "10097",
    "id": "7353",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10095",
    "target": "10096",
    "id": "7352",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10099",
    "target": "10102",
    "id": "7357",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10099",
    "target": "10101",
    "id": "7356",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10099",
    "target": "10100",
    "id": "7355",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10103",
    "target": "10106",
    "id": "7360",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10103",
    "target": "10105",
    "id": "7359",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10103",
    "target": "10104",
    "id": "7358",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10107",
    "target": "10110",
    "id": "7363",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10107",
    "target": "10109",
    "id": "7362",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10107",
    "target": "10108",
    "id": "7361",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10111",
    "target": "10114",
    "id": "7366",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10111",
    "target": "10113",
    "id": "7365",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10111",
    "target": "10112",
    "id": "7364",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10115",
    "target": "10118",
    "id": "7369",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10115",
    "target": "10117",
    "id": "7368",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10115",
    "target": "10116",
    "id": "7367",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10119",
    "target": "10122",
    "id": "7372",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10119",
    "target": "10121",
    "id": "7371",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10119",
    "target": "10120",
    "id": "7370",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  {
    "source": "10123",
    "target": "10126",
    "id": "7375",
    "count": 0,
    "label": "propertyValue",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyValue"
  },
  {
    "source": "10123",
    "target": "10125",
    "id": "7374",
    "count": 0,
    "label": "propertyType",
    "uri": "http://rdf.ebi.ac.uk/terms/atlas/propertyType"
  },
  {
    "source": "10123",
    "target": "10124",
    "id": "7373",
    "count": 0,
    "label": "label",
    "uri": "http://www.w3.org/2000/01/rdf-schema#label"
  }
]
dbData.nodes = [
  {
    "id": "9730",
    "uri": "http://purl.obolibrary.org/obo/BTO_0000214http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9729",
    "uri": "http://purl.obolibrary.org/obo/BTO_0000214http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9728",
    "uri": "http://purl.obolibrary.org/obo/BTO_0000214http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9734",
    "uri": "http://purl.obolibrary.org/obo/BTO_0000221http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9733",
    "uri": "http://purl.obolibrary.org/obo/BTO_0000221http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9732",
    "uri": "http://purl.obolibrary.org/obo/BTO_0000221http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9738",
    "uri": "http://purl.obolibrary.org/obo/BTO_0001202http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9737",
    "uri": "http://purl.obolibrary.org/obo/BTO_0001202http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9736",
    "uri": "http://purl.obolibrary.org/obo/BTO_0001202http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9742",
    "uri": "http://purl.obolibrary.org/obo/BTO_0002178http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9741",
    "uri": "http://purl.obolibrary.org/obo/BTO_0002178http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9740",
    "uri": "http://purl.obolibrary.org/obo/BTO_0002178http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9746",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_100241http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9745",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_100241http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9744",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_100241http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9750",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15365http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9749",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15365http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9748",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15365http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9754",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15367http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9753",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15367http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9752",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15367http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9758",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_153671http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9757",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_153671http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9756",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_153671http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9762",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15377http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9761",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15377http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9760",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15377http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9766",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15379http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9765",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15379http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9764",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15379http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9770",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27584http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9769",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27584http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9768",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27584http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9774",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27594http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9773",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27594http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9772",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27594http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9778",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27641http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9777",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27641http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9776",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27641http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9782",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27656http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9781",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27656http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9780",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27656http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9786",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27666http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9785",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27666http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9784",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27666http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9790",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27698http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9789",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27698http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9788",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27698http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9794",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27732http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9793",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27732http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9792",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27732http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9798",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27744http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9797",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27744http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9796",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27744http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9802",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27881http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9801",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27881http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9800",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27881http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9806",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27899http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9805",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27899http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9804",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27899http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9810",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45081http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9809",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45081http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9808",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45081http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9814",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_4509http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9813",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_4509http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9812",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_4509http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9818",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45783http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9817",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45783http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9816",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45783http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9822",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45863http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9821",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45863http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9820",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45863http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9826",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45951http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9825",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45951http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9824",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45951http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9830",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46024http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9829",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46024http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9828",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46024http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9834",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46053http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9833",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46053http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9832",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46053http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9838",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46195http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9837",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46195http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9836",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46195http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9842",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46345http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9841",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46345http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9840",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46345http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9846",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46889http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9845",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46889http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9844",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46889http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9850",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_8887http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9849",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_8887http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9848",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_8887http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9854",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9130http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9853",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9130http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9852",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9130http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9858",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9150http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9857",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9150http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9856",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9150http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9862",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9168http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9861",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9168http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9860",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9168http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9866",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9288http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9865",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9288http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9864",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9288http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9870",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9352http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9869",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9352http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9868",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9352http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9874",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9516http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9873",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9516http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9872",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9516http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9878",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9566http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9877",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9566http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9876",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9566http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9882",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9588http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9881",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9588http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9880",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9588http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9886",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9629http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9885",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9629http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9884",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9629http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9890",
    "uri": "http://purl.obolibrary.org/obo/CL_0000787http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9889",
    "uri": "http://purl.obolibrary.org/obo/CL_0000787http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9888",
    "uri": "http://purl.obolibrary.org/obo/CL_0000787http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9894",
    "uri": "http://purl.obolibrary.org/obo/CL_0000788http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9893",
    "uri": "http://purl.obolibrary.org/obo/CL_0000788http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9892",
    "uri": "http://purl.obolibrary.org/obo/CL_0000788http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9898",
    "uri": "http://purl.obolibrary.org/obo/CL_0000792http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9897",
    "uri": "http://purl.obolibrary.org/obo/CL_0000792http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9896",
    "uri": "http://purl.obolibrary.org/obo/CL_0000792http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9902",
    "uri": "http://purl.obolibrary.org/obo/CL_0000809http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9901",
    "uri": "http://purl.obolibrary.org/obo/CL_0000809http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9900",
    "uri": "http://purl.obolibrary.org/obo/CL_0000809http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9906",
    "uri": "http://purl.obolibrary.org/obo/CL_0000813http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9905",
    "uri": "http://purl.obolibrary.org/obo/CL_0000813http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9904",
    "uri": "http://purl.obolibrary.org/obo/CL_0000813http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9910",
    "uri": "http://purl.obolibrary.org/obo/CL_0000815http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9909",
    "uri": "http://purl.obolibrary.org/obo/CL_0000815http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9908",
    "uri": "http://purl.obolibrary.org/obo/CL_0000815http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9914",
    "uri": "http://purl.obolibrary.org/obo/CL_0000816http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9913",
    "uri": "http://purl.obolibrary.org/obo/CL_0000816http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9912",
    "uri": "http://purl.obolibrary.org/obo/CL_0000816http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9918",
    "uri": "http://purl.obolibrary.org/obo/CL_0000817http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9917",
    "uri": "http://purl.obolibrary.org/obo/CL_0000817http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9916",
    "uri": "http://purl.obolibrary.org/obo/CL_0000817http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9922",
    "uri": "http://purl.obolibrary.org/obo/CL_0000822http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9921",
    "uri": "http://purl.obolibrary.org/obo/CL_0000822http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9920",
    "uri": "http://purl.obolibrary.org/obo/CL_0000822http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9926",
    "uri": "http://purl.obolibrary.org/obo/CL_0000826http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9925",
    "uri": "http://purl.obolibrary.org/obo/CL_0000826http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9924",
    "uri": "http://purl.obolibrary.org/obo/CL_0000826http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9930",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9555http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9929",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9555http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9928",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9555http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9934",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9593http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9933",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9593http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9932",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9593http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9938",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9597http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9937",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9597http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9936",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9597http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9942",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9598http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9941",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9598http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9940",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9598http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9946",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9600http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9945",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9600http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9944",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9600http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9950",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9606http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9949",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9606http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9948",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9606http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9954",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9615http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9953",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9615http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9952",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9615http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9958",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_96939http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9957",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_96939http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9956",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_96939http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9962",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9823http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9961",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9823http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9960",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9823http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9966",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9860http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9965",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9860http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9964",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9860http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9970",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000008http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9969",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000008http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9968",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000008http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9974",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000009http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9973",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000009http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9972",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000009http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9978",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000010http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9977",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000010http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9976",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000010http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9982",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000011http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9981",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000011http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9980",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000011http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9986",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000012http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9985",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000012http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9984",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000012http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9990",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000013http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9989",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000013http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9988",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000013http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9994",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000014http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9993",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000014http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9992",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000014http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9998",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000015http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "9997",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000015http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "9996",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000015http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10002",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000016http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10001",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000016http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10000",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000016http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10006",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000017http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10005",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000017http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10004",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000017http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10010",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000120http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10009",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000120http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10008",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000120http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10014",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000121http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10013",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000121http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10012",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000121http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10018",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000122http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10017",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000122http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10016",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000122http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10022",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000123http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10021",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000123http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10020",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000123http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10026",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000124http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10025",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000124http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10024",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000124http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10030",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000125http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10029",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000125http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10028",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000125http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10034",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000126http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10033",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000126http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10032",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000126http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10038",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000127http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10037",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000127http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10036",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000127http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10042",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000128http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10041",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000128http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10040",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000128http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10046",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000129http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10045",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000129http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10044",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000129http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10050",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000295http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10049",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000295http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10048",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000295http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10054",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000296http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10053",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000296http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10052",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000296http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10058",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000298http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10057",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000298http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10056",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000298http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10062",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000302http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10061",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000302http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10060",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000302http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10066",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000304http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10065",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000304http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10064",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000304http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10070",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000305http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10069",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000305http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10068",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000305http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10074",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000307http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10073",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000307http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10072",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000307http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10078",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000308http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10077",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000308http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10076",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000308http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10082",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000309http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10081",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000309http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10080",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000309http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10086",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000311http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10085",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000311http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10084",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000311http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10090",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000637http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10089",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000637http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10088",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000637http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10094",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000640http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10093",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000640http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10092",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000640http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10098",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000641http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10097",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000641http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10096",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000641http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10102",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000649http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10101",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000649http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10100",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000649http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10106",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000660http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10105",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000660http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10104",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000660http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10110",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000661http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10109",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000661http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10108",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000661http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10114",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000663http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10113",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000663http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10112",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000663http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10118",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000668http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10117",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000668http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10116",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000668http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10122",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000673http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10121",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000673http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10120",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000673http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "10126",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000676http://rdf.ebi.ac.uk/terms/atlas/propertyValue",
    "type": "Literal"
  },
  {
    "id": "10125",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000676http://rdf.ebi.ac.uk/terms/atlas/propertyType",
    "type": "Literal"
  },
  {
    "id": "10124",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000676http://www.w3.org/2000/01/rdf-schema#label",
    "type": "Literal"
  },
  {
    "id": "9727",
    "label": "cell culture",
    "uri": "http://purl.obolibrary.org/obo/BTO_0000214",
    "type": "Uri"
  },
  {
    "id": "9731",
    "label": "cell suspension culture",
    "uri": "http://purl.obolibrary.org/obo/BTO_0000221",
    "type": "Uri"
  },
  {
    "id": "9735",
    "label": "saliva",
    "uri": "http://purl.obolibrary.org/obo/BTO_0001202",
    "type": "Uri"
  },
  {
    "id": "9739",
    "label": "HMEpC cell",
    "uri": "http://purl.obolibrary.org/obo/BTO_0002178",
    "type": "Uri"
  },
  {
    "id": "9743",
    "label": "ciprofloxacin",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_100241",
    "type": "Uri"
  },
  {
    "id": "9747",
    "label": "acetylsalicylic acid",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15365",
    "type": "Uri"
  },
  {
    "id": "9751",
    "label": "all-trans-retinoic acid",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15367",
    "type": "Uri"
  },
  {
    "id": "9755",
    "label": "endothelin-1",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_153671",
    "type": "Uri"
  },
  {
    "id": "9759",
    "label": "water",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15377",
    "type": "Uri"
  },
  {
    "id": "9763",
    "label": "oxygen",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_15379",
    "type": "Uri"
  },
  {
    "id": "9767",
    "label": "aldosterone",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27584",
    "type": "Uri"
  },
  {
    "id": "9771",
    "label": "carbon",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27594",
    "type": "Uri"
  },
  {
    "id": "9775",
    "label": "cycloheximide",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27641",
    "type": "Uri"
  },
  {
    "id": "9779",
    "label": "camptothecin",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27656",
    "type": "Uri"
  },
  {
    "id": "9783",
    "label": "actinomycin D",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27666",
    "type": "Uri"
  },
  {
    "id": "9787",
    "label": "Vanadium",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27698",
    "type": "Uri"
  },
  {
    "id": "9791",
    "label": "caffeine",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27732",
    "type": "Uri"
  },
  {
    "id": "9795",
    "label": "glyphosate",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27744",
    "type": "Uri"
  },
  {
    "id": "9799",
    "label": "resveratrol",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27881",
    "type": "Uri"
  },
  {
    "id": "9803",
    "label": "cisplatin",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_27899",
    "type": "Uri"
  },
  {
    "id": "9807",
    "label": "pentamidine",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45081",
    "type": "Uri"
  },
  {
    "id": "9811",
    "label": "diclofenac sodium",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_4509",
    "type": "Uri"
  },
  {
    "id": "9815",
    "label": "imatinib",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45783",
    "type": "Uri"
  },
  {
    "id": "9819",
    "label": "paclitaxel",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45863",
    "type": "Uri"
  },
  {
    "id": "9823",
    "label": "trifluoperazine",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_45951",
    "type": "Uri"
  },
  {
    "id": "9827",
    "label": "trichostatin A",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46024",
    "type": "Uri"
  },
  {
    "id": "9831",
    "label": "2,4,6-trinitrotoluene",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46053",
    "type": "Uri"
  },
  {
    "id": "9835",
    "label": "paracetamol",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46195",
    "type": "Uri"
  },
  {
    "id": "9839",
    "label": "5-fluorouracil",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46345",
    "type": "Uri"
  },
  {
    "id": "9843",
    "label": "S-[2,3-bis(palmitoyloxy)propyl]-Cys-Ser-Lys-Lys-Lys-Lys",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_46889",
    "type": "Uri"
  },
  {
    "id": "9847",
    "label": "rofecoxib",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_8887",
    "type": "Uri"
  },
  {
    "id": "9851",
    "label": "sevoflurane",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9130",
    "type": "Uri"
  },
  {
    "id": "9855",
    "label": "simvastatin",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9150",
    "type": "Uri"
  },
  {
    "id": "9859",
    "label": "rapamycin",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9168",
    "type": "Uri"
  },
  {
    "id": "9863",
    "label": "streptozotocin",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9288",
    "type": "Uri"
  },
  {
    "id": "9867",
    "label": "sulindac",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9352",
    "type": "Uri"
  },
  {
    "id": "9871",
    "label": "thapsigargin",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9516",
    "type": "Uri"
  },
  {
    "id": "9875",
    "label": "thioridazine",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9566",
    "type": "Uri"
  },
  {
    "id": "9879",
    "label": "ticlopidine",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9588",
    "type": "Uri"
  },
  {
    "id": "9883",
    "label": "tomatidine",
    "uri": "http://purl.obolibrary.org/obo/CHEBI_9629",
    "type": "Uri"
  },
  {
    "id": "9887",
    "label": "CL_0000787",
    "uri": "http://purl.obolibrary.org/obo/CL_0000787",
    "type": "Uri"
  },
  {
    "id": "9891",
    "label": "CL_0000788",
    "uri": "http://purl.obolibrary.org/obo/CL_0000788",
    "type": "Uri"
  },
  {
    "id": "9895",
    "label": "CL_0000792",
    "uri": "http://purl.obolibrary.org/obo/CL_0000792",
    "type": "Uri"
  },
  {
    "id": "9899",
    "label": "CL_0000809",
    "uri": "http://purl.obolibrary.org/obo/CL_0000809",
    "type": "Uri"
  },
  {
    "id": "9903",
    "label": "CL_0000813",
    "uri": "http://purl.obolibrary.org/obo/CL_0000813",
    "type": "Uri"
  },
  {
    "id": "9907",
    "label": "CL_0000815",
    "uri": "http://purl.obolibrary.org/obo/CL_0000815",
    "type": "Uri"
  },
  {
    "id": "9911",
    "label": "CL_0000816",
    "uri": "http://purl.obolibrary.org/obo/CL_0000816",
    "type": "Uri"
  },
  {
    "id": "9915",
    "label": "CL_0000817",
    "uri": "http://purl.obolibrary.org/obo/CL_0000817",
    "type": "Uri"
  },
  {
    "id": "9919",
    "label": "CL_0000822",
    "uri": "http://purl.obolibrary.org/obo/CL_0000822",
    "type": "Uri"
  },
  {
    "id": "9923",
    "label": "CL_0000826",
    "uri": "http://purl.obolibrary.org/obo/CL_0000826",
    "type": "Uri"
  },
  {
    "id": "9927",
    "label": "Papio anubis",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9555",
    "type": "Uri"
  },
  {
    "id": "9931",
    "label": "Gorilla gorilla",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9593",
    "type": "Uri"
  },
  {
    "id": "9935",
    "label": "Pan paniscus",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9597",
    "type": "Uri"
  },
  {
    "id": "9939",
    "label": "Pan troglodytes",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9598",
    "type": "Uri"
  },
  {
    "id": "9943",
    "label": "Pongo pygmaeus",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9600",
    "type": "Uri"
  },
  {
    "id": "9947",
    "label": "Homo sapiens",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9606",
    "type": "Uri"
  },
  {
    "id": "9951",
    "label": "canis familiaris",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9615",
    "type": "Uri"
  },
  {
    "id": "9955",
    "label": "Vitis riparia",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_96939",
    "type": "Uri"
  },
  {
    "id": "9959",
    "label": "Sus scrofa",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9823",
    "type": "Uri"
  },
  {
    "id": "9963",
    "label": "Cervus elaphus",
    "uri": "http://purl.obolibrary.org/obo/NCBITaxon_9860",
    "type": "Uri"
  },
  {
    "id": "9967",
    "label": "CS57541",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000008",
    "type": "Uri"
  },
  {
    "id": "9971",
    "label": "CS57543",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000009",
    "type": "Uri"
  },
  {
    "id": "9975",
    "label": "CS57544",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000010",
    "type": "Uri"
  },
  {
    "id": "9979",
    "label": "CS57548",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000011",
    "type": "Uri"
  },
  {
    "id": "9983",
    "label": "CS57549",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000012",
    "type": "Uri"
  },
  {
    "id": "9987",
    "label": "CS57551",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000013",
    "type": "Uri"
  },
  {
    "id": "9991",
    "label": "CS57556",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000014",
    "type": "Uri"
  },
  {
    "id": "9995",
    "label": "CS57560",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000015",
    "type": "Uri"
  },
  {
    "id": "9999",
    "label": "CS57563",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000016",
    "type": "Uri"
  },
  {
    "id": "10003",
    "label": "CS57569",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000017",
    "type": "Uri"
  },
  {
    "id": "10007",
    "label": "CS57790",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000120",
    "type": "Uri"
  },
  {
    "id": "10011",
    "label": "CS57801",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000121",
    "type": "Uri"
  },
  {
    "id": "10015",
    "label": "CS57803",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000122",
    "type": "Uri"
  },
  {
    "id": "10019",
    "label": "CS57807",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000123",
    "type": "Uri"
  },
  {
    "id": "10023",
    "label": "CS57810",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000124",
    "type": "Uri"
  },
  {
    "id": "10027",
    "label": "CS57811",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000125",
    "type": "Uri"
  },
  {
    "id": "10031",
    "label": "CS57812",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000126",
    "type": "Uri"
  },
  {
    "id": "10035",
    "label": "CS57813",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000127",
    "type": "Uri"
  },
  {
    "id": "10039",
    "label": "CS57816",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000128",
    "type": "Uri"
  },
  {
    "id": "10043",
    "label": "CS57820",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000129",
    "type": "Uri"
  },
  {
    "id": "10047",
    "label": "blastocyst",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000295",
    "type": "Uri"
  },
  {
    "id": "10051",
    "label": "blood",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000296",
    "type": "Uri"
  },
  {
    "id": "10055",
    "label": "bone",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000298",
    "type": "Uri"
  },
  {
    "id": "10059",
    "label": "brain",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000302",
    "type": "Uri"
  },
  {
    "id": "10063",
    "label": "breast adenocarcinoma",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000304",
    "type": "Uri"
  },
  {
    "id": "10067",
    "label": "breast carcinoma",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000305",
    "type": "Uri"
  },
  {
    "id": "10071",
    "label": "bronchial epithelium",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000307",
    "type": "Uri"
  },
  {
    "id": "10075",
    "label": "bronchoalveolar adenocarcinoma",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000308",
    "type": "Uri"
  },
  {
    "id": "10079",
    "label": "Burkitts lymphoma",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000309",
    "type": "Uri"
  },
  {
    "id": "10083",
    "label": "cancer",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000311",
    "type": "Uri"
  },
  {
    "id": "10087",
    "label": "osteosarcoma",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000637",
    "type": "Uri"
  },
  {
    "id": "10091",
    "label": "papillary renal cell carcinoma",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000640",
    "type": "Uri"
  },
  {
    "id": "10095",
    "label": "papillary thyroid carcinoma",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000641",
    "type": "Uri"
  },
  {
    "id": "10099",
    "label": "periodontitis",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000649",
    "type": "Uri"
  },
  {
    "id": "10103",
    "label": "polycystic ovary syndrome",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000660",
    "type": "Uri"
  },
  {
    "id": "10107",
    "label": "obsolete_polymorphonuclear leukocyte",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000661",
    "type": "Uri"
  },
  {
    "id": "10111",
    "label": "pool",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000663",
    "type": "Uri"
  },
  {
    "id": "10115",
    "label": "preeclampsia",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000668",
    "type": "Uri"
  },
  {
    "id": "10119",
    "label": "prostate adenocarcinoma",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000673",
    "type": "Uri"
  },
  {
    "id": "10123",
    "label": "psoriasis",
    "uri": "http://www.ebi.ac.uk/efo/EFO_0000676",
    "type": "Uri"
  }
]

	app.visualize(dbData);

// listen on filter box change to start processing and visualiaing data
$('#filterBox').on('change', function(e){
	//validate filter
	var client = app.tool();
	var input = this.value;
	if(!input) return;
	client.query (checkExist.replace('@input', input), function(err, res){
		debugger;
		if(err){
			console.error(err);
			return;
		}
		// parse data on valid input
		if(res){
			
			// proccess graph data according to input data
			app.parseInput(client,input, dbData).then(
				function(){
					//visulization
					console.log('visualization')
					app.visualize(dbData);
				});
		}
	});
});
