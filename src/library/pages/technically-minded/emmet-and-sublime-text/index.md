---
legacy: true 
template: article 
comments: true 
author: Alex Foxleigh
title: "Rapid HTML creation with Emmet and Sublime Text"
date: "2015-04-13"
---

During the life of a developer, the tools of the job will change many times over. This is especially true of the text editor; which is often like a comfortable home for the seasoned developer. Some prefer pure text editors, some prefer an IDE, some (like myself) prefer a more hybrid approach, a text editor that is highly extensible and will provide most of the benefits of an IDE without the overhead. For me, Sublime Text 3 is the editor of choice, a decision which was confirmed when I discovered Zen coding.

## What is Zen coding?

Zen Coding (now known as Emmet - which is a terrible name in my opinion) is a suite of plugins for various text editors. It allows you to rapidly develop HTML by writing it with CSS-like syntax and then simply pressing the TAB key to 'compile' it.

A very basic example would be as follows:

### Normal HTML syntax

<h1>Hello World&</h1>
<p class="text">This is a paragraph with a class of "text"</p>

### Emmet syntax

h1{Hello World}+p.text{This is a paragraph with a class of "text"}

This example is very basic and doesn't really show the power of Emmet, so let's get started with a tutorial. As I am a huge fan of Sublime Text 3, I will be using this, however there as a long list of editors which support the Emmet plugin and apart from the installation procedure, the syntax is the same for all.

## Installation (Sublime Text)

If you already have the package manager  then installation is as simple as searching for 'Emmet' in the package list.

If you don't already have the package manager installed then I highly recommend setting it up as it is one of the easiest ways to customise your Sublime Text experience. You can find out how to get it here:

[https://packagecontrol.io/installation](https://packagecontrol.io/installation)

## Understanding the syntax

The syntax is very simple to learn and closely follows CSS syntax.

**Note:** When you see \[TAB\] that literally means 'press the TAB key'.

### Element creation

_To create a HTML tag just write it out as you would in CSS._

**Emmet code:**

h1\[TAB\]

**HTML output:**

<h1></h1>

_To add a class to a tag place a period before it._

**Emmet code:**

h1.header\[TAB\]

**HTML output:**

<h1 class="header"></h1>

_To add an ID use a hash._

**Emmet code:**

h1#mainHeader\[TAB\]

**HTML output:**

<h1 id="mainHeader"></h1>

_To give something content use curly braces._

**Emmet code:**

h1{This is a header}\[TAB\]

**HTML output:**

<h1>This is a header</h1>

### Traversing the hierarchy

Stepping through the different levels of the DOM is easy for Emmet, in fact it's quite easy to build a full-page skeleton using only one line of Emmet code.

_Elements can be nested using the child selector (>), chained using the plus symbol (+) and a child element can be 'stepped out of'' using a chevron (^) as follows:_

**Emmet code:**

div.first>h1{This is a header inside the first div}+p{This is a paragraph next to the first header}^div.second>h2{This is the header inside the second div}\[TAB\]

**HTML output:**

     

# This is a header inside the first div

     This is a paragraph next to the first header

     

## This is the header inside the second div

### Grouping

The benefits of grouping become evident later on in the ‘iteration’ section but should be mentioned here.

_Elements are grouped together by wrapping them in parentheses._

**Emmet code:**

ul>(li>a{link})\[TAB\]

**HTML output:**

<ul>
    <li><a href="">link</a></li>
</ul>

### Iteration

One of the most powerful features of Emmet is the ability to create repeating elements. You have seen above how it's possible to create chains of elements but what if you want to create a list of elements which all follow the same structure?

_Creating repeating elements is as simple as specifying the number of elements you want after an asterisk (\*) symbol._

**Emmet code:**

div\*2\[TAB\] 

**HTML output:**

_It’s just as easy to create lists using this asterisk format:_

**Emmet code:**

ul>li\*5\[TAB\]

**HTML output:**

<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

_One additional feature of iteration is that you can include placeholder numbers, these can be used anywhere you like and are specified with the $ symbol._

**Emmet code:**

ul>li{Item $}\*3\[TAB\]

**HTML output:**

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

### Working with existing content

Emmet doesn't only help with creating HTML from scratch, in fact it's at its most useful when converting an existing text document to HTML using the 'Wrap with abbreviation' feature. Its usage will be a little different, depending on the editor you use, as mentioned before - this article assumes you are using Sublime Text.

Let's imagine you have been given some content that contained a written list like the following:

\- Milk
- Eggs
- Bread

To convert this into a list would be a minor pain but if that list was much longer it could become a real time drain.

_With Emmet, converting content is easy, you simply select the text, press ctrl-w (in Sublime in MacOS, this is the wrap with abbreviation hotkey although this could change depending on your OS) and type the following in the dialogue box:_

**Emmet code:**

ul>li\*

The asterisk tells Emmet to loop through each line and make each item into a list, so when you leave the dialogue box, you get this:

**HTML output:**

<ul>
    <li>- Milk</li>
    <li>- Eggs</li>
    <li>- Bread</li>
</ul>

Oh wait, it still has the minus symbols, which will look ugly on our site, no problem, let's undo that and try something else.

_Press ctrl-w and type this instead:_

**Emmet code:**

ul>li\*|t

The "|t" command, when combined with "\*" tells Emmet to loop through each line and also to trim the original list delimiters from the text, giving us a nice, neat list:

**HTML output:**

<ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Bread</li>
</ul>

Much better.

Of all the tools Emmet provides, Wrap with abbreviation is the one that saves me the most time and is also the one with the most in-depth features. I once converted a 40 page Terms and Conditions document from Word into HTML in around 20 minutes!

For the purposes of  this article, I will only show one more feature, however I highly recommend visiting the [emmet.io](http://emmet.io) website and looking into all the other features of Wrap with Abbreviation.

Let's go back to our list above and this time we will also add a bit more mark-up. Now we want our UL tag to have a class and an aria role plus, each list item needs to have a 'data-item' attribute.

Again in a long list, this would be quite a time-consuming task but as you are probably gathering by now, this is easy with Emmet.

_Simply press ctrl-w and type the following:_

**Emmet code:**

ul.shopping\[role="main"\]>li\[data-item="$"\]{$#}\*|t

**HTML output:**

<ul class="shopping" role="main">
    <li data-item="1">Milk</li>
    <li data-item="2">Eggs</li>
    <li data-item="3">Bread</li>
</ul>

So what's going on here?

The '\[\]' is how an attribute is specified, as you can see from the 'role' attribute, we can write out the full attribute and value and it will be placed 'as-is' in the tag (note some attributes, like 'href' on an anchor tag, appear automatically and do not need to be specified in Emmet unless you want to populate them).

You've seen the '$' before, this simply displays the current item number in the loop, you've probably noticed the '$#' too, as you might have been able to guess, this takes the content of the selected text and then outputs it wherever it finds the $# string. This can be used as many times as you like, unfortunately however the '|t' string does not work in attributes.

## What's next?

As you can see, Emmet is an incredibly versatile and powerful plugin which can turn a task which would take hours into something that only takes minutes.

This article only showed you a few of the highlights so I highly recommend visiting [emmet.io](http://emmet.io) and taking a look at their documentation as I have only really scratched the surface.

I'll leave you with one last example, I'm not going to tell you what it does as I think you'll be pleasantly surprised when you try it out yourself.

_Create an empty document and make sure the syntax is HTML then simply type:_

**Emmet code:**

!\[TAB\]

Happy coding!
