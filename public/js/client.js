// Navigation Toggle
const menu = document.querySelector('.nav-toggle');
const nav = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation li');

menu.addEventListener('click', () => {
  nav.classList.toggle('navigation-active');
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navFade 0.5s ease forwards ${index / 7 + .2}s`;
    }      
  });

  menu.classList.toggle('toggle')
});

//Gallery Scripts
const imageTemplate= document.querySelector('#image-template');
if(imageTemplate!== null){
//Fetching gallery information
fetch('/gallery')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
   
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();

  })
  .then(function(data){
    
      //consts decleration
      const imageTemplate= document.querySelector('#image-template');
      const main= document.querySelector('main');

      //looping through image object array galleryImages
      data.forEach(function(images){
        //cloning the template
        const clone = imageTemplate.content.cloneNode(true);

        // getting all the a elements in clone
      
        const anchor=clone.querySelectorAll('a');

        //looping throught array anchor which contains all the <a> tags in clone
        anchor.forEach(function(item){
          item.href=images.linkURL;
        });

        //setting all the image data to appropriate attributes
        clone.querySelector('img').id=images.id;
        clone.querySelector('img').src=images.imageSrc;
        clone.querySelector('img').width=images.width;
        clone.querySelector('img').height=images.height;
        clone.querySelector('img').alt=images.menuTitle;
        clone.querySelector('img').title=images.menuTitle;

        //setting data into figcaption
        clone.querySelector('h5').innerHTML=images.menuTitle;

        clone.querySelector('p').innerHTML=images.description;

        

        //appending clone to main to display image gallery
        main.appendChild(clone);

      });
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
}


//Team Scripts
const teamTemplate= document.querySelector('#team-template');
if(teamTemplate!== null){
//Fetching gallery information
fetch('/member')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
   
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();

  })
  .then(function(data){
    
      //consts decleration
      const teamTemplate= document.querySelector('#team-template');
      const section= document.querySelector('.team-wrapper');

      //looping through image object array galleryImages
      data.forEach(function(members){
        //cloning the template
        const clone = teamTemplate.content.cloneNode(true);

        //setting all the members data to appropriate attributes
        clone.querySelector('img').src=members.profilePic;
        clone.querySelector('img').alt=members.profilePic;
        clone.querySelector('.name').innerHTML=members.name;
        clone.querySelector('.title').innerHTML=members.title;
        clone.querySelector('.bio').innerHTML=members.bio;

        //appending clone to section to display team members
        section.appendChild(clone);

      });
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
}

// Form Submit Success

const form = document.getElementById('fs-frm')
const fullname = document.getElementById('full-name');
const email = document.getElementById('email-address');
form.addEventListener('submit', () => {    
  alert(`
  ${fullname.value}
  ${email.value}
  Thank you for subscribing!
  `)
})