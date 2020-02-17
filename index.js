// token
// Authorization: Bearer ircQkvMQUHpotKQN9sf3JAtt
id = localStorage.getItem("id");
token = localStorage.getItem("token");
//  https://teachapi.herokuapp.com/sign_up　ユーザー登録
function user_register() {
    const register = "https://teachapi.herokuapp.com/sign_up";
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
function login() {
    const login_url = "https://teachapi.herokuapp.com/sign_in"
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
            'Content-Type': 'application/json',
            // "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
        .then((userlogin) => {
            return userlogin.json();
        })
        .then(json => {
            console.log(json.id)
            localStorage.setItem('id', json.id);
            localStorage.setItem('token', json.token);
        })

}

// ユーザー一覧　 https://teachapi.herokuapp.com/users
function getUsers() {
    const page = document.getElementById("page").value;
    const limit = document.getElementById("limit").value;
    const query = document.getElementById("query").value;
    fetch(`https://teachapi.herokuapp.com/users?page=${page}&limit=${limit}&query=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
        .then((userslist) => {
            return userslist.json();
        })
        .then(json => {
            console.log(json);
        })
}

// 投稿一覧　https://teachapi.herokuapp.com/posts
function postList() {
    const post_page = document.getElementById("post_page").value;
    const post_limit = document.getElementById("post_limit").value;
    const post_query = document.getElementById("post_query").value;
    const post_list = `https://teachapi.herokuapp.com/posts?page=${post_page}&limit=${post_limit}&query=${post_query}`
    fetch(post_list, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
        .then((post_list) => {
            return post_list.json();
        })
        .then(json => {
            console.log(json);
        })
}

// ユーザー編集　 https://teachapi.herokuapp.com/users/{id}
function userEdit() {
    const user_edit = "https://teachapi.herokuapp.com/users/" + localStorage.getItem('id')
    const edit_name = document.getElementById("edit_name").value;
    const edit_bio = document.getElementById("edit_bio").value;
    const data = {
        user_params: {
            name: edit_name,
            bio: edit_bio,
        }
    }
    fetch(user_edit, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer " + localStorage.getItem('token')
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
// ユーザー削除 https://teachapi.herokuapp.com/users/{id}
function userdelete_button() {
    const id = document.getElementById("user_delete").value;
    const userdelete = "https://teachapi.herokuapp.com/users/" + localStorage.getItem('id')
    fetch(userdelete, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
        .then((response) => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })

}
// ユーザーのタイムライン https://teachapi.herokuapp.com/users/{id}
function user_timeline() {
    const timeline = "https://teachapi.herokuapp.com/users/" + localStorage.getItem('id') + "/timeline"
    const timeline_page = document.getElementById("timeline_page").value;
    const timeline_limit = document.getElementById("timeline_limit").value;
    const timeline_query = document.getElementById("timeline_query").value;
    fetch(timeline, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer " + localStorage.getItem('token')
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
function createPost() {
    const create_post = "https://teachapi.herokuapp.com/posts"
    const new_page = document.getElementById("new_page").value;
    const postdata = {
        post_params: {
            text: new_page
        }
    };
    fetch(create_post, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer " + localStorage.getItem('token')
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

// 投稿編集　https://teachapi.herokuapp.com/posts/{id}
function post_edit() {
    const post_id = document.getElementById("post_id").value;
    const postEdit = "https://teachapi.herokuapp.com/posts/" + post_id
    const edit_post = document.getElementById("edit_post").value;
    const editdata = {
        post_params: {
            text: edit_post
        }
    };
    fetch(postEdit, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(editdata),
    })
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
}

// 投稿削除　https://teachapi.herokuapp.com/posts/{id}
function postdelete_button() {
    const post_delete = document.getElementById("post_delete").value;
    const post_id = "https://teachapi.herokuapp.com/posts/" + post_delete
    fetch(post_id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // ベアラートークンを入れる
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
        .then((response) => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
}
