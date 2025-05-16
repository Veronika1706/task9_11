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
            "id_6": "Роман",
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

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Переводчик",
            "id_2": "Дизайнер",
            "id_3": "Педагог",
            "id_4": "Врач",
            "id_5": "Стилист",
            "id_6": "Косметолог",
            "id_7": "Няня",
            "id_8": "Менеджер",
            "id_9": "Кондитер",
            "id_10": "Швея"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Военный",
            "id_2": "Сантехник",
            "id_3": "Пожарный",
            "id_4": "Арматурщик",
            "id_5": "Грузчик",
            "id_6": "Слесарь",
            "id_7": "Электрик",
            "id_8": "Шахтер",
            "id_9": "Летчик",
            "id_10": "Сварщик"
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

    randomPatronymic: function() { 
        patronymic = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == 'Мужчина') {
            if (patronymic.includes('й')) {
                patronymic = patronymic.replace("й", "евич");
            } else
                patronymic = patronymic + "ович";
        } else
 
        if (this.person.gender == 'Женщина') {
            if (patronymic.includes('й')) {
                patronymic = patronymic.replace("й", "евна");
            } else
                patronymic = patronymic + "овна"; 
        }
        return patronymic;
    },

    randomBirthYear: function() { 
            year = this.randomIntNumber(2010, 1950);
            birthYear = year + " года рождения"; 
            return birthYear;
    },

    randomProfession: function() {
        if (this.person.gender == 'Женщина') {
          return this.randomValue(this.professionFemaleJson);
        }
        else {
          return this.randomValue(this.professionMaleJson);
        }  
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surnameJson = this.randomSurName();
        this.person.birthYear = this.randomBirthYear();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};