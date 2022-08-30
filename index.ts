import { Invoice, Payment } from "./classImplementInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("Vinamilk", "drink milk", 5000000);
const documentTwe: hasPrint = new Payment("Vietnam Airlines", "fly", 25000000);

const allDocuments: hasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwe);

console.log(allDocuments);
