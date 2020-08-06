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

var signs = [
    new Sign( 1, '♎', 'Libra',       'wind',   new Date(2019,  3, 29), [25,  6.85]),
    new Sign( 2, '♏', 'Scorpio',     'water',  new Date(2019,  4, 24), [ 8,  2.19]),
    new Sign( 3, '⛎', 'Ophiucus',    '?',      new Date(2019,  5,  1), [18,  4.93]),
    new Sign( 4, '♐', 'Sagittarius', 'fire',   new Date(2019,  5, 19), [35,  9.59]),
    new Sign( 5, '♑', 'Capricorn',   'earth',  new Date(2019,  6, 24), [29,  7.95]),
    new Sign( 6, '♒', 'Aquarius',    'wind',   new Date(2019,  7, 22), [25,  6.85]),
    new Sign( 7, '♓', 'Pisces',      'water',  new Date(2019,  8, 16), [37, 10.14]),
    new Sign( 8, '♈', 'Aries',       'fire',   new Date(2019,  9, 23), [25,  6.85]),
    new Sign( 9, '♉', 'Taurus',      'earth',  new Date(2019, 10, 17), [36,  9.86]),
    new Sign(10, '♊', 'Gemini',      'wind',   new Date(2019, 11, 23), [28,  7.67]),
    new Sign(11, '♋', 'Cancer',      'water',  new Date(2020,  0, 20), [19,  5.21]),
    new Sign(12, '♌', 'Leo',         'fire',   new Date(2020,  1,  8), [36,  9.86]),
    new Sign(13, '♍', 'Virgo',       'earth',  new Date(2020,  2, 15), [45, 12.33])
]