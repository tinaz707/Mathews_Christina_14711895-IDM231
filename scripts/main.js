const zodiac_signs = [
    {
        id: "sagittarius",
        sound: "Content/Music/sagittrius_Tonight.mp3",
        image: "Content/Images/Album/tonight_album.webp",
        text: "Born from November 22nd to December 21st, Sagittarians are on top of the world! We are the subjects, and they are the leader. They aren’t afraid to dive headfirst into the unknown.. They truly are free spirits, nothing holds them back! With so much enthusiasm, it can be hard to truly focus on one thing at a time.",
        lyric: "Talk later, that's why I'm goin' tonight /You're hot, on fire, that's why I'm goin' tonight",
    },
    {
        id: "capricon",
        sound: "Content/Music/capricorn_CapableOfLove.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        text: "Born from December 22nd to January 19th, Capricorns are truly the responsible ones in every friend group. They are independent and know how to manage just about anyone. All they need is your respect and to be able to prove themselves. Its no surprise their biggest rival is themselves!",
    },
        {
        id: "aquarius",
        sound: "Content/Music/Aquarius _feelcomplete.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        text: "Born from January 22nd to February 18th, Aquarius can be both shy and energetic. Being boring isn’t in their dictionary, it's in them to live as the opposite of everyone else around them. They define themselves rather than having the world plaster a definition on them!",
    },
        {
        id: "pisces",
        sound: "Content/Music/Pisces_Take_Me_home.mp3",
        image: "Content/Images/Album/ToHellWithIt_album.webp",
        text: "Born from February 19th to March 20th, Pisces are a very friendly bunch. They adapt their personality to whomever they find themselves with! They can’t stick to one form but want to become one with everything around them. Regardless of it all, they are very charming and compassionate!",
    },
        {
        id: "leo",
        sound: "Content/Music/leo_stars.mp3",
        image: "Content/Images/Album/fancyThat_album.webp",
        text: "Born from July 23rd to August 22nd, Leos are passionate and natural born leaders! They can jump into any conversation and act like a natural. They create their own enthusiastic paths of life and can truly do anything they put their hearts into! Don’t be afraid to rely on them!",
    },
        {
        id: "virgo",
        sound: "Content/Music/virgo_DoYouMissMe.mp3",
        image: "Content/Images/Album/miss_me_albu.webp",
        text: "Born from August 23rd to September 22nd, Virgos are your one and only perfectionists. They don’t mind giving a helping hand, but that does sometimes mean they put others first rather than themselves. You can alway rely to get good advice, but be careful, they can be a little judgmental!",
    },
        {
        id: "libra",
        sound: "Content/Music/libra_JustForMe.mp3",
        image: "Content/Images/Album/ToHellWithIt_album.webp",
        text: "Born from September 23rd to October 22nd, Libras are on a mix wavelength of being extroverted and introverted. They are empathic and very peaceful, avoiding conflict in any way they can! A deep fear of being alone lies within them, so don’t ghost them!",
    },
        {
        id: "scorpio",
        sound: "Content/Music/scorpio_Feelings.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        text: "Born from October 23rd to November 21st, Scorpios can be intimidating at first, but they are very passionate and trustworthy. It can be hard to get to know them, but it's possible! Slowly, as they get comfortable, they let (most) of their walls down. Almost like their mystical…magical",
    },
        {
        id: "aries",
        sound: "Content/Music/areis_stateside.mp3",
        image: "Content/Images/Album/fancyThat_album.webp",
        text: "Born from March 20th to April 19th, Aries are confident and motivating people! They don’t really let anything hold them back and aren’t afraid to try anything new. (That could mean flying abroad just to meet someone new!",
    },
        {
        id: "taurus",
        sound: "Content/Music/tarus_NiceToMeetYou.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        text: "Born from April 20 to May 20, Tarus are wherever they find comfort and relaxation.  They appreciate stability and meaningful connections, so don’t be afraid to mingle with them! As loyal and fun as they can be, don’t catch them on a bad day, or you might just get caught up in their explosion!",
    },
        {
        id: "gemini",
        sound: "Content/Music/gemini_TheAisle.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        text: "Born from May 21st to June 20th, Geminis are charismatic, sociable, and ready for any kind of fun. They are active and curious individuals, so you'd better keep up! Don’t underestimate them, even if they seem to be joking around always, they can be quick-witted",
    },
        {
        id: "cancer",
        sound: "Content/Music/cancer_Mosquito.mp3",
        image: "Content/Images/Album/heavenKnows_album.webp",
        text: "Born from June 21st to July 22nd, Cancers are on the more of the senstive side, so watch what you say! They take things seriously and care deeply about many things.. They require that comfort and stability, straying away from sudden changes!",
    },
];

const sidebar = document.querySelector('.side-bar-info'); /*gets my sidebar*/
const zodiacButton = document.querySelectorAll('.zodiac-selection button'); /*gets all the buttons in zodiac selection*/
const allSigns = []; /*tracking audio*/

/*side bar details*/
const zType = document.getElementById('z-name');
const zAlbum = document.getElementById('z-album-image');
const zSongName = document.getElementById('z-song');
const zAlbumName = document.getElementById('z-album-name');
const zText = document.getElementById('z-text1');
const zLyrics = document.getElementById('z-text2-lyric');


//button needs 


// function getZodiac(month, day) {
//   if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
//     return 'capricorn';
//   } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//     return 'sagittarius';
//   } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
//     return 'scorpio';
//   } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
//     return 'libra';
//   } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//     return 'virgo';
//   } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//     return 'leo';
//   } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
//     return 'cancer';
//   } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
//     return 'gemini';
//   } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//     return 'taurus';
//   } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//     return 'aries';
//   } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
//     return 'pisces';
//   } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//     return 'aquarius';
//   } else return null;
// }



/*everytmie button is click ui is changed the screen show slide in*/



function help_button(){
    const openButton = document.getElementById('open-help'); /*? button*/
    const closeButton = document.getElementById('close-help'); /*close*/
    const helpBox = document.getElementById('help-button'); /*help box container*/

    /*when you click on the ? button display the help box*/
    openButton.addEventListener("click", ()=> {
        helpBox.style.display = 'block'; /*bloc-> takes up full parent width?*/
    }, false);

    /*when you click on the close button, hide the help box*/
    closeButton.addEventListener("click", ()=> {
        helpBox.style.display = 'none';
    }, false);
}
help_button();



document.addEventListener('DOMContentLoaded', initialize);

