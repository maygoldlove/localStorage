let user={
    name: 'James',
    age: 22
};
let userParagraph= document.getElementById('user');

function signIn(){

    window.localStorage.setItem('user',JSON.stringify(user));
}

function getUser(){
    console.log('sss');

    const user= JSON.parse(window.localStorage.getItem('user'));
    console.log(user);
    userParagraph.innerHTML = `${user.name} ${user.age}`;

}

function signOut(){
    // localStorage.removeItem('user');
    localStorage.clear();
    userParagraph.innerHTML='';
}