const zodiacSigns = [
    {
        id: "sagittarius",
        sound: "Content/Music/sagittrius_Tonight.mp3",
        image: "Content/Images/Album/tonight_album.webp",
        album: "from Fancy That",
        text: "Born from November 22nd to December 21st, Sagittarians are on top of the world! We are the subjects, and they are the leader. They aren’t afraid to dive headfirst into the unknown.. They truly are free spirits, nothing holds them back! With so much enthusiasm, it can be hard to truly focus on one thing at a time.",
        
    },
    {
        id: "capricon",
        sound: "Content/Music/capricorn_CapableOfLove.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        album: "from Heaven Knows",
        text: "Born from December 22nd to January 19th, Capricorns are truly the responsible ones in every friend group. They are independent and know how to manage just about anyone. All they need is your respect and to be able to prove themselves. Its no surprise their biggest rival is themselves!",
    },
        {
        id: "aquarius",
        sound: "Content/Music/Aquarius _feelcomplete.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        album: "from Heaven Knows",
        text: "Born from January 22nd to February 18th, Aquarius can be both shy and energetic. Being boring isn’t in their dictionary, it's in them to live as the opposite of everyone else around them. They define themselves rather than having the world plaster a definition on them!",
    },
        {
        id: "pisces",
        sound: "Content/Music/Pisces_Take_Me_home.mp3",
        image: "Content/Images/Album/ToHellWithIt_album.webp",
        album: "from To Hell With It",
        text: "Born from February 19th to March 20th, Pisces are a very friendly bunch. They adapt their personality to whomever they find themselves with! They can’t stick to one form but want to become one with everything around them. Regardless of it all, they are very charming and compassionate!",
    },
        {
        id: "leo",
        sound: "Content/Music/leo_stars.mp3",
        image: "Content/Images/Album/fancyThat_album.webp",
        album: "from Fancy That",
        text: "Born from July 23rd to August 22nd, Leos are passionate and natural born leaders! They can jump into any conversation and act like a natural. They create their own enthusiastic paths of life and can truly do anything they put their hearts into! Don’t be afraid to rely on them!",
    },
        {
        id: "virgo",
        sound: "Content/Music/virgo_DoYouMissMe.mp3",
        image: "Content/Images/Album/miss_me_albu.webp",
        album: "Take Me Home",
        text: "Born from August 23rd to September 22nd, Virgos are your one and only perfectionists. They don’t mind giving a helping hand, but that does sometimes mean they put others first rather than themselves. You can alway rely to get good advice, but be careful, they can be a little judgmental!",
    },
        {
        id: "libra",
        sound: "Content/Music/libra_JustForMe.mp3",
        image: "Content/Images/Album/ToHellWithIt_album.webp",
        album: "from To Hell With It",
        text: "Born from September 23rd to October 22nd, Libras are on a mix wavelength of being extroverted and introverted. They are empathic and very peaceful, avoiding conflict in any way they can! A deep fear of being alone lies within them, so don’t ghost them!",
    },
        {
        id: "scorpio",
        sound: "Content/Music/scorpio_Feelings.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        album: "from Heaven Knows",
        text: "Born from October 23rd to November 21st, Scorpios can be intimidating at first, but they are very passionate and trustworthy. It can be hard to get to know them, but it's possible! Slowly, as they get comfortable, they let (most) of their walls down. Almost like their mystical…magical",
    },
        {
        id: "aries",
        sound: "Content/Music/areis_stateside.mp3",
        image: "Content/Images/Album/fancyThat_album.webp",
        album: "from Fancy That",
        text: "Born from March 20th to April 19th, Aries are confident and motivating people! They don’t really let anything hold them back and aren’t afraid to try anything new. (That could mean flying abroad just to meet someone new!",
    },
        {
        id: "taurus",
        sound: "Content/Music/tarus_NiceToMeetYou.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        album: "from Heaven Knows",
        text: "Born from April 20 to May 20, Tarus are wherever they find comfort and relaxation.  They appreciate stability and meaningful connections, so don’t be afraid to mingle with them! As loyal and fun as they can be, don’t catch them on a bad day, or you might just get caught up in their explosion!",
    },
        {
        id: "gemini",
        sound: "Content/Music/gemini_TheAisle.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        album: "from Heaven Knows",
        text: "Born from May 21st to June 20th, Geminis are charismatic, sociable, and ready for any kind of fun. They are active and curious individuals, so you'd better keep up! Don’t underestimate them, even if they seem to be joking around always, they can be quick-witted",
    },
        {
        id: "cancer",
        sound: "Content/Music/cancer_Mosquito.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        album: "from Heaven Knows",
        text: "Born from June 21st to July 22nd, Cancers are on the more of the senstive side, so watch what you say! They take things seriously and care deeply about many things.. They require that comfort and stability, straying away from sudden changes!",
    },
];


const zodiacButton = document.querySelectorAll('.zodiac-selection button'); /*gets all the buttons; its a node so its in zodiac selection*/
const allSigns = []; /*tracking audio*/


/*side bar details*/
const exitSide = document.querySelector('.exit-button');
const sidebarOverlay = document.querySelector('.side-bar-info'); /*gets my sidebar*/
const zType = document.getElementById('z-name');
const zAlbum = document.getElementById('z-album-image');
const zSongName = document.getElementById('z-song');
const zAlbumName = document.getElementById('z-album-name');
const zText = document.getElementById('z-text1');
const birthdayForm = document.querySelector('form'); //the date calander


//loops through the buttons, each button clicked will open the sideview
zodiacButton.forEach(button => {
    button.addEventListener("click", () =>{
        sidebarOverlay.classList.add ('show');
    });
})

//click exit button to close side view
exitSide.addEventListener("click", () =>{
    sidebarOverlay.classList.remove('show');
})




//help button
    const openButton = document.getElementById('open-help'); /*? button*/
    const closeButton = document.getElementById('close-help'); /*close*/
    const helpBox = document.getElementById('help-button-box'); /*help box container*/

    /*when you click on the ? button the helpbox adds a class of .show (that switches the css to .show)*/
    openButton.addEventListener("click", ()=> {
        helpBox.classList.add('show'); 
    });

    /*when you click on the close button, removes .show class and returns to orginal state/class*/
    closeButton.addEventListener("click", ()=> {
        helpBox.classList.remove('show');
    });


