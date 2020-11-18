---
layout: post
title:  "Getting Artificial Neural Networks Closer to Animal Brains"
comments: true
---

<img class="cover" src="/img/brains-vs-anns/cover.jpg">

Lately, I’ve been thinking and reading a lot about consciousness and how the human mind works. A question that emerges all the time is whether machines can [emulate human thought](https://en.wikipedia.org/wiki/Turing_test). An even more interesting one is whether consciousness (a subjective experience) can arise from a machine, but I’ll leave that discussion for a future post (I’ll need ~20 more years to think about that before I can write about it).

So, how far are we from _behaviorally _imitating a human? Truth is, we achieved a lot in the past 5 years (see [AlphaGo](https://deepmind.com/research/case-studies/alphago-the-story-so-far), [OpenGPT-2](https://openai.com/blog/better-language-models/), [OpenAI Jukebox](https://openai.com/blog/jukebox/), [Tesla Autopilot](https://en.wikipedia.org/wiki/Tesla_Autopilot), [Alphastar](https://deepmind.com/blog/article/AlphaStar-Grandmaster-level-in-StarCraft-II-using-multi-agent-reinforcement-learning), [OpenAI Dota2 Team](https://openai.com/blog/openai-five-defeats-dota-2-world-champions/), [OpenAI API](https://openai.com/blog/openai-api/)), but we’re still quite not there. My hunch is that we still can learn a lot from biology’s state of the art. I’ve done some research on differences in how human brains work and how we emulate them using deep neural networks, and what follows is a summary of what I’ve found (and some new ideas).

<figure>
  <img class="post-img" src="/img/brains-vs-anns/image1.png">
  <figcaption>
    I find it encouraging that John Carmack is studying human brains for his AI research. <a href="https://twitter.com/ID_AA_Carmack/status/1280693213549002752">Source</a>.
  </figcaption>
</figure>

## Morphology

The most surprising difference between artificial and human brains is how _sequential_ our artificial neural networks (ANN) are, compared to the richly interconnected biological counterparts. 

I’m always amazed by the sheer amount of layers that are stacked on top of each other [in the latest deep learning models](https://jalammar.github.io/illustrated-gpt2/). The largest GPT-3 model (with 175B parameters) uses 96 attention layers, each with 96x 128-dimension heads. [Their paper](https://arxiv.org/pdf/2005.14165.pdf) shows that language model performance scales as a power-law with model size. 

However, this assumes the size of the network can only increase by adding more layers, making it “deeper”. Using layers enables for great performance in training via [backpropagation/ADAM](https://machinelearningmastery.com/adam-optimization-algorithm-for-deep-learning/), but I think the current mostly-sequential approach to scaling ANNs is limiting. Some ideas: 


### Wide (vs. Deep) Neural Networks 

<img class="post-img-double" src="/img/brains-vs-anns/image8.png">
<img class="post-img-double" src="/img/brains-vs-anns/image3.png">

A promising approach is exploring other kinds of architectures, where the concept of “layer” is forgotten, and networks are built more freely (with connections being modelled at the neuron level, and allowing for loops and more complex topologies). This [has been somewhat explored in the past](https://en.wikipedia.org/wiki/Boltzmann_machine), but I haven’t seen recent studies where today’s computing power is thrown at such architectures. Additionally, [Ken Stanley’s NEAT (2002)](https://en.wikipedia.org/wiki/Neuroevolution_of_augmenting_topologies) and derivatives are a very promising way of finding new topologies via evolution.


### Neural Grids

<img style="max-width: 41%; display: inline; float: left; margin: 0 1.9rem" class="post-img" src="/img/brains-vs-anns/image6.png">


Another idea worth exploring: grid-like structures where each cell communicates only with its neighbors. In this neural net model, potential is not only passed forward, but also “upward” and “downward”, or even diagonally. This would emulate more closely, I think, a real brain’s connectivity. A related approach is [Hypercube-based NEAT (2009)](https://www.mitpressjournals.org/doi/abs/10.1162/artl.2009.15.2.15202), which allows exploiting the task’s geometry by mapping its regularities onto the topology of the network.


### Artificial Cortical Columns

<img class="post-img-double" src="/img/brains-vs-anns/image9.png">
<img class="post-img-double" src="/img/brains-vs-anns/image5.png">


Human’s brain neocortex seems to have a surprisingly self-repeating pattern, called [cortical columns](https://youtu.be/x2mYTaJPVnc?t=98). Each column can be thought of as a reusable ~110 neuron module that appears (with variations) across neocortex areas associated with such different functions as vision, motor control, auditory perception, decision-making, planning, etc. [Studying these structures](https://numenta.com/neuroscience-research/cortical-columns/) and applying similar concepts/topologies to ANNs seems like a promising approach. Cortical columns provide amazingly generic hierarchical information processing capabilities, feedback mechanisms, and layered communication with other parts of the brain. 


### Generative architectures arising from growth

<img style="max-width: 55%; display: inline; float: right; margin-left: 1.9rem" class="post-img" src="/img/brains-vs-anns/image10.png">

What if neural net architecture is determined by a generative / procedural algorithm on runtime, instead of being defined by researchers? The seed could be random or evolved through genetic algorithms too. I think that somehow mimicking [neurulation of human embryos](https://www.youtube.com/watch?v=BtLyik7oAxc&list=PLTF9h-T1TcJjUxgs0dqyDCaS-glauXcsL&index=4) via simple models could lead to finding better-performing architectures. Human brains grow into existence, and maybe that matters for high-level intelligence.


## Function


### Evolve first, Learn later.

Some techniques use [neuroevolution used to automate network design](https://www.nature.com/articles/s42256-018-0006-z) or [evolutionary strategies finding network weights instead of gradient descent](https://blog.otoro.net/2017/11/12/evolving-stable-strategies/). It’d be interesting to see hybrid approaches where network structure is evolved and _later_ allowed to learn in an environment (like humans!). Additionally, as I learnt from [this fascinating paper by Tony Zador](https://www.nature.com/articles/s41467-019-11786-6) (2019), "A large component of an animal’s behavioral repertoire is not the result of supervised or unsupervised learning, but rather of behavior programs already present at birth". Learning is actually one of such behaviors, so… shouldn’t researchers be focusing more on optimizing the lower-level mechanism of evolution instead of polishing our “hand-crafted” learning algorithms and architectures? 

On a similar ‘meta-learning’ vein, the comically named [Learning to learn by gradient descent by gradient descent](http://papers.nips.cc/paper/6461-learning-to-learn-by-gradient-descent-by-gradient-descent.pdf) (2016) paper shows that you can train a network to optimize other networks, and they perform better than hand-crafted learning algorithms like [ADAM](https://towardsdatascience.com/adam-latest-trends-in-deep-learning-optimization-6be9a291375c) and [RMSProp](https://towardsdatascience.com/understanding-rmsprop-faster-neural-network-learning-62e116fcf29a).


### Continuous (vs. discrete) neuron firing


<img class="post-img" src="/img/brains-vs-anns/image4.png">


Instead of processing inputs in discrete events, our networks could ‘stare’ at inputs for a couple iterations, and neurons can ‘store-up’ potential until they fire. This aims to mimic how we humans can look at something we don’t understand, but after a couple of seconds we “get it”. This could also enable the emergence of “memories” in the form of stored potential, too, analogous to the hidden state vector of LSTMs. Check out [Gabriel Kreiman’s related work (2018)](https://www.youtube.com/watch?v=lddzHEtu934) on improving object detection in occluded or distorted conditions. Regardless of the specific implementations mentioned above, biological brains clearly have a temporal dimension (for example, [neurons in the visual motion MT area respond to direction of motion](https://www.youtube.com/watch?v=aFrG7KdjUOs&list=PLyGKBDfnk-iAQx4Kw9JeVqspbg77sfAK0&index=32)), which we need to understand better to inform construction of artificial ones. Another interesting time-related property of biological brains is [the difference between tonic vs bursting modes of neuron firing](https://youtu.be/fki7AmLma_I?t=450).


### Connecting functional building blocks

Animal brains are surprisingly pre-wired and connected since birth, and it’s still not clear in general which behaviors are learned through experience and which are innate. Moreover, a big field of study in neuroscience is understanding how the human brain is wired, mostly via [diffusion tractography](https://en.wikipedia.org/wiki/Tractography), and in some cases [it’s been shown that connectivity can predict function](https://youtu.be/KFfaBoDANNI?t=134). However, the fascinating [‘rewired ferrets’ experiments](https://www.youtube.com/watch?v=8Bvblav-BQk&list=PLyGKBDfnk-iAQx4Kw9JeVqspbg77sfAK0&index=65) showed that training input also conditions function strongly (newborn ferrets with auditory cortex rewired to receive visual input still learn to see). This implies that animal brains have a very optimized initial configuration, but also the flexibility to adapt to structural damages or drastical environmental condition changes.

Many well-performing techniques simply stack two architectures that work for two separate domains (eg: CNN visual embedder and LSTM language model) and re-train them for a new combined task (eg: image captioning). 

<img class="post-img-double" src="/img/brains-vs-anns/image7.png">
<img class="post-img-double" src="/img/brains-vs-anns/image2.png">


I suggest trying to mimic what we know today of how the human brain is wired (from [the Human Connectome Project](http://www.humanconnectomeproject.org/), for example), and plugging in some state-of-the-art modules for vision, language, and audio-processing.


### Slow and Data-Light Learning

Humans seem to learn slowly (in real time, it takes a human ~2 years to learn a language at a basic level, and ~18 years to learn advanced level language usage or complex language tasks like translation) but with few examples. Machines, on the other hand, learn very fast (in the order of weeks to achieve state of the art in some tasks) but are very data-hungry. Some techniques require less training data but might take longer to train, like [Imitation Learning](https://medium.com/@SmartLabAI/a-brief-overview-of-imitation-learning-8a8a75c44a9c), [Competitive Self-Play](https://openai.com/blog/competitive-self-play/), and [Symbolic Pregressions (2020)](https://arxiv.org/abs/2005.11212) and could be key to getting closer to human intelligence. 


### Intermixing Learning Techniques

A combination of learning strategies could be necessary for human-level intelligence, as Yann LeCun suggests with his cake analogy: “If intelligence is a cake, the bulk of the cake is [self-supervised learning](https://ai.stackexchange.com/a/10624), the icing on the cake is [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning), and the cherry on the cake is [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning).”

Humans train by learning from others (supervised learning) *and* experimenting on our own (unsupervised/self-supervised learning). For example, a chess student first talks to a teacher, then plays some games. They wouldn’t go to a chess tournament after just talking to a teacher or playing games alone. Can we combine/emulate these kinds of training efficiently in ML too? 


## Final words & further studying

What do you think of these approaches? Have you actually seen any of these used in the wild (with success or otherwise)? Which do you think may have merits? Let me know if you do some experiments to try them out. 

If you’ve been intrigued by the potential of imitating biological brains, here are some up-to-date resources to dig deeper, in order of relevance: 



*   [Nancy Kanwisher’s The Human Brain course on YouTube](https://www.youtube.com/watch?v=i1pdQjdAndc&list=PLyGKBDfnk-iAQx4Kw9JeVqspbg77sfAK0) (2018)
*   [Ninja Nerd Lectures on Embryology](https://www.youtube.com/watch?v=8-KF0rnhKTU&list=PLTF9h-T1TcJjUxgs0dqyDCaS-glauXcsL&index=2) (2019)
*   [A critique of pure learning and what artificial neural networks can learn from animal brains by Anthony M. Zador](https://www.nature.com/articles/s41467-019-11786-6) (2019)
*   [AI for physics & physics for AI by Max Tegmark](https://www.youtube.com/watch?v=pkJkHB_c3nA) (2020)
*   [Brains Explained video on cortical columns](https://www.youtube.com/watch?v=x2mYTaJPVnc) (2017)
*   [Deciphering Brain Codes to Build Smarter AI by Gabriel Kreiman](https://www.youtube.com/watch?v=h0InlY2WKc0) (2020)

_Thanks to Javi Silveira, [David Ha (@hardmaru)](https://twitter.com/hardmaru), [Pato Palladino (@alcuadrado)](https://twitter.com/alcuadrado) and [Lady White (@itsladywhite)](https://twitter.com/itsladywhite) for providing feedback and pointers._

_Image by [David Clode on Unsplash](https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)._

