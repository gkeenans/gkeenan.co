---
permalink: "/avgb/an-alarmingly-concise-and-very-hinged-summary-of-what-it-was-like-to-build-this-site-from-scratch/index.html"
title: An alarmingly concise and very hinged summary of what it was like to build this site from scratch
date: 2024-07-02T17:45:00.000Z
---

**Table of Contents:**
- [Preramble](#preramble)
- [This is what learning looks like](#this-is-what-learning-looks-like)
- [Station Eleventy](#station-eleventy)
- [Now we're cookin' with flaMEd](#now-were-cookin-with-flamed)
- [Finding my voice](#finding-my-voice)
- [Acknowledgements](#acknowledgements)

***
<br>

### <a id="preramble"></a>Preramble

It was May 13, 2024 when the sky opened up and the gods deigned to bless us with a grand proclamation: a private equity firm was to swoop in and save Squarespace from the perils of public trading. What news! Private equity! My two favorite words right after frontal lobotomy! It was May 13, 2024 when I realized my time with Squarespace was through. After over a decade of building websites with them. Failed blogs and failed podcasts and failed businesses. Now, the failure of Capitalism made it clear that it was finally time to move on.

Lest anyone accuse me of rampant cynicism (fuck you), let it be known that I have spent a *lot* of time championing Squarespace while simultaneously watching it morph itself from a product focused on blogs and portfolios into an e-commerce behemoth that wants to be the Internet's business singularity. What used to be a company who filled podcasts and YouTube videos to the brim with ad reads opining about freedom, flexibility, and creativity, has now replaced those spots with calls to action enticing you to *monetize your entire existence.*

START YOUR BUSINESS WITH SQUARESPACE.

RUN YOUR BUSINESS WITH SQUARESPACE.

BURDEN YOURSELF WITH THE KNOWLEDGE THAT A VISITOR PUT ONE OF YOUR PHOTOS INTO THEIR CART BUT DIDN'T FUCKING BUY IT WITH SQUARESPACE.

To scroll through their homepage is to be subjected to an SEOrgasm. An onslaught of big, bold headers, expertly designed to diddle your entrepreneurial spirit. *Designed to sell*. *Grow your business online*. *Tools to sell your time and expertise*. *Modern solutions for your brand*. *Schedule appointments, create courses and tutorials, invoice clients*. 

Truly, Squarespace is the everything platform for anyone whose definition of everything is *generating revenue*.

Look, I spent plenty of time in the corporate world. I can handle some nonsensical marketing puffery business development[^1] bullshit. I get it. Company gotta company, amirite? Optimize that funnel. Expand that reach. Make that cheddar. Can't build an infinite cash printing operation charging dork ass bloggers $16/month, can we? Let's be realistic here. 

At the end of the day, the product speaks for itself. And, for a very long time, the product was simple, elegant website building tools. Robust blogging capabilities—even podcast hosting baked right into the experience! All of it so straightforward *anyone* could do it. Surely, they wouldn't let the relentless pursuit of **more** engorge that product into a chugging, bloated, hostile parasite designed to extract every ounce of value out of every customer and every customer's customer, right?

Right?

*RIGHT?*

I mean, okay, yeah, when I launched the first version of this site hot on the heels of shutting down the consultancy my wife and I founded, there was something enticing about the thought of having an art portfolio that could also help me dive head first into the world of e-commerce. There was, for a moment, a dream of just selling art and using their myriad tools to help me build a "presence". I had used Squarespace for so long. I knew Squarespace. I was *comfortable* with Squarespace. I admit, I bought in. Briefly. 

Yes, I thought it was gross that I had to upgrade to the "Business Plan" just to be able to inject custom CSS into my site. Yes, I found it annoying that I had to click through multiple screens, including one that encouraged me to *MONETIZE MY BLOG*, every. Single. Fucking. Time. I wanted to publish a new piece. Yes, it was slow. Yes, the interface had devolved into an inscrutable miasma of settings tucked away in preposterously unintuitive locations. Yes, the iOS app has a Marketing tab in it that uses their super intelligent machine learning capabilities to "learn about your brand" and produce some of the absolute ugliest social media and email marketing templates I've ever seen in my fucking life omg lmao.

Yes, nearly everything about the platform felt worse than it did when I first started using it over a decade ago[^2], and, no, it wasn't until private equity shattered the glass, lifted the veil, defogged the mirror—WHATEVER METAPHOR YOU WANT TO USE—that I saw, clearly, the biggest problem: I didn't even like tinkering with my website anymore. Once I had built it, I was always hesitant to go in and do more, because I didn't want to have to fight with Squarespace. And if it was bad now, I didn't want to see just how awful the experience got when the new management got a chance to optimize everything for revenue even further. They're gonna squeeze that thing until it weeps blood.

So it was May 14 when I put my intention out into the world:

<iframe src="https://social.lol/@keenan/112440753736783147/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://social.lol/embed.js" async="async"></script>

My buddy, Nate, [jumped into my replies](https://social.lol/@nfd/112440995435015526) to tell me about their experience with Eleventy, and how coding a site by hand rejuvenated their own love for tinkering. 

I initially expressed some skepticism. After all, I didn't know fuck about shit when it comes to coding, aside from the disparate knowledge I picked up back in the Geocities days, honed slightly over the years by styling a Myspace page or after altering someone else's CSS to hack it into doing what I was hoping for on my numerous Squarespace blogs. I never really knew *why* something worked, just that, with some finagling, it eventually did. But coding my own thing from the ground up? I dunno. It seemed insurmountable. I'm 38, anxious, and stupid. Should probably just stay in my lane!

But the prospect of independence—*true* independence. The prospect of ownership—*true* ownership. It gnawed at me.
<br>

### <a id="this-is-what-learning-looks-like"></a>This is what learning looks like

If I was going to do this, I knew I needed to brush up on some of the basics first. I popped on over to [Codecademy](https://codecademy.com) and started my journey down the HTML and CSS introductory learning paths to help establish a solid foundation for myself.

It took a day or so to complete those. I was delighted to find what I assumed would be a chaotic mess of half-baked understanding of rules and syntax was actually, like, two-thirds baked! Turns out, I had picked up a lot more over the years than I gave myself credit for, and now I was just filling in the cracks with some of the key fundamentals. I'm sure, had I been starting from zero, it would've been more challenging, but I was surprised at how straightforward these lessons were. They made me feel competent enough to get going and completely skip the Javascript tutorials![^3]

With this newly-discovered and not-at-all-misplaced confidence, I set out to make a definitive decision about how I was going to build this thing. Eleventy was, obviously, on the radar, given how popular it seemed to be in my circle. But as I asked around for alternatives, or scoped out the source code of other people's sites, I was presented with a plethora of choices. I could use Jekyll or Hugo or any number of static site generators (to be clear, I barely understood what a static site was). I could go with something like Ghost, or, I suppose, WordPress. I had a friend who was really excited about Statamic. I even got so overwhelmed by all of these choices that I guess for a second I also thought that Wix might be in the running, I dunno, it was a wild time.

In the midst of all this, I read a piece on Nate's blog called [The "IndieWeb" feels like coming home](https://daught.me/blog/2024/indie-web/), which was not only empowering to read, since they, too, previously had a Squarespace site and they, too, had a similar level of coding expertise, but it also had a really helpful section at the bottom that made it seem like setting up Eleventy would be stupid easy. Four whole steps! Piece of cake.

So I said, "Fuck it!" and installed Node.js on my PC. I downloaded VS Code. And after having to fuck around in the Command Line for some reason,[^4] I was finally able to install the Eleventy Starter blog and I was off to the races. And by off to the races, I mean I had to learn how to use VS Code while learning the ins-and-outs of the Eleventy Starter blog project at the same time. I had never even been in a development environment before—there was a lot of stuff to take in! There's a whole suite of plugins I could download. Do I need to download those? Are they plugins for VS Code, or are they plugins for my Eleventy Starter blog? How come I can't seem to get `npm start` to work? Okay, `localhost:8080` isn't working anymore, but I do have `localhost:8081`. Quit. Restart. Okay, now I have... both? What is happening here? Okay, so where do I save these fonts? How do I get `styles.css` to recognize these fonts are installed? I'm pointing them to the right folder. What if I do this? No. Okay, what if I try this? No. Okay. Uh. Quit. Restart. Fonts are working. Cool. Okay. 

*I wonder if Nova is better,* I thought. Maybe I should just let my PC be my gaming machine and let my Mac be my development machine. That way, I could code ANYWHERE! I could code on the couch! I could code on the porch! Ooh, Nova has some pretty colors. Okay, let's install the Eleventy Starter blog here. Fuck, I need to redownload the fonts and put them in the directory. 

Why aren't these working?

It was when I had to start poking around in the `.js` files that I realized I might be a little in over my head. Like, I could kinda, sorta understand what some of the words meant—I do read, write, and speak English pretty well—but their syntax was nearly nonsensical. How do you define a collection. What is a `moduleExport`. What is `const`. Oh my fucking god, how many curly brackets could this thing *possibly need???*

Anyway, I was enjoying looking at Nova until `npm start` stopped working altogether. It would error out and I couldn't get `localhost` to work in my browser. I had no idea why. But now, I had installed two different coding tools on two different machines. Installed the Eleventy Starter blog two different times. And when I went back to VS Code on my PC, I couldn't remember what the fuck I had been doing there in the first place, so I scrapped the directory and reinstalled the Eleventy Starter blog *again.*

Then I went to fuck around with the [Glitch Eleventy starter app](https://glitch-hello-eleventy.glitch.me/) until it dawned on me I was just spinning my wheels. Two days of flailing around without a clue. Nothing to show for it. 

To alleviate my frustration, I took a break to play video games and write about [killing my blogroll](https://gkeenan.co/avgb/i-really-like-everyone-on-my-blogroll-but-im-sorry-to-say-that-it-must-die/), even though I had explicitly told myself that there was no use in writing anything new for the—ugh—*Squarespace* site if I'm just going to have to recreate it on the new site. Why invest more time in the platform I'm leaving?

But I am nothing if not a stubborn bitch, so I wrote it anyway. And once I did, the thought crossed my mind that maybe I should just stick with what I know. *Maybe I was too ambitious to assume I could do this. Maybe I should just let the Squarespace site renew. Maybe I'm not cut out to learn this stuff. Who knows, maybe the private equity thing won't be that bad.*

The momentum of the Codecademy tutorials sent me careening straight into a wall wrought of ignorance and doubt compacted so densely that it shattered my entire spirit upon impact. The egregious mistake of not knowing everything within the first hours of learning. 
<br>

### <a id="station-eleventy"></a>Station Eleventy

I was so deflated that I decided it was time to rewatch *Station Eleven* so I could cry and feel some semblance of optimism about the world.[^5] 

<iframe src="https://social.lol/@keenan/112571111310331231/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://social.lol/embed.js" async="async"></script>

Sometimes when presented with a formidable existential quandary, the only thing you can do is take a moment to breathe and soak up as much art as possible.

I hadn't watched it since it originally aired back in 2021. For whatever reason it had been on my mind for the last few months, well before this sudden onset ennui. Instead of beating my head against the wall, I spent the next week and half immersing myself in this unbelievable story told in ten beautiful, heart-wrenching episodes. 

In my mind, *Station Eleven* was already my favorite show, just based on the initial viewing alone. Ever since watching it, I couldn't shake how it made me feel. How much I cried. How emotionally attached I became to the characters. How much it made me believe in the power of human connection, creativity, and love. Not only did this second viewing validate my original thoughts, it reinforced them in new and unexpected ways. The first go around, it took time to grow to love these characters and begin to understand what was happening, who they were, where their story would take them. The second time, with all of that knowledge firmly entrenched, seeing them all again was a reunion. I knew what was going to happen, so it gave me an opportunity to appreciate the characters for their warmth and their humor, their pain and their pleasure, the way they treat each other in the face of a truly incredible tragedy. Subtle things I missed the first time around were now on full display.

It's a show about the perseverance of the human spirit, about how we found our people and ourselves. I often feel terribly alone, and this, more than anything else I've seen, makes me feel hope. Maybe one day, I, too, will find the people who appreciate me for me. The whole me.

When I finished the show, I had the foundation for an essay I knew I needed to write.

But I also knew that I could not write it until I had a place that was my own. 

The break was over. It was time to do this. For realsies.

As I scoured the web for guides, I found a [tutorial](https://flamedfury.com/guides/11ty-homepage-neocities/) that would turn out to be the thing that made this all finally click for me.

I opened up VS Code, trashed the previous directory for the Starter Blog, and began a new project.

`npm install @11ty/eleventy`
<br>
### <a id="now-were-cookin-with-flamed"></a>Now we're cookin' with flaMEd

One of the things that immediately jumped out to me about flaMEd's tutorial, despite being out of date, as he claims, was how it walked step by step through creating a new Eleventy project from scratch. Rather than loading up the Starter Blog project, which was already full of configuration files, dependencies, and sample pages, flaMEd's approach was to detail every step in the codewriting process, explain what each step did and why. This helped build a ton of context for me as I pieced together `.html` and `.js` and `.json` files. I learned what partials were, how to structure them, and where they fit into layout files. I could see as I wrote the code how things were supposed to interoperate, because I was piecing it all together as I went along, rather than trying to untangle a web of pre-built code.

I can understand how a starter project might be helpful for someone who has done this before when they just want to spin something up and hit the ground running. But for me, when I was brand new, what I needed was someone who understood how to lay the groundwork. And that meant making sure that I had to build these files and folders one-by-one and get them working together myself.

Sure, there were stumbles along the way where things didn't work as flaMEd described, but the benefit of working through this tutorial was that it meant I could look back a couple steps and see that I rushed through and didn't pay close enough attention when I was coding.

That, or it was a stupid typo. You know, `style.css` vs `styles.css`.

Over the next few hours, I managed to build out a basic site with a couple of pages whose inner-workings I *actually understood*. I reached the end of the tutorial and felt comfortable enough that I could get to styling.

I texted [Robb](https://social.lol/@robb) to declare my victory, as he had been cheering me on throughout the process, even when I stumbled.

![Conversation with Robb on June 18, 2024 at 7:43pm where I sent him a screenshot of my VS Code / Localhost split-screen setup up. Underneath, I say: "Started from scratch today, and I think I made some decent progress."](https://avgb.b-cdn.net/img/progress.jpeg)

I stayed up late that night. *Too late*, some might say. But I was *cookin'*. I went to sleep for a bit and shot awake excited to get back to my computer. My new hyperfixation awaited. I couldn't remember the last time I felt legitimately giddy to sit at my desk.

That second day was when I hit my first series of obstacles. A couple weird CSS things that I eventually ironed out—I don't remember what they were—and then, over the course of literally five hours, I tried to figure out how to install my first plugin for the site. I write in Markdown, and I love me some footnotes, so it only made sense that I get [markdown-it footnote](https://www.npmjs.com/package/markdown-it-footnote) working. Easier said than done, considering the documentation assumes you know a thing or two, and as I've previously established, I am a moron.

Hours spent fiddling away in config files and digging through my `node_modules` folder, testing the build and seeing no changes. Hours searching the web for a Stack Overflow or Github or Reddit thread that could help me. Eventually, I narrowed down the issue to poor syntax in my `.eleventy.js` file. I think I had put the `moduleExports` rules in the wrong part of the document? Hard to remember, the day was a blur.

But I do remember the moment when I saved the file, hoping that would produce a change, and then reloading my blog post to verify, and—*GASP*—it worked! The footnotes rendered properly. Holy fuck. HOLY FUCK. I did it. I figured it out!

I felt like a superhero.

I experienced a number of triumphant moments as I built out the site for the next week. Some days I'd spend tinkering with little things that probably didn't matter that much. Other days, I'd build up the mental fortitude to tackle some of the big ticket items I knew needed to be completed before I was ready to launch.

**Here is a brief list of some of the other triumphs and tribulations I dealt with during that week and a half period where I built out the bulk of my site:**
- I figured out, with the help of [this guide](https://simpixelated.com/group-posts-by-year-in-eleventy-js/), how to order and display blog posts by date, complete with visible metadata, which also ended up teaching me more about installing plugins and understanding key elements of Nunjucks. I used this knowledge to build a metadata partial for inside blogposts as well. This all took awhile!
- I figured out, with the help of Robb, how to get my [RSS](/avgb/feed.xml) and [JSON](/avgb/feed.json) feeds for A Very Good Blog up and running, complete with redirects from the previous site, so that anyone who previously subscribed to my Squarespace blog wouldn't have to resubscribe. All things considered, this actually wasn't too hard!
- I figured out, with the help of [this guide](https://www.marclittlemore.com/create-an-eleventy-podcast-feed/) (and Robb), how to add an RSS feed for my podcast, [A Very Good (Audio) Blog](https://podcasts.apple.com/us/podcast/a-very-good-audio-blog/id1724269695). Similarly to the above, I wanted to make sure existing subscribers would not have to resubscribe. All of this was tough, mostly because it dealt with a lot of Javascript in multiple config files, as well as my first brush with Liquid. I restarted this multiple times, but it was definitely a process that felt *great* when I finally nailed it.
- I wrote CSS that would see my site respond successfully to three core window sizes: desktop, tablet, and mobile. Remarkably straightforward.[^6]
- Oh, duh, also, I had never used Github before! So as the site was really shaping up, I started a Github account and learned how to make my first commit (and then I would go on to make 103 more leading up to launching), and *then* learned how to push that to Netlify automatically.

I came away from this process with a much greater understanding of how Eleventy works, and how all these different elements connect to make a website function. I'm clearly not an expert, and I can't say with certainty, if I were to start it all over again, that I wouldn't make a lot of the same mistakes or be confused about the same things.[^7] What I am far more confident about now, though, is that I am capable of figuring it out.
<br>
### <a id="finding-my-voice"></a>Finding my voice

Something I haven't yet touched on is the broader philosophical question behind this website. If I'm going to go through the trouble of rebuilding it, make it exactly what I want. What, exactly, do I want it to be?

When I first launched my site on Squarespace, I had no ambition of writing a blog. I thought that era of my life had long passed. Instead, I was dead set on focusing on other art forms, with my photography and voice acting sitting at the forefront. I wanted to make a portfolio that was big, bold, colorful. Something that was eye catching and fun. Something that felt loudly, proudly creative. Something that felt like the part of me that was bursting to get out. I liked that site. I liked that dream.

However, the more time I spent on Mastodon, the more I interacted with folks there, the more I became frustrated and unsettled by Capitalist-techno-bullshit... The more I realized there was a part of me my site wasn't serving. An aspect of my voice that had been dormant for too long. 

I wanted to write again.

So with very little fanfare or expectation, I launched A Very Good Blog as a way for me to just get some of the shit that was on my mind down onto the page. A place where I could write about what I want, with a challenge of not judging myself for not posting enough, or not writing enough about the things I think other people wanted to read. 

What surprised me was that the more I focused my writing to be an authentic representation of my sensibilities and my humor, the more people flocked to it. Soon, I became known, mostly, for my writing again. All the pomp of my other pages was largely overlooked for a blog that was simply black text on a white background (and some lovely typefaces, naturally).

I don't want to give up on my other art, and I have no intention to do so. But I do recognize that my writing is an extremely large, extremely important extension of who I am. My words are big and bold enough that they can stand on their own. I don't need chunky display fonts and walls of color and flashy animations and *pizazz*. I've got enough of that in my head that comes through when I put those words on the page.

Moving to a static site that I hand code myself instilled some inherent limitations that I needed to figure out how to work around. It helped me build a foundation for the future. I can keep building upon this as I learn and get inspired to try new things. In the meantime, I have a much simpler website that feels a little bit rougher, a writing and publishing process that is a bit more manual, a level of ownership I haven't felt in a long, long time.

I've always been interested—from a distance—in code, though for whatever reason I got distracted by other things for so long that I convinced myself I had missed the boat. But if this experience taught me anything, it's that there's still a lot of joy and fun left in learning something new. That there are few things more satisfying than building something for yourself and see it all come to fruition. There's such a strange little dopamine hit in booting up VS Code, typing out some rules, and hitting the save button to watch them populate immediately on the local environment. I find myself doing it every day now. Nate was right, tinkering is fun.

So now I have this space I built for me. A place I can feel proud of because I made it. A place that represents me and the way I want to present myself to the world.

A place for my voice to shine through. A real home.

***

<br>

### <a id="acknowledgements"></a>Acknowledgements

I say I built this site from scratch, but that's not true. Nothing is created in a vacuum. Everything we do, we're all building upon the knowledge, guidance, and experience of others. That connection inspires and drives us. I know for a fact that this site wouldn't exist if it weren't for some key people, so I want to acknowledge them:

- The authors of the guides mentioned throughout, written by people who took the time to document their processes so I could learn from them. [flaMEd](https://social.lol/@flamed), [Marc Littlemore](https://indieweb.social/@marclittlemore), [Jordan Kohl](https://simpixelated.com/).
- [Stephanie Eckles](https://social.lol/@5t3ph@front-end.social) of [11ty Rocks!](https://11ty.rocks/) There were some crucial guides there that helped me better understand the inner-workings of my Eleventy site, including helping me understand how to deploy to Netlify.
- [Nate](https://social.lol/@nfd), who I've mentioned a few times now. But I want to reiterate that I don't know if I would've just jumped in head first had it not been for [their post](https://daught.me/blog/2024/indie-web/).
- Folks like [Cory](https://social.lol/@cory), [Sara](https://social.lol/@sarajw@front-end.social), and [Luke](https://www.lkhrs.com/), who extended their hand to help, even if I was too stubborn to ask.
- [Kev Quirk](https://social.lol/@kev@fosstodon.org), whose [Simple CSS](https://simplecss.org/) was the framework that helped streamline the styling process.
- [Katherine](https://social.lol/@kayserifserif@sunny.garden), whose [magnificent site](https://kayserifserif.place/) not only introduced me to my new typeface obsession, [TT2020](https://copypaste.wtf/TT2020/docs/)—the one I use here—but also reminded me that less is more. When I started the journey of building and styling the site, I looked to hers often for inspiration. Her work is subtle, mesmerizing, and authentic.
- [Robb](https://social.lol/@robb), who I could not be more grateful for. He is relentlessly kind and persistent in his willingness to help. He was a sounding board, a mentor, a teacher, a troubleshooter. Oh my fucking god, he also exported EVERY SINGLE ONE OF MY BLOG POSTS from my Squarespace site into Markdown, and packaged them up into a folder so I could just drag those little bastards into my blog folder. He made my life stupidly easy, and was a generous, validating presence from day one. A truly great friend I don't feel worthy of. Hi, Robb. Thank you.

[^1]: Or b-dev, as it's called in the bizzy.
[^2]: Someone with even a modicum of clout should really coin a catchy term that everyone else can repeat ad infinitum until it loses all meaning. I'm not clever enough.
[^3]: What we in the bizzy might call "foreshadowing."
[^4]: I don't remember why, I just remember I had to, like, fix some issue with installing Node.js and some ancient Stack Overflow thread was guiding me through that process.
[^5]: If that sounds like an intense and dramatic reaction, hi, welcome to my blog!
[^6]: This might not sound like a huge deal, but this was something I always struggled with on Squarespace. They boast about how their sites are responsive by default, but in practice, the process for figuring out how to make sites look good on these three different sizes was slow, unintuitive, and extremely unreliable.
[^7]: I really probably do need to go back and do those Javascript tutorials.
