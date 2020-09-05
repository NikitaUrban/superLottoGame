let counter = 0//счетчик ходов
let counter2 = 0//счетчик для поля, если он больше 30 проверять чтобы поле было зеленым
    let startGameBtn = $('#startGeneration')//кнопка генерирования случайных чисел в лотерейном билете
    let randomNumberBtn = $('#randomNumber')//кнопка для зачеркивания номера в билете
    let cols = $('.wrap .col')
    let arr = []//массив для дальнейшего создания лотерейного билета
    let randomNumberArr = []
        randomNumberBtn.prop('disabled',true)
        startGameBtn.click(function () {
            $(this).prop('disabled',true)
            randomNumberBtn.prop('disabled',false)
            arr = []//очищаем arr
            randomNumberArr = [] //randomNumberArr
            counter2 = 0//обнуляем счетчик поля
            counter = 0//обнуляем счетчик ходов
            cols.removeClass('crossed')
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
            cols.each(function (index) {
                $(this).html('<div class="pos">' + arr[index] + '</div>')
            })
        })
        randomNumberBtn.click(function () {
                let a = $.inArray(randomNumberArr[counter], arr)
                if (a > -1){
                    counter2++
                   if (counter2 < 30) {
                       alert('Есть ' + randomNumberArr[counter])
                       cols.eq(a).addClass('crossed')
                   }else {
                       alert('Есть ' + randomNumberArr[counter])
                       cols.eq(a).addClass('crossed')
                       alert('Вы победили за ' + (counter + 1) + ' ходов!')
                       startGameBtn.prop('disabled',false)
                       randomNumberBtn.prop('disabled',true)
                   }
                }
                else {
                    alert('Нет ' + randomNumberArr[counter])
                }
                    counter++
        })


