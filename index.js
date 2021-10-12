

function emailVerifier(mailId) {

    var checkFormat = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+/;

    if(checkFormat.test(mailId)){
        return true;
    }else{
        return false;
    }
    
}


module.exports = emailVerifier;
