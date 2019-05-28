function createMusicCards(db, section) {
    _.each(db, (dbItem) => {
        _.each(dbItem, (dbObject) => {
            createMusicCard(section, dbObject);
        })
        
    });
}

function createMusicCard(section, musicItem, isPlaylist=false) {
    var $cardBtn;
    var $myDiv = $(`<div class='border music__card__section'>
                        <h3 style="border-radius:8px">${musicItem.title}</h3>
                        <img src='${musicItem.imgUrl}'/>
                        <p>${musicItem.description}</p>
                        <span>${musicItem.author}</span>
                    </div>`);
    if (isPlaylist) {
        $cardBtn = $(`<button class='deleteBtn' id=${musicItem.id}>Delete</button>`);
    } else {
        $cardBtn = $(`<button class='addBtn' id=${musicItem.id}>To Playlist</button>`);
    }
    $(section).append($myDiv.append($cardBtn));
} 

export default {createMusicCards, createMusicCard}