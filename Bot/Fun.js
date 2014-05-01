/*
 Copyright (c) 2013-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 

 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 *
 */


//                                              ====== FUN BOT SCRIPT  ======


var Funbot = {};
var ruleSkip = {};
Funbot.misc = {};
Funbot.settings = {};
Funbot.moderators = {};
Funbot.filters = {};
botMethods = {};
Funbot.pubVars = {};
 
toSave = {};
toSave.settings = Funbot.settings;
toSave.moderators = Funbot.moderators;
 
Funbot.misc.version = "http://s26.postimg.org/57j7bjivd/tumblr_mtoqg6_T9_WE1r2x4nco1_500.gif";
Funbot.misc.ready = true;
var songBoundary = 60 * 10;
var announcementTick = 60 * 10;
var lastAnnouncement = 0;

joined = new Date().getTime();
 
// Filterng Chat
Funbot.filters.beggerWords = new Array();
Funbot.filters.commandWords = new Array();

// Bot's settings
Funbot.settings.songLimit = 10; 
Funbot.settings.cooldown = 10; 
Funbot.settings.staffMeansAccess = true;
Funbot.settings.historyFilter = true;
Funbot.settings.beggerFilter = true;
Funbot.settings.commandFilter = true;
Funbot.settings.interactive = true;
Funbot.settings.ruleSkip = true;
Funbot.settings.removedFilter = true;

// Admins ID
Funbot.admins = ["50aeaeb6c3b97a2cb4c25bd2","52b8fa3d3e083e7881f02321"];

// Random announcements.
var announcements = 
[""];

// Keywords of blocked songs
var blockedSongs = [
"Rick Roll",
"GANGNAM",
"The Fox",
"The Fox [Official music video HD]",
"10 hour",
"Trololo",
"#SELFIE (Official Music Video)",
"Heyayayay",
"Rap God"
];

// Keywords of blocked artist.
var blockedArtists = [
"Rick Astley",
"Rebecca Black"
];

// Filter Keywords
Funbot.filters.beggerWords = ["fanme","fan me","fan4fan","fan 4 fan","fan pls","fans please","more fan","fan back","give me fans","gimme fans","need fan","fan for fan"];
Funbot.filters.commandWords = [".linkin",".whoareyou",".wired",".say",".test",".ping",".marco",".reward",".add",".addsong",".flipcoin",".catfact",".dogfact",".hug",".8ball",".fortune",".songlink",".download",".help",".whywoot",".whymeh",".props",".votes",".woot",".meh",".version",".userstats @",".mystats",".source",".roomstats",".roomstats2",".register",".join",".leave",".roll"];


// Fun misc
Funbot.misc.tacos = ["blunt","kush","Chemo","Locoweed","marijuana","Ganja"];
Funbot.misc.cookie = ["a chocolate chip cookie", "a sugar cookie", "an oatmeal raisin cookie", "a 'special' brownie", "an animal cracker", "a scooby snack", "a blueberry muffin", "a cupcake","Strawberry Sunday", "Chocolate Chip Icecream Cone", "Cookie Dough Triple Scoop ", "Mint Chocolate Chip Icecream Cone", "Chocolate Icecream Sunday", "Banana Split with Whipped Cream", "Vanilla Icecream Cone with Sprinkles ", "Bubblegum Flavored Popcicle"];
Funbot.misc.ball = [
" [:8ball:] It is certain",
" [:8ball:] It is decidedly so",
" [:8ball:] Without a doubt",
" [:8ball:] Yes definitely",
" [:8ball:] You may rely on it",
" [:8ball:] As I see it yes",
" [:8ball:] Most likely",
" [:8ball:] No shit nigga",
" [:8ball:] Outlook good",
" [:8ball:] Yes",
" [:8ball:] Signs point to yes :trollface:",
" [:8ball:] Reply hazy try again",
" [:8ball:] Ask again later",
" [:8ball:] Better not tell you now",
" [:8ball:] Cannot predict now",
" [:8ball:] Concentrate and ask again",
" [:8ball:] Don't count on it",
" [:8ball:] My reply is no",
" [:8ball:] My sources say no",
" [:8ball:] Outlook not so good",
" [:8ball:] Fuck if i know",
" [:8ball:] Very doubtful"];

Funbot.misc.ht = ["My magic coins says: Tails", "My magic coin says: Heads"];

