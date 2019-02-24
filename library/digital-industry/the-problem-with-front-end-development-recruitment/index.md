---
tags: "legacy"
template: article 
comments: true 
author: Alex Foxleigh
title: "The problem with front-end development recruitment"
date: "2016-08-24"
excerpt: I've been building websites for a very long time. When I first started back in the mid-late 90's there wasn't much of a distinction between front-end developers and back-end developers, we all had to know everything, you couldn't specialise as there wasn't really much of a need for that. "Build me a website" was about as much spec as you could expect.
---

I've been building websites for a [_very_](http://www.alexward.me.uk/skills) long time. When I first started back in the mid-late 90's there wasn't much of a distinction between front-end developers and back-end developers, we all had to know everything, you couldn't specialise as there wasn't really much of a need for that. "Build me a website" was about as much spec as you could expect.

Fast-forward a decade or so and the landscape became very different indeed, now specialism was where it was at, if you wanted to develop for the web (and didn't want to be full-stack) then your choices were clear, it was either 'front-end' or 'back-end'.

The differences couldn't have been larger, front-end developers were often creative types (I referred to myself as a web designer until around 2008), for us, the joy of building a website came from turning code into something visual that we could see come to life. Learning HTML and CSS was like learning to wield a paintbrush. As JavaScript matured, we also started to use that (mainly through the jQuery framework) as it helped us to manipulate the DOM (Document Object Model - a fancy term for the elements of a page) and create some really cool animations.

Back-end developers dealt with data, their joy came from manipulating numbers and strings, finding terser ways to create complex functions and do some truly amazing things with vast and complex data-structures.

**Then came NodeJS and everything went wrong.**

Don't misunderstand me, this post is not a rant about Node, Angular, React or the countless other JavaScript frameworks out there, I work with Node and React quite a bit and I actually think they are amazing. The only problem I have with these frameworks is that although they are _technically_ front-end development, they are spiritually back-end development and that's not what I signed on for.

## **The job specification conundrum**

Most of the problem rests with nomenclature, in the recruitment market front-end developer, web developer, front-end engineer, UI developer, UX developer etc... are all interchangeable terms. This confusion has spread so far that many developers don't really know what to call themselves.

The problem is compounded by non-technical people writing job specs. I suspect a lot of the time, job specs are filled with buzz wordy skills that people think they need, so at the moment nearly every job is calling out for React or Angular whereas, if you are technical enough to know these languages; you'll realise that it's highly unlikely that these projects would even benefit from using those technologies.

The amount of times I've seen a spec which lists several competing tools as requirements is too damn high, sure it's possible that a project uses gulp, grunt _and_ webpack but it's unlikely. It's even more unlikely that a project will use React, Angular and Ember all together and yet they are all listed as essential skills.

This of course is not a new problem, I can't even count the times I've seen C# listed as an essential skill for a UI Developer, the issue probably began with the hiring manager asking a techie what sort of skills they need and they will have replied "someone who knows a JS framework, like React, Angular or Ember" and the hiring manager just writing "must know JS, React, Angular, Ember" in their notes. All subsequent technical projects will just copy/paste the same spec and edit the wording a bit and thus the problem persists.

## **Why this matters today**

As a contractor, I can tell you now that 90% of interviews I go to are utter rubbish, very few people know how to really test if a developer knows his stuff and quite often, the technical lead on a project is a back-end developer, so when they are put in charge of interviewing someone to fill the front-end role, they use their own frame of reference to test them. HTML and CSS is difficult to unit test so often the tech tests will be JavaScript based, even if JS isn't really much of a requirement.

The problem with this is that back-end developers often have a massively different mindset to front-end developers. [Take a look a this list of portfolio sites](https://github.com/dargaCode/PortfolioExamples) and it's not hard to see which ones are back-end and which ones are front-end, you don't even need to look at their skills list, the distinction is obvious, front-end developers have great UI's with content that cuts to the chase whereas back-end developers have a lot of text and a lot of lists. Why? **Because back-end developers care about data and front-end developers care about interfaces.**

So, if you place too much focus on the JavaScript side when hiring your developers, you'll end up with a team of people who are amazing at structuring and manipulating data but you'll pay a penalty with the UI.

Want an example? A backend developer would look at this code and possibly see no issue, a front-end developer would shudder in horror:

 
```html
<div id="navigation"> 
    <p>
    <a href="/link1" style="color: red"><span><b>Link 1</b></span></a> | 
    <a href="/link2"><span>Link 2</span></a> | 
    <a href="/link3"><span>Link 3</span></a> | 
    <a href="/link4"><span>Link 4</span></a></p> 
</div>
```
 

That actually hurt to write.

That's just HTML as well, everything gets a lot more complex when you throw things like CSS, accessibility, browser compatibility, progressive enhancement, responsive design, preprocessors and usability into the mix (to name but a few!). UI Development is complex enough without having to also keep on top of the constantly changing world of JavaScript frameworks.

**So what's the answer?**

This one is actually quite simple. Front-end and back-end don't really make sense as terms anymore, it was find when client-side code (the front-end) and server-side code (the back-end) were hugely different but now the waters have mixed a little it makes sense to chance the nomenclature.

So I propose we call them what they are: **UI Developer, Front-end engineer** and **Back-end Engineer.**

**UI Developers** concern themselves entirely with the User Interface, they specialise in HTML and CSS, they know tons about usability, accessibility and device/browser compatibility. The only JavaScript they'd be expected to know will be stuff that concerns manipulating UI elements (either in the DOM or the Shadow-DOM), form validation and of course keeping up with tools like package managers, task runners and whatever preprocessors are flavour of the month.

**Front-end engineers** concern themselves with client-side scripting, this is stuff like how to manipulate APIs, how to set up client-side routing, how to set up isomorphic rendering etc... They will be expected to keep up with the latest frameworks and will have an intimate knowledge of Vanilla JavaScript.

**Back-end Engineers** are the traditional back-end developers, they concern themselves with all the complex functions and systems that go hand-in hand with the manipulation of large amounts of data and the management of those systems.

Obviously there will be people with skill overlap (personally I'd consider myself a UI Developer with a bit of Front-end engineer thrown in for good measure) but most people specialise somewhere and that is what recruiters should focus on.

Nobody wants a world where everyone is a full-stack developer, it may seem good for the bottom line to hire one developer instead of two or three but that path has terrible websites at the end of it and a bad website = unhappy customers = lost money. A formula that I'm sure most businesses will agree, isn't a recipe for success.
