---
legacy: true 
template: article 
comments: true 
author: Alex Foxleigh
title: "EventGhost - the little automation program which can change your life"
date: "2010-05-18"
---

Every now and again when scouring the internet for new and interesting information I find a tip or program (usually via the excellent [lifehacker.com](http://www.lifehacker.com/) website) which changes the way I live. EventGhost is such a program.

EventGhost is definitely one of those programs. If you have a bit of intelligence and the (seemingly rare) ability to think laterally, it is possible to utilise EventGhost to revolutionise your home network or if you have a bit of money to spend on such things, your home itself.

The downside to this amazing tool is that it seems to be a relatively unknown program buried deep within a relatively unknown niche interest group (at least for now. It will gain ground soon enough as the technology become cheaper and it becomes simpler to use - which it will). As a result of this, finding information on how to get started can be daunting, even for someone who knows their way around PCs better than they do the real world. As a result of this I have put together a little guide for you. If it proves to be popular I may even start a semi-regular column (can you call it a column in a blog? sod it. It’s my blog, it’s a column)

As this is just an introduction to EventGhost there will be nothing particularly useful here, however I will create another article very soon about how to create a completely automated media centre using EventGhost and a few other free programs.

## Step one: Find and install EventGhost.

This part is the easy part. Simply visit [eventghost.org/downloads](http://www.eventghost.org/downloads/) and download the latest release. Once downloaded follow the install wizard and your off.

## Step two: Delete the examples

The stupidest part of the fresh EventGhost installation is the examples file. Its great to show people who are not terrified of computers what it can look like but the error messages it causes in the log panel will frighten most people off. Therefore as soon as Eventghost opens, go to 'File > New' and we'll start from scratch.

## Step Three: Get to know the interface.

![The Eventghost main interface](http://foxleigh.me/wp-content/uploads/2010/05/eg-1-1.jpg)

Now we have a clean automation file the interface looks a little less daunting. As you can see there are two main panels. The larger panel on the left is your log panel. Everything that EventGhost is able to see will be logged in here. The smaller panel on the right is your event control panel. You can create, edit and delete events here as well as manage plugins.

![](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/image004.jpg)The buttons from left to right are ‘Add Plugin’, ‘Add Folder’, ‘Add Macro’, ‘Add Event’, ‘Add Action’, ‘Delete selection’, ‘Execute action’

## Step four: Making our first macro

Ok let’s get down to the nitty-gritty here, this first tutorial will show you how to make a very simple macro which will automatically launch a program when you press a key combination (in this case alt+shift+1)

The first thing we want to do is to add a couple of plugins. So click on the ‘add plugin’ button (![Add plugin button](http://foxleigh.me/wp-content/uploads/2010/05/image006.jpg "Add plugin button")) and select ‘Keyboard’ from the ‘Remote receiver’ plugins folder.

(note: As you have probably noticed at this point, EventGhost comes pre-installed with a LOT of plugins, in fact for the most part, you are unlikely to need to install new ones, if you do however then it is simply a case of copying the plugins folder into ‘/program files/eventghost/plugins’ and restart the program.)

As soon as you have added the plugin you will notice that suddenly all the keystrokes you make are appearing in the logging panel. Now we are ready to create the action.

Adding an action cannot be done directly, all actions need to be contained inside a macro, so to get ourselves a macro, click the add macro button (![Add macro button](http://foxleigh.me/wp-content/uploads/2010/05/image008.jpg "Add macro button")). Once you have done this you will be presented with this screen:

[![Eventghost 'Add Action' Interface](http://foxleigh.me/wp-content/uploads/2010/05/eg-2.png)](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/eg-2.png)

This is the ‘add action’ window which makes EventGhost so amazing, as our intention is to launch a program (in this case it will be Spotify), select the ‘Start application’ function under ‘System’ then press ‘ok’. Then under ‘executable’ browse to the executable file of the program you wish to launch. You may leave the other options blank as in this case they are not relevant. Once again, click ‘ok’.

You now have a macro which will open Spotify for you. Obviously at this point the only way to make it work is to manually execute it. So let’s add an event. There are two ways to do this, the ‘easy’ way and the ‘hard’ way. So let’s ignore the hard way and skip straight to the easy way.

## Step Five: Generating events to attach to a macro.

By far the simplest way to generate an event is to do it yourself. As we will want alt-shift-1 to launch Spotify, simply press those keys now.

![Eventghost Log](http://foxleigh.me/wp-content/uploads/2010/05/image012.jpg "Eventghost Log")

As you can see when you look into the log panel your keyboard combination is there as an event, so now simply drag the event into your macro above the action, like so:

![Drag and drop example](http://foxleigh.me/wp-content/uploads/2010/05/image014.jpg "Drag and drop example")

Believe it or not, it is that simple, from now on (provided Eventghost is open of course) whenever you press alt-shift-1, you will launch Spotify.