Funbot.misc.roll = [
"You rolled A 1. Bummer :(",
"You rolled A 2. Bummer :(",
"You rolled A 3. Bummer :("];

Funbot.misc.roll2 = [
"4. Awesome!",
"5. Awesome!",
"6. Awesome!"];
 
Funbot.misc.plugins = [
"PluggedN = http://goo.gl/1CcymS"]; 
 
 Funbot.misc.wired = [
 " If you can hear it, then it’s speaking to you. And if you can see it, then it’s yours to have.",
 " No matter where you are... everyone is always connected.",
 " There was no reason for me to stay in the real world any longer. In the real world, it didn't matter if I was there or not. When I realized that, I was no longer afraid of losing my body.",
 " There is nothing easy about dying.",
 " If you aren't remembered, then you never existed.",
 " Beep, beep, beep, gah...",
 " A netpal isn't really a friend; in fact, it shouldn't even be considered an acquaintance.",
 " I feel so much better in the wired, join me ♥ :gun:",
 " The wired might actually be thought of as a highly advanced upper layer of the real world. In other words, physical reality is nothing but an illusion, a hologram of the information that flows to us through the wired.",
 " The body, physical motion, the activity of the human brain is merely a physical phenomenon, simply caused by synapses delivering electrical impulses.",
 " The physical body exists at a less evolved plane only to verify one's existence in the universe."]; 
 
 Funbot.misc.whoareyou = [
" I am a sentient computer program in the form of a human body designed to sever the invisible barrier between the Wired and real worlds."];
 
Funbot.misc.fortune = [
" There is a true and sincere friendship between you and your friends.",
" You find beauty in ordinary things, do not lose this ability.",
" Ideas are like children; there are none so wonderful as your own.",
" It takes more than good memory to have good memories.",
" A thrilling time is in your immediate future.",
" Plan for many pleasures ahead.",
" The joyfulness of a man prolongeth his days.",
" Your everlasting patience will be rewarded sooner or later.",
" Make two grins grow where there was only a grouch before.",
" Something you lost will soon turn up.",
" Your heart is pure, and your mind clear, and your soul devout.",
" Excitement and intrigue follow you closely wherever you go!",
" A pleasant surprise is in store for you.",
" May life throw you a pleasant curve.",
" As the purse is emptied the heart is filled.",
" Be mischievous and you will not be lonesome.",
" You have a deep appreciation of the arts and music.",
" Your flair for the creative takes an important place in your life.",
" Your artistic talents win the approval and applause of others.",
" Pray for what you want, but work for the things you need.",
" Your many hidden talents will become obvious to those around you.",
" Don't forget, you are always on our minds.",
" Don't forget, you are always on our minds.",
" Your greatest fortune is the large number of friends you have.",
" A firm friendship will prove the foundation on your success in life.",
" Don't ask, don't say. Everything lies in silence.",
" Look for new outlets for your own creative abilities.",
" Be prepared to accept a wondrous opportunity in the days ahead!",
" Fame, riches and romance are yours for the asking.",
" Good luck is the result of good planning.",
" Good things are being said about you.",
" Smiling often can make you look and feel younger.",
" Someone is speaking well of you.",
" The time is right to make new friends.",
" You will inherit some money or a small piece of land.",
" Your life will be happy and peaceful.",
" A friend is a present you give yourself.",
" A member of your family will soon do something that will make you proud.",
" A quiet evening with friends is the best tonic for a long day.",
" A single kind word will keep one warm for years.",
" Anger begins with folly, and ends with regret.",
" Generosity and perfection are your everlasting goals.",
" Happy news is on its way to you.",
" He who laughs at himself never runs out of things to laugh at.",
" If your desires are not extravagant they will be granted.",
" Let there be magic in your smile and firmness in your handshake.",
" If you want the rainbow, you must to put up with the rain. D. Parton",
" Nature, time and patience are the three best physicians.",
" Strong and bitter words indicate a weak cause.",
" The beginning of wisdom is to desire it.",
" You will have a very pleasant experience.",
" You will inherit some money or a small piece of land.",
" You will live a long, happy life.",
" You will spend old age in comfort and material wealth.",
" You will step on the soil of many countries.",
" You will take a chance in something in the near future.",
" You will witness a special ceremony.",
" Your everlasting patience will be rewarded sooner or later.",
" Your great attention to detail is both a blessing and a curse.",
" Your heart is a place to draw true happiness.",
" Your ability to juggle many tasks will take you far.",
" A friend asks only for your time, not your money.",
" When you look down, all you see is dirt, so keep looking up.",
" If you are afraid to shake the dice, you will never throw a six.",
" We can't help everyone. But everyone can help someone.",
" Enjoyed the meal? Buy one to go too. :D",
" You will be invited to an exciting event."];
 
 
Funbot.pubVars.skipOnExceed;
Funbot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
if(window.location.hostname === "plug.dj"){window.setInterval(sendAnnouncement, 1000 * announcementTick);
API.on(API.DJ_ADVANCE, djAdvanceEvent);
API.on(API.DJ_ADVANCE, listener);
API.on(API.DJ_ADVANCE, woot);
API.on(API.USER_JOIN, UserJoin);
API.on(API.DJ_ADVANCE, DJ_ADVANCE);
$('#playback').hide();
$('#audience').hide();
API.setVolume(0);

function woot(){
$('#woot').click();
};
 
function UserJoin(user)
{
var JoinMsg = ["@user Welcome to the VaporLounge","welcome, @user!","Hey there, @user!","Glad you came by, @user"];
r = Math.floor(Math.random() * JoinMsg.length);
API.sendChat(JoinMsg[r].replace("user", user.username));
};

function djAdvanceEvent(data){
setTimeout(function(){ botMethods.data }, 500);
};

Funbot.skip = function(){
API.moderateForceSkip();
};

Funbot.unhook = function(){
setTimeout(function(){
API.off(API.USER_JOIN);
API.off(API.USER_LEAVE);
API.off(API.USER_SKIP);
API.off(API.USER_FAN);
API.off(API.CURATE_UPDATE);
API.off(API.DJ_ADVANCE);
API.off(API.VOTE_UPDATE);
API.off(API.CHAT);
$('#playback').show();
$('#audience').show();
API.setVolume(15);
}, 100);
};

Funbot.hook = function(){
(function(){$.getScript('http://goo.gl/MMsPi1');
$('#audience').hide();
API.setVolume(0);}());
};

botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("FunbotSave"));
    Funbot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("FunbotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("FunbotSave") !== null){
        botMethods.load();
    }else{
        botMethods.save();
    }
};
 
