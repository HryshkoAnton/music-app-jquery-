import db from './posts.js';
import cardUtils from './cardUtils.js';

db.myPlaylist = [];

//add elements to DOM, add Classes and text to elements
$('section').attr('id', 'container');

$('header').append(`<a class='logo'>MusicApp</a>`);

$('section:eq(0)').addClass('section1');
$('section:eq(1)').addClass('Hot_List_Section');
$('section:eq(3)').addClass('My_Playlist_section');
$('.My_Playlist_section').hide()
$('.Hot_List_Section').hide()
$('header').append(`<ul class='navigation_list'>
                        <li>
                            <a href='#'></a>
                        </li>
                        <li>
                            <a href='#'></a>
                        </li>
                        <li>
                            <a href='#'></a>
                        </li>
                    </ul>`);

$('header').addClass('clearfix');

$('ul a:first').text('Home Page').addClass('HomePage');
$('ul a:eq(1)').text('Hotlist').addClass('HotList');
$('ul a:eq(2)').text('My Playlist').addClass('MyPlaylist');




////////////////////////////////////////////////////////////

// add music card to My Playlist on button press
const addItemToMyPlayList = (itemId)=>{
    let item;
    
    _.each(db, (dbItem) => {
      item = _.findWhere(dbItem, {"id": +itemId});
      if (item && !_.findWhere(db.myPlaylist, {"id": +itemId})) {
        console.log(db.myPlaylist);
        db.myPlaylist.push(item);
      }
    });
  };

cardUtils.createMusicCards(db, '.section1');

//add music from database to hotlist

function addMusicToHotlist(listOfMusic, section) {
    _.each(listOfMusic, (musicItem) => {
        cardUtils.createMusicCard(section, musicItem);
    })
}


addMusicToHotlist(db.hotlist, '.Hot_List_Section')
        

$('.music__card__section').on('mouseenter', (event) => {
    var $currentTarget = $(event.currentTarget);
    $currentTarget.addClass('add_shadow').css('margin-bottom', '10px');
    $currentTarget.children('img').animate({
        'width': '100%',
        'margin-bottom': '-5px'
    }, 300);
})



$('.music__card__section').on('mouseleave', () => {
    $(event.currentTarget).removeClass('add_shadow').css('margin-bottom', '40px');
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

$('.addBtn').on('click', (event) => {
    let $currentTarget = $(event.currentTarget);
    const itemId = event.currentTarget.id;
    let isItemInPlaylist = db.myPlaylist.some((item) => {
        return item.id === Number(itemId); 
    });
    if (isItemInPlaylist) {
        return false;
    }
    addItemToMyPlayList(itemId);
    $currentTarget.addClass('hidden');
    let $deleteBtn = $currentTarget.siblings('.deleteBtn');
    $deleteBtn.removeClass('hidden');
    
    
});

$(document).on('click', '.deleteBtn', (event) => {
    let $currentTarget = $(event.currentTarget);
    let $parent = $currentTarget.parent();
    $parent.remove();
    let id = event.currentTarget.id;
    $(`.section1 #${id}`).removeClass('hidden');
    var itemIndex = db.myPlaylist.findIndex((item)=>{
        return item.id === Number(id);
    });
    db.myPlaylist[itemIndex].isInPlaylist = false;
    db.myPlaylist.splice(itemIndex, 1);
});


$('.MyPlaylist').on('click', (event) => {
    $('.section1').fadeOut('fast');
    $('.My_Playlist_section').show();
    $('.Hot_List_Section').fadeOut('fast');
    db.myPlaylist.forEach((musicItem) => {
        if (!musicItem.isInPlaylist) {
            cardUtils.createMusicCard('.My_Playlist_section', musicItem, true);
            musicItem.isInPlaylist = true;
        }

    });
})

$('.HomePage').on('click', () => {
    $('.section1').show();
    $('.Hot_List_Section').hide();
    $('.My_Playlist_section').fadeOut('fast');
    
})

$('.HotList').on('click', () => {
    $('.section1').fadeOut('fast');
    $('.Hot_List_Section').show();
    $('.section3').hide();
    $('.My_Playlist_section').fadeOut('fast');
})

$('ul a').on('mouseenter mouseleave', (event) => {
    var $currentTarget = $(event.currentTarget),
        isMouseLeave = event.type === 'mouseleave';
    $currentTarget.animate({
        fontWeight: isMouseLeave ? 'regular' : 'bold',
        fontSize: isMouseLeave ? '15px' : '17px'
    }, 300);
});

$('a.logo').on('mouseenter', (event) => {
    $(event.currentTarget).animate({
        'fontSize': '26px'
    }).addClass('currentColor');
})

$('a.logo').on('mouseleave', (event) => {
    $(event.currentTarget).animate({
        'color': 'red',
        'fontSize': '24px'
    }).removeClass('currentColor');
});

