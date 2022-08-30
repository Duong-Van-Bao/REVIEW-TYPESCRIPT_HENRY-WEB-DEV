"use strict";
exports.__esModule = true;
var classImplementInterface_1 = require("./classImplementInterface");
var documentOne = new classImplementInterface_1.Invoice("Vinamilk", "drink milk", 5000000);
var documentTwe = new classImplementInterface_1.Payment("Vietnam Airlines", "fly", 25000000);
var allDocuments = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwe);
console.log(allDocuments);
