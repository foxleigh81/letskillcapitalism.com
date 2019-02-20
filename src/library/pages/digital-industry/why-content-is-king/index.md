---
tags: "legacy"
template: article 
comments: true 
author: Alex Foxleigh
title: "Why content is king"
date: "2014-09-12"
excerpt: If you have spent any amount of time in the media industry, you’ve undoubtedly heard the term coined by Bill Gates back in 1996 "Content is King”
---

If you have spent any amount of time in the media industry, you’ve undoubtedly heard the term coined by Bill Gates back in 1996: “Content is King”, this has been a mantra of professional designers for as long as I can remember. However, even now; it is one of the most flaunted rules in our industry.

<!-- end -->

Content isn’t just King, content is the father of the website and design is the mother. In order to produce their offspring they need some time to get together and romance a little. In fact for this odd analogy to even work, the content needs to appear before the website can even begin to take shape, otherwise we are entering messianic territory.

I’m a front-end developer and web designer. I’ve been in this industry for a very long time (since 1998 to be precise) and I’ve seen the problems caused by failing to implement a content strategy at the beginning of the project.

I’ve heard the counter-argument to this a hundred times or more “But the content is dynamic, how can we know what it is going to be in advance?”

I’ll say to you the same thing I say to them; that is not a counter argument. It’s the proof that my point is valid.

## **There are two ways to correctly design a website:**

- Have all of the content in place and analyse that content to work out the best way to fit it into the site.
- Have examples of the content in place and use it to produce a content strategy.

Option 1 is often a pipe dream, these days practically all websites have dynamic content and that is a great thing. However, there is never an excuse to disregard option 2.

An example of each and every type of content is essential to producing a robust content plan, without which you will end up with this sort of design:

[![image2](http://foxleigh.me/wp-content/uploads/2014/09/image2.png)](http://staging.digitalfusionmag.com/wp-content/uploads/2015/03/image2.png)

The astute amongst you may see where problems could arise here, the designer knew that this section was editable in a CMS and yet no consideration was made to what sort of content would be inserted. Here is what it looks like populated with a reasonably typical set of content:

[![image3](http://foxleigh.me/wp-content/uploads/2014/09/image3.png)](http://staging.digitalfusionmag.com/wp-content/uploads/2015/03/image3.png)

Not quite as pretty now, is it.

This sort of thing is especially obvious when designs try to set up a grid-like structure on a list page:

[![image4](http://foxleigh.me/wp-content/uploads/2014/09/image4.png)](http://staging.digitalfusionmag.com/wp-content/uploads/2015/03/image4.png)

Looks nice right? The designer has a placeholder for each element in the grid. What could possibly go wrong?

[![image5](http://foxleigh.me/wp-content/uploads/2014/09/image5.png)](http://staging.digitalfusionmag.com/wp-content/uploads/2015/03/image5.png)

Oops, that didn’t quite go as planned. A good developer could code this so the grid wouldn’t be misaligned, however the page would still look terrible, as there would be a lot of inconsistent spacing between the rows.

You may think that this example is ridiculous but I’ve come across this exact issue countless times.

## Creating the content strategy

I’ve never come across a website where a template list could not be derived. Even if the number of templates is one.

It is of paramount importance that you have at least one example of real-world content for each template you build, as this is the foundation of a content-strategy.

Before you even begin to build the site you need to consider the following:

- **How can the content be split up?**
    - If you are given an article for example, it will probably be split into the following items: Headers and sub headers, author name, publishing date, article introduction, article body text.
    - If you are given a product list, it will probably be split into: Product name, Price, Image, Description
- **Where on the template would be the best place to display each of the above items?**
    - Obviously on the article the header should go at the top of the page, but what about the publishing date? Does that go at the top? The bottom? In a sidebar?
    - On the product example, how should the items be laid out? Should they be in a list or a grid? You could also give the user the option to choose between both.
- **How will the page respond if one of the items is longer or shorter than the example?**
    - What if the header is long enough to go over 2 or 3 lines?
    - What happens if the body text is empty because the article is short enough to be contained in the summary?
    - What if the Author has a really long name?
    - What if the product doesn’t have an image?
    - What if the product goes on special offer? Does the original price appear too or just the offer price? How is a special offer highlighted?
    - What happens if the product description is really long?
    - What if the product name needs to contain a copyright or trademark symbol?
- **If the content were CMS able, what would be the limits of user input and formatting?**
    - Is the user going to be allowed to change font sizes? If so then by how much? Can the user add emphasis formatting (bold, italic, underline, etc.) if so then what are the limits on that?
    - Do you set a word/character limit on the editable areas or accommodate for variation in the design?
    - How free is the editable area going to be? Can the user post HTML into it? If so what are the limits on that? Should the editor be plain text only?
    - Assuming the editable area isn’t limited to plain text only. How should less common elements like lists and tables be handled?
    - Can the user add their own images? If so are there going to be pre-defined areas and sizes for images or can the user upload any image to anywhere in the editable zone?
    - What if the editor wants to add a link in the middle of a list item or paragraph?

> **Protip**: If you consider everything shown on [http://html-ipsum.com/](http://html-ipsum.com/) you should have most of it nailed down

This is the sort of thing which needs to be considered right at the start, before designs are even thought about, [prototyping](http://blog.teamtreehouse.com/responsive-web-design-in-the-browser-part-1-kill-photoshop) can help a lot here as they are a lot more flexible than Photoshop templates. However they don’t undo the need for content analysis.

A good website, works well and looks nice. A GREAT website has taken all possibilities into account, the entire site has been designed and built with everything considered in depth, right from the start; with a solid content strategy at it’s heart.
