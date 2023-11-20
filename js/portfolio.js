let  portfolioOptions = document.querySelectorAll(".portfolio .options li");

let images = document.querySelectorAll(".portfolio .row .all");

portfolioOptions.forEach((option)=>{
    
    option.addEventListener("click", (o)=>{
        // remove active class for all options and add to current option
        portfolioOptions.forEach((e)=>{
            e.classList.remove('active');
        })
        
        o.target.classList.add('active');

        // hide all images
        images.forEach((img)=>{
            img.style.display = ('none');
        });
        
        // show current image
        document.querySelectorAll(o.target.dataset.type).forEach((m)=> {
            m.style.display = ('block');
        })
        

    });

});

