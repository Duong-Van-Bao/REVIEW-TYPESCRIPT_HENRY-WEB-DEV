"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classImplementInterface_1 = require("./classImplementInterface");
const documentOne = new classImplementInterface_1.Invoice("Vinamilk", "drink milk", 5000000);
const documentTwe = new classImplementInterface_1.Payment("Vietnam Airlines", "fly", 25000000);
const allDocuments = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwe);
console.log(allDocuments);
