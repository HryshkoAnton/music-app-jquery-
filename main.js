import db from './posts.js'

db.myPlaylist = [];

//add elements to DOM, add Classes and text to elements
$('section').attr('id', 'container');


$('header').append('<a>MusicApp');
$('a').addClass('logo');
$('section:eq(0)').addClass('section1');
$('section:eq(1)').addClass('Hot_List_Section');
$('section:eq(3)').addClass('My_Playlist_section');
$('.My_Playlist_section').hide()
$('.Hot_List_Section').hide()
$('header').append('<ul>');
$('ul').append('<li>');
$('ul').append('<li>');
$('ul').append('<li>');

$('li').append('<a>')
$('a').attr('href', '#')

$('ul a:first').text('Home Page').addClass('HomePage');
$('ul a:eq(1)').text('Hotlist').addClass('HotList');
$('ul a:eq(2)').text('My Playlist').addClass('MyPlaylist');

$('ul').addClass('navigation_list');
$('header').addClass('clearfix');

////////////////////////////////////////////////////////////

// add music card to My Playlist on button press
const addItemToMyPlayList = (itemId)=>{
    let item;
    
    _.each(db, (dbItem) => {
      item = _.findWhere(dbItem, {"id": +itemId});
      if (item && !_.findWhere(db.myPlaylist, {"id": +itemId})) {
        console.log(db.myPlaylist)
        db.myPlaylist.push(item);
      }
    })
  };





// create all music cards function
function createMusicCards(section) {
    _.each(db, (dbItem) => {
        _.each(dbItem, (dbObject) => {
             console.log(db.hotlist)
            
                // create elements of music card
            var $myDiv = $('<div>');
            var $title = $('<h3>');
            var $img = $('<img>');
            var $info = $('<p>');
            var $author = $('<span>');
            var $button = $('<button>')
    
            //add elements to music card
            $myDiv.append($title);
            $myDiv.append($img);
            $myDiv.append($info);
            $myDiv.append($author);
            $myDiv.append($button);
    
    
            $(section).append($myDiv);
            
            $myDiv.addClass('border music__card__section');
            
            //add info from database into music card
    
            $button.attr('id', dbObject.id)
            $title.text(dbObject.title);
            $img.attr('src', dbObject.imgUrl).css('border-radius', '8px');
            $info.text(dbObject.description);
            $author.text(dbObject.author);
            $button.text('To Playlist');
            
        })
        
    });
}

createMusicCards('.section1')


//add music from database to hotlist

function addMusicToHotlist(listOfMusic, section) {
    _.each(listOfMusic, (musicItem) => {
        // create elements of music card
        var $myDiv = $('<div>');
        var $title = $('<h3>');
        var $img = $('<img>');
        var $info = $('<p>');
        var $author = $('<span>');
        var $button = $('<button>')

        //add elements to music card
        $myDiv.append($title);
        $myDiv.append($img);
        $myDiv.append($info);
        $myDiv.append($author);
        $myDiv.append($button);


        $(section).append($myDiv);
        
        $myDiv.addClass('border music__card__section');
        
        //add info from database into music card

        $button.attr('id', musicItem.id)
        $title.text(musicItem.title);
        $img.attr('src', musicItem.imgUrl).css('border-radius', '8px');
        $info.text(musicItem.description);
        $author.text(musicItem.author);
        $button.text('To Playlist');
        
        
        
        
    })
}


addMusicToHotlist(db.hotlist, '.Hot_List_Section')


















// for (let i = 0; i < db.library.length; i++) {
//     $('.section1').append('<div>'); 
//     $('.section1 div').addClass('border music__card__section');
//     $(`.section1 div:eq(${i})`).append('<h3>','<img>', '<p>', '<span>', '<button>');
//     $(`.section1 h3:eq(${i})`).text(db.library[i].title);
//     $(`.section1 img:eq(${i})`).attr('src', db.library[i].imgUrl).css('border-radius', '8px');
//     $(`.section1 p:eq(${i})`).text(db.library[i].description);
//     $(`.section1 span:eq(${i})`).text(db.library[i].author).css('margin-right', '10px');
//     $(`.section1 button:eq(${i})`).text('To Playlist');

// }

// for (let i = 0; i < db.hotlist.length; i++) {
//     $('.section2').append('<div>');
//     $('.section2 div').addClass('border music__card__section');
//     $(`.section2 div:eq(${i})`).append('<h3>','<img>', '<p>', '<span>', '<button>');
//     $(`.section2 h3:eq(${i})`).text(db.hotlist[i].title);
//     $(`.section2 img:eq(${i})`).attr('src', db.hotlist[i].imgUrl);
//     $(`.section2 p:eq(${i})`).text(db.hotlist[i].description);
//     $(`.section2 span:eq(${i})`).text(db.hotlist[i].author);
//     $(`.section2 button:eq(${i})`).text('To Playlist');
// }

// for (let i = 0; i < db.playlist.length; i++) {
//     $('.section3').append('<div>');
//     $('.section3 div').addClass('border music__card__section');
//     $(`.section3 div:eq(${i})`).append('<h3>','<img>', '<p>', '<span>', '<button>');
//     $(`.section3 h3:eq(${i})`).text(db.playlist[i].title);
//     $(`.section3 img:eq(${i})`).attr('src', db.playlist[i].imgUrl);
//     $(`.section3 p:eq(${i})`).text(db.playlist[i].description);
//     $(`.section3 span:eq(${i})`).text(db.playlist[i].author);
//     $(`.section3 button:eq(${i})`).text('To Playlist');
// }

///////////////////////////////////////////////////////////


// JQUERY EVENTS       
        

$('.music__card__section').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('add_shadow').css('margin-bottom', '10px');
    $(event.currentTarget).children('img').animate({
        'width': '100%',
        'margin-bottom': '-5px'
    }, 300);
})



$('.music__card__section').on('mouseleave', () => {
    $('.music__card__section').removeClass('add_shadow').css('margin-bottom', '40px');
    $(event.currentTarget).children('img').animate({
        'width': '96%',
        'margin-bottom': '3px'
    }, 300);
})

$('button').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('button_mouseEnter');
})

$('button').on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('button_mouseEnter');
})


$('button').on('click', (event) => {
    const itemId = event.currentTarget.id;
    addItemToMyPlayList(itemId)
    
    let $parent = $(event.currentTarget).parent()
    $(event.currentTarget).text('Delete');
    $parent.clone().appendTo('.My_Playlist_section');
    
    
    $(event.currentTarget).css({
        'color': 'white',
        'background-color': 'black'
    }, 500);
    $('.My_Playlist_section button').on('click', (event) => {
        $(event.currentTarget).parent().fadeOut('slow');
        $parent.children('button').text('To Playlist').css({
            'background-color': 'rgba(25,194,146,1)',
            'color': 'black'
        });
        
    })
})



$('.MyPlaylist').on('click', (event) => {
    $('.section1').fadeOut('fast');
    $('.My_Playlist_section').show()
    $('.Hot_List_Section').fadeOut('fast');
})

$('.HomePage').on('click', () => {
    $('.section1').show();
    $('.section2').show();
    $('.section3').show();
    $('.My_Playlist_section').fadeOut('fast');
    
})

$('.HotList').on('click', () => {
    $('.section1').fadeOut('fast');
    $('.Hot_List_Section').show();
    $('.section3').hide();
    $('.My_Playlist_section').fadeOut('fast');
    
    
})





$('ul a').on('mouseenter', (event) => {
    $(event.currentTarget).animate({
        fontWeight: 'bold',
        fontSize: '17px'
    }, 300);
    
})

$('ul a').on('mouseleave', (event) => {
    $(event.currentTarget).animate({
        fontWeight: 'regular',
        fontSize: '15px'
    }, 300);
    
})

$('a.logo').on('mouseenter', (event) => {
    $(event.currentTarget).animate({
        'fontSize': '26px'
    }).addClass('currentColor');
})

$('a.logo').on('mouseleave', (event) => {
    $(event.currentTarget).animate({
        'color': 'red',
        'fontSize': '24px'
    }).removeClass('currentColor')
})






