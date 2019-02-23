---
tags: "legacy"
template: article 
comments: true 
author: Alex Foxleigh
title: "Using graveyard files for better code management"
date: "2015-03-29"
---

Front end developers make a lot of changes during builds, especially once the codebase starts to get integrated with backend code. Rather than delete or comment out old code, why not put it in a graveyard file?

<!-- end -->

I started using graveyard files about a year and half ago. I was working on a project with multiple front-end developers and I noticed that during the course of testing, code would be deleted or commented out. In an ideal world there would be a system of code management in place to prevent this from being a problem. (Minification, version control etc.) but we all know that these methods are easily overlooked/ignored when working in teams.

To counter this issue, I created two files: graveyard.scss and graveyard.js. The premise is very simple:

Lets say that your client originally asked for a 50 question FAQ page, obviously a page like that will be a pain for the end-user to navigate, so you add an accordion menu. The client sees the accordion and dislikes it despite you trying to convince them that it’s better for the end users and so the client instructs you to remove it.

Anyone who has been a developer for more than 10 minutes knows that the client is very likely to change his or her mind soon after user testing begins, therefore deleting the code is a silly idea. Commenting the code out results in a messy codebase (and bloated production code if you don’t minify – which I really hope you do). So you look to version control which is great but lets face it; a bit of a pain in the backside when it comes to fishing out one or two small items in commit log; it’s often easier to just re-write it.

Enter the graveyard file. The removed code (the classes and methods for the accordion in this case) was not deleted or commented out, it is instead cut from the source file (including it’s containing classes, methods etc.) and pasted into a graveyard file. You then add the following snippet of code above it:

```
/*******************************/ 
* Date added: 11th March 2015  *
* Reason for removal:          *
* Client has decided that they *
* no longer wish to have an    *
* accordion on the FAQ page    *
/*******************************/ 
```

The snippet above is of course, optional. It’s purpose is to help you understand the likelihood of that code being useful in the future and more importantly, to help other developers understand why the code is there and when it was removed from the production site.

The beauty of the graveyard file is that it is never seen by the end-user as it’s not referenced anywhere, it’s only a few KB on a server so it can serve as an archive of ‘spare’ parts which can be called upon throughout the length of the project and prevent duplication of work.
