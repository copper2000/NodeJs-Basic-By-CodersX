/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var readlineSync = require('readline-sync');
var fs = require('fs');

var contacts = [];


function loadContact() {
    var load = fs.readFileSync('./contact/contact.json');
    contacts = JSON.parse(load);
}

function menu() {
    console.log('********************************');
    console.log('1. Enter contact info (name, phone number)');
    console.log('2. Edit contact info');
    console.log('3. Delete contact info');
    console.log('4. Show contact list');
    console.log('5. Search contact');
    console.log('6. Save and Exit');
}

function inputContact() {
    var id = getIdContact();
    var contactName = readlineSync.question('Contact name: ');
    var phoneNumber = readlineSync.question('Phone number: ');
    var contact = {
        id: id,
        name: contactName,
        phone: phoneNumber
    }
    contacts.push(contact);
}

function getIdContact() {
    for (var i = 0; i < contacts.length; i++) {
        contacts[i];
    }
    // i = 0, i < 2; i++
    // contacts[0] = name: john, phone 9435435
    // contacts[1] = name: nguyen, phone 943534523 [1] => i => return 1, id = 1
    return i;
}

function editContact() { 
    var id = readlineSync.question('Input id that need to edit: ');
    var editCont = contacts.map(function(item){
        if (parseInt(id) == item.id) {
            var editName = readlineSync.question('Edit name: ');
            var editPhone = readlineSync.question('Edit phone number: ');                    
            item.name = editName;
            item.phone = editPhone;
        }
    });
    return editCont;    
}

function deleteContact() { 
    var id = readlineSync.question('Input id that need to delete\n');
    var delCont = contacts.map(function(item){
        if (id == item.id) {
            contacts.splice(id, 1);
        }       
    });            
    return delCont;    
}

function showContact() {
    for (var contact of contacts) {        
        console.log('Contact name:', contact.name, '\nPhone number: ', contact.phone, '\n');
    }
}

function searchContact() { // not finish
    // find id
    var findName = readlineSync.question('Find name: ');
    var findPhone = readlineSync.question('Find phone: ');
    var findCont = contacts.find(function(item){
        if(findName == item.name && findPhone == item.phone) {
            console.log('Result:', item.name, item.phone);
        }
    });    
    return findCont;
}

function saveAndExit() {
    var saveContact = JSON.stringify(contacts);
    fs.writeFileSync('./contact/contact.json', saveContact);
    console.log('Good bye!');
}

function main() {
    loadContact();
    while (true) {
        menu();
        var choose = readlineSync.question('> ');
        console.log(choose);
        switch (parseInt(choose)) {
            case 1:
                inputContact();
                break;
            case 2:
                editContact();
                break;
            case 3:
                deleteContact();
                break;
            case 4:
                showContact();
                break;
            case 5:
                searchContact();
                break;
            case 6:
                saveAndExit();
                return false;
            default:
                console.log('Wrong choose!');
        }
    }
}
main();