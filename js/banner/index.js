window.onload = function () { // window.onload一定要带上，表示在html渲染完成后执行 
    bubbly({
        colorStart: '#fff4e7',
        colorStop: '#ffe9e4',
        blur:1,
        compose: 'source-over',
        bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
      });
}