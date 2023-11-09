function moviesExer(arr) {

    let movies = [];

    class movie {
        constructor(name, date, director) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let contains = function (movieName) {
        let movie = movies.find(m => m.name === movieName);
        return movie;
    }

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' ');

        if (current[0] == 'addMovie') {
            current.shift();
            let name = current.join(' ');
            movies.push(new movie(name, null, null));
        }
        else if (current.includes('directedBy')) {
            let name = current.slice(0, current.indexOf('directedBy')).join(' ');
            if (contains(name) !== undefined) {
                let movie = contains(name);
                movie.director = current.slice(current.indexOf('directedBy') + 1, current.length).join(' ');
            }
        }
        else if (current.includes('onDate')) {
            let name = current.slice(0, current.indexOf('onDate')).join(' ');
            if (contains(name) !== undefined) {
                let movie = contains(name);
                movie.date = current.slice(current.indexOf('onDate') + 1, current.length).join(' ');
            }
        }
    }
    movies.forEach(m => m.director != null && m.name != null && m.date != null ? console.log(JSON.stringify(m)) : null);
}

moviesExer(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo'])