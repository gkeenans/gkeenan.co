---
permalink: "/avgb/how-to-make-an-audioblog/index.html"
title: "How to Make an Audioblog: A Guide Written by an Anxious Moron Haunted by Imposter Syndrome"
date: 2025-02-20T13:40:00.000Z
---

**Table of Contents:**
- [Preramble](#preramble)
- [Please, Keenan, dear god, I just want the basics!](#please-keenan-dear-god-i-just-want-the-basics)
- [Any other tips for a beginner?](#any-other-tips-for-a-beginner)
- [I want to sound better. What microphone should I buy?](#i-want-to-sound-better-what-microphone-should-i-buy)
- [Okay, but really, what microphone should I buy?](#okay-but-really-what-microphone-should-i-buy)
- [What software should I edit in?](#what-software-should-i-edit-in)
- [What are some more advanced things I can do?](#what-are-some-more-advanced-things-i-can-do)
- [Postramble](#postramble)

***
<br>

### <a id="preramble"></a>Preramble

I was tagged *against my will*[^1] by Robb this morning on Mastodon. Looped into a conversation stemming from a simple inquiry from [Sia](https://front-end.social/@sia/114036543815442093):

> Does anyone provide audio versions of their blog posts? Was thinking of doing this. Maybe just recording myself reading it and describing any graphics. 
> 
> I have no ideas on best practices here for recording or delivering and optimizing audio if anyone wants to share

And Robb was all: 

<audio controls>
    <source src="https://avgb.b-cdn.net/VO/robb.mp3" type="audio/mpeg">
</audio>

Which is very nice and *very* British. And he's right, I *do,* in fact, have an [audioblog](https://gkeenan.co/avgab/). I'm, like, *the* target for this question. *So why do I feel so fucking weird about offering any sort of guidance?* 

This, naturally, got me thinkin' about how I do the things I do, the knowledge I've amassed over the years, and how I often feel weirdly inadequate or ill-prepared to discuss my process. But, like, if I'm being honest with myself, I've recorded and edited many, many hours of podcasts over the years. I produce audio that sounds *pretty good* to my ears. And—*Christ!*—I am a [professional voice actor](https://gkeenan.co/vo/). I have recorded audio for real companies and they have paid me actual money dollars to do so! All from my home studio. Surely, *surely* I can offer at least some practical guidance for people who want to get started. I mean, we're all having fun here, right?

To answer a rhetorical question: Indeed.

I think my biggest issue[^2] is I have this obsession with being as thorough as possible. I don't know if any of you who have read my writing before have deduced this yet, but my [propensity for digging in](https://gkeenan.co/avgb/an-alarmingly-concise-and-very-hinged-summary-of-what-it-was-like-to-build-this-site-from-scratch/) could be accurately classified as an affliction, and it often prevents me from completing anything because I am so concerned I may not cover every single little facet that it leads someone astray, or, worse, I get yelled at by some mean turd who knows more than me. 

So, in an effort to grow as a person, I am going to try my goddamnedest to push through and offer insight on how *I*, personally, handle operating an audioblog. With tips for beginners to just *get started*,[^3] as well as more advanced things you can indulge in should you choose to do so. It is not a comprehensive, immutable tome. It is not a tutorial, per sé. But it should give you enough to think about so you can lower any barriers you may be placing in front of yourself.

Let's give this a go, shall we?

### <a id="please-keenan-dear-god-i-just-want-the-basics"></a>Please, Keenan, dear god, I just want the basics!

Okay, quick and dirty. Here's my workflow for making an audioblog episode:

1. Write a post I want to record. (This is not optional. In fact, I would say this is probably the most crucial step. I know—weird!)
2. Record myself reading the post. (Also not optional, though I do include an introduction to each episode because I also serve them as a podcast. THAT PART *IS* OPTIONAL.)
3. **Optional, but recommended:** Edit flubs, long bits of silence, errant noises, etc. in my software of choice. (Currently Logic Pro X, but I have used GarageBand and Audacity in the past. Both of those are free. The Voice Memos app on iOS has a basic editor built-in, which I have used for smaller projects!)
4. **Optional, slightly advanced:** Add compression and/or EQ to amplify the best qualities of my voice and normalize the audio so it doesn't get too loud or too quiet.
5. Export the audio as an MP3. (This can be at 96 or 128 kbps bitrate. You don't need to go super high quality if you're just exporting your voice.)
6. Upload the MP3 to [Bunny](https://bunny.net/). (In the past, I've used services like Simplecast, Libsyn, and Squarespace to host and serve my audio files. These are more expensive options, but they can make life easier.)
7. Embed the MP3 to the blog post using the HTML `<audio>` tag. (I optionally styled my `<audio>` in CSS to make it look better and have a better user experience.)
8. **Optional, more advanced:** Create a new post in my separate audioblog RSS feed, which serves the MP3 with appropriate metadata to Apple Podcasts and, ultimately, the services that pull from Apple Podcasts. (Again, I've used Simplecast, Libsyn, Squarespace, etc. to handle this part, but now I manage this on my own because I wanted a challenge.)

That's basically it. Write. Record. Export. Upload. Embed. Easy!

### <a id="any-other-tips-for-a-beginner"></a>Any other tips for a beginner?

Sure. **First off: practice reading your words aloud before recording.**

I find this to be unbelievably helpful. I read my words aloud all the time. I read while I write. I read them once I'm done writing. I want to get comfortable with how they flow, how they sound, how they feel in my mouth.[^4] Where do they trip me up? Do I have a typo? Have I said the same thing over and over and over again and now it's just feeling very redundant and repetitive and similar? 

Reading your words aloud helps you practice and can also generally makes the editing process better. The ol' one two word punch, as my dad never said.

Also, **read more slowly than you think you should.**

A common pitfall for people when reading aloud is they try to read too quickly. Whether it's nerves, or they hate the sound of their voice, or they're feeling so comfortable with the words they've written that they just kinda fly through without thinking about it.

I'm here to tell you that you are probably reading *too quickly.* And that will either make life harder for you as you try to record, harder for your audience as they listen, or both!

Speed, like tone, intonation, volume, etc. are all tools you can use to add dynamism and personality to your reading, but going too fast for too long will wear you out and lose your listeners.

### <a id="i-want-to-sound-better-what-microphone-should-i-buy"></a>I want to sound better. What microphone should I buy?

Hi. We are friends. And you know what friends share? Secrets.

So let me share a secret with you, friend (pretend I'm whipsering): *You probably already possess everything you need to record audio that sounds pretty good.*

It's true. By all accounts, most modern laptops or phones come equipped with *good enough* microphones that make the initial investment into recording equipment practically zero dollars. Whenever someone asks me what microphone they should buy, I ask them back, "Do you need to buy one?" An unnecessary, almost antagonistic way to respond, sure, but I think, for all intents and purposes, valid.

**More often than not, the quality of your recording is not a question of equipment. It is a question of *space*.** *Where* you record is typically more important than *what* you use to record. 

Are you sitting at your kitchen table, bare-walled, floors be-tiled with a material almost specifically engineered to reflect sound waves? Are you huddled in your bathtub, showering your microphone in unnecessary reverberances? Don't do that!

Instead, consider putting your recording device in a space where the sounds emanating from your face won't bounce around as though they were taking direction from a hit Sugarcult song.[^5] **Simply: find a space with materials that will naturally absorb errant sound.** Clothes. Curtains. Fabric. Towels. Carpet. Rugs. Mattresses.

You will be shocked at how much your audio quality improves when you record in a space that isn't battering your microphone with sound reflections.

Here are some examples of places I have recorded in a pinch that sounded better solely because of the existence of sound dampening materials, rather than fancy equipment:
- A small closet with the microphone nestled in hanging shirts.
- A coat closet.
- A walk-in closet. (Lots of closets, huh.)
- A large room with the curtains closed.
- A car! (Cars are surprisingly good at creating acoustically-sound recording spaces, though admittedly not the most convenient option.)
- A private phone booth in the office.

No expensive room treatment. No soundproof recording booth. No studio. 

And most importantly: no expensive microphones! Frankly, if you buy a fancy microphone and record in a shitty space, the audio will still probably sound shitty. Not only will you be disappointed by the quality, you'll also be disappointed by spending a lot of money for the privilege of it sounding like hot garbo.

So before dropping $500 on a microphone, spend that money instead on, like, six dozen eggs and tape the cartons to your walls.[^6]

Yes, you can absolutely go overboard with sound treatment. If you wrap your microphone up in a sweater, or fill your room with mattresses, or squeeze yourself into a closet that's way too small, it'll likely start to sound a little boxy, dull, lifeless. There is a limit here. Play around with the space. Do some test recording in different parts of a room or closet. What sounds clean and rich and vibrant? If it works and it sounds good, it's good!

### <a id="okay-but-really-what-microphone-should-i-buy"></a>Okay, but really, what microphone should I buy?

If you're really in a place where you want to level up your sound with some new recording gear, there are a plethora of options for all voice types, hardware setups, and, most importantly, budgets. It really depends on a number of factors. A microphone is a personal choice.

I'm being deliberately evasive here, because it's been a long time since I've experimented. My old go-to recommendations would've been the Blue Yeti or AT2020 for USB microphones. But Blue was purchased by Logitech awhile back and the AT2020 is discontinued. I know people scoffed at Blue's sound quality back in the day. I always liked it, and I thought it was a perfectly serviceable microphone. I never tried the AT2035, which is the successor to the AT2020. I imagine it's similar in quality, but at $150, I'd probably look elsewhere first.

Personally, I've had such a great experience with my [RØDE setup](https://rode.com/en-us/microphones/studio-condenser/nt1-ai1kit), I would likely look to them first. I hear their [NT-USB Mini](https://rode.com/en-us/microphones/usb/nt-usb-mini) is great and simple. $99 is a solid price.

### <a id="what-software-should-i-edit-in"></a>What software should I edit in?

Look, if we're talking about editing an audioblog here (which we *were*, if I recall correctly), I think simple and free is the way to go. I got my start editing podcasts and voiceover projects in GarageBand on a Mac. It's not as straightforward as it used to be, but it's still possible to do everything you need to. 

I've used [Audacity](https://www.audacityteam.org/) a little bit on PC. It's not my favorite, because I think it's kinda ugly, but I know a ton of people who rely on it. Again. Free. Good.

Spending money on software for projects like this probably isn't going to drastically make your life that much better. The only reason I use Logic Pro X now is because I used to work for Apple and I got a free copy as a result. Does it do a lot more than GarageBand? Fuck yeah. Do I use 99% of its capabilities, therefor making it worth the expense? Lol, no.

At the end of the day, **use the tool that is the most accessible to you so you can build familiarity with it**. If you can split and trim your audio file, you've got most of what you need. If you build some muscle memory around it, especially around its keyboard shortcuts, you'll start moving pretty quickly through your audio files, depending on how much editing you want/need to do.

### <a id="what-are-some-more-advanced-things-i-can-do"></a>What are some more advanced things I can do?

I mentioned way back about messing with things like a compressor or equalizer (EQ). These are plug-ins you can apply to your audio tracks to make your voice sound richer (equalizer) and normalize the audio to mitigate fluctuations in volume (compressor).

These (plus things like noise gates, deEssers, limiters, etc.) can be helpful ways to round out the quality of your audio, but they're also things that need to be adjusted based on a number of unique factors, such as your microphone, your recording space, background noise, the overall tone and quality of your voice, etc. They become very personal, is what I'm getting at.

To that end, I'm just going to punt on this, because there are so many guides out there that have already been written. I got my start relying on [this old guide from Jason Snell](https://sixcolors.com/post/2015/08/add-podcasting-plug-ins-in-garageband/). Even though it's written for an old version of GarageBand, the principles largely remain the same, and I think you can take small suggestions here and apply them to your own software setup to help clean up your audio. Start experimenting and find a sound profile that works best for you and your voice.

### <a id="postramble"></a>Postramble

To be clear, if you are considering recording audio versions of your blog posts, I think the best thing you can do is start. Just start. Do it because it sounds fun, or because you want to make it more enjoyable for people to read your blog in the way that best suits them. You likely already have access to everything you need to record, edit, and publish your work in audio.

Yes, you can tinker and fiddle and spend money and try to get it right before ever jumping in. Fine. You do you. I'm not your mom.[^7] But, personally, I think trying to check all of the boxes I laid out here (and then whatever other boxes conjured up out of the bowels of the Internet) is just setting yourself up for disappointment. Start building a skillset and layer on new things as you need them.

I'm mostly saying all that to me, because of my broken brain and how it sets up impossible hurdles to overcome. I often need to remind myself that I am a product of everything I've done and learned along the way, that I didn't just sprout out of the ground, ready to go, all of my skills set and a clear path before me. I'm in progress. I'm figuring it out. I take every experience with me to the next.

And that honestly sounds pretty good to me.

[^1]: I'm not being passive-aggressive to Robb or any person who tags me in a social media post. That's how these things work. I am just recognizing my complicated feelings about how these things work. You're minding your own business, and then suddenly your phone yells at you and you react to that in whatever way seems fit for the situation, heavily dependent on your ability to self-regulate. And then you perhaps spend an inordinate amount of time scrolling on your phone or devising some huge, elaborate response that you then realize really isn't appropriate for social media? Not in the sense that you shouldn't say certain things publicly—*WHICH YOU SHOULDN'T. PLEASE STOP SAYING SO MANY THINGS PUBLICLY. NOT EVERYTHING NEEDS TO BE FARTED OUT INTO THE WORLD.* But, rather, in the sense that *maybe a platform dependent on brevity isn't the best format to expound in great detail.* Does the world really need another post 13/300 miles long social media thread that ends up being the UX equivalent of slip-n-sliding down a very long sheet of sandpaper? So, no, I do not begrudge the player of the game, I begrudge a system that inflicts a rigid structure and widely-agreed-upon communicative norms that then lead me to a series of ruminative thoughts about the best way with which to respond, rather than simply *responding.* Do I blow up people's timelines with a multi-toot epic? Do I do the sensible thing and take it to a private channel more suited for long-form communication, such as ELECTRONIC MAIL??? Or do I decide to write a very long blog post where I can indulge in whatever weird tangent I want in the fucking footnotes? I DON'T KNOW, DEAR READER. DO YOU HAVE ANY IDEA WHAT I SHOULD DO HERE??? Sorry. My coffee has fully kicked in. Look, it needs to be said that Robb was just being *fucking nice and considerate and trying to help*. I AM NOT MAD AT ROBB. NO ONE SAY I AM MAD AT ROBB.
[^2]: lol, I mean, like, in this particular moment. Not, like... ever. I'm sure we can all agree!
[^3]: Don't be like me! Please just do the thing! Learning is fun! I am a bad example, but please listen to me! I know I am right!
[^4]: Boy, I sure did hate writing that! Gross!
[^5]: No. I *won't* workshop that joke.
[^6]: True story: my most recent [commercial demo](https://gkeenan.co/vo/) was recorded in small loft closet where the walls and ceiling were lined with egg cartons. The guy who recorded and engineered the demo makes his living out of that space. He's a professional voice over artist and sound engineer using spare egg cartons for sound treatment. Shit works!
[^7]: Or maybe I am. In that case, I'm proud of you, honey.