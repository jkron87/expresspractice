var lyric = '';

$.get('/lyrics', function(data){
  lyric = data;
  console.log(lyric);
});
