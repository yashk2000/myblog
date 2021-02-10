(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{YFiy:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return c}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var n=t("7ljp");var s={path:"/collaborating-with-git",date:"2019-02-17T19:22:31.723Z",title:"Collaborating with Git",featuredImage:"./git_pumpkin.jpg",headerImage:"./git_pumpkin.jpg",tags:["git","github","Linux","open source","Ubuntu"],excerpt:"This blog consists of a summary of a few essential Git concepts"},i={_frontmatter:s};function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.mdx)("wrapper",Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)("p",null,"In the previous blog post, I have explained what git is and some basic commands. In this post, I will tell you how to send a pull request along with all the proper practices that should be followed while doing so."),Object(n.mdx)("p",null,"The first thing to do while contributing is to fork and clone the repository which you are working on. You can easily fork a repository from GitHub itself by clicking on the fork option on the top right corner."),Object(n.mdx)("p",null,Object(n.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"2024px"}}),"\n      ",Object(n.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/blog/static/5706c58cf52e06eb39412771485742b3/53948/img1.png",style:{display:"block"},target:"_blank",rel:["noopener"]}),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.32411067193676%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABvklEQVQoz41SXW/TMBTNX0Zi0pCqPQLjI+3SsmZbBxN/hmd45QlEliVpEtupndhOcrh2WzSRIWHp6NpXPsfnXt9g8+kzLq82WF/feqwubzCPrjFfbhCtYsLaI7xY4W0Y4f18iXfzyJ+jDzEu3B2K8dUNTk9nCPDXGvoeWlt0ZoTtCQP+e0VRiGAYBhwxjoCSHEX6A2yboMp/QVQ5eJlB8hwsT6FzhiJJULItBiL0ZKAnriOH8UcEI22OcIsxgSTNkBUlypqDNzsw0SAva8pVKLcCX35+xbfiu7//mLt8eTYVbGSHRlmMfq9IbAepOqhWUwsGnx8tYLv+jyAO3Lv1Yt/Dx4I7qcmV2ZevSJALSBI2xsBa6+90WtMjauJwsZg9IagM2sPrOxKqGYegsg2J+T5TXmtDj7UTwTevnihZtZYcWn+WB4eceuhEjNnnnVvVTgVfnIfTsVHkrlH7WZHkgvPGR1fukejctm03GZvX8TkCzhkaISA4p5HZ+fLqmhx1HQQ5Y1SylJIEWnJGH0Pu3N7lrDXeraaeujibnSBI7xM8pPfIswcf66r0scgzD5dndQXO6n/CccptgZPnz/Ab4qs1gG+CQlwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.mdx)("picture",{parentName:"a"},"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/5706c58cf52e06eb39412771485742b3/6b97b/img1.webp 506w","/blog/static/5706c58cf52e06eb39412771485742b3/2dbb9/img1.webp 1012w","/blog/static/5706c58cf52e06eb39412771485742b3/f2636/img1.webp 2024w","/blog/static/5706c58cf52e06eb39412771485742b3/36600/img1.webp 2720w"],sizes:"(max-width: 2024px) 100vw, 2024px",type:"image/webp"})),"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/5706c58cf52e06eb39412771485742b3/29f4e/img1.png 506w","/blog/static/5706c58cf52e06eb39412771485742b3/ad997/img1.png 1012w","/blog/static/5706c58cf52e06eb39412771485742b3/a4f52/img1.png 2024w","/blog/static/5706c58cf52e06eb39412771485742b3/53948/img1.png 2720w"],sizes:"(max-width: 2024px) 100vw, 2024px",type:"image/png"})),"\n        ",Object(n.mdx)("img",Object.assign({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/blog/static/5706c58cf52e06eb39412771485742b3/a4f52/img1.png",alt:"Fork",title:"Fork",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n  "),"\n    ")),Object(n.mdx)("p",null,"After forking, you have your own copy of the repository which will be by the name: “your GitHub user name”/“project name”. Now you have to clone the repo to your computer in order to make changes. This can be done by pressing the green button in the right corner towards the top, “Clone or Download”. Click on it. It will give you a link. Copy the link to clipboard and then clone the repository. This is done by using git clone in the terminal."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'git clone "the link you copied"'))),Object(n.mdx)("p",null,"This will create a local copy of the repository to make all the changes you want. Now we will start with the main parts, what to do before, while sending and after sending the pull request."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Part 1:")),Object(n.mdx)("p",null,"The first thing to do before making any change is checking out to a new branch, i.e. creating a new branch. The reason to do this is so that your main branch remains intact and no changes happen to it. So in case, something goes wrong in the other branch, you can always go back to the same code as in the main branch. Also if you make changes directly to the main branch, you will have to wait to make more changes until the current change you sent is merged(merging will be discussed later in this post)."),Object(n.mdx)("p",null,"So how to create a new branch? There is a simple command called “checkout”."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'git checkout -b "name of new branch"'))),Object(n.mdx)("p",null,Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"b")," is the extension used to tell git that you want to shift to a new branch. If you have to shift to an already existing branch, do:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'git checkout "branch name"'))),Object(n.mdx)("p",null,"Now if you have created a new branch successfully, make the change that you wanted to."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Part 2:")),Object(n.mdx)("p",null,"Now comes the part while you are making changes. Sometimes while making changes, you might want to shift to another branch. But of the changes you have made to your branch haven’t been saved, you won’t be able to checkout to another branch. In this case, you will have to do a forced checkout, but this will cause the changes in your branch to appear in the brach you checkout to also. Here I will tell you about another keyword which is really useful- “stash”."),Object(n.mdx)("p",null,"As the keyword suggests, you stash the changes and can use them later. To stash the changes you want, simply do:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git stash"))),Object(n.mdx)("p",null,"Now you can checkout to any branch safely. Then comes the question of how to restore the changes you had stashed when you want to work on them again. This can be done simply by using:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git stash apply"))),Object(n.mdx)("p",null,"This will unstash the latest changes you stashed. If you have stashed changes multiple times, you can see all the stashes by doing:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git stash list"))),Object(n.mdx)("p",null,"You can then choose the change you want to restore by doing:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'git stash apply "name of the stash as shown in the stash list"'))),Object(n.mdx)("p",null,"So this will cover any difficulties you might face while making a change."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Part 3:")),Object(n.mdx)("p",null,"Now you have made the change and the only thing left to do is pushing the change to GitHub. This again has a really simple command, “push”. But before doing this, you have to add, commit the changes and then push them."),Object(n.mdx)("p",null,"So the first thing to do is to compare the changes you have made with the original code. This is done by doing:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git diff"))),Object(n.mdx)("p",null,"After doing this, you can see all the changes you have made. If you are satisfied with the changes made, proceed to the next step. Now do:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git status"))),Object(n.mdx)("p",null,"This will give you a summary of files changed, added or deleted. You have to add all these changes to git which is done by doing:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git add ."))),Object(n.mdx)("p",null,"Once the changes have been added, you can finally commit them by doing:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git commit"))),Object(n.mdx)("p",null,"Now you can again to git status to see the changes committed. It will give you the number of commits made and the difference between your branch and the main branch. Now finally the changes you made are ready to be pushed. To do this simply type:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"git push "))),Object(n.mdx)("p",null,"And you are done now. Congratulations!! you have fixed an issue and pushed it. Now you just have to open a pull request. This can again be done directly from GitHub."),Object(n.mdx)("p",null,"Go to your forked repository. Choose your branch and press on create pull request."),Object(n.mdx)("p",null,Object(n.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"2024px"}}),"\n      ",Object(n.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/blog/static/b0a7a34acbe324d0867fc50a8aad0364/53948/img2.png",style:{display:"block"},target:"_blank",rel:["noopener"]}),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.32411067193676%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABvUlEQVQoz41SyW7bMBDVNxfIcgjaU4uiS+zIdiI3S4v8Ta49FO2hhxZwZNmSSInipu1lSNmAYaFAB3gYiZr3Zvg0wd3XR1wv73Dz5d5jfn2LSUiY3+NqvsRsESGcR/Qc4dNkhs/TAZOrBcLFcO5ytLzF+fkFAhxF2zSQsoYyHdoO6Hqgx/9FGF4i6LoOe/R9T2IKLM9QCU45hSiFR20UVCXQagsjJZRWntO2LYE69x0uowcETmQPF5xl+PP7F9JkhSJPoEUGWaZgWYw0XoH/3eLp5xO+r3/4+kPu7N3rsaCQFlumUMoWTFjkQoNXFowgTIvKttiICpxushfEjvvtZjp4eCho6xpaG/KuB+ccOWMQJCCVgjHG1zR142uOudPpxViwpuKaRF1I8ooXJapKoqGfNdQNTZXWI8EP79+Mr2ys9UIulNJgvEBJExpjfTNXdyzY7bhnbz+O18aRHHkvWNAfdlO6Roe3ULsrD6JDPjk7RVAWBa1F6aHJJ+dXQVNpWouCvjHGSbDwU9ck2jTOY+3fnQ3OHuvPG5yevEIQP6+wjp+xSdY+ux10ebtJPJJ1TKuUUxP2TzhOlm694AsT5jUB59AWqgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.mdx)("picture",{parentName:"a"},"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/b0a7a34acbe324d0867fc50a8aad0364/6b97b/img2.webp 506w","/blog/static/b0a7a34acbe324d0867fc50a8aad0364/2dbb9/img2.webp 1012w","/blog/static/b0a7a34acbe324d0867fc50a8aad0364/f2636/img2.webp 2024w","/blog/static/b0a7a34acbe324d0867fc50a8aad0364/36600/img2.webp 2720w"],sizes:"(max-width: 2024px) 100vw, 2024px",type:"image/webp"})),"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/b0a7a34acbe324d0867fc50a8aad0364/29f4e/img2.png 506w","/blog/static/b0a7a34acbe324d0867fc50a8aad0364/ad997/img2.png 1012w","/blog/static/b0a7a34acbe324d0867fc50a8aad0364/a4f52/img2.png 2024w","/blog/static/b0a7a34acbe324d0867fc50a8aad0364/53948/img2.png 2720w"],sizes:"(max-width: 2024px) 100vw, 2024px",type:"image/png"})),"\n        ",Object(n.mdx)("img",Object.assign({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/blog/static/b0a7a34acbe324d0867fc50a8aad0364/a4f52/img2.png",alt:"branch",title:"branch",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n  "),"\n    ")),Object(n.mdx)("p",null,Object(n.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"2024px"}}),"\n      ",Object(n.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/blog/static/12d25cc4fff282b1add1413ec2c2808c/53948/img3.png",style:{display:"block"},target:"_blank",rel:["noopener"]}),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.32411067193676%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABtElEQVQoz5VSyW7bMBDVNxdI0gJdTi2KLrESObHTJE2Rz8i5H5Bbz4m7aLE2UhQ3SS9DWk7swJcO8PDI4czjDDnBxdU1Ts8uMPt26TGdnWMSOVziaDpHGJ0Sz3B4dIIvk2N8DSPiyO+PT+Y+xvH87BwvX71BgGdmtUYrJFpl0HU9/sem0wmCvu+xxjAM4ELgbxzjfrFAmi1R1TU4b8AYR1FyiFYSWmhjfE7XdeiIMfQ4nH9H4ETWcNawGllVoeISNaGsBV2iwVsN1ihaSy9qScjZZm704e0uQY68YJQsIVUHIY1fc6FGn6XKhm2xMffHLHx6w2EMcLbMcyx+/0GcpKgZI3DfctOILbHnFYbh65XgptMxozcrqhpN6yrSHo2WYErAdHZLaDP308d32y2vD1opfWWMC1prGGNxW/zCTfwTqcx9O5s5/Zh38P7zjrGxllprHn/diTmWWkEZ7f3G2sfLV9WueO9gH4FSCoZmTxM7MUY/fH93B+3nUUAQJFW8jnMxlkZGkc8QO+jRv7/3AkFCM5cmMZZZiiT+h6osPGdpQv7En9VVCVZXnnehLHLky8wLPgDonjXyUFPH2wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.mdx)("picture",{parentName:"a"},"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/12d25cc4fff282b1add1413ec2c2808c/6b97b/img3.webp 506w","/blog/static/12d25cc4fff282b1add1413ec2c2808c/2dbb9/img3.webp 1012w","/blog/static/12d25cc4fff282b1add1413ec2c2808c/f2636/img3.webp 2024w","/blog/static/12d25cc4fff282b1add1413ec2c2808c/36600/img3.webp 2720w"],sizes:"(max-width: 2024px) 100vw, 2024px",type:"image/webp"})),"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/12d25cc4fff282b1add1413ec2c2808c/29f4e/img3.png 506w","/blog/static/12d25cc4fff282b1add1413ec2c2808c/ad997/img3.png 1012w","/blog/static/12d25cc4fff282b1add1413ec2c2808c/a4f52/img3.png 2024w","/blog/static/12d25cc4fff282b1add1413ec2c2808c/53948/img3.png 2720w"],sizes:"(max-width: 2024px) 100vw, 2024px",type:"image/png"})),"\n        ",Object(n.mdx)("img",Object.assign({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/blog/static/12d25cc4fff282b1add1413ec2c2808c/a4f52/img3.png",alt:"pull request",title:"pull request",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n  "),"\n    ")),Object(n.mdx)("p",null,"And you’re done. You’ve sent a pull request."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Some miscellaneous things:")),Object(n.mdx)("p",null,"Now there are some other things which you might need sometimes. These include resetting, squashing and managing remotes."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Resetting:")," Sometimes, you might make some unintentional changes and you might not be able to reverse them no matter what you try. In this case, you can reset your branch to be exactly the same as the remote main branch. (you need to have a git remote setup for this. It will be discussed ahead) So simply do ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),'git reset --hard "main brach name"')," . Now your branch is exactly the same as your main branch and you can continue making changes."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Squashing:")," Sometimes after making a pull request, or after pushing your change, you might think of something that you forgot to do. You will make the change, and push the change again. This will result in another commit. Having multiple commits on a single pull request is not a good practice. So you have to squash all the commits into one. This is done by: ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),'git rebase -i HEAD~"number of commits to be squashed"'),". After doing this, a menu opens in the terminal. In it, replace all the “pick” with “squash” except the first one. Then you can set up the commit messages. And you’re done. The commits have been squashed. Now you’ll have to do a force push to make the changes appear on GitHub. Do: ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"git push -f"),"."),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Managing remotes:")," The remote is the original repository from which you forked your repository. You need to manage remotes in order to keep your own repository up to date with what is happening in the original repo. You can check your remotes by doing ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"git remote -v"),". This will show you your own upstream branches as well as remotes if you have them. If you do not have remote, you can add remotes by doing ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),'git remote add upstream "clone link of the original repsository"'),". Now, whenever you have to update your repository to make it the same as the original one simply fetch and pull the changes by doing: ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),'git fetch upstream "branch name"')," and then ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),'git pull upstream "branch name"'),"."),Object(n.mdx)("p",null,"So these are the basics of git. Now you can send a pull request yourself. Also, the techniques used here for squashing, creating a new branch etc. are just one of the many methods available in git to do those things. I have tried to put the simplest ways here for your convenience. You can try making your first contribution ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/firstcontributions/first-contributions"}),"over here"),". Then you can try choosing an open source project which interests you, see issues and start working on them. Good luck contributing!!"))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-17-02-2019-collaboration-with-git-index-mdx-21185e4e4e500e7f4140.js.map