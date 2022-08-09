class Professional {
    constructor(name, age, genre, weight, hairColor, eyeColor, race, isRetired, nacionality, oscarsNumber, profession, imagen) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nacionality = nacionality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.imagen = imagen;
    }
}

class Movie {
    constructor(title, releaseYear, nacionality, genre, imagen, trailer) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.imagen = imagen;
        this.trailer = trailer;
    }
}

var movies = Array();

movies.push(new Movie("Top Gun: Maverick", 2022, "Estados Unidos", ["Acción", "Drama"], "https://pics.filmaffinity.com/Top_Gun_Maverick-733802541-large.jpg", "zmFdhZ6gyUM"));
movies.push(new Movie("Lightyear", 2022, "Estados Unidos", ["Animación", "Acción", "Aventura"], "https://pics.filmaffinity.com/Lightyear-529062623-mmed.jpg", "qGAvNA7xkss"));
movies.push(new Movie("Jurassic World: Dominion", 2022, "Estados Unidos", ["Acción", "Aventura", "Ciencia ficción"], "https://pics.filmaffinity.com/Jurassic_World_Dominion-228831206-mmed.jpg", "RJ4b1ZQxPmE"));


$(document).ready(function() {//Se va a ejecutar cuando la pagina se encuentre totalmente cargada
    for (let i = 0; i < 3; i++) {//Añado tres peliculas para la portada
        $(".contenido").append('<div class="movie"> <img src="' + movies[i].imagen + '" alt=""><p>' + movies[i].title + '</p></div>');
    }
});

function peliculas() {//al dar clic en el boton de peliculas
    $(".titulo").text("Películas");//cambia el texto del encabezado
    $(".contenido").empty();//vacio la caja de contenido
    for (let i = 0; i < movies.length; i++) {//añado todas las peliculas segun la cantidad que haya
        let genres = "";
        for (let j = 0; j < movies[i].genre.length; j++) {//el genero de las peliculas pueden ser mas de 1 y hay que prepararlas
            genres += "<span>" + movies[i].genre[j] + "</span>";
        }
        $(".contenido").append('<div class="fullmovie"><p class="title">' + movies[i].title + '</p><span class="releaseYear">' + movies[i].releaseYear + '</span><div class="multi"><img src="' + movies[i].imagen + '" alt=""><iframe src="https://www.youtube.com/embed/' + movies[i].trailer + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="datos"><p>' + genres + movies[i].nacionality + '</p></div></div>');
    }
}

function profecionales() {
    $(".titulo").text("Esta sección se encuentra en mantenimiento");
    $(".contenido").empty();
}

function adicionarPelicula(event) {//al rellenar el formulario
    event.preventDefault();
    let title = $("#title").val();
    let releaseYear = $("#releaseYear").val();
    let nacionality = $("#nacionality").val();
    let genre = $("#genre").val();
    genre = genre.split(",")//el genero pueden ser varios y voy a separarlos por las comas
    let imagen = $("#imagen").val();
    let trailer = $("#trailer").val();
    movies.push(new Movie(title, releaseYear, nacionality, genre, imagen, trailer));//creo la pelicula y se la añado al arrelgo
    $('form').each(function() {
        this.reset();
    })
    alert("Película insertada correctamente");
}