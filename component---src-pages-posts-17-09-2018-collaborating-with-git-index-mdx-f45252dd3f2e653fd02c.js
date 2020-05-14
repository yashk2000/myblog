(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{zIUS:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return o}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp");var s={path:"/intro-to-git",date:"2018-09-17T19:22:31.723Z",title:"Introduction to Git",featuredImage:"./featured-image.png",headerImage:"./header.png",tags:["version control","collaboration","git","github","Linux","open source","Ubuntu"],excerpt:"Introduction to Version Control Systems using Git"},i={_frontmatter:s};function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.mdx)("wrapper",Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("p",null,"The first question is what exactly is Git ?"),Object(n.mdx)("p",null,"Git is a free, open source distributed version control system tool designed to handle any project efficiently. Linus Torvalds created Git in 2005 to develop Linux Kernel. Git is used to manage a project, or a set of files, as they change over time. It is used primarily for source code management in software development, but it can be used to keep track of changes in any set of files."),Object(n.mdx)("p",null,"Another is question is what is the difference between Git and Github. Git is the tool used to manage your source code and Github is the service for projects that use Git."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Installing Git on ubuntu:")),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"sudo apt install git"))),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Getting started:")),Object(n.mdx)("p",null,"Now with Git on your system, you’ll want to do a few things to customise your Git environment. Git comes with a command: ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"git config"),". It helps you control how Git looks and operates. The first step is setting up your name and email."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'git config --global user.name "USERNAME"\ngit config --global user.email "EMAIL"'))),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"--global")," is used so that Git will use that information for anything you do on the system. If you want, you can later change these settings in the same way by using the same commands."),Object(n.mdx)("p",null,"You can view all your settings by:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git config --list"))),Object(n.mdx)("p",null,"You can also check what Git thinks a specific key’s value is by typing: ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"git config <key>")),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git config user.name"))),Object(n.mdx)("p",null,"Now your Git is set up and you can move on to learning some basic commands."),Object(n.mdx)("p",null,"The first you’ll want to do is initialise a repository. First enter the directory in which you want the repository to be initialised in. This can be done by using the cd command. For example if you want the repository to be in the folder Documents inside a sub-folder called getting_started, in the command prompt do:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"cd Documents/getting_started"))),Object(n.mdx)("p",null,"Then you can initialise a new repository by typing:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git init"))),Object(n.mdx)("p",null,"You can also clone an existing repository. You can either clone an existing local repository or a repository on a remote server. The command for this is git clone."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git clone <url>"))),Object(n.mdx)("p",null,"After creating a repository you can now add files to it. This is done using git add. To add a new file to the repository type :"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git add <filename>"))),Object(n.mdx)("p",null,"If you make multiple changes or add multiple files, you can stage the changes by typing:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git add *"))),Object(n.mdx)("p",null,"After making changes you have to save them. Saving changes in Git is called making a commit. This is done using the command git commit. In the command prompt type:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git commit "))),Object(n.mdx)("p",null,"This opens a text editor in which some comments are already present. You can erase these comments and write your own comments."),Object(n.mdx)("p",null,"You can also do this by typing:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'git commit -m "Commit message"'))),Object(n.mdx)("p",null,"You have now saved the changes to your local repository. To make the same changes to your remote repository (to push these changes) in the command prompt type:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git push origin master"))),Object(n.mdx)("p",null,"You can change master to whichever branch you want to save the changes to."),Object(n.mdx)("p",null,"If you make a change  directly in your remote repository, you pull these changes into your local repository by typing in the correct repository location:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git pull"))),Object(n.mdx)("p",null,"This will update your local repository."),Object(n.mdx)("p",null,"Finally to see what the history changes you have made to repository, to check your previous commits, you can type:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git log"))),Object(n.mdx)("p",null,"So these are some of basic and most useful Git commands. Good luck for your coding!!"))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-17-09-2018-collaborating-with-git-index-mdx-f45252dd3f2e653fd02c.js.map