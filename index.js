//  https://teachapi.herokuapp.com/sign_up　ユーザー登録
const register = "https://teachapi.herokuapp.com/sign_up";

function user() {
    const data = {
        sign_up_user_params: {
            name: "miseri",
            bio: "よろしく",
            email: "miseri@gmail.com",
            password: "a",
            password_confirmation: "a"
        }
    };

    fetch(register, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((userregister) => {
            return userregister.json();
        })
        .then(json => {
            console.log(json);
        })
}