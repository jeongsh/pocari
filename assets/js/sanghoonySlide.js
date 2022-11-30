(() => {
    const now = document.querySelector('.now');
    const next = document.querySelector('.next');
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    const stopBtn = document.querySelector('.stopBtn');
    const slideText = document.querySelectorAll('.text');
    const pager = document.querySelectorAll('.pager li');
    const section4 = document.querySelector('#section4')
    let dataIndex = 0;
    let stopToggle = 0;
    let slideAuto = setInterval(function(){}, 200);
    
    function slideNext() {
        if (dataIndex == 3) {
            dataIndex = 0;
            section4.dataset.bg = dataIndex;
            now.dataset.index = dataIndex;
            next.dataset.index = dataIndex + 1;
        } else if (dataIndex == 2) {
            dataIndex++;
            section4.dataset.bg = dataIndex;
            now.dataset.index = dataIndex;
            next.dataset.index = 0;
        } else {
            dataIndex++;
            section4.dataset.bg = dataIndex;
            now.dataset.index = dataIndex;
            next.dataset.index = dataIndex + 1;
        }
        for(let i=0; i<slideText.length; i++){
            slideText[i].classList.remove('on')
            pager[i].classList.remove('on')
        }
        slideText[dataIndex].classList.add('on')
        pager[dataIndex].classList.add('on')
        
    }

    function slidePrev() {
        if (dataIndex == 0) {
            dataIndex = 3;
            now.dataset.index = dataIndex;
            next.dataset.index = 0;

        } else {
            dataIndex--;
            now.dataset.index = dataIndex;
            next.dataset.index = dataIndex + 1;
        }
        for(let i=0; i<slideText.length; i++){
            slideText[i].classList.remove('on')
            pager[i].classList.remove('on')
        }
        slideText[dataIndex].classList.add('on')
        pager[dataIndex].classList.add('on')
        
    }
    
    function start(){
        slideAuto = setInterval(slideNext, 4000);
    }

    function stop(){
        clearInterval(slideAuto);
    }

    next.addEventListener('click', function(){
        slideNext();
        stop();
        stopBtn.classList.remove('on');
        stopToggle = 0;
    })
    nextBtn.addEventListener('click', function () {
        slideNext();
        stop();
        stopBtn.classList.remove('on');
        stopToggle = 0;
    })

    prevBtn.addEventListener('click', function () {
        slidePrev();
        stop();
        stopBtn.classList.remove('on');
        stopToggle = 0;
    })
    stopBtn.addEventListener('click', function () {
        if (stopToggle == 0) {
            start();
            stopBtn.classList.add('on');
            stopToggle++
        }
        else{
            stop();
            stopBtn.classList.remove('on');
            stopToggle = 0;
        }

    });

    // [].forEach.call(pager, function (col) {

    //     col.addEventListener('click', function () {
    //         for(let i=0; i<pager.length; i++){
    //             pager[i].classList.remove('on')
    //         }
    //         col.classList.add('on');
    //         console.log(123)
    //     });
    // });


})();