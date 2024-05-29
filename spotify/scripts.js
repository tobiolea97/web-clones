let rightSideBarLayout = {
    showSideBar: false,
    showPlayingQueue: false,
    showPlayingInfo: false,
    playingQueueButtonEnabled: false,
    playingInfoButtonEnabled: false
}

document.getElementById('toogleShowPlayingQueueBtn')
        .addEventListener('click', () => {
            rightSideBarLayout.showSideBar = !rightSideBarLayout.showPlayingQueue;
            rightSideBarLayout.showPlayingQueue = !rightSideBarLayout.showPlayingQueue;
            rightSideBarLayout.showPlayingInfo = false;
            rightSideBarLayout.playingQueueButtonEnabled = rightSideBarLayout.showPlayingQueue;
            rightSideBarLayout.playingInfoButtonEnabled = false;
            configureRightSideBarLayout();
        });

document.getElementById('toogleShowPlayingInfoBtn')
        .addEventListener('click', () => {
            rightSideBarLayout.showSideBar = !rightSideBarLayout.showPlayingInfo;
            rightSideBarLayout.showPlayingInfo = !rightSideBarLayout.showPlayingInfo;
            rightSideBarLayout.showPlayingQueue = false;
            rightSideBarLayout.playingInfoButtonEnabled = rightSideBarLayout.showPlayingInfo;
            rightSideBarLayout.playingQueueButtonEnabled = false;
            configureRightSideBarLayout();
        });

document.getElementById('closePlayingQueueBtn')
        .addEventListener('click', () => {
            rightSideBarLayout.showSideBar = false;
            rightSideBarLayout.showPlayingQueue = false;
            rightSideBarLayout.playingQueueButtonEnabled = false;
            rightSideBarLayout.playingInfoButtonEnabled = false;
            rightSideBarLayout.showPlayingInfo = false;
            rightSideBarLayout.showPlayingQueue = false;
            configureRightSideBarLayout();
        });

document.getElementById('closePlayingInfoBtn')
        .addEventListener('click', () => {
            rightSideBarLayout.showSideBar = false;
            rightSideBarLayout.showPlayingQueue = false;
            rightSideBarLayout.playingQueueButtonEnabled = false;
            rightSideBarLayout.playingInfoButtonEnabled = false;
            rightSideBarLayout.showPlayingInfo = false;
            rightSideBarLayout.showPlayingQueue = false;
            configureRightSideBarLayout();
        });

function configureRightSideBarLayout() {
    let rightSideBar = document.querySelector('.right-sidebar');
    let pageWrapper = document.querySelector('.page-wrapper');
    let toogleShowPlayingQueueBtn = document.getElementById('toogleShowPlayingQueueBtn');
    let toogleShowPlayingQueueDot = document.getElementById('toogleShowPlayingQueueDot');
    let toogleShowPlayingInfoBtn = document.getElementById('toogleShowPlayingInfoBtn');
    let toogleShowPlayingInfoDot = document.getElementById('toogleShowPlayingInfoDot');
    let nowPlayingInfo = document.getElementById('now-playing-info');
    let playingQueue = document.getElementById('now-playing-queue');

    rightSideBar.style.display = rightSideBarLayout.showSideBar ? 'flex' : 'none';
    rightSideBarLayout.showSideBar ? pageWrapper.classList.remove('no-right-sidebar'): pageWrapper.classList.add('no-right-sidebar');
    
    // playing queue layout
    toogleShowPlayingQueueBtn.src = rightSideBarLayout.playingQueueButtonEnabled ? 'images/play-queue-green.png' : 'images/play-queue-white.png';
    toogleShowPlayingQueueDot.style.visibility = rightSideBarLayout.playingQueueButtonEnabled ? 'visible' : 'hidden';
    playingQueue.style.display = rightSideBarLayout.showPlayingQueue ? 'block' : 'none';
    
    // playing info layout
    toogleShowPlayingInfoBtn.src = rightSideBarLayout.playingInfoButtonEnabled ? 'images/now-playing-green.png' : 'images/now-playing-white.png';
    toogleShowPlayingInfoDot.style.visibility = rightSideBarLayout.playingInfoButtonEnabled ? 'visible' : 'hidden';
    nowPlayingInfo.style.display = rightSideBarLayout.showPlayingInfo ? 'block' : 'none';

}



/* temporal code */
rightSideBarLayout.showSideBar = !rightSideBarLayout.showPlayingInfo;
rightSideBarLayout.showPlayingInfo = !rightSideBarLayout.showPlayingInfo;
rightSideBarLayout.showPlayingQueue = false;
rightSideBarLayout.playingInfoButtonEnabled = rightSideBarLayout.showPlayingInfo;
rightSideBarLayout.playingQueueButtonEnabled = false;
configureRightSideBarLayout()