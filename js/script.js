$(function () {

    let startGameBtn = $('#startGeneration')//кнопка генерирования случайных чисел в лотерейном билете
    let randomNumberBtn = $('#randomNumber')//кнопка для зачеркивания номера в билете
    let cols = $('.wrap .col')
    let arr = []
    while (arr.length < 30){
        let randomNumber = Math.floor(Math.random() * 90) + 1
        if (arr.indexOf(randomNumber) === -1){
            arr.push(randomNumber)
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
        let $cols = $('.wrap .col .pos')
        let arr = []
        $cols.each(function () {
            arr.push(Number($(this).html()))
        })
        let randomNumber = Math.floor(Math.random() * 90) + 1

    })
})