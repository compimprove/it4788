export default class UserRegisterData {
    _firstName = '';
    get firstName() {
        return this._firstName;
    };
    set firstName(value) {
        this._firstName = value;
    };
    _lastName = '';
    get lastName() {
        return this._lastName;
    };
    set lastName(value) {
        this._lastName = value;
    };
    _birthDay = new Date(1990, 1, 1);
    get birthDay() {
        return this._birthDay;
    };
    set birthDay(value) {
        this._birthDay = value;
    };

    _email = '';
    get email() {
        return this._email;
    };
    set email(value) {
        this._email = value;
    };
    _phoneNumber = '';
    get phoneNumber() {
        return this._phoneNumber;
    };
    set phoneNumber(value) {
        this._phoneNumber = value;
    };
    _passWord = '';
    get passWord() {
        return this._passWord;
    };
    set passWord(value) {
        this._passWord = value;
    };
    _sex = -1;
    get sex() {
        return this._sex;
    };
    set sex(value) {
        this._sex = value;
    };

    _uuid = "d4546f48-27c1-4b30-8b65-e8d07626d52e";
    get uuid() {
        return this._uuid;
    }

    log() {
        console.log(JSON.stringify(this));
    }
}
UserRegisterData.getInstance = function () {
    if (this._instance === undefined) {
        this._instance = new UserRegisterData();
    }
    return this._instance;
};