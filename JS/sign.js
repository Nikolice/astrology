class Sign {
    constructor(index, icon, name, element, dateStart, length) {
        this.Index = index;
        this.Icon = icon;
        this.Name = name;
        this.Element = element;
        this.DateStart = dateStart;
        this.Length = length;
    }
}

var Libra =         new Sign( 1, '♎', 'Весы',      'wind',   new Date(2019,  4, 29), [25,  6.85]);
var Scorpio =       new Sign( 2, '♏', 'Скорпион',  'water',  new Date(2019,  5, 24), [ 8,  2.19]);
var Ophiucus =      new Sign( 3, '⛎', 'Змееносец', '?',       new Date(2019,  6,  1), [18,  4.93]);
var Sagittarius =   new Sign( 4, '♐', 'Стрелец',   'fire',   new Date(2019,  6, 19), [35,  9.59]);
var Capricorn =     new Sign( 5, '♑', 'Козерог',   'earth',  new Date(2019,  7, 24), [29,  7.95]);
var Aquarius =      new Sign( 6, '♒', 'Водолей',   'wind',   new Date(2019, 08, 22), [25,  6.85]);
var Pisces =        new Sign( 7, '♓', 'Рыбы',      'water',  new Date(2019, 09, 16), [37, 10.14]);
var Aries =         new Sign( 8, '♈', 'Овен',      'fire',   new Date(2019, 10, 23), [25,  6.85]);
var Taurus =        new Sign( 9, '♉', 'Телец',     'earth',  new Date(2019, 11, 17), [36,  9.86]);
var Gemini =        new Sign(10, '♊', 'Близнецы',  'wind',   new Date(2019, 12, 23), [28,  7.67]);
var Cancer =        new Sign(11, '♋', 'Рак',       'water',  new Date(2020,  1, 20), [19,  5.21]);
var Leo =           new Sign(12, '♌', 'Лев',       'fire',   new Date(2020,  2,  8), [36,  9.86]);
var Virgo =         new Sign(13, '♍', 'Дева',      'earth',  new Date(2020,  3, 15), [45, 12.33]);

var signs = [Libra, Scorpio, Ophiucus, Sagittarius, Capricorn, Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo];
