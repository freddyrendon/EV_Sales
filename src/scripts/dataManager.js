// const raw_csv = require('./../../IEA-EV-data.csv');

const fs = require('fs');
// const fetch = require('node-fetch');

const COUNTRY_NAME_INDEX = 0


async function getContinent(countryName) {
    if (/europe|africa|asia|south america|china|denamrk/i.test(countryName)){
        return 'Invalid continent'
    }
    console.log('fething continent for country: ',countryName)
    const url = "https://restcountries.com/v3.1/name/" + countryName
    console.log(url)
    const [firstCountry] = await fetch(url).then(res=>res.json())
    .catch(error=>{
        console.log("Error: during continents fetch", countryName)
        console.error(error)})
    // console.log({firstCountry})
    return firstCountry?.continents[0] ?? 'Unknow continent'
}


async function init() {
    //load csv
    const batch = 1
    const batch_size = 7000

    const raw_csv = fs.readFileSync('IEA-EV-data.csv',{encoding:'utf8',flag:'r'})

    // console.log(raw_csv)
    // let csv = await fetch('IEA-EV-data.csv').then(res => res.text())
    let [_,...countries] = raw_csv.split('\n').map(country => country.split(','))


    console.log('total countries', countries.length)
    // return

    countries = countries
    .slice(batch_size * batch,batch + batch_size)//call only 50 countries
    .map(async (country) => {
        const continent = await getContinent(country[COUNTRY_NAME_INDEX])
        return [...country, continent]
    })
    // getContinent(countries[0][COUNTRY_NAME_INDEX]).then(res=> console.log(res))


    Promise.all(countries).then(response =>{

        console.log(response)
        saveData(JSON.stringify(response),`ev-data-with-continents-${batch}.json`)
    })

}



function saveData(data, fileName = 'ev-data-with-continents.json') {
    try {

        fs.writeFileSync(fileName, data)
    } catch (error) {
        console.error(error)
    }
}

init()