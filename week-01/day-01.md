# Day 01

What we covered today:

* Introduction \| Orientation \| Housekeeping
* Structure of the Course
* Introduction to the Command Line
* Command Line Murder Mystery

### Introduction \| Orientation \| Housekeeping <a id="introduction-or-orientation-or-housekeeping"></a>

**Joel Turnbull** - Lead Instructor - [jturnbull@ga.co](mailto:%20jturnbull@ga.co)

**Rashida Bengali** - Instructional Associate / Teaching Assistant - [bengali.rashida@gmail.com](mailto:%20bengali.rashida@gmail.com)​

**Hayley Petrov** - Education Programs Producer - [hayley.petrov@generalassemb.ly​](mailto:%20hayley.petrov@generalassemb.ly)

**Olivia Basheer** - Student Experience Lead - [olivia.basheer@generalassemb.ly](mailto:%20olivia.basheer@generalassemb.ly)

**Mikaela Squirchuk** - Education Programs Manager - [mikaela@ga.co](mailto:mikaela@ga.co)​

**Shayaan Malik** - Career Coach - [shayaan.malik@generalassemb.ly](mailto:%20shayaan.malik@generalassemb.ly​)

The GA campus is typically open from 8.45am to 9pm on weekdays and from 9am to 4pm on Saturdays. The campus is closed on Sundays and public holidays.

### Classroom Values <a id="classroom-culture"></a>

You guys came up with the following rules for the next 12 weeks:

* We hate Facebook
* Always help each other
* Be on slack
* Participate in class
* Clean your sh\*\*
* Don't be afraid to say what's wrong
* Work your a\*\* off!

### Geek / Hacker Culture <a id="geek-hacker-culture"></a>

Share and enjoy:

* Books
* Movies
* TV series
* Stupid memes

​[The Jargon File](http://www.catb.org/jargon/html/index.html)​

​[The Tao of Programming](http://canonical.org/~kragen/tao-of-programming.html)​

### GitBook, Homework Repository, Code-Along Repository <a id="gitbook-homework-repository-code-along-repository"></a>

* ​**GitBook** - You're reading it right now. At the end of each day, I will update this GitBook to include notes for the day's lessons.
* ​​[**Homework Repo**](https://github.com/rashidabengali/sei33-homework) - Before class every morning, you should submit your homework for the last day using Github. The repository \("repo"\) readme file has instructions for submitting your homework.
* ​[**Classwork Repo**](https://github.com/wofockham/sei-33) - Missed something during a code-along? You can check this repository for the 'official' code.

### Important Links, Meetups and Newsletters <a id="important-links-meetups-and-newsletters"></a>

**Links**

* ​[Gist](http://gist.github.com/) - sharing code, notes and guides
* Paste Bins - sharing code, debugging code, testing code \(esp JS, HTML, CSS\):
  * ​[CodePen](http://codepen.io/)​
  * ​[PasteBin](http://pastebin.com/)​
  * ​[JS Bin](http://jsbin.com/)​
* REPLs - 'Read, Evaluate, Print, Loop' - interactive environments for evaluating code:
  * ​[REPL.it](https://repl.it/)​
  * ​[Babel](https://babeljs.io/repl/)​

**Newsletters**

* ​[Ruby Weekly](http://rubyweekly.com/)​
* ​[Javascript Weekly](http://javascriptweekly.com/)​
* ​[Versioning](http://www.sitepoint.com/versioning/)​
* ​[Sidebar](http://sidebar.io/)​

**Meetups**

One of the amazing things about the development community is that it is very active, inclusive, social and supportive - people actually take time out of their lives to help other developers and attend meetups to: \(1\) learn more about web development, and \(2\) socialize with others in the community. There are a ton of meetups in Sydney \(most of which can be found on [meetups.com.au](http://www.meetups.com/)\), but the two most relevant to this course are:

* ​[RORO](https://www.meetup.com/en-AU/Ruby-On-Rails-Oceania-Sydney/?_cookie-check=caqRUbln8JZPzebJ)​
* ​[SydJS](http://www.sydjs.com/)​

**Also, check out these**

* ​[Web Design Field Manual](http://webfieldmanual.com/)​
* ​[Web Design Stack](http://webdesignstack.com/)​

### Other <a id="other"></a>

[Ask questions the smart way](http://www.catb.org/esr/faqs/smart-questions.html#intro)

What will go wrong? Everything. This won't be easy for anyone.

> "If debugging is the practice of removing bugs from software... then programming must be the practice of adding them." – E. W. Dijkstra

The most important thing you can learn as a beginner is **how to debug.**

## Structure of the Course <a id="structure-of-the-course"></a>

* Week 01 - Front End
* Week 02 - Front End
* Week 03 - Project 00
* Week 04 - Ruby
* Week 05 - Ruby on Rails
* Week 06 - Project 01
* Week 07 - Advanced Front End
* Week 08 - Advanced Front End
* Week 09 - Project 02
* Week 10 - Advanced Back End / Advanced Everything
* Week 11 - Advanced Back End / Advanced Everything
* Week 12 - Project 03

### A typical day here at GA... <a id="a-typical-day-here-at-ga"></a>

| Time | What? |
| :--- | :--- |
| 09:00 - 09:45 | Warmup Exercise |
| 09:45 - 10:00 | Warmup Solution |
| 10:00 - 10:15 | Homework Demos |
| 10:15 - 01:00 | Main session / Code-Along |
| 01:00 - 02:00 | Lunch / Guest Speaker |
| 02:00 - 05:00 | \(cont'd\) Code-Along / Labs |
| 05:00 - ??:?? | Homework / Office Visit |

There are breaks for morning and afternoon tea which last for about 20 minutes and will be taken whenever works best.

In terms of homework, we like to keep you busy until 9pm or 10pm every night.

We have office hours on Saturday \(except in Week 6, when we have the Spit-to-Manly\).

## The Command Line <a id="the-command-line"></a>

​[You should have iTerm2](http://iterm2.com/)​

Web developers live on the command line. It gives us fast and reliable control over computers. Web servers usually don't have graphical user interfaces \(GUI\), so we need to interact with them through command line and programmatic interfaces. Once you become comfortable using the command line, staying on the keyboard will also help you keep an uninterrupted flow of work going without the disruption of shifting to the mouse.

The command-line interface - aka "the CLI" or the shell - is a tool that performs specific tasks in response to user-typed commands. It has the potential to save you lots-and-lots of time because it can automate things, loop through items etc.

`date` - Will print the current date and time

`which date` - Will show the relevant file \(will probably return **/bin/date**\)

`pwd` - Stands for **Print Working Directory**, will show you where you are in your computer

`mkdir` - Stands for **Make Directory**

`rmdir` - Stands for **Remove Directory**

`echo` - Displays a line of text

`clear` - Will clear the terminal screen \(ctrl + l and cmd + k will do this as well, however you still have access to the history if using ctrl + l. cmd + k will clear the screen and kill the history\)

`reset` - Will reset your terminal

`cd` - Stands for **change directory** and will change the current working directory in accordance with the options that follow `cd` \(eg: `cd ..` will go back one directory; `cd ~` will return to the home directory\)

`cat filename` - \(short for “**concatenate**“\) will show you the contents of the specified file.

`less filename` - will show you the contents of the specified file and extends the capabilities of more. It is a dedicated file reader that reads a file one screen at a time, and loads more of the file as you scroll through it.

`whoami` - Will show the logged in user

`who am i` - shows username, login and date

`who` - shows who all have logged in the computer

`last` - details of username, date and time of logged in people

`uptime` - logged in time in hours

`ps` - Will you show you all running processes

`ps aux` - Will show you all of the running processes with more details

`top` - Will show you the **Table of Processes** \(cool command to run in if you want to show off in front of someone who has no idea about command line 😉 \)

`man` - Stands for **Manual**. To use it, follow the `man` command with another command line command \(i.e. `man top`\).

`alias` - lets you rename a command \(e.g `alias woman=man` renamed man to woman and `alias` will show a list of all the list of alias\)

`mail` - reads your emails

`grep` - Stands for **Global Regular Expression Print** - useful for finding files or content

`ls`- Short for List. This will show you all of the files and folders in the current directory

`ls -l` - lists details of all the files/folders

`ls /bin` - Will show you all terminal commands

`#` - lets you write comments in command line

**Others**

* Hit `ctrl c` - will ignore/cancel command
* Type `q` - exits the command
* `:` - means pager \(a read along document but you cannot type any more commands so to quit from here type `q`\)
* on clicking the UP arrow on keyboard will bring up all the old command. Keep clicking to find your command.
* `history` - will show you the history of all commands

Most commands will have additional **flags**. A flag is a request for more information.

A good example of this is the following:

```bash
# list out contents of current directory (excluding hidden files)
library$ ls
bar.txt bookshelf.txt everything.txt
​
# list out contents of current directory (use a long listing format)
library$ ls -l
-rw-r--r--  1 yourusername  staff  30 10 Sep 14:43 bar.txt
-rw-r--r--  1 yourusername  staff  50 10 Sep 14:51 bookshelf.txt
-rw-r--r--  1 yourusername  staff  80 10 Sep 15:00 everything.txt
```

```bash
# cd can do a lot of things!
> cd
# Will take you back to your "home folder"
> cd /
# Will take you back to your "root folder"
> cd FolderName
# Will take you into the specified folder name
> cd FolderName/AnotherFolderName
# Will take you through FolderName and then into AnotherFolderName
```

```bash
# We can make folders in the CLI by using mkdir
> mkdir Projects
# Then we can move into it
> cd Projects
# ls will show most of your files (ones that aren't prefixed by a .)
> ls
# ls -la will show every file (even hidden files)
> ls -la
# or 
> ls -l -a
# create a directory named house
> mkdir house
# enter the directory
> cd house
#shows the path of the directory
> pwd
# This will change to the current directory
> cd .
# creates these files
> touch library
> touch bar
> touch bedroom
# shows all files and folders
> ls -l
# displays the typed text
> echo HELLO WORLD
# appends Ulysses and others inside library file
> echo "Ulysses" >> library
> echo "Eat Pray Love" >> library
> echo "KJV BIble" >> library
> echo "Eloquent Javascript" >> library
# shows all the content which we just echoed inside the library file
> cat library
# appends Glenliver and others inside bar file
> echo "Glenliver" >> bar
> echo "Spiced Rum" >> bar
> echo "Breakfast" >> bar
# appends bed and others inside bedroom file
> echo "bed" >> bedroom
> echo "fireplace" >> bedroom
> echo "cat perch" >> bedroom
# shows all the content which we just echoed inside the library, bar and bedroom files file
> cat library bar bedroom
# shows contents of all files
> cat *
# shows names of files
> echo *
# shows contents of bedroom and bar but not library
> cat b*
# shows ending with m
> ls *m
# shows that has a in it
> ls *a*
# This will open the current directory in Finder
> open .
# creates hidden files
> touch .games_room
# to view the hidden file
> ls -a
# deletes files
> rm .games_room
# creates directory(extension) and file(observatory) in one command
> touch extension/observatory
# this wont' work as its a directory and not a file
> cat extension
# deletes folders
> rm -r extension OR > rm extension/*
# DONT DO THIS - deletes all files and folders from root directory
> rm -r /
# overview of all files and folders
> find .
# This will go back to the previous directory
> cd ..
# If you hit TAB at this point, it would autocomplete for you
> cd Pro
# This will show a running train (Type q to exit)
> sl 
```

```bash
# This will open the file and show the contents
​> cat books
​
# Will show you the contents of 'books' and 'pipe' it into the 'sort' program. 
# This doesn't change the original 'books' file!
> cat books | sort
​
# The pipe character (|) pipes the output of the first command to another command
# This will sort the contents of 'books', and put the sorted contents into the 
# 'sorted_books' file (it will create the 'sorted_books' file if no file with that 
# name exists in the current working directory)
> cat books | sort > sorted_books
​
# This will rename 'sorted_books' to 'books' (and will overwrite the 'books' file if 
# it already exists)
> mv sorted_books books
​
# This will open and show the contents of 'books', and shows only lines that have the 
# word 'script' in them (case sensitive!)
> cat books | grep script
​
# To copy a file, the command is cp (this needs parameters - or arguments - it needs 
# a source and a destination).
# cp [source] [destination]
> cp books my_books
​
# To remove things, use the rm command (this doesn't get moved to your trash! It will 
# delete it permanently and is impossible to undo)
> rm my_books
​
# To remove the contents of an entire directory, the -r flag can be appended. The -r 
# flag means "recursively" (ie every file/folder within the director).
> rm -r projects/
```

```bash
# saves uptime details inside favourite_uptime file
> uptime >> favourite_uptime
# saves history (all typed commands) inside favourite_commands file
> history >> favourite_commands
# shows word count
> wc favourite_commands OR > wc -w favourite_commands
# shows the top lines of the file
> head favourite_commands
# shows the bottom lines of the file
> tail favourite_commands
# shows the tops lines of the output of history program
> history | head
# shows the word count of the top lines of the history output
> history | head | wc -w
# shows the word count of all the files inside the directory
> cat * | wc -w
# sorts in aplphabetically inside library
> sort library
# sorts everything alphabetically
> cat * | sort
# this sorts everything and puts it inside a file sorted_items
> cat * | sort >> sorted_items
# page through the file
> less instructions
# opens the file in finder
> open cheatsheet.pdf
# This will create a markdown file called README
> touch README.md
# To open an application in terminal (can use any application that you have)...
> open -a "Atom"
```

How to unzip files on a command line? 

unzip ~/downloads/.....

What happens when we run commands?

```bash
# It will go through all of the folders and files that are shown when we run the 
# following command, and use the contents of the files to decide whether it can run 
# that particular program or command​
> echo $PATH
```

### _Command Line Interface \(CLI\) - Recommended Readings_ <a id="command-line-interface-cli-recommended-readings"></a>

* ​[The Linux Command Line](http://linuxcommand.org/tlcl.php)​
* ​[Terminal Cheatsheet for Mac](https://github.com/0nn0/terminal-mac-cheatsheet)​
* [Introduction to the Command Line](http://write.flossmanuals.net/command-line/introduction/)
* ​[QuickLeft - Command Line Tutorials](https://quickleft.com/blog/tag/command-line/page/4/) \(start from the bottom and work your way up\)
* ​[Command Line Crash Course](http://cli.learncodethehardway.org/book/)​
* ​[In The Beginning Was The Command Line](http://cristal.inria.fr/~weis/info/commandline.html)​
  * ​[It even has its own Wikipedia entry!](https://en.wikipedia.org/wiki/In_the_Beginning..._Was_the_Command_Line)​
* ​[The Unix Programming Environment](http://en.wikipedia.org/wiki/The_Unix_Programming_Environment)​

### _Command Line Interface \(CLI\) - Additional Links_ <a id="command-line-interface-cli-additional-links"></a>

* ​[15 Use Cases of Grep](http://www.thegeekstuff.com/2009/03/15-practical-unix-grep-command-examples/)​
* ​[40 Terminal Tips and Tricks](http://computers.tutsplus.com/tutorials/40-terminal-tips-and-tricks-you-never-thought-you-needed--mac-51192)​

## Today's slides <a id="homework"></a>

[https://github.com/wofockham/sei-33](https://github.com/wofockham/sei-33)

## Homework <a id="homework"></a>

* Find the Command Line Murderer
* Read up on the command line with the resources above 
* Improve your typing speed with [typing.io](https://typing.io/) 
* Maybe finish/review your pre-work as needed

