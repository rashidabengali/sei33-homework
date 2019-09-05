function GetAllStreams(){
    var arrStreams = [];
    var offset = 0;
    var total = -1;

    while(total < 0 || arrStreams.length < total) {
        $.ajax({
          type: 'GET',
          url: 'https://api.twitch.tv/kraken/search/streams?limit=100&offset=' + offset++ + '&q=starcraf',
          headers: {'Client-ID': 'xxx'},
          success: function(json) {
            arrStreams.push(json.streams);
            console.log(json);
            console.log(arrStreams);
        }});
    }

    return arrStreams;
}

const url = 'https://api.twitch.tv/kraken/beta/streams/'





$('iframe').attr('src', 'http://www.twitch.tv/' + stream.channel.name + '/embed');
