---
tags: "legacy"
template: article 
comments: true 
author: Alex Foxleigh
title: "The Fully Automated Media Centre (Windows Only)"
date: "2010-05-18"
---

A few weeks ago I wrote a post about [how to use EventGhost to begin to automate your PC](http://www.digitalfusionmag.com/modules/blog/article.php?cat=4&article=43). Now we are going to take things a step forward and use EventGhost alongside a few other free programs to set up an amazing and fully automated Home Theatre PC.

If you have not read my previous EventGhost article I advise you go and read it now as I am going to skip past the basics here.

## Step One: Getting all the applications

To truly get this working properly you are going to need a few programs, they are all free and fairly straightforward to use (but I’m going to show you how anyway), so get to work on the list below and let me know when you have it all downloaded and installed.

- [XBMC](http://www.xbmc.org/download) – The excellent free to use media centre application
- [Torrent Episode Downloader](http://www.ted.nu/download) – This does a similar thing to uTorrent’s RSS downloader but I personally feel it does a better job and is easier to use.
- [uTorrent](http://www.utorrent.com/) – You can actually use any torrent application provided it has the ability to move files to a separate location when finished.
- [EventGhost](http://www.eventghost.org/downloads/) – Of course you already have this as you have hopefully gone through the previous tutorial.
- [The Renamer](http://www.therenamer.com/) – A superb and easily automated tool for finding and renaming your TV shows, it can also be made to work with movies but there is a better tool for that.
- [Ember Media Manager](http://www.embermm.com/tab/show/embermm) – Automatically finds and download information for your movies.

## Step Two:  Getting ready for XBMC

The biggest difficulty a lot of people seem to face when they first set XBMC up is getting the library mode to work; this is because XBMC needs to have a specific file structure in order to scrape (download information about) your media files.

Note: I’m going to work on the assumption that you have a hard drive set up just for your media, if you do not then create a folder on one of your drives and do all this in the root of that folder.

### Firstly create the following folders:

TV Shows, Music, Photos, Movies, Unsorted Media

There are some things that XBMC does not scrape all that well or simply things you would like to be able to access in XBMC but don’t really want it to be categorised as a TV show or movie, in this instance you should also create a folder for that (E.g., Documentaries, Children’s TV shows, etc...)

### Prepare your movies

The Movies folder should not directly contain any files; each movie should be in a folder which has the movies name and year as its title. The movie file itself should be the movie’s title, if it is a HD movie then you can also add that information to the file name:

E.g. /Movies/The Shawshank Redemption \[1994\]/The.Shawshank.Redemption.720p.BluRay.mkv

### **Setting up your TV Shows folder**

The TV Shows folder follows a similar format, each show should have a folder with its name and year as the title and each series of a show should go inside a ‘series x’ folder.  The name of each file should be the name of the show followed by the series number and episode number, if you wish you can also add the title of the episode:

E.g.  /TV Shows/Life on Mars \[2008\]/Series 1/Life on Mars – s01e01 – The Crash.avi

Make sure you format the series and episode numbers using the above example, this method always works for the main scrapers. The year is not essential for movies or TV shows, it just makes it simpler for the scraper to make sure its downloading the information for the correct title.

### **Setting up your music folder**

The music folder should contain a folder for the artist and then a folder for each album inside it.:

E.g. /Music/Fleetwood Mac/Rumours/

The year should not be needed for albums as it’s rare that an artist will use the same album name more than once.

### **Setting up the other folders**

Photos are simple to categorise as they do not get scraped therefore you can put any pictures you like in there without worrying about file structure.

The unsorted media folder should be empty.

### **Copying your media**

At this stage you are ready to copy your media to the folders. If you have thumbnail or fanart files already you don’t need to copy them over (unless you know the scraper will have trouble finding them) as this will be taken care of later.

## Step Three: Using Ember Media Manager to pre-scrape your movies

 **[![Ember media manager, main interface](http://foxleigh.me/wp-content/uploads/2010/05/emm-sshot.png "Ember media manager, main interface")](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/emm-sshot.png)** 

XBMC has a great scraping tool; however it is quite slow and if you re-install your media centre for any reason you will have to re-scrape all your files again from scratch. Ember Media Manager is faster and even better, it downloads all the needed files to the movies folder, so if you do need to reinstall no re-scrape is required (plus it downloads trailers – which is just awesome).

To set it up, go to ‘edit > settings’, click ‘Files and Sources’ then ‘add source’ and browse to the root of your movies folder. (This can be done during setup as well so you may not need to do it now). I won’t tell you which boxes need ticking as it is all about personal preference really.

Once that’s done, return to the main menu click ‘update library’ (although I think this happens automatically the first time anyway). Once your list appears select ‘Scrape Media > New Movies > Automatic > All items’ and watch it find everything for you (Note: If you did not add the year to the folder names then you may get odd results on some movies using ‘automatic’, use ‘ask’ instead).

If you use the ‘automatic’ mode then this should be the last time you ever see this screen as we will automate it in a later step.

## Step 4: Using Torrent Episode Downloader (TED) to find and download your TV shows.

[![Add your show to TED](http://foxleigh.me/wp-content/uploads/2010/05/Ted-addshow.png "Add your show to TED")](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/Ted-addshow.png)Before we start this please make sure you have your torrent program set up to send all completed downloads to your ‘unsorted media’ folder. (Note: You can use your existing downloads folder if you wish, just make sure that its only updated when the download has completed)

TED is a simple Java application which automatically finds your favourite TV shows and starts downloading them. It’s fairly simple to set up but here is a little tutorial anyway.

Once the program is installed, click on ‘add show’. You will then be presented with the 'Add show' window. Simply select the show you want to download, choose the episode you want to download from (this doesn’t work that well for older episodes).  Once this is done, select the episode and click ‘Edit show’.

The default settings are ok for the most part, however I find that I get better results if I make a few tweaks. Firstly in ‘Feeds’ click on ‘+’ and add IsoHunt, select ‘yes’ when the dialog box pops up and then click on ‘filters’, change the top number to 300mb and the maximum size to 1200mb (this means you won’t get low quality files and you might get the odd HD one (if you don’t want HD then set the max to about 750mb). Don’t bother with ‘download in HD quality’ as it’s not perfect and usually results in no torrents being found for a lot of shows.

Once you have done that just rinse and repeat until you’ve added all the shows you want.

Note: If you do not want TED to automatically open your torrent application (like if you download on a schedule) then you can change the options in Extra > Preferences.

## Step 5: Use The Renamer to automatically sort and move your TV shows.

[![TheRenamer Main interface](http://foxleigh.me/wp-content/uploads/2010/05/screenshot_splash.jpg "TheRenamer Main interface")](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/screenshot_splash.jpg)Sadly many files on BitTorrent have not been named with media centres in mind and most scrapers are rubbish unless the file names and folders follow their rules. Thankfully a fantastic application called ‘The Renamer’ exists to solve this problem.

This program is very easy to set up and even easier to use, firstly, click on ‘settings’ then change your fetch folder to your ‘unsorted media’ folder and the TV shows archive to your ‘TV Shows’ folder.

**Make sure the following boxes are ticked**

- s1e01
- add “0” for Season (only the first time it appears)
- include sub folders
- Auto move after renaming,
- Showname
- Season
- Episode titles
- To TV Show Folder
- To Season folder

And that’s it!

## Step 6 – Tie it all together with EventGhost

[![The Eventghost main interface](http://foxleigh.me/wp-content/uploads/2010/05/eg-1.jpg "The Eventghost main interface")](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/eg-1.jpg)

Ok so far we’ve managed to get a series of systems together to download and catalogue our TV Shows and organise our movies to be imported into XBMC. Now it’s time to make it automatic using EventGhost.

Firstly we need to install two plugins to EventGhost. ‘Directory Watcher’ and ‘XBMC’, you can find these in the ‘Plugins’ menu ([![Plugin Menu Icon](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/image006.jpg "Plugin Menu")](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/image006.jpg)). To ensure that your movies are scraped automatically as well, install two copies of ‘Directory Watcher’

Set the first Directory Watcher Plugin to look in your ‘unsorted media’ folder and the second to look in your 'Movies' folder. Then create a new macro called ‘move new shows’

Inside this macro set it to automatically launch the renamer (System > Start Application), in the command line box type ‘–fetch’ and set the window options to ‘minimised’ (this never seems to work for me but you may have more luck. Then – still inside the same macro - add another action below it, ‘Update Video Library’ from the XBMC folder.

Now create a new macro called ‘scrape new movies’, set it to open ember media manager and in the command line box enter ‘–newauto  –all’ (remember this is only foolproof if you add years to your movie directories). Then – still inside the same macro - add another action below it, ‘Update Video Library’ from the XBMC folder.

Finally add an event called ‘DirectoryWatcher.Updated’ to the top of the first macro and one called ‘DirectoryWatcher2.Updated’ to the top of the second and save your configuration.

The last step to make sure everything is automated is to create shortcuts to uTorrent and TED in your Windows start-up folder.

## Final Step – Set up XBMC

[![XBMC Main screen](http://foxleigh.me/wp-content/uploads/2010/05/xbmc911-1.png "XBMC Main Screen")](http://www.clockworkcity.co.uk/wp-content/uploads/2010/02/xbmc911-1.png)Note: This step assumes you are using at least version 9.11 of XBMC and are using the default skin

Firstly let’s add our media files. Go to ‘video’s and select Add Source, browse to your ‘Movies’ folder and press enter, the source should automatically be called ‘movies’.

Then click on ‘Set content’, under ‘This directory contains’, select ‘movies’ and set the scraper to the one of your choosing (the default themoviedb.org is pretty good as it is), under scanning options only select ‘use folder names for lookups’ Under ‘settings’ you are presented with a number of options, these are completely up to you, for the most part Ember Media Manager will have taken care of them anyway.

Once this is done, do the same things again for TV shows, obviously this time select ‘TV shows’ instead of ‘Movies’. I recommend thetvdb.org as your scraper. Don’t tick any of the boxes and once again the options in the ‘settings’ panel are up to you (although I find ‘use DVD’ order to be more chronological than the ‘Absolute order’ setting).

Note: If you created directories for video media you do not want to be catalogued, add them in the same way but under 'this directory contains' set it to 'none'.

Adding sources to the music and pictures menus is a similar procedure however you do not need to specify any settings.

Now we need to tweak some settings to make sure everything works ok, so from the home screen go to 'System', in the system menu select ‘Video’ and check all the options under ‘Library’ then do exactly the same for 'Music'. Then go back to the main ‘System’ page and select ‘Skin’ under the ‘home window options’ menu, the top four options should be checked and the rest are optional, just make sure to deselect the ‘hide movies’ and ‘hide tv show’ options.

Once this is done, restart XBMC it and watch all your media pour in. Your TV shows will now automatically download as soon as they are released and they will be automatically catalogued and added to your media centre. All downloaded movies will remain in your 'Unsorted Media' Folder but as soon as you move them to 'Movies' they will be found and catalogued by Ember and XBMC, You can use the ‘recently’ added box on XBMC to see what new media you have to watch.

## CAVEATS

You knew that nothing this amazing was going to come without problems didn’t you. The main issue this method has is that its terrible for seeding torrents. So far the only foolproof method around this I have found is that instead of setting your torrent program to move downloaded torrents to the ‘unsorted media’ folder, its better to copy them there instead, that way you can keep your ratios up without having to wait for the torrent to reach 1:1 before watching your media. Obviously this removes some of the automation and you have copies of files on your hard drive until you delete the seeded copy so its not perfect.

The other issue is that whilst TED is brilliant, its not without its flaws, sometimes it cannot find some episodes for shows, so far the only way around this is to tell TED to skip to the next episode and download it manually, fiddling with the filters can sometimes work but often its a problem with the program and you’ll have to wait for an update to fix it.

If you have any questions, please leave them in the comments.
