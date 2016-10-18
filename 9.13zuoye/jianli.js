/**
 * Created by Administrator on 2016/9/13.
 */

/*
function check_submit() {
    if (document.getElementById("name").value == "") {
        alert('请输入姓名');
        document.getElementById("name").focus(); // 给输入框获得焦点
        return false; // 返回false, 终止表单提交
    }
    return true; // 返回true, 表单提交
}

function check_submit() {
    if (document.getElementById("name").value == "") {
        alert('请输入姓名');
        document.getElementById("name").focus(); // 给输入框获得焦点
        return false; // 返回false, 终止表单提交
    }
    return true; // 返回true, 表单提交
}*/


function check_submit(){
    var name = document.getElementById('name').value;
    var sex = document.getElementsByName('sex');
    var edu = document.getElementById('edu').value;
    var school = document.getElementById('school').value;
    var  interesting= document.getElementsByName('interesting[]');
    var evaluate = document.getElementById('evaluate').value;
    if(!name){
        alert('请填写姓名');
        return false;
    }

    var all = "";
    for(var i=0; i <sex.length; i++ ) {

        if (sex[i].checked ) {
            all = sex[i].value;

        }
    }
    if(all == ''){

        alert('请输入性别')
    }

    if(!edu){
        alert('请选择学历');
        return false;
    }
    if(!school){
        alert('请选择毕业学校');
        return false;
    }
    var inter = "";
    for(var j=0; j <interesting.length; j++ ) {

        if (interesting[j].checked ) {
            inter = interesting[i].value;
        }
    }
    if(inter == ''){
        alert('请输入兴趣');

    }
    if(!evaluate){
        alert('请填写自我评价');
        return false;
    }
}