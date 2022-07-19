const randomString = (length) => {
    let alert = document.querySelector('.warning--message')
    if (length < 8) {
        let alertMessage = document.querySelector('.alert-info')
        alert.classList.remove('hide')
        alertMessage.innerText = "The length of the password should at least be 8 characters"
        return false
    } else if (length > 60) {
        let alertMessage = document.querySelector('.alert-info')
        alert.classList.remove('hide')
        alertMessage.innerText = "The length of the password should be less than 60 characters"
        return false
    }
    alert.classList.add('hide')
    var choices = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@#$%^&*()_+[]{}\\|:;\'"?/<,>.~`'
    var gen = choices.split('')
    const genStr = []
    for (let i = 0; i < length; i++) {
        randNum = Math.floor(Math.random() * gen.length)
        genStr.push(gen[randNum])
        gen.splice(randNum, 1)
        console.log(gen.length)
        var joined = gen.join('')
        console.log(joined)
    }
    return genStr.join('');
}

const copy_pass = () => {
    var generatedPass = document.querySelector(".gen--pass")
    let text = generatedPass.innerText
    navigator.clipboard.writeText(text)
    console.log("password copied")
    var show = document.querySelector(".is--copied")
    show.classList.remove('hide')
    setTimeout(() => {
        show.classList.add('hide')
    }, 1000)
}

var form = document.querySelector("#generate")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let length = Number(e.path[0][0].value)
    let password = randomString(length)
    var generatedPass = document.querySelector(".gen--pass")
    generatedPass.textContent = ""
    if (password) {
        var generatedPass = document.querySelector(".gen--pass")
        generatedPass.textContent = password
    }
})
