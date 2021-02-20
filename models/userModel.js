class UserModel {
    id;
    name;
    lastname;
    email;
    phone;
    password;

    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.lastname = user.lastname;
        this.email = user.email;
        this.phone = user.phone;
        this.password = user.password;
    }
}

module.exports = UserModel;