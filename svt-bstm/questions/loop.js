function loopexamples(){
    for(let i= 1;i<=5;i++){
        console.log("For:",i);
    }
    let emp = ["raj","virat","rahul","suvo"];
    emp.forEach(x=> console.log("emp: ", x));
}
module.exports = loopexamples;