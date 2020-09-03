$(function () {

    let startGameBtn = $('#startGeneration')//кнопка генерирования случайных чисел в лотерейном билете
    let randomNumberBtn = $('#randomNumber')//кнопка для зачеркивания номера в билете

    startGameBtn.click(function () {
        $(this).prop('disabled',true)
        randomNumberBtn.prop('disabled',false)
        let arr = []
        while (arr.length < 30){
            let randomNumber = Math.floor(Math.random() * 90) + 1
            if (arr.indexOf(randomNumber) === -1){
                arr.push(randomNumber)
            }
        }
        let cols = $('.wrap .col')
        cols.each(function (index) {
            $(this).html('<div class="pos">' + arr[index] + '</div>')
        })

    })



})