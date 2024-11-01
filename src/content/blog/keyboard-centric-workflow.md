---
pubDatetime: 2024-11-02T00:00:00.000+00:00
modDatetime:
title: "Keyboard-Centric Workflow and Beyond: My Journey"
featured: true
draft: false
description: My journey towards being proficient with keyboard.
tags:
  - keyboard
---

## Table of contents

## A Tease of My Current Workflow

![me typing sooooooo fast](../../../public/assets/fast-hacking-speed-meme.webp)

![me using vim soooooo fast](../../../public/assets/fast-viming-speed-meme.webp)

## My Story

### A Newbie's Fight Against the Keyboard

As a gamer, WASD, Shift, and the Spacebar were the only keys I felt comfortable with. I
still remember constantly having to check the key positions when typing essays. Watching
my classmates touch-type effortlessly was a pleasure to see.

That's when I decided to practice touch typing.

Here are two websites I used to practice:

[keybr.com](https://www.keybr.com/): Master one key at a time.

[TypeRacer](https://play.typeracer.com/): Speed everything up with competitive typing.

### A Slow Start to Learning Hotkeys

In my early university years, while coding, I found myself constantly reaching for the mouse, selecting a section or clicking on a character, then moving my hand back to the keyboard to continue typing. The constant repetition of this process quickly became frustrating. I remember thinking, _What if I could somehow integrate the mouse and keyboard, or even type using the mouse? That would be awesome._

Then I discovered Vim keybindings—the concept of editing without ever needing to touch the mouse. This opened up a whole new world for me. I realized I could do a lot of things with just my keyboard.

Around the same time, I began incorporating new hotkeys into my workflow, one at a time. I also learned shortcuts that greatly improved my efficiency, like Ctrl+T to open a new browser tab, the Windows key for the search bar, Windows+Ctrl+Arrow keys to navigate workspaces, and Alt+Tab to switch between windows.

All of this guided me towards a deeper hole.

### The Rabbit Hole of Customizing Linux

Around the same time, I began hearing about Linux and its reputation.
"Every programmer should know Linux."
"It’s the ultimate operating system for developers," and so on.
One thing stood out the most—you can customize **everything**.

So, I began my Linux journey (Arch, by the way). [DistroTube](https://www.youtube.com/distrotube) and its [YouTube tutorials](https://www.youtube.com/watch?v=PQgyW10xD8s), where I discovered XMonad—a window manager that lets you define all desktop actions yourself (open/move/delete/resize windows, switch workspaces, etc.). [^1]

[^1]: [My outdated XMonad config](https://github.com/Firerer/dotfile/blob/main/.config/xmonad/xmonad.hs)

I also started using [doomemacs](https://github.com/doomemacs/doomemacs),
a config system based on Emacs text editor that encourages you to define all
text-editing actions yourself (move/delete words/sentences/functions, open/move/delete/resize tabs, etc.). To this day, I still believe Doom Emacs has the most sensible hotkey design of any software.

Due to its downsides[^2], I eventually switched to Neovim — a text editor that still
allows extensive customization but with easier config language and better performance.

I tried several pre-configured systems like NVChad, LunarVim, and AstroVim, but none of them quite suited my preferences, so I ended up writing my own configuration from ground up.

[^2]: Installed too much package, startup can take up to seconds. Have to learn emacs lisp, which is a bit too foreign to other languages.

There were other elements of this rabbit hole: finding a TUI file explorer, using terminal multiplexers, configuring XMonad, scripting my Rofi search, and hopping between different window managers and desktop environments.

All with the same goal in mind, do everything with keyboard if I can.
I spend so much time on it. At some point, I realized it was all becoming counterproductive. I focused too much on sharpen the sword instead of actually
using it.

### The Sudden Enlightenment in an Unexpected Turn

In my last position, I had to use Windows 11. Surprisingly, I found myself quite comfortable with it.

Windows has some obvious limitations in its window management system. For example, I can’t move windows between workspaces using hotkeys; I have to use the mouse instead. However, there are workarounds, and I learned to adapt, just simply don’t need to move windows around as often.

What surprised me most was how easily I picked up new hotkeys. It felt like picking low-hanging fruit.

Then it dawned on me: to achieve a fully keyboard-only environment, a lot of time and energy is spent on configuring and maintaining these setups. Perhaps picking up hotkeys as needed, in the course of working, is a more efficient and productive approach.

## My Current Mindset

My primary goal in mastering the keyboard is to become a better programmer by increasing efficiency. Hotkeys enhance the speed of interacting with the computer, leading to significant productivity gains.

However, it’s important not to “sharpen the sword too much” without actually using it. The key is balance.

- Start slowly: pick one or two frequently used shortcuts and gradually incorporate them into your workflow.
- Once I memorize a new shortcut, I use it consistently until it becomes muscle memory.
- A handy cheat sheet for quick reference can speed up this process.

My journey of constantly switching between systems, tools, and text editors has taught me a valuable and transferable skill: the ability to quickly learn and integrate new things into my workflow. This exposure to different languages, conventions, configuration systems, and runtimes has made me adaptable—an essential skill for software developers who often need to learn on the fly and integrate new knowledge into existing systems.

The same principle applies to mastering keyboard shortcuts. Having an optimal setup is great, but flexibility is essential. As the saying goes, “perfect is the enemy of good.” Knowing the optimal solution broadens my options, but choosing fewer tools and staying flexible is more sustainable in the long run. Therefore, I look for systems and software with sensible defaults and efficiency; this has always been the sweet spot for me.

At this point, I’m fine with any setup. If I have to use macOS, I’m okay with that. If I have to use Eclipse, I’ll think, “eww,” but still, I’m okay with it.

## Recommendations

I haven't made the full transition yet, but I believe my future default setup will be `PopOS + LazyVim + Zellij + VSCode + Brave`.

Here’s a list of tips and tricks I’ve found useful for mastering keyboard navigation and efficiently navigating the computer with keyboard shortcuts.

- Looking for Search Bar Shortcuts First

  - Browsers: <kbd>Ctrl</kbd> + <kbd>L</kbd>
  - Windows: <kbd>Win</kbd>
  - VSCode: <kbd>Ctrl</kbd> + <kbd>P</kbd>
  - IntelliJ products: double <kbd>Shift</kbd>
  - Linux: You should know if you're using Linux. XD

### Text Editing

Vim keybindings are highly recommended if you do a lot of text editing. However, if most of your editing is in applications like Microsoft Word, then getting comfortable with the arrow keys and <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Page Up</kbd>, and <kbd>Page Down</kbd> will serve you better. I typically edit text in a Vim editor and then paste it into Word.

### Browser

- Search bar: <kbd>Ctrl</kbd>+<kbd>L</kbd>
- Switch tabs: <kbd>Ctrl</kbd> + number keys
- Close tab: <kbd>Ctrl</kbd>+<kbd>W</kbd>

I highly recommend trying the [Vimium](https://github.com/philc/vimium) plugin.

### Navigating Around Desktop Workspaces in Windows

Switching between windows when working with multiple apps in one screen can quickly become time-consuming and even exhausting.

My approach is to have three workspaces open:

- Main workspace is at the center.
  - e.g. text editor, browser
- Left and right ones are for minor windows.
  - e.g. file explorer, tools
- I typically have 2-4 windows open in one workspace.

- Managing Workspaces

  - Switch between workspaces: <kbd>Win</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>→</kbd>
  - Open task view: <kbd>Win</kbd> + <kbd>Tab</kbd>

- Managing Windows
  - Switch window focus: <kbd>Win</kbd> + <kbd>Tab</kbd>
  - Move windows around: <kbd>Win</kbd> + arrow keys
  - Close a window: <kbd>Alt</kbd> + <kbd>F4</kbd>
  - Open a program: <kbd>Win</kbd>, then search.

### Customing Keybinds

The general principles I follow when defining my own hotkeys are:

- <kbd>Win</kbd> for workspace and window management.
- <kbd>Alt</kbd> for tab management (e.g., browser or terminal multiplexer tabs).
  - Browsers on Windows use <kbd>Ctrl</kbd> for this, which is an unfortunate exception.
- Mod keys + <kbd>Shift</kbd> for alternative actions.
  - Example: <kbd>Win</kbd> + <kbd>1</kbd> switches to workspace 1, while <kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd> moves a window to workspace 1.

## Go Beyond

An ergonomic split keyboard can reduce strain from prolonged keyboard use. I currently use an [Ergodox EZ layout](https://ergodox-ez.com/) keyboard from TaoBao, though the [Kinesis Advantage2](https://kinesis-ergo.com/keyboards/advantage360/) looks so delicious but so freaking expensive.

Another wild idea is a reliable eye-tracking device to eliminate the need for a mouse entirely!

## Final Word

I’m no longer typing, but racing,<br>
A keyboardist steering through keys,<br>
Each stroke a bend in the circuit.<br>

Using the keyboard has become second nature, allowing me to focus more on creativity and productivity rather than the mechanics.

Many thanks to Claude 3.5 Sonnet and ChatGPT-4 for helping me rewrite my original text in a way that highlights the points we wanted to make. (Praise to our future overlords!)