botMethods.checkHistory = function(){
    currentlyPlaying = API.getMedia(), history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }
    caught--;
    return caught;
};

function getUserID(username) {
  var users = API.getUsers();
  for (var i in users) {
    if (users[i].username == username) {
      return users[i].id;
    }
  }
  return "User Not Found!";
};
 
botMethods.cleanString = function(string){
    return string.replace("&#39;", "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
   
    function listener(data)
{
    if (data == null)
    {
        return;
    }
 
    var title = data.media.title;
    var author = data.media.author;
    for (var i = 0; i < blockedSongs.length; i++)
    {
        if (title.indexOf(blockedSongs[i]) != -1 || author.indexOf(blockedArtists[i]) != -1)
        {
            API.moderateForceSkip();
            chatMe("I Skipped: "+ title +" because it is blocked.");
            return;
        }
    }
 
    var songLenRaw = $("#time-remaining-value").text();
    var songLenParts = songLenRaw.split(":");
    var songLen = (parseInt(songLenParts[0].substring(1)) * 60) + parseInt(songLenParts[1]);
    if (songLen >= songBoundary)
    {
        window.setTimeout(skipLongSong, 1000 * songBoundary);
    }
}
 
function skipLongSong()
{
    chatMe("Skipping song because it has exceeded the song limit (" + (songBoundary / 60) + " minutes.)");
    API.moderateForceSkip();
}
 
function sendAnnouncement()
{
        if (lastAnnouncement++ >= announcements.length - 1)
        {
                lastAnnouncement = 0;
        }
    chatMe(announcements[lastAnnouncement]);
}
 
function chatMe(msg)
{
        API.sendChat(msg);
};


    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var id = data.fromID;
            var msg = data.message;
            var userfrom = data.from;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(Funbot.misc.ready || Funbot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1 || API.getUser(fromID).permission < 2){
                switch(command[0].toLowerCase()){
 
                case "command":
                case "commands":
                        if(typeof command[1] == "undefined"){
                            API.sendChat(data.from+" My commands can be found here: http://goo.gl/hJ8WJk");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" My commands can be founnd here: http://goo.gl/hJ8WJk");
                        }
                        break;
                
                case "test":
                        if(Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Test Successful");
                            }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
                        
                case "ping":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Pong!");
                            }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                        
                case "marco":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Polo!");
                            }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;        
                        
                case "skip":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.skip();
                        }else{
                           API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                        
                case "unlock":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(false);
                        }else{
                           API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                        
                case "add":
                        if(API.getUser(fromID).permission < 2 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateAddDJ(data.fromID);
                        }
                        break;
                        
                case "remove":
                        if(API.getUser(fromID).permission < 2 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateRemoveDJ(data.fromID);
                        }
                        break;
                        
                case "ban":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateBanUser(userid, 0, API.BAN.HOUR);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                        
                case "queup":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateAddDJ(userid);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                        
                case "quedown":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateRemoveDJ(userid);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                        
                case "lock":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                        }else{
                           API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;         
                        
                case "lockskip":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                            setTimeout("Funbot.skip();", 100);
                            setTimeout("API.moderateLockWaitList(false);", 700);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                  
                case "say":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1 || typeof command[1] === "undefined"){
                           API.sendChat(command[1]);
                        }else{
                         API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                        
                case "linkin":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Put a link starting off from www.");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                         var IdiotMsg = ["Dude wtf is wrong with you? @idiot, Search that up yourself!","Sorry i cannot search that up! @idiot","@idiot You think i'd be that stupid enough to search that up?","What are you an idiot? @idiot"];
                         r = Math.floor(Math.random() * IdiotMsg.length);
                            API.sendChat(IdiotMsg[r].replace("idiot", data.from));
                        }
                        break;
                        
                case "grab":
                case "snag":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var addsong = ["[user] I am now grabbing current song.","[user] This song is now mine! :blush:","[user] Now adding this current music video..."];
                        r = Math.floor(Math.random() * addsong.length);
                            API.sendChat(addsong[r].replace("user", data.from));
                            $(".icon-curate").click();
                            $($(".curate").children(".menu").children().children()[0]).mousedown();
                        }else{
                         API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
 
                   case "props":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                           }
                        }
                        break;
                        
                   case "songlink":
                        if(API.getMedia().format == 1){
                            API.sendChat("@" + data.from + " " + "http://youtu.be/" + API.getMedia().cid);
                        }else{
                            var id = API.getMedia().cid;
                            SC.get('/tracks', { ids: id,}, function(tracks) {
                                API.sendChat("@"+data.from+" "+tracks[0].permalink_url);
                            });
                        }
                        break;
 
                   case "download":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Download your song free here: http://www.vebsi.com/");
                        }else{
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }
                        break;
 
                   case "woot":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("One woot coming up!");
                        setTimeout(function(){
                           document.getElementById("woot").click()
                        }, 650);
                        }
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "meh":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("Bummer, A meh has been requested!!");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "join":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        setTimeout(function(){
                        var joindj = ["[user] Time to spin a track! :speaker:","[user] Seems like i'm up!","[user] Now joinning the booth"];
                        r = Math.floor(Math.random() * joindj.length);
                            API.sendChat(joindj[r].replace("user", data.from));
                            API.djJoin();
                        }, 100);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "leave":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        setTimeout(function(){
                        var leavedj = ["[user] Now leaving the dj booth...","[user] Kicking me off :(","[user] Made a pic for you! http://i.imgur.com/4uVDb6f.gif  ....Loser"];
                        r = Math.floor(Math.random() * leavedj.length);
                            API.sendChat(leavedj[r].replace("user", data.from));
                            API.djLeave();
                        }, 100);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "votes":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :-1: " + API.getRoomScore().negative + " | :purple_heart: " + API.getRoomScore().curates);
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                   case "version":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        API.sendChat("Bot Version "+ Funbot.misc.version);
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
                        
                   case "source":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("DJ - ɴᴇᴏɴ - TFL wrote me at github which is available here: http://goo.gl/iLRyWJ");
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                   case "reload":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                           API.sendChat("Now reloading script...");
                        setTimeout(function(){
                           Funbot.unhook();
                        }, 150);
                        setTimeout(function(){
                           Funbot.hook();
                        }, 550);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
                        
                   case "die":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                           API.sendChat('Unhooking Events...');
                        setTimeout(function(){
                           API.sendChat('Deleting bot data...');
                        }, 150);
                        setTimeout(function(){
                           API.sendChat('Consider me dead');
                        }, 750);
                        setTimeout(function(){
                           Funbot.unhook();
                        }, 700);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "whywoot":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else{
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }
                        if(Funbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "whymeh":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else{
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }
                        if(Funbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "help":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Greetings! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ "Greetings! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }
                        if(Funbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                    
                   case "define":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Define what?!");
                        }else if(command[1].toLowerCase().indexOf("xxx") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("@"+ data.from +" http://www.urbandictionary.com/define.php?term="+command[1]);
                        }else{
                        var idiotMsg = ["Dude wtf is wrong with you search that up yourself.","You sound stupid yo","What do i look like a porn bot?","What are you an idiot?"];
                            API.sendChat("@"+ data.from +" "+ idiotMsg[Math.floor(Math.random() * idiotMsg.length)]);
                        }
                        if(Funbot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                
                   case "author":
                   case "authors":
                   case "creator":
                        if(Funbot.admins.indexOf(fromID) !== -1 || API.getUser(fromID).permission < 2){
                           API.sendChat("This bot was created by: ๖ۣۜĐل - ɴᴇᴏɴ - TFL, And it's Copyrighted!");
                        }
                        break;
                       
                   case "beggerfilter":
                   case "bf":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1) Funbot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;
                        
                   case "commandfilter":
                   case "cf":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1) Funbot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;    
                        
                   case "tbf":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            if(Funbot.settings.beggerFilter){
                                Funbot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            }else{
                                Funbot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        break;
                        
                   case "tcf":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                           if(Funbot.settings.commandFilter){
                                Funbot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            }else{
                                Funbot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        break;
                        
                /*case "songLimit":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                       if(typeof command[1] == "undefined"){
                       API.sendChat("Hey smart guy i need a number");
                       }else if(isFinite(String(command[1]))){
                       API.sendChat("Setting the Max Length to " + command[1]);
                       Funbot.settings.songLimit = command[1];
                          }
                       }
                       break;*/     
                        
                   case "status":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Running for " + minutes + "m " : response = "Running for " + hours + "h " + minutes + "m";
                            response = response + " | Begger Filter: "+ Funbot.settings.beggerFilter;
                            response = response + " | History Filter: "+ Funbot.settings.historyFilter;
                            response = response + " | Commands Filter: "+ Funbot.settings.commandFilter;
                            response = response + " | SongLimit: " + Funbot.settings.songLimit + "m";
                            response = response + " | Cooldown: " + Funbot.settings.cooldown + "s";
                            response = response + " | CPU Filter: "+ Funbot.settings.removedFilter;
                            API.sendChat(response);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                  case "fortune":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * Funbot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFortune = Math.floor(Math.random() * Funbot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                 case "roll":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomRoll = Math.floor(Math.random() * Funbot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ Funbot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.roll[randomRoll]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomRoll = Math.floor(Math.random() * Funbot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ Funbot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.roll[randomRoll]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "8ball":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * Funbot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomBall = Math.floor(Math.random() * Funbot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "flipcoin":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomHt = Math.floor(Math.random() * Funbot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomHt = Math.floor(Math.random() * Funbot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "punish":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 7);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me slaps "+command[1]+"'s like a bitch");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
								case 7:
                                    API.sendChat("/me Kicks "+command[1]+" in the dick");
                                    break;	
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 7);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me slaps "+command[1]+"'s like a bitch");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
								case 7:
                                    API.sendChat("/me Kicks "+command[1]+" in  the dick");
                                    break;	
                            }
                        }
                        if(Funbot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
 
                    case "cookie":
                    case "reward":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * Funbot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + Funbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat(crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + Funbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }else{
                        if(typeof command[1] == "@") command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * Funbot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(command[1]+", "+ data.from +" has rewarded you with " + Funbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat(command[1]+", "+ data.from +" has rewarded you with " + Funbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "hug":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an awkward hug");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an awkward hug");
                                    break;
                            }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "dogfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomDogfact = Math.floor(Math.random() * Funbot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.dogfact[randomDogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.dogfact[randomDogfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomDogfact = Math.floor(Math.random() * Funbot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.dogfact[randomdogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.dogfact[randomDogfact]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "catfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCatfact = Math.floor(Math.random() * Funbot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.catfact[randomCatfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCatfact = Math.floor(Math.random() * Funbot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.catfact[randomCatfact]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                }
            }
        }
    });
    
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.set ') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var id = data.fromID;var msg = data.message;var userfrom = data.from;
            var command = msg.substring(1).split(' ');

            if(Funbot.misc.ready || Funbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
                switch(command[1]){
                    
                    case 'none':
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                         var username = msg.substr(msg.indexOf('@')+1);
                         var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.NONE);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                    
                    case 'resident':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                         var username = msg.substr(msg.indexOf('@')+1);
                         var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.RESIDENTDJ);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                    case 'bouncer':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.BOUNCER);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                    case 'manager':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.MANAGER);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                    case 'cohost':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.COHOST);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                    case 'host':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.HOST);
                        }else{
                            API.sendChat("Master doesn't want you playing with that.");
                        }
                        break;
                    default:
                        API.sendChat("Can't set user to that variation!");
                        break;
                }
            }
        }
    });

    
    API.on(API.CHAT, function(data){
        var fromID = data.fromID;
        msg = data.message.toLowerCase(), chatID = data.chatID;
        for(var i = 0; i < Funbot.filters.beggerWords.length; i++){
            if(msg.indexOf(Funbot.filters.beggerWords[i].toLowerCase()) > -1 && Funbot.settings.beggerFilter){
                API.moderateDeleteChat(chatID);
                responses = ["@{beggar}, Asking for fans isn't allowed in here, You're now being banned for 1hr!","Next time read our lobby's rule @{beggar}, Asking for fans isn't allowed! ಠ_ಠ","@{beggar}, You're now banned for one hour. Asking for fans isn't allowed! ಠ_ಠ"];
                r = Math.floor(Math.random() * responses.length);
                API.sendChat(responses[r].replace("{beggar}", data.from));
                setTimeout(function(){
                API.moderateBanUser(fromID, API.BAN.HOUR);
                }, 1500);
            }
            if(msg.indexOf(Funbot.filters.commandWords[i].toLowerCase()) > -1 && Funbot.settings.commandFilter){
               API.moderateDeleteChat(chatID);
            }
        }
 
    });
    
    
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID, fromID = data.fromID;
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf('hello bot') !== -1 || msg.indexOf('bot hello') !== -1 || msg.indexOf('hi bot') !== -1 || msg.indexOf('bot hi') !== -1 || msg.indexOf('sup bot') !== -1 || msg.indexOf('bot sup') !== -1 || msg.indexOf('hey bot') !== -1 || msg.indexOf('bot hey') !== -1 || msg.indexOf('howdy bot') !== -1 || msg.indexOf('bot howdy') !== -1 || msg.indexOf('aye bot') !== -1 || msg.indexOf('yo bot') !== -1 || msg.indexOf('waddup bot') !== -1 || msg.indexOf('bot waddup') !== -1){
                var HelloMsg = ["Hey!","Oh hey there!","Good day sir!","Hi","Howdy!","Waddup!"];
                API.sendChat("@" + data.from + " " + HelloMsg[Math.floor(Math.random() * HelloMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("how are you bot") !== -1 || msg.indexOf("bot how are you") !== -1 || msg.indexOf("hru bot") !== -1 || msg.indexOf("bot hru") !== -1 || msg.indexOf("doing good bot?") !== -1 || msg.indexOf("bot doing good?") !== -1 || msg.indexOf("hows it going bot") !== -1 || msg.indexOf("bot how is it going") !== -1 || msg.indexOf("how you doing bot") !== -1 || msg.indexOf("bot how you doing") !== -1){
                var HRUMsg = ["I'm good thanks for asking :)","Doing great yo and yourself?","All Good Mate!","I'm good thanks for asking!","Yeee i'm cool and youself yo?"];
                API.sendChat("@" + data.from + " " + HRUMsg[Math.floor(Math.random() * HRUMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("ty bot") !== -1 || msg.indexOf("bot ty") !== -1 || msg.indexOf("thank you bot") !== -1 || msg.indexOf("bot thank you") !== -1 || msg.indexOf("thanks bot") !== -1 || msg.indexOf("bot thanks") !== -1 || msg.indexOf("thx bot") !== -1 || msg.indexOf("bot thx") !== -1 || msg.indexOf("thanks for asking bot") !== -1 || msg.indexOf("bot thanks for asking") !== -1 || msg.indexOf("thx for asking bot") !== -1 || msg.indexOf("bot thx for asking") !== -1){
                var TYMsg = ["You're welcome! :D","Your always welcome bro!","No prob man.."];
                API.sendChat("@" + data.from + " " + TYMsg[Math.floor(Math.random() * TYMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("ily bot") !== -1 || msg.indexOf("bot ily") !== -1 || msg.indexOf("i love you bot") !== -1 || msg.indexOf("bot i love you") !== -1 || msg.indexOf("i luv you bot") !== -1 || msg.indexOf("bot i luv you") !== -1 || msg.indexOf("i luv u bot") !== -1 || msg.indexOf("bot i luv u") !== -1 || msg.indexOf("i luv you bot") !== -1 || msg.indexOf("i love you more bot") !== -1 || msg.indexOf("bot love you") !== -1 || msg.indexOf("love you bot") !== -1){
                var LoveMsg = ["Fuck yeahh!! :D I love you too baby!","I love you too ;).....   Sex?... JK you don't want this big thing ;)","I love you too o.0","Sweet.. Love you to ;)"];
                API.sendChat("@" + data.from + " " + LoveMsg[Math.floor(Math.random() * LoveMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("fuck you bot") !== -1 || msg.indexOf("bot fuck you") !== -1 || msg.indexOf("f u bot") !== -1 || msg.indexOf("bot f u") !== -1 || msg.indexOf("fuhk yuh bot") !== -1 || msg.indexOf("bot fuhk you") !== -1){
                var FuckMsg = ["Nah.. I don't need another fuck after giving your mom one last night.","</input fuck> Jk... Fuck you too","< Test fuck >.. Sorry 0% fucks were given by me."];
                API.sendChat("@" + data.from + " " + FuckMsg[Math.floor(Math.random() * FuckMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("bot shut up") !== -1 || msg.indexOf("shut up bot") !== -1 || msg.indexOf("stfu bot") !== -1 || msg.indexOf("bot stfu") !== -1 || msg.indexOf("hush bot") !== -1 || msg.indexOf("bot hush") !== -1 || msg.indexOf("hush it bot") !== -1 || msg.indexOf("bot hush it") !== -1 || msg.indexOf("be quiet bot") !== -1 || msg.indexOf("bot be quiet") !== -1 || msg.indexOf("shut the hell up bot") !== -1 || msg.indexOf("bot shut the hell up") !== -1){
                var stfuMsg = ["<Test/ShutUp ... Nope","Eat this http://i.imgur.com/CSq5xkH.gif","No you shut up!","But i was made to talk.. :(","Just because i am a bot doesn't mean you have to tell me to shut up. Why don't you shut up!","Hey idiot! Ever heard of pressing the \"Ignore button\"?"];
                API.sendChat("@" + data.from + " " + stfuMsg[Math.floor(Math.random() * stfuMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(msg.indexOf("i got to go") !== -1 || msg.indexOf("igtg") !== -1 || msg.indexOf("gtg") !== -1 || msg.indexOf("be back") !== -1 || msg.indexOf("going off") !== -1 || msg.indexOf("off to") !== -1 || msg.indexOf("have to go") !== -1 || msg.indexOf("bye bot") !== -1 || msg.indexOf("bot bye") !== -1){
        var AfkMsg = ["See ya man!","Awww, See ya babe.","Glad you came by thanks! :kissing_heart:","Thanks for coming. Hope to see you soon! :blue_heart:"];
            API.sendChat("@" + data.from + " " + AfkMsg[Math.floor(Math.random() * AfkMsg.length)]);
        }
        if(msg.indexOf(':eyeroll:') > -1){
           API.sendChat('/me ¬_¬');
        }
        if(msg.indexOf(':notamused:') > -1){
           API.sendChat('/me ಠ_ಠ');
        }
        if(msg.indexOf(':yuno:') > -1){
           API.sendChat('/me ლ(ಥ益ಥლ');
    
        }
    });
    
    
    function DJ_ADVANCE(data){
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && Funbot.settings.removedFilter){
                API.sendChat('/me This video may be unavailable!!');
            }
        }, 1500);
 
        cancel = false;
    }
 
    botMethods.loadStorage();
    console.log("Funbot-Script version " + Funbot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://goo.gl/9vurzR');
        $.getScript('http://connect.soundcloud.com/sdk.js');
    }, 700);
 
    setTimeout(function(){
        SC.initialize({
            client_id: 'eae62c8e7a30564e9831b9e43f1d484a'
        });
    }, 3000);
 
    API.sendChat('Presenting Lain Iwakura '+Funbot.misc.version+'');
   }else{
    alert("This bot can only function at http://plug.dj/community");
   };
