let currentindax=0;
const slider = document.querySelectorAll('.slide');
const dots = document. querySelectorAll ('.dot');
const totalSlides = slides.length;

function showslide (indax) {
    if (index < 0) {
        currentindex = totalSlides - 1;
    }
    else if (index >= totalSlides){
        currentindax = 0 ;
    }
    else {
        currentindax = indax
    }
}

slides . foreach (slider, i) ; {
        const iscurrent =  i === currentindax;
        const sealefactor = iscurrent ? 1 : 0.8;
        const trunsformvalue = iscurrent ? 'scale (1)' : 'scale (0.8)';
        const widthvalue = iscurrent ? '100%' : '88%';

        slider.style.transform = trunsformvalue;
        slider.style.width = widthvalue;
        dots [i].classList.toggle ('active-dots', iscurrent);
    
};
 
const trunsformvaluev = currentindax * 100 + '%';
document.querySelector('.slider').style.transform= 'translatex'+(translatevalue );


function nextslide() {
    showslide(currentindax + 1);
}

function prevslide(){
    showslide(currentindax - 1)
}

function currentslide(indax){
    showslide(indax);
}

setInterval(nextslide, 10000);