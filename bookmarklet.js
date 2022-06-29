javascript:(function(){
    console.log(
        Array.from(document.querySelectorAll('.spin-item .spin-text'))
            .map(item => { 
                
                const songEl = item.querySelector('.song');
                const song = songEl ? songEl.textContent : '';
                
                const artistEl = item.querySelector('.artist');
                const artist = artistEl ? artistEl.textContent : '';
                
                const albumEL = item.querySelector('.info .release');
                const album = albumEL ? albumEL.textContent : '';
                
                return `${song} - ${artist} - ${album}`;
            }).join('\n')
    )
})();