// token
// Authorization: Bearer ircQkvMQUHpotKQN9sf3JAtt

//  https://teachapi.herokuapp.com/sign_up　ユーザー登録
const register = "https://teachapi.herokuapp.com/sign_up";
// フォーム入力された情報を取得
function user() {
    const sign_up_name = document.getElementById("sign_up_name").value;
    console.log("sign_up_name : " + sign_up_name);
    const sign_up_bio = document.getElementById("sign_up_bio").value;
    console.log("sign_up_bio : " + sign_up_bio);
    const sign_up_mail = document.getElementById("sign_up_mail").value;
    console.log("sign_up_mail : " + sign_up_mail);
    const sign_up_pass = document.getElementById("sign_up_pass").value;
    console.log("sign_up_pass: " + sign_up_pass);
    const sign_up_pass2 = document.getElementById("sign_up_pass2").value;
    console.log("sign_up_pass2 : " + sign_up_pass2);
    const data = {
        sign_up_user_params: {
            name: sign_up_name,
            bio: sign_up_bio,
            email: sign_up_mail,
            password: sign_up_pass,
            password_confirmation: sign_up_pass2
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

// ログイン  https://teachapi.herokuapp.com/sign_in
// 怖いから確認のコミットとプッシュをします
const login_url = "https://teachapi.herokuapp.com/sign_in"
// 入力された情報を取得
function login() {
    const login_mail = document.getElementById("login_mail").value;
    const login_pass = document.getElementById("login_pass").value;
    const login_passcheck = document.getElementById("login_passcheck").value;
    const login_data = {
        sign_in_user_params: {
            email: login_mail,
            password: login_pass,
            password_confirmation: login_passcheck
        }
    };
    console.log("送ったデータ : " + JSON.stringify(login_data));
    fetch(login_url, {
        method: 'POST',
        body: JSON.stringify(login_data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((userlogin) => {
            return userlogin.json();
        })
        .then(json => {
            console.log(json);
        })
}

// ユーザー一覧　 https://teachapi.herokuapp.com/users
const user_list = "https://teachapi.herokuapp.com/users"
// 入力された情報を取得
function getUsers() {
    const page = document.getElementById("page").value;
    const limit = document.getElementById("limit").value;
    const query = document.getElementById("query").value;
    fetch(`https://teachapi.herokuapp.com/users?page=${page}&limit=${limit}&query=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer ircQkvMQUHpotKQN9sf3JAtt"
        }
    })
        .then((userslist) => {
            return userslist.json();
        })
        .then(json => {
            console.log(json);
        })
}
console.log("getUsers() start")
getUsers()
console.log("getUsers() end")

// 投稿一覧　https://teachapi.herokuapp.com/posts
const post_list = "https://teachapi.herokuapp.com/posts"
// 入力された情報を取得
function postList() {
    const post_page = document.getElementById("post_page").value;
    const post_limit = document.getElementById("post_limit").value;
    const post_query = document.getElementById("post_query").value;
    fetch(`https://teachapi.herokuapp.com/posts?page=${post_page}&limit=${post_limit}&query=${post_query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer ircQkvMQUHpotKQN9sf3JAtt"
        }
    })
        .then((post_list) => {
            return post_list.json();
        })
        .then(json => {
            console.log(json);
        })
}
console.log("postList() start")
postList()
console.log("postList() end")

// ユーザー編集　 https://teachapi.herokuapp.com/users/{id}
const user_edit = "https://teachapi.herokuapp.com/users/895"
// 入力された情報を取得
function userEdit() {
    const edit_name = document.getElementById("edit_name").value;
    const edit_bio = document.getElementById("edit_bio").value;
    const data = {
        user_params: {
            name: edit_name,
            bio: edit_bio,
        }
    }
    fetch('https://teachapi.herokuapp.com/users/895', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer ircQkvMQUHpotKQN9sf3JAtt",
        },
        body: JSON.stringify(data),
    })
        .then((user_Edit) => {
            return user_Edit.json();
        })
        .then((json) => {
            console.log(json);
        })
}

// ユーザーのタイムライン https://teachapi.herokuapp.com/users/{id}
const timeline = "https://teachapi.herokuapp.com/users/895/timeline"
// 入力された情報を取得
function user_timeline() {
    const timeline_page = document.getElementById("timeline_page").value;
    const timeline_limit = document.getElementById("timeline_limit").value;
    const timeline_query = document.getElementById("timeline_query").value;
    fetch(timeline, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer ircQkvMQUHpotKQN9sf3JAtt"
        }
    })
        .then((response) => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
}

// 投稿作成　 https://teachapi.herokuapp.com/posts
const create_post = "https://teachapi.herokuapp.com/posts"
// 入力された情報を取得
function createPost() {
    const new_page = document.getElementById("new_page").value;
    const postdata = {
        post_params: {
            text: "text"
        }
    };
    fetch('https://teachapi.herokuapp.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer ircQkvMQUHpotKQN9sf3JAtt"
        },
        body: JSON.stringify(postdata),
    })
        .then((response) => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
}

