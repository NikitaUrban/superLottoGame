$(function () {

    let startGameBtn = $('#startGeneration')//кнопка генерирования случайных чисел в лотерейном билете
    let randomNumberBtn = $('#randomNumber')//кнопка для зачеркивания номера в билете

    startGameBtn.click(function () {
        $(this).prop('disabled',true)
        randomNumberBtn.prop('disabled',false)
        let cols = $('.wrap .col')
        let result = []
        cols.each(function () {
            let n = Math.floor(Math.random() * 90) + 1
            $(this).html(n)
        })

    })



})