/**
 * @description Used to view single photos with view.php
 * @copyright   2015 by Tobias Reich
 */

// Main -------------------------------------------------------------- //

var loadingBar = { show() {}, hide() {} },
imageview  = $('#imageview')

$(document).ready(function() {

  // Event Name
  var eventName = lychee.getEventName()

  // Set API error handler
  api.onError = error

  // Infobox
  header.dom('#button_info').on(eventName, sidebar.toggle)

  // Direct Link
  header.dom('#button_direct').on(eventName, function() {

    var link = $('#imageview #image').css('background-image').replace(/"/g,'').replace(/url\(|\)$/ig, '')
    window.open(link, '_newtab')

  })

  if (gup('p')) {
    loadAlbumPicture(gup('a'), gup('p'))
  }
  else {
    loadAlbumInfo(gup('a'))
  }


})

const loadAlbumInfo = function(albumID) {



  var params = {
    albumID,
    password: '',
    public: true
  }

    api.post('Album::get', params, function(data) {

    var startTime = new Date().getTime()
    var waitTime = 0,
    refresh = false

    if (data==='Warning: Album private!') {

      if (document.location.hash.replace('#', '').split('/')[1]!=undefined) {
        // Display photo only
        lychee.setMode('view')
      } else {
        // Album not public
        lychee.content.show()
        lychee.goto('')
      }
      return false
    }

    if (data==='Warning: Wrong password!') {
      album.load(albumID, refresh)
      return false
    }

    album.json = data;

      if (!album.json.title) album.json.title = 'Untitled'
      document.title = 'Lychee - ' + album.json.title
      header.dom('.header__title').html(lychee.escapeHTML(album.json.title))



      var images = [];

      for (id in album.json.content) {
        if (album.json.content.hasOwnProperty(id)) {
          images.push(album.json.content[id]);

        }
      }

      console.log(images);


      var time = 1;
      var photo = 0;

      var interval = setInterval(function() {
        if (time <= images.length) {
            console.log(photo);
            data = images[photo];
            imageview.html(build.imageview(data, true))
            imageview.find('.arrow_wrapper').remove()
            imageview.addClass('fadeIn').show()
          //alert(time);
          time++;
          photo++;
        }
        else {
          time = 1;
          photo = 0;
          //clearInterval(interval);
        }
      }, 5000);

  })



}

const loadAlbumPicture = function(albumID, photoID) {

  var params = {
    albumID,
    password: ''
  }

  api.post('Album::get', params, function(data) {

    var startTime = new Date().getTime()
    var waitTime = 0,
      refresh = false

    if (data==='Warning: Album private!') {

      if (document.location.hash.replace('#', '').split('/')[1]!=undefined) {
        // Display photo only
        lychee.setMode('view')
      } else {
        // Album not public
        lychee.content.show()
        lychee.goto('')
      }
      return false
    }

    if (data==='Warning: Wrong password!') {
      album.load(albumID, refresh)
      return false
    }

    album.json = data;

    console.log(album);


  })



   var params = {
   albumID,
   photoID
   }

   api.post('Photo::get', params, function(data) {

   if (data==='Warning: Photo private!' || data==='Warning: Wrong password!') {

   $('body').append(build.no_content('question-mark'))
   $('body').removeClass('view')
   header.dom().remove()
   return false

   }

   // Set title
   if (!data.title) data.title = 'Untitled'
   document.title = 'Lychee - ' + data.title
   header.dom('.header__title').html(lychee.escapeHTML(data.title))

   // Render HTML
   imageview.html(build.imageview(data, true))
   imageview.find('.arrow_wrapper').remove()
   imageview.addClass('fadeIn').show()

   // Render Sidebar
   var structure = sidebar.createStructure.photo(data),
   html      = sidebar.render(structure)

   sidebar.dom('.sidebar__wrapper').html(html)
   sidebar.bind()

   })



}


const error = function(errorThrown, params, data) {

  console.error({
    description : errorThrown,
    params      : params,
    response    : data
  })

  loadingBar.show('error', errorThrown)

}