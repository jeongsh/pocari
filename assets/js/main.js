(() => {
    const nav = document.querySelector('nav');
    const section1 = document.querySelector('#section1');
    const section3 = document.querySelector('#section3 > .layGrid');
    const soundBtn = document.querySelector('.soundBtn');
    const video = document.querySelector('video');
    const pocari = document.querySelector('.pocari');
    const ion = document.querySelector('.ion');
    const section5 = document.querySelector('#section5');
    const navTo = document.querySelectorAll('.navTo');
    const scrollTop = document.querySelectorAll('.scrollTop');
    let soundToggle = 0;
    let location = 0;

    soundBtn.addEventListener('click', function () {
        if (soundToggle == 0) {
            soundBtn.classList.add('on');
            video.muted = false;
            soundToggle++;
        } else {
            soundBtn.classList.remove('on');
            video.muted = true;
            soundToggle = 0;
        }
    });



    window.addEventListener('scroll', function (e) {
        let scroll = this.scrollY;
        if (scroll >= section1.offsetHeight) {
            nav.classList.add('on')
        } else {
            nav.classList.remove('on')
        }
        if (scroll >= pocari.offsetTop - (window.outerHeight) / 3.5) {
            pocari.classList.add('on')
        } else {
            pocari.classList.remove('on')
        }

        if (scroll >= ion.offsetTop - (window.outerHeight) / 3.5) {
            ion.classList.add('on')
        } else {
            ion.classList.remove('on')
        }
        if (scroll >= section3.offsetHeight + section3.offsetTop - (window.outerHeight)) {
            section3.classList.add('on')
        }
        if (scroll >= section5.offsetTop - (window.outerHeight) / 2) {
            section5.classList.add('on')
        } else {
            section5.classList.remove('on')
        }
    })

    for(let i=0; i < navTo.length; i++){
        (function(index){
            navTo[index].addEventListener('click',function(){
                
                if(index == 0){
                    location = scrollTop[index].offsetTop;
                }
                else{
                    location = scrollTop[index].offsetTop -220;
                }
                window.scrollTo({top:location, behavior:'smooth'})
            })
        })(i);
    }


    // Canvas Init
    var c = document.getElementById('bubbles'),
        ctx = c.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        particles = 60,
        minRadius = 5,
        maxRadius = 20,
        speed = 0.003,
        x = width / particles;

    // Bubbles
    var Bubbles = [];

    for (var i = 0; i < particles; i++) {
        Bubbles.push({
            x: i * x,
            y: height * Math.random(),
            r: minRadius + Math.random() * (maxRadius - minRadius),
            speed: 5 * Math.random()
        });
    }

    function bubble() {

        c.width = width;
        c.height = height;
        for (i = 0; i < Bubbles.length; i++) {
            var b = Bubbles[i];
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);

            b.alpha = .5 * (b.y / height);
            b.speed += speed;

            ctx.strokeStyle = "rgba(255, 255, 255, .5)";
            ctx.stroke();
            ctx.fillStyle = "hsla(203, 75%, 69%," + b.alpha + ")";
            ctx.fill();
            b.y -= b.speed;
            if (b.y < 0) {
                b.y = height;
                b.speed = Math.random() * 3;
            }
        }
    }

    // Draw
    function draw() {
        bubble();
        window.requestAnimationFrame(draw);
    }

    // Resize Canvas
    function resizeCanvas() {
        width = window.innerWidth,
            height = window.innerHeight;
        c.width = width;
        c.height = height;
        draw();
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, false);
})();