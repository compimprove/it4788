class UserRegisterData {
    firstName = '';
    lastName = '';
    birdthDay = new Date().getTime();
    email = '';
    phoneNumber = '';
    passWord = '';
    getInstance() {
        if (this._instance === undefined) {
            this._instance = new UserRegisterData();
        }
        return this._instance;
    };
}