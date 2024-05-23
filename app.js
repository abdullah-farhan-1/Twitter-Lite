

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

// const form = document.querySelector('#form')
// const input = document.querySelector('#pick')
// const list = document.querySelector('#list')

// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const userData = input.value
//     const newLi = document.createElement('li')
//     newLi.innerText = userData;
//     list.append(newLi)
//     input.value = ""
// })



// const myForm = document.querySelector('#twitter')
// const userName = document.querySelector('#username')
// const tweets = document.querySelector('#tweet')
// const mylist = document.querySelector('#list')

// myForm.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const newLi = document.createElement('li')
//     newLi.innerText = `${userName.value} tweeted: "${tweets.value}"`
//     mylist.append(newLi)
//     tweets.value = ""
//     userName.value = ""
// })




const myForm = document.querySelector('#twitter')
const list = document.querySelector('#list')
const input1 = document.querySelector('#username')
const input2 = document.querySelector('#tweet')


myForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const newLi = document.createElement('li')
    const button = document.createElement('button')

    newLi.innerText = `${input1.value} tweeted: "${input2.value}"`
    button.innerText = 'Delete this tweet'

    newLi.append(button)

    newLi.classList.add('display')

    list.append(newLi)

    input1.value = ""
    input2.value = ""

    button.addEventListener('click', function () {
        button.parentNode.remove()
    })

})

const objects = [{
    username: 'AQ',
    tweet: 'Okay'
}, {
    username: 'AQ',
    tweet: 'Okay'
}]













