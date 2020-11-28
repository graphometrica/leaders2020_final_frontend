
const regions = [
    {
      "OES": "ОЭС Северо-Запада",
      "Name": "Архангельская область",
      "SubjectId": "11",
      "PowerSystemId": "840000"
    },
    {
      "OES": "ОЭС Северо-Запада",
      "Name": "Калининградская область",
      "SubjectId": "27",
      "PowerSystemId": "840000"
    },
    {
      "OES": "ОЭС Северо-Запада",
      "Name": "Ленинградская область",
      "SubjectId": "41",
      "PowerSystemId": "840000"
    },
    {
      "OES": "ОЭС Северо-Запада",
      "Name": "Мурманская область",
      "SubjectId": "47",
      "PowerSystemId": "840000"
    },
    {
      "OES": "ОЭС Северо-Запада",
      "Name": "Новгородская область",
      "SubjectId": "49",
      "PowerSystemId": "840000"
    },
    {
      "OES": "ОЭС Северо-Запада",
      "Name": "Псковская область",
      "SubjectId": "58",
      "PowerSystemId": "840000"
    },
    {
      "OES": "ОЭС Северо-Запада",
      "Name": "Республика Карелия",
      "SubjectId": "86",
      "PowerSystemId": "840000"
    },
    {
      "OES": "ОЭС Северо-Запада",
      "Name": "Республика Коми",
      "SubjectId": "87",
      "PowerSystemId": "840000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Белгородская область",
      "SubjectId": "14",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Брянская область",
      "SubjectId": "15",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Владимирская область",
      "SubjectId": "17",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Вологодская область",
      "SubjectId": "19",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Воронежская область",
      "SubjectId": "20",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Ивановская область",
      "SubjectId": "24",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Калужская область",
      "SubjectId": "29",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Костромская область",
      "SubjectId": "34",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Курская область",
      "SubjectId": "38",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Липецкая область",
      "SubjectId": "42",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Московская область",
      "SubjectId": "46",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Орловская область",
      "SubjectId": "54",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Рязанская область",
      "SubjectId": "61",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Смоленская область",
      "SubjectId": "66",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Тамбовская область",
      "SubjectId": "68",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Тверская область",
      "SubjectId": "28",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Тульская область",
      "SubjectId": "70",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Центра",
      "Name": "Ярославская область",
      "SubjectId": "78",
      "PowerSystemId": "530000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Марий Эл",
      "SubjectId": "88",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Мордовия",
      "SubjectId": "89",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Нижегородская область",
      "SubjectId": "22",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Пензенская область",
      "SubjectId": "56",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Республика Татарстан (Татарстан)",
      "SubjectId": "92",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Самарская область",
      "SubjectId": "36",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Саратовская область",
      "SubjectId": "63",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Ульяновская область",
      "SubjectId": "73",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Средней Волги",
      "Name": "Чувашская Республика - Чувашия",
      "SubjectId": "97",
      "PowerSystemId": "600000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Астраханская область",
      "SubjectId": "12",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Волгоградская область",
      "SubjectId": "18",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Кабардино-Балкарская Республика",
      "SubjectId": "83",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Карачаево-Черкесская Республика",
      "SubjectId": "91",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Краснодарский край",
      "SubjectId": "3",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Республика Дагестан",
      "SubjectId": "82",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Республика Ингушетия",
      "SubjectId": "26",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Республика Калмыкия",
      "SubjectId": "85",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Республика Крым",
      "SubjectId": "35",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Республика Северная Осетия-Алания",
      "SubjectId": "90",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Ростовская область",
      "SubjectId": "60",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Ставропольский край",
      "SubjectId": "7",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Юга",
      "Name": "Чеченская республика",
      "SubjectId": "96",
      "PowerSystemId": "550000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Кировская область",
      "SubjectId": "33",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Курганская область",
      "SubjectId": "37",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Оренбургская область",
      "SubjectId": "53",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Пермский край",
      "SubjectId": "57",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Республика Башкортостан",
      "SubjectId": "80",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Свердловская область",
      "SubjectId": "65",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Тюменская область",
      "SubjectId": "71",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Удмурдская Республика",
      "SubjectId": "94",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Урала",
      "Name": "Челябинская область",
      "SubjectId": "75",
      "PowerSystemId": "630000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Алтайский край",
      "SubjectId": "1",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Забайкальский край",
      "SubjectId": "76",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Иркутская область",
      "SubjectId": "25",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Кемеровская область",
      "SubjectId": "32",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Красноярский край",
      "SubjectId": "4",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Новосибирская область",
      "SubjectId": "50",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Омская область",
      "SubjectId": "52",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Республика Бурятия",
      "SubjectId": "81",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Республика Тыва",
      "SubjectId": "93",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Республика Хакасия",
      "SubjectId": "95",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Сибири",
      "Name": "Томская область",
      "SubjectId": "69",
      "PowerSystemId": "610000"
    },
    {
      "OES": "ОЭС Востока",
      "Name": "Амурская область",
      "SubjectId": "10",
      "PowerSystemId": "540000"
    },
    {
      "OES": "ОЭС Востока",
      "Name": "Еврейская автономная область",
      "SubjectId": "99",
      "PowerSystemId": "540000"
    },
    {
      "OES": "ОЭС Востока",
      "Name": "Западный энергорайон Якутии",
      "SubjectId": "100",
      "PowerSystemId": "540000"
    },
    {
      "OES": "ОЭС Востока",
      "Name": "ОЭР Хабаровского края",
      "SubjectId": "8",
      "PowerSystemId": "540000"
    },
    {
      "OES": "ОЭС Востока",
      "Name": "Приморский край",
      "SubjectId": "5",
      "PowerSystemId": "540000"
    },
    {
      "OES": "ОЭС Востока",
      "Name": "Центральный энергорайон Якутии",
      "SubjectId": "101",
      "PowerSystemId": "540000"
    },
    {
      "OES": "ОЭС Востока",
      "Name": "Южно-Якутский энергорайон",
      "SubjectId": "98",
      "PowerSystemId": "540000"
    }
  ]

  export {regions}