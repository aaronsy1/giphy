var animeArr = ['DBZ', 'Bleach', 'Neon Genesis Evangelion', 'Hunter X Hunter', 'My Hero Academia', 'FLCL', 'Toradora', 'Persona 5',];

function createBtn() {
    var newBtn = $("<button>").attr('class', "btn btn-outline-primary animeGif");
    $(newBtn).attr('id', animeArr[i]);
    $(newBtn).text(animeArr[i]);
    $('#gifButtons').prepend(newBtn);
}

function animateGif(){
    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
  
})
}

function populateGif() {
    
        $('.animeGif').on('click', function () {
            $('#gifPopulation').empty();
            var title = $(this).attr('id');
            var URL = "https://api.giphy.com/v1/gifs/search?api_key=OghruOgDY1nrR54hUP58lxyYRYRa5UoR&q=" + title + "&limit=10&offset=0&rating=G&lang=en";
            axios.get(URL)
                .then(function (resp) {
                    console.log(resp.data);

                    for (var j = 0; j < 10; j++) {
                        gifDiv = $('<div>');
                        textDiv = $('<div>');
                        var gif = $('<img>').attr('src', 'https://media3.giphy.com/media/' + resp.data.data[j].id + '/giphy_s.gif');
                        $(gif).attr('data-still','https://media3.giphy.com/media/' + resp.data.data[j].id + '/giphy_s.gif');
                        $(gif).attr('data-animate','https://media3.giphy.com/media/' + resp.data.data[j].id + '/giphy.gif');
                        $(gif).attr('data-state','animate');
                        $(gif).attr('class','gif');


                        $(gifDiv).append(gif);
                        animateGif();
                        $(textDiv).append("rating: " + resp.data.data[j].rating);
                        $(gifDiv).prepend(textDiv);
                        $('#gifPopulation').prepend(gifDiv);
                        
                    }
                })
                .catch(function (err) {
                    console.log(err);
                })
        })

        
};



$('#submitBtn').on('click', function () {

    var newSearch = $('#animeSearch').val().trim();
    animeArr.push(newSearch);
    console.log(animeArr);
    createBtn();
    i++;
    populateGif();
});


for (var i = 0; i < animeArr.length; i++) {
    createBtn();
}
populateGif();