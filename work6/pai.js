//“计算”按钮点击处理函数
function calculate(){
    //读取阶数输入框的数值
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        //设置圆周率输入框的值
        document.getElementById('pai').value = pi(num)
    }
}
//声明阶乘函数n！ 
function factorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum *=i
    }
    return sum 
}
//声明奇数阶乘函数（2n+1）!! 
function oddFactorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum *=2*i+1
    } 
    return sum     
}
//阶乘法计算圆周率函数
function pi (num){
    let sum =0
    for(let i=0;i<=num;++i){
        let dividend = factorial(i)
        let divisor = oddFactorial(i)
            sum += (dividend/divisor)
    }
    return sum*2
}
calculate()