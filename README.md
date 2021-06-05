# SimpleWebcamJs
A simple webcam video and snapshot tool using HTML, Javascript. Works on all browsers. Displays both the video and consecutive image snapshots in the browser screen.

Use it to place a video and camera snaps on your webpage, in your program, or even use it for a home webcam. 

Place scjs.js before the closing `</body>` tag.
```
<script src="scjs.js"></script>
```

And change the parameters...
```
<script language="Javascript">
  var __cfg = {
    video__width  : 200,
    video__height : 200,
    image__width  : 200,
    image__height : 200
  };
</script>
```
