module.exports = function (callback, stationName) {
    const bilkom = require('bilkom')
    var result = bilkom.stations({ query: stationName })
        .then(function (results) {
            var stationNames = results.map(function (result) {
                var station = { name: result.name, id: result.id }

                return JSON.stringify(station)
            })
            callback(null, stationNames)
        })
        .catch(console.error)
}