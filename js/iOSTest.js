(function () {
    var isRelAR = false;
    var a = document.createElement('a');
    console.log(a.relList.supports('ar'));
    
    if (a.relList.supports('ar')) {
      isRelAR = true;
    }
    // to hide caveats by style
    document.documentElement.classList.add(isRelAR ? 'relar' : 'no-relar');
  })();