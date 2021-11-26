const validationEmail = (email) => {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
};

const validationPassword = (password) => {
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    return regExp.test(String(password));
};

module.exports = {
    validationEmail,
    validationPassword
}