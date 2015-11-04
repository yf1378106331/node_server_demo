/**
 * Created by hui on 2015/11/3.
 */
//求和函数
function sum(n){
    var sum = 0;
    for(var i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}
exports.sum = sum;