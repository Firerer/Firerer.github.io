---
pubDatetime: 2024-05-08T23:16:48.000+10:00
modDatetime:
title: Keyboard Centric Workflow
featured: false
draft: true
description: My approach to use keyboard when interacting with computers.
---

## Table of contents

## Mindset

I used to dive deep into the rabbit hole of using
only keyboard when compeleting computer task.

keyboard shortcut is super useful.

I used to learn emacs. It is powerful and all but
it is also a time comsuming.

My goal of mastering keyboard is so that
I can be a better programmer, be more effecient.
uisng emacs is like being a solider
and spending a lot of time sharpen the sword
instead of tring to fight with it.

Start to feel the same using neovim (thinking of moving to lazyvim).

I found that mostly of the time I only need to know
very few shortcut to complete frequent task.

## Approach

Start small, pick up one or two important
frequent-used ones.
Save handy cheatsheet aside for quick access.
For me, within one or two days, I start
to use that shortcut .
After a week, I start to use it like a muscle memory.

## Recommandations

The following is a list of tips and tricks
I found useful when trying to master the keyboard
and navigating around the computer using keyboard
shortcuts.

shortcuts for search bar is a must.

- browser: <kbd>Ctrl</kbd>+<kbd>l</kbd>
- Windows: <kbd>win</kbd>
- VSCode: <kbd>Ctrl</kbd>+<kbd>P</kbd>
- Intellij products: double <kbd>Shift</kbd>
- Linux: You should know if you are using Linux. XD

### Navigating around desktop workspaces

When we need to interact with multiple apps,
switching between windows can quickly becomes an
time comsuing and somewaht exhuasting task.

I approach to this is have 3 workspace open.
Main workspace is at the center.
Left and right one is for minor windows.
I will have 2-4 windows at one workspace mostly of
the time

Managing workspaces:

Switch between workspaces: <kdb>Win</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kdb> / <kdb>→</kdb>
Open taskbar: <kdb>Win</kdb> + <kdb>Tab</kdb>

Managing windows:

Switch window focus: <kbd>Win</kbd> + <kbd>Tab</kdb>
Moving windows around: <kbd>Win</kbd> + arrow keys
Close a window: <kbd>Alt</kbd> + <kbd>F4</kbd>
Open a program: <kbd>Win</kbd> then search.

Linux is much more flexable as we can set up tiling
window manager

Why not using tiling window managers in windows?
Windows does not natively support. tried a few,
don't think it worth it as default is good enough
and always has small problems.

### Text Editing

vim keys are highly recommanded if you are doing
a lot of text editing. But if that is primiarly on
editor like `Microsoft Word`, familarize yourself with arrow keys
<kbd>Home</kbd>, <kdb>End</kdb>, <kbd>Page Up</kbd>,
<kdb>Page Down</kdb> are also handy.
Normally I'd edit text in a vim window, then paste
the text into word.

### Browser

- search bar: <kbd>Ctrl</kbd>+<kbd>l</kbd>
- switch tabs: <kbd>Ctrl</kdb>+ number keys
- close tab: <kbd>Ctrl</kbd>+<kdb>w<kbd>

I highly recommand learning the [vimium](https://github.com/philc/vimium) plugin.

### My custome keybinds

The general principle I use when define my own
keybinds are

- <kbd>Win</kbd> for workspace and window management

- <kbd>Alt</kbd> for tab management (i.e. browser/Terminal multiplexer)

  - browsers in windows use Ctrl which is a big exception :(

- other mod keys + <kbd>Shift</kdb> for alternative action as oppose to orginal one.

  - example: <kdb>Win</kdb> + <kdb>1</kdb> is moving to workspace 1, so <kdb>Win</kdb> + <kdb>Shift</kdb> + <kdb>1</kdb> can be move windows to workspace 1

[XMonad, Tiling Window Manager](https://github.com/Firerer/dotfile/blob/main/.config/xmonad/xmonad.hs#L74)

[nvim config](https://github.com/Firerer/dotfile/tree/main/.config/nvim)

I use zellij instead of tmux. modern, easy to config.
[My zellij config](https://github.com/Firerer/dotfile/blob/main/.config/zellij/config.kdl)
