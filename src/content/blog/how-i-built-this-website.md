---
pubDatetime: 2024-04-25
modDatetime: 2024-05-03
title: How I Built This Website
tags:
  - thought
  - tech stack
  - Astro
description: My process of building this website and some of my thoughts.
---

<!-- ## Table of contents -->

It has long been in my head to have a personal site. I have delayed it for ages. Also, I didn't like the solutions out there. I tried Jekyll, Astro, etc. I did not like any of them in the hope of finding a simpler solution. I am sure a blogging service would work perfectly, but hey, I am a programmer; I should try myself, shouldn't I? Paradoxical, I know :\)

## First Approach

Initially, I planned to write this website in plain HTML and CSS without any framework. When it comes to tech-stack choices, I like to keep things simple while having great control, like owning a Swiss knife. I thought working with HTML directly would give me that power.

For styling, I relied on Pico CSS for a nice default CSS setup and some useful CSS classes. For customization, I used plain CSS. The font was Poppins from Google. Hosting is even simpler thanks to GitHub Pages. I just need to work with git and good to go. To preview the website, I used `python -m http.server`.

I was too naive. I soon realized that after finishing my first post and having the git repo ready to publish on GitHub. You see, even for a simple profile website that is mostly for blogging, plain HTML still not going to cut it for the following use cases:

- Share HTML code
  - Share Layout
  - List item
- Rename CSS class names

These are all simple and common use cases. This is especially annoying when modifying the website's layout, I need to change multiple files and mistakes are highly likely. Not to mention some advanced features like RSS file generating, interactive components, etc.

Perhaps, we should think of HTML as an IR(intermediate representation), it is just too close to us which gives an illusion of being usable directly. [HTMX](https://htmx.org/) gives me the same kind of feeling as well. It is simple and refreshing to mark interaction in HTML tags but soon it becomes unmanageable with exploded API endpoints and I had this constant fear of making mistakes.

## Final Approach

[Astro](https://astro.build/) with [AstroPaper](https://github.com/satnaing/astro-paper) is my current choice and, hopefully, the final one. My skepticism towards using Astro (or any JavaScript framework) is their constantly evolving APIs and also fear of introducing a new level of complexity for this simple website.
Surprisingly, I do not need to know a lot of Astro knowledge for my simple site and I am using an existing template that already has a bunch of nice defaults. It is easier to work with since I just need to work with markdown files most of the time.

Moreover, the DX just blows the roof. It covers all the basic usage issues, able to catch errors by language servers when I make a change and has other advanced features that are also too good to miss:

- [View Transition](https://docs.astro.build/en/guides/view-transitions/) gives the site super crisp page transition animation (only [available](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#api.viewtransition) on Chrome though).
- Automatic RSS file generation.
- Ability to integrate with other JS ecosystems.

Using Astro is pure gain and no tradeoff for me based on current experiences. I highly recommend it
