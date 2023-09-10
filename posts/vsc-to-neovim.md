---
title: 从vscode到vim到neovim的心路历程和收获
date: 2023-08-08
tags:
  - Thoughts
  - Experience
---

:::warning
This post is highly opinionated and biased, collected randomly from the author's extremely limited feelings and thoughts.
:::

在很早以前就听说 vscode 超级好用，自己也比较听话，想着就试试呗，探索一下是不是真的很好用. 于是就用了几年，这个编辑器陪伴了我写各种个人独立的项目，实习，外包.

在这个过程中也并不是没有尝试其他的文本编辑器或者其它[Jetbrains](https://www.jetbrains.com/)系列的 IDE，总感觉 Jetbrains 的 IDE 太笨重了，虽然各种功能都比较全面，
感觉学习会了里面的各种操作和特点后，也可以很快速的开发代码. 不过对于我 17 年的 MBP 来说，它家的 IDE，跑起来还是太慢了，看起来十分的笨重. 我的电脑如果是个人的话.
![jetbrains vs vscode](/images/vsc-to-neovim/jetbrains-vs-vscode.webp 'IDE meme')

至少对于风扇来说，vscode 无疑是一个更好的选择，之前更多写的是前端的代码，vscode 提供各种丰富的插件，感觉像是起飞了. :)

想起来百度实习的时候日子，想起来真的会笑死，公司发给我们实习生的电脑真的很差劲，I5，256g 的 13 寸 MacBookPro. 我还记得因为自己的习惯是开很多的 Chrome tabs，找到最终的解决办法再一口气关掉.
开发的时候卡得要命，自己的电脑又不想安装公司的 VPN 软件，担心监控个人隐私. 所以也没办法使用手边最好的设备进行开发. 那时候还因为卡到没办法切换电脑画面反馈给 mentor，说这电脑真拉胯.

随着时间的流逝，17 款的 MBP 最终还是抵不过岁月的侵袭，也开始卡顿了，我记得让我印象最深刻的一次是 vscode 改一个字母，卡顿 3-5s. 这真的让我很难办:) ，由于过于卡顿我被迫尝试 Vim 作为我新的开发环境.
当然 Vim 的学习成本也是巨高的.
![learn vim](/images/vsc-to-neovim/learn-vim.webp 'vim meme')

因为前几年感觉 vscode 还能用，虽然有点卡顿，学习 Vim 的动力也不强. 自然又摊平了.今年 2 月份的的时候，vscode 确实是用不下去了，被逼着记住大部分 vim key-bindings，一旦踏进 vim 的领域，
配置深似海.不过[Josean Martinez](https://www.youtube.com/@joseanmartinez)的介绍 neovim 的[视频](https://youtu.be/vdn_pKJUda8)在帮助我配置 neovim 插件上提供的了很多参考.不过那会不仅仅是他这一个教学视频，
但他的视频让我有种编程像是弹钢琴一样的美感.逐渐的配置好我的 neovim 后，我也找到了弹琴样的感觉.

明明是在说 neovim，但为什么我标题里还要提到 vim 呢?这是因为 vim 在我安装了各种插件后发现，有些功能还是达不到我想要的效果，比如说一些很好的插件例如 html tag 替换的插件，Vim Plugins 我没找到很好的平替.
但 neovim 的社区里就有，并且 neovim 有着更好的插件管理工具，同时也有一些更加新颖的功能和特性.在写这篇文章的时候，编辑器之神 Vim 之父，[Bram Moolenaar](https://moolenaar.net/) 逝世，享年 62 岁.在这哀悼一下.
非常感谢他和 Vim 社区的同学为开源社区做出的贡献.让大家可以用上 Vim 这样效率提升神级的软件.

2024-01-28

之前还不理解微软亚洲研究院实习的朋友他的 mentor 为什么也在用类 Vim 的工具，他说"他的 mentor 在用，酷炫无敌的无键盘操作写代码的工具，都吃惊了 😲.他觉得有种不明觉厉的感觉.
前久我和我们学校实验室的同学聊天，发现他们觉得这样只通过键盘写代码的操作很装 B.我一脸无奈 🤷🏻‍♀️.我就很想解释，最开始是想装 B，因为很酷，只用键盘写代码.但是在长期适应和使用下.类 Vim 工具是真的能解决我的问题，并提升效率.装不了一点，只是选择了最适合自己的方式.
