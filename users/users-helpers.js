module.exports={
    validateUser
}
function validateUser(user){
    let errors = [];
    if (!user.username || user.username.length < 2){
        errors.push("please include a username > 2 charecters")
    }
    if (!user.password || user.password.length <4){
        errors.push("Please include a password with at least 4 charecters")
    }
    return{
        isSuccessful: errors.length > 0 ? false :true,
        errors
    };
}