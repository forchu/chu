/**
 * Created by Administrator on 2016/9/13.
 */
function doCount(){
    var salary = parseFloat(document.getElementById("salary").value);
    var age = parseFloat(document.getElementById('age').value);
    for (var i =1;i<= age;i++){
        salary = salary + salary * 0.1;
    }
    document.getElementById('result').value = salary;
}