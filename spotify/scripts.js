let showPlayingQueue = false;
function toogleShowPlayingQueue(flag) {
    showPlayingQueue = flag !== undefined ? flag : !showPlayingQueue;
    document.querySelector('.right-sidebar').style.display = showPlayingQueue ? 'flex' : 'none';
    let pageWrapperClassList = document.querySelector('.page-wrapper').classList;
    showPlayingQueue ? pageWrapperClassList.remove('no-right-sidebar') : pageWrapperClassList.add('no-right-sidebar');
}

document.getElementById('toogleShowPlayingQueueBtn')
        .addEventListener('click', () => {
            toogleShowPlayingQueue();
        });

document.getElementById('closePlayingQueueBtn')
        .addEventListener('click', () => {
            toogleShowPlayingQueue(false);
        });