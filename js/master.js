function calc(){
    var result = document.form.view.value;
    if(result){
        if(eval(result) == parseInt(eval(result))){
            document.form.view.value = eval(result)
        } 
        else {
            document.form.view.value = eval(result).toFixed(9);
        }
    }
}

function insert(num){
    var result = document.form.view.value;
    if(num == '.'){
        if(result == 0){
            document.form.view.value = document.form.view.value + num;
        }
        if(result != parseInt(result)){
            return;
        }
    }
    else if(num == '+' || num == '-' || num == '*' || num == '/'){
        if(result == 0){
            return;
        }
        document.form.view.value = document.form.view.value + num;
    }
    else {
        if(result == "0"){
            document.form.view.value = "";
        }
        document.form.view.value = document.form.view.value + num;
    }
}

function clean(){
    document.form.view.value = "0";
}

function back(){
    var result = document.form.view.value;
    if (result.length > 1){
        document.form.view.value = result.substring(0, result.length-1);
    }
    else {
        document.form.view.value = "0";
    }
}