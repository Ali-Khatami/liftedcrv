function getYearsArray()
{
    var years = [];

    for(var i = new date().year; i > 1995; i--)
    {
        years.push(i);
    }

    return years;
}

var filterOptions = {
    years: getYearsArray(),
    trims: [
        "LX",
        "EX",
        "SE",
        "EX-L",
        "Touring",
        "Other"
    ]
};

module.exports = filterOptions;