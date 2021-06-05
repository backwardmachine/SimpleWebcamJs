var __scjs__fwdintervals = new Array();
__scjs__fwdintervals.push( { id: 0, fn: __scjs__forward__image,  time: 1000 } );
__scjs__fwdintervals.push( { id: 1, fn: __scjs__forward__media,  time: 100000 } );
//__scjs__fwdintervals.push( { id: 2, fn: myfunctionhere, time: time in milliseconds } );
var __scjs__forward__moment    = 0;
var __scjs__forward__on        = 0;

document.getElementById( "scjs__button" )
  .addEventListener( "click", __scjs__forward );

function __scjs__forward( e ) // setup intervals
{
  for ( let interval of __scjs__fwdintervals )
    clearInterval( interval.id );

  __scjs__forward__on = __scjs__forward__on ? 0 : 1;

  for ( let interval of __scjs__fwdintervals )
  {
    interval.fn();
    interval.id = setInterval( interval.fn, interval.time );
  }
}

function __scjs__forward__media() // IO setup
{
  navigator.mediaDevices.getUserMedia(
    { video: { width: 200, height: 200 } }
  )
  .then  ( __scjs__stream )
  .catch ( __scjs__stream__error );
}

function __scjs__stream ( __IOdata ) // IO video streaming
{
  var video = document.querySelector( 'video' );
  video.srcObject = __IOdata;
  video.onloadedmetadata = function(e)
  {
    video.play();
  };
}

function __scjs__stream__error (e) // IO errors
{
  alert( e.name );
}

function __scjs__forward__image() // IO image
{
  var __vars = __cfg;
  var canvas = document.getElementById( 'scjs__image' );
  var video  = document.getElementById( 'scjs__video' );
  if ( video )
  {
    video.width        = __vars.video__width;
    video.height       = __vars.video__height;
    video.style.width  = __vars.video__width  + 'px';
    video.style.height = __vars.video__height + 'px';

    var context = canvas.getContext( '2d' );
    canvas.width        = __vars.image__width;
    canvas.height       = __vars.image__height;
    canvas.style.width  = __vars.image__width  + 'px';
    canvas.style.height = __vars.image__height + 'px';
    context.drawImage( video,
      0,
      0,
      __vars.image__width,
      __vars.image__height );
  }
}
