let shopping = ['manzana', 'harina', 'jugo naranja', 'cereal', 'leche']
shopping.push('Aceite de Girasol')

let movies_likes = [
    {
        title: 'maze runner: La cura mortal',
        director: 'wes ball',
        date: new Date(2018,0,26)
    },
    {
        title: 'kimetsu no yaiba mugen ressha-hen',
        director: 'Haruo Sotozaki',
        date: new Date(2021,3,22)
    },
    {
        title: 'Jhon wick: Otro día para matar',
        director: 'Chad Stahelski',
        date: new Date(2014,11,25)
    }
]

let movies_before_2010 = movies_likes.filter(movie => movie.date.getFullYear() > 2010)
let directors_of_movies = movies_likes.map(movie => movie.director)
let titles_of_movies = movies_likes.map(movie => movie.title)
let titles_and_directors = directors_of_movies.concat(titles_of_movies)
let titles_and_directors_two = [...directors_of_movies, ...titles_of_movies]