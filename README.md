# SimpleWebcamJs
A simple webcam video and snapshot tool using HTML, Javascript. Works on all browsers. Displays both the video and consecutive image snapshots in the browser screen.

Use it to place a video and camera snaps on your webpage, in your program, or even use it for a home webcam. 

# Setting it up
Setup is simple. Create the container.
```html
<div id="scjs">
  <video id="scjs__video"></video>
  <div id="scjs__play">
    <canvas id="scjs__image"></canvas>
  </div>
  <div id="scjs__forward"><input type="button" id="scjs__button" value="Play"></div>
</div>
```

Place scjs.js before the closing `</body>` tag to include the bulk of the code.
```html
<script src="scjs.js"></script>
```

And change the parameters...
```js
<script language="Javascript">
  var __cfg = {
    video__width  : 200,
    video__height : 200,
    image__width  : 200,
    image__height : 200
  };
</script>
```

# The code
The main access to video streaming media is `__scjs__forward__media()` and is accessed when you press the play button.
```js
function __scjs__forward__media() // IO setup
{
  __vars = __cfg;
  navigator.mediaDevices.getUserMedia(
    {
      video:
      {
        width  : __vars.video__width,
        height : __vars.video__height
      }
    }
  )
  .then  ( __scjs__stream )
  .catch ( __scjs__stream__error );
}
```

The built in functions will run `__scjs__stream` continually unless an error is intercepted.
```js
function __scjs__stream ( __IOdata ) // IO video streaming
{
  var video = document.querySelector( 'video' );
  video.srcObject = __IOdata;
  video.onloadedmetadata = function(e)
  {
    video.play();
  };
}
```

Once the play button fires, our intervals are set up in `__scjs__forward`
```js
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
```

And that's all there is to it.
