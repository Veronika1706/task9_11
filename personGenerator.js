const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Вероника",
            "id_3": "Татьяна",
            "id_4": "Анна",
            "id_5": "Олеся",
            "id_6": "Анастасия",
            "id_7": "Ульяна",
            "id_8": "Юлия",
            "id_9": "Полина",
            "id_10": "Ксения"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
     },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
      if (this.person.gender == 'Мужчина') {
        return this.randomValue(this.firstNameMaleJson);
      } 
      else {
        return this.randomValue(this.firstNameFemaleJson);
       }
    },

     randomSurName: function() {
        if (this.person.gender == 'Мужчина') {
          return this.randomValue(this.surnameJson);
        }
        else {
          return this.randomValue(this.surnameJson) + 'а';
        }  
    },

    randomBirthYear: function() { 
            year = this.randomIntNumber(2010, 1950);
            birthYear = year + " года рождения"; 
            return birthYear;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surnameJson = this.randomSurName();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};