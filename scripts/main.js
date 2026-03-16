const zodiacSigns = [
    {
        id: "Sagittarius",
        song:"Tonight",
        sound: "Content/Music/sagittrius_Tonight.mp3",
        image: "Content/Images/Album/tonight_album.webp",
        album: "from Fancy That",
        text: "Born from November 22nd to December 21st, Sagittarius people are on top of the world! We are the subjects, and they are the leader. They aren’t afraid to dive headfirst into the unknown. They truly are free spirits, nothing holds them back! With so much enthusiasm, it can be hard to truly focus on one thing at a time.",
    },

    {
        id: "Capricorn",
        song:"Capable of Love",
        sound: "Content/Music/capricorn_CapableOfLove.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        album: "from Heaven Knows",
        text: "Born from December 22nd to January 19th, Capricorns are truly the responsible ones in every friend group. They are independent and know how to manage just about anyone. All they need is your respect and to be able to prove themselves. It's no surprise their biggest rival is themselves!",
    },

    {
        id: "Aquarius",
        song:"Feel Complete",
        sound: "Content/Music/Aquarius_feelcomplete.mp3",
        image: "Content/Images/Album/fell_complete_album.webp",
        album: "from Heaven Knows",
        text: "Born from January 22nd to February 18th, Aquarius can be both shy and energetic. Being boring isn’t in their dictionary, it's in them to live as the opposite of everyone else around them. They define themselves rather than having the world plaster a definition on them!",
    },
        {
        id: "Pisces",
        song:"Take Me Home",
        sound: "Content/Music/Pisces_Take_Me_home.mp3",
        image: "Content/Images/Album/take_me_home_album.webp",
        album: "from To Hell With It",
        text: "Born from February 19th to March 20th, Pisces are a very friendly bunch. They adapt their personality to whomever they find themselves with! They can’t stick to one form but want to become one with everything around them. Regardless of it all, they are very charming and compassionate!",
    },
        {
        id: "Leo",
        song:"Stars",
        sound: "Content/Music/leo_stars.mp3",
        image: "Content/Images/Album/fancyThat_album.webp",
        album: "from Fancy That",
        text: "Born from July 23rd to August 22nd, Leos are passionate and natural born leaders! They can jump into any conversation and act like a natural. They create their own enthusiastic paths of life and can truly do anything they put their hearts into! Don’t be afraid to rely on them!",
    },
        {
        id: "Virgo",
        song:"Do You Miss Me",
        sound: "Content/Music/virgo_DoYouMissMe.mp3",
        image: "Content/Images/Album/miss_me_albu.webp",
        album: "Take Me Home",
        text: "Born from August 23rd to September 22nd, Virgos are your one and only perfectionists. They don’t mind giving a helping hand, but that does sometimes mean they put others first rather than themselves. You can always rely on them to give good advice, but be careful, they can be a little judgmental!",
    },
        {
        id: "Libra",
        song:"Just For Me",
        sound: "Content/Music/libra_JustForMe.mp3",
        image: "Content/Images/Album/ToHellWithIt_album.webp",
        album: "from To Hell With It",
        text: "Born from September 23rd to October 22nd, Libras are on a mix wavelength of being extroverted and introverted. They are empathic and very peaceful, avoiding conflict in any way they can! A deep fear of being alone lies within them, so don’t ghost them!",
    },
        {
        id: "Scorpio",
        song:"Feelings",
        sound: "Content/Music/scorpio_Feelings.mp3",
        image: "Content/Images/Album/feelings_album.webp",
        album: "from Heaven Knows",
        text: "Born from October 23rd to November 21st, Scorpios can be intimidating at first, but they are very passionate and trustworthy. It can be hard to get to know them, but it's possible! Slowly, as they get comfortable, they let (most) of their walls down. Almost like they’re mystical…magical",
    },
        {
        id: "Aries",
        song:"Stateside",
        sound: "Content/Music/areis_stateside.mp3",
        image: "Content/Images/Album/stateside_album.webp",
        album: "from Fancy That",
        text: "Born from March 20th to April 19th, Aries are confident and motivating people! They don’t really let anything hold them back and aren’t afraid to try anything new. That could mean flying abroad just to meet someone new!",
    },
        {
        id: "Taurus",
        song:"Nice To Meet You",
        sound: "Content/Music/tarus_NiceToMeetYou.mp3",
        image: "Content/Images/Album/nice_to_album.webp",
        album: "from Heaven Knows",
        text: "Born from April 20 to May 20, Taurus are wherever they find comfort and relaxation.  They appreciate stability and meaningful connections, so don’t be afraid to mingle with them! As loyal and fun as they can be, don’t catch them on a bad day, or you might just get caught up in their explosion!",
    },
        {
        id: "Gemini",
        song:"The Aisle",
        sound: "Content/Music/gemini_TheAisle.mp3",
        image: "Content/Images/Album/aisle_album.webp",
        album: "from Heaven Knows",
        text: "Born from May 21st to June 20th, Geminis are charismatic, sociable, and ready for any kind of fun. They are active and curious individuals, so you'd better keep up! Don’t underestimate them! Even if they seem to be joking around, they can be quick-witted",
    },
        {
        id: "Cancer",
        song:"Mosquito",
        sound: "Content/Music/cancer_Mosquito.mp3",
        image: "Content/Images/Album/mosquito_album.webp",
        album: "from Heaven Knows",
        text: "Born from June 21st to July 22nd, Cancers are on the more of the sensitive side, so watch what you say! They take things seriously and care deeply about many things. They require  comfort and stability, avoiding from sudden changes!",
    },
];



const zodiacButton = document.querySelectorAll('.zodiac-selection button'); /*gets all the buttons; its a node so its in zodiac selection*/

//---------------------------------------
//birthday calender
const birthdayForm = document.querySelector('form'); //the date calender

function getbirthdaySign(birthday){
    const date = {
        year: birthday [0],
        month: birthday [1],
        day: birthday [2],
    };


    const month = Number(date.month);
    const day = Number(date.day);

    
    let zformSign

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    zformSign = 'Capricorn';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    zformSign = 'Sagittarius';
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    zformSign = 'Scorpio';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    zformSign = 'Libra';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zformSign = 'Virgo';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zformSign = 'Leo';
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    zformSign = 'Cancer';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    zformSign = 'Gemini';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    zformSign = 'Taurus';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    zformSign = 'Aries';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    zformSign = 'Pisces';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zformSign = 'Aquarius';
  } 

  return zformSign

}

function handleForm(event){
    event.preventDefault();

    const birthdaySign = getbirthdaySign(birthdayForm.elements.birthdayDate.value.split('-'));

    let sign
    for(let i =0; i <zodiacSigns.length; i++){
            if (zodiacSigns[i].id === birthdaySign){
                sign =zodiacSigns[i]
                break
            }
    }

    if (sign){
        sidebarOverlay.classList.add ('show');
        const signAudio = new Audio(sign.sound) //define audio
        sign.audio = signAudio;

        updateUi(sign)
    }
    


}

if (birthdayForm){
        birthdayForm.addEventListener('submit', handleForm);
    }
//---------------------------------------




//---------------------------------------
/*side bar details*/
const exitSide = document.querySelector('.exit-button');
const sidebarOverlay = document.querySelector('.side-bar-open'); /*gets my sidebar*/
const zType = document.getElementById('z-name');
const zAlbum = document.getElementById('z-album-image');
const zSongName = document.getElementById('z-song');
const zAlbumName = document.getElementById('z-album-name');
const zText = document.getElementById('z-text1');


//loops through the buttons, each button clicked will open the side view
zodiacButton.forEach(button => {
    button.addEventListener("click", () =>{
        sidebarOverlay.classList.add ('show'); //sidebar shows
        

        const buttonId = button.id;

        let sign;


        for (let i = 0; i < zodiacSigns.length; i++) {
             if (zodiacSigns[i].id === buttonId) {
                sign = zodiacSigns[i]; //makes it a single button
                break;
        }
        }



        if(sign){
            const signAudio = new Audio(sign.sound) //define audio
            sign.audio = signAudio;

            updateUi(sign);   
             
        }
        
    });

})
        
console.log(zodiacSigns)


//Side View Exit
exitSide.addEventListener("click", () =>{
    sidebarOverlay.classList.remove('show');
    
    zodiacSigns.forEach(s =>{ //sound stops when you exit
        if(s.audio){
            s.audio.pause()
            s.audio.currentTime = 0;
        }
    });


})
//---------------------------------------

function playSound(sound){ //for each button 
    zodiacSigns.forEach(s =>{
        if(s.audio){
            s.audio.pause()
        }
    });

    sound.currentTime = 0; //reset to start at the beginning
    sound.play(); //sound plays
}

//---------------------------------------
//updates
function updateUi(sign){
    zType.innerText = sign.id//
    zAlbum.src = sign.image 
    zSongName.innerText = sign.song
    zAlbumName.innerText = sign.album
    zText.innerText = sign.text
    playSound(sign.audio)
}
//---------------------------------------





//---------------------------------------
//help button
    const openButton = document.getElementById('open-help'); /*? button*/
    const closeButton = document.getElementById('close-help'); /*close*/
    const helpBox = document.getElementById('help-button-box'); /*help box container*/

    /*when you click on the ? button the helpbox adds a class of .show (that switches the css to .show)*/
    openButton.addEventListener("click", ()=> {
        helpBox.classList.add('show'); 
    });

    /*when you click on the close button, removes .show class and returns to original state/class*/
    closeButton.addEventListener("click", ()=> {
        helpBox.classList.remove('show');
    });

//---------------------------------------

