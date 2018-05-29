var animeArr = ['DBZ', 'Bleach', 'Neon Genesis Evangelion', 'Hunter X Hunter', 'My Hero Academia', 'FLCL', 'Toradora', 'Persona 5'];
var URL = "https://api.giphy.com/v1/gifs/search?api_key=OghruOgDY1nrR54hUP58lxyYRYRa5UoR&q=" + title + "&limit=10&offset=0&rating=G&lang=en";
var title;

function createBtn() {
    var newBtn = $("<button>").attr('class',"btn btn-outline-primary animeGif");
    $(newBtn).attr('id',animeArr[i]);
    $(newBtn).text(animeArr[i]);
    $('#gifButtons').prepend(newBtn);
}

for(var i = 0; i<animeArr.length; i++){
   createBtn();
    }


$('#submitBtn').on('click',function(){

    var newSearch = $('#animeSearch').val().trim();
    animeArr.push(newSearch);
    console.log(animeArr);
        createBtn();
        i++;
});


$('.animeGif').on('click', function(){
    title = $(this).attr('id');
    
    axios.get(URL)

    .then(function(resp){
        console.log(resp.data);

    })
    .catch(function(err){
        console.log(err);
    })


    
})