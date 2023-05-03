const acme = 'ACME:123-L';
const di = 'DI:12345-M';
const ace = 'ACE:1-12';

function getsupplierCode(code) {
    const colonPos = code.indexOf(":")
    return code.substring(0, colonPos);
} 

console.log(getsupplierCode(acme);)
console.log(getsupplierCode(di);)
console.log(getsupplierCode(ace);)

function getProductNumber(code) {
    const colonPos = code.indexOf(':');
    const dashPos = code.indexOf('-');
    return code.substring(colonPos + 1,  dashPos)
}

console.log(getProductNumber())