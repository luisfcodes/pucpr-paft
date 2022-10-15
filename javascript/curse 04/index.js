const albums = [
  { name: "Mais", singer: "Marisa monte", year: 1991, score: 8.5 },
  { name: "A tempestade", singer: "Legião Urbana", year: 1996, score: 9.5 },
  { name: "Domingo", singer: "Titãs", year: 1995, score: 7.5 },
  { name: "Ouro de Minas", singer: "Roupa Nova", year: 2001, score: 8 },
  { name: "Como estão vocês", singer: "Titãs", year: 2003, score: 7 },
  { name: "Troco Likes", singer: "Thiago Iorc", year: 2015, score: 4.5 },
  { name: "Dois", singer: "Legião Urbana", year: 1986, score: 10 },
  { name: "Radiola", singer: "Skank", year: 2004, score: 6.5 },
  { name: "Roupa acústico", singer: "Roupa Nova", year: 2004, score: 9 },
  { name: "Umbilical", singer: "Thiago Iorc", year: 2011, score: 3.5 },
  { name: "Barulhinho bom", singer: "Marisa monte", year: 1996, score: 7.5 }
];

// <------ first activity ------>

const marisaMonteAlbums = albums.
  filter(item => item.singer === 'Marisa monte').
  map(item => {
    return {
      album: item.name,
      year: item.year
    }
  })

console.log('first activity\n', marisaMonteAlbums)

// <------ second activity ------>

const listOfAllSingersAndAlbums = albums.map(item =>  `${item.singer}: ${item.name}` )

console.log('second activity', listOfAllSingersAndAlbums)

// <------ third activity ------>

const diskScoreList = albums.filter(item => item.year < 2005).map(item => item.score)
const averageDiskScore = Number((diskScoreList.reduce((acc, item) => {
  return acc = acc + item
},0) / diskScoreList.length).toFixed(2))

console.log('third activity\n', averageDiskScore)

// <------ fourth activity ------>

const singerList = albums.map(item => item.singer)
const singleListOfSingers = [...new Set(singerList)]

console.log('fourth activity', singleListOfSingers)

// <------ fifth activity ------>

const albumListBySinger = {}
singerList.forEach(item => albumListBySinger[item] = (albumListBySinger[item]|| 0 ) + 1)

console.log('fifth activity', albumListBySinger)

// <------ sixth activity ------>

function justDate(d, m, y) {
  return new Date(y, m - 1, d).toLocaleDateString('pt-br')
}

console.log('sixth activity\n', justDate(14, 10, 2022))

// <------ seventh activity ------>

function differenceBetweenDates(before, after) {
  const beforeFormatted = before.split('/')
  const afterFormatted = after.split('/') 

  const dateOne = new Date(`${Number(beforeFormatted[1])}/${beforeFormatted[0]}/${beforeFormatted[2]}`).getTime()
  const dateTwo = new Date(`${Number(afterFormatted[1])}/${afterFormatted[0]}/${afterFormatted[2]}`).getTime()

  const resultFormatted = (dateTwo - dateOne) / 60 / 60 / 24 / 1000

  return `A diferença entre estas datas é de ${resultFormatted} dias`

}

console.log('seventh activity\n', differenceBetweenDates("14/10/2022", "22/10/2022"))

// <------ eighth activity ------>

function between(initial, final, testDate, {inclusiveStart, inclusiveEnd} = {}){
  function calcMilliseconds(date){
    const dateFormatted = date.split('/')
    return new Date(`${Number(dateFormatted[1])}/${dateFormatted[0]}/${dateFormatted[2]}`).getTime()
  }

  const initialDateInMilliseconds = calcMilliseconds(initial)
  const finalDateInMilliseconds = calcMilliseconds(final)
  const testDateDateInMilliseconds = calcMilliseconds(testDate)

  if( testDateDateInMilliseconds < initialDateInMilliseconds || testDateDateInMilliseconds > finalDateInMilliseconds ){
    return `${testDate} não está entre as datas ${initial} e ${final}`
  }
  return `${testDate} está entre as datas ${initial} e ${final}`
}

console.log('eighth activity\n', between('15/10/2022', '20/10/2022', '19/10/2022'))

// <------ ninth activity ------>

function nextDates(current, n, days){
  function calcMilliseconds(date){
    const dateFormatted = date.split('/')
    return new Date(`${Number(dateFormatted[1])}/${dateFormatted[0]}/${dateFormatted[2]}`).getTime()
  }

  const nextDatesList = [current]
  for(i = 0; i < n; i++){
    nextDatesList.push(new Date((days * 86400000) + calcMilliseconds(nextDatesList[i])).toLocaleDateString('pt-br'))
  }
  return nextDatesList
}

console.log('ninth activity',nextDates('15/10/2022', 10, 5))

// <------ tenth activity ------>

const albumListSortedByYear = [...albums].sort((a,b) => a.year - b.year)
console.log('tenth activity\n', albumListSortedByYear)

// <------ eleventh activity ------>

const films = [
  {name: 'Licorice Pizza', year: '2022', page: 1},
  {name: 'Top Gun: Maverick', year: '2022', page: 1},
  {name: 'Black Panther', year: '2018', page: 1},
  {name: 'Jurassic World', year: '2015', page: 2},
  {name: 'Guardians Of The Galaxy', year: '2014', page: 2},
  {name: 'Up', year: '2009', page: 2},
  {name: 'Avatar', year: '2009', page: 3},
  {name: 'Life of Pi', year: '2012', page: 3},
  {name: 'American Sniper', year: '2014', page: 3},
]

function paginador(list, pages){
  const filteredList = list.filter(item => item.page <= pages)
  return function(page){
    return filteredList.filter(item => item.page === page)
  }
}

const pages = paginador(films, 2)
console.log('eleventh activity\n', pages(1))

// <------ twelfth activity ------>

function average(list, value = false){
  if(value){
    const sumItens = list.map(item => item[value]).reduce((acc, item) => { 
      return acc += item
    },0)
    return Number((sumItens / list.length).toFixed(2))
  } else {
    const sumItens = list.reduce((acc, item) => {
      return acc += item
    },0)
    return Number((sumItens / list.length).toFixed(2))
  }
}

console.log('twelfth activity\n', average(albums, 'score'), '\n', average([1,2,3,4,5]))