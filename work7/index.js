function sort(method){
    //读取待排序数据
    let origin= document.getElementById('origin').value
    let logs
    console.log(method)
    //根据传入排序的方法调用不同的排序函数
    if(method=='bubble'){
        logs = bubbleSort(origin)
    }else if (method=='insert'){
        logs = insertSort(origin)
    }
    //获取显示冒泡排序的div
    showDiv = document.getElementById('Anim')
    //显示排序后的结果
    showDiv.innerHTML = logs
}