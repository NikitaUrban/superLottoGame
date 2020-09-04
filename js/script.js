
    let startGameBtn = $('#startGeneration')//кнопка генерирования случайных чисел в лотерейном билете
    let randomNumberBtn = $('#randomNumber')//кнопка для зачеркивания номера в билете
    let cols = $('.wrap .col')
    let arr = []//массив для дальнейшего создания лотерейного билета
    let randomNumberArr = []
        while (arr.length < 30){
            let randomNumber = Math.floor(Math.random() * 90) + 1
            if (arr.indexOf(randomNumber) === -1){
                arr.push(randomNumber)
            }
        }
    while (randomNumberArr.length < 90){
        let randomNumber = Math.floor(Math.random() * 90) + 1
        if (randomNumberArr.indexOf(randomNumber) === -1){
            randomNumberArr.push(randomNumber)
        }
    }
        randomNumberBtn.prop('disabled',true)
        startGameBtn.click(function () {
            $(this).prop('disabled',true)
            randomNumberBtn.prop('disabled',false)
            cols.each(function (index) {
                $(this).html('<div class="pos">' + arr[index] + '</div>')
            })
        })
        randomNumberBtn.click(function () {

            for (let i = 0 ; i < randomNumberArr.length ; i++){
                let a = $.inArray(randomNumberArr[i],arr)
                if (a > -1){
                    alert('Есть ' + randomNumberArr[i])
                    $('.col:eq(a)').addClass('crossed')
                    break
                }
                alert('Нет ' + randomNumberArr[i])
            }
            })


