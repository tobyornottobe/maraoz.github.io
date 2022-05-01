---
layout: post
title:  "A vision for Decentraland's next 5 years"
draft: true
---
<figure>
  <figcaption style="text-align: left">
  Summary: I share my vision for Decentraland's next 5 years.
  </figcaption>
</figure>
<img class="cover" src="/img/decentraland-vision/cover.jpg">

As some of you may know, I've been involved in the early days of [Decentraland](https://decentraland.org/). I participated in creating the first prototypes between 2015 and 2017. Back then, Decentraland's testnet ran as [a fork of bitcoin](https://github.com/decentraland/bronzeage-node/commit/7a5245e8434558d298d07d0dd2bd9862ca3af408), and fully in the browser. Crazy times. I also contributed in naming the project and defining the vision: to build a decentralized and open virtual reality world. I took little part in actually executing on that vision: the credit there goes to [Esteban](https://twitter.com/eordano), [Ari](https://twitter.com/arimeilich), and the amazing Decentraland team. 

Today, almost 7 years later, I believe we can say that original vision from 2015 was achieved. Neal Stephenson should be [proud of us](https://images.gr-assets.com/authors/1430920344p8/545.jpg) (?). Decentraland today truly is open, decentralized, and it's an increasingly amazing shared 3d virtual world. 

After leaving the project to focus on OpenZeppelin back in 2017, I've been amazed by evolution. In the past years, I've rejoined the Decentraland community, participating in [its DAO](https://governance.decentraland.org/), building some [content](https://play.decentraland.org/?position=52,90) and [tools](https://genesis.city/). I was ecstatic to realize the original vision was achieved. 

I also realized that my best contribution to the project was probably not going to be related to execution (funding or building projects, voting in the DAO, creating content), but to strategy and vision (as I contributed in the beginning). I hope the sheer amount of years I spent thinking about Decentraland give me some authority, or at least an audience. The following are my personal views (again, I'm not part of the Decentraland Foundation). I'll be candid and straightforward, tackling the platform's main problems head on. Some ideas are mine. Some ideas are spoken in hushed tones among Decentraland community members, afraid to risk proposing crazy stuff. I hope that sharing my vision sparks strategic discussions and inspires our community to take Decentraland to the next level.

## The Open Metaverse

So, how does Decentraland look like in 2027, five years from now? To me, it has become **the open metaverse**. The free (as in "free speech", not "free beer"), community-owned alternative to [whatever companies such as Meta create](https://maraoz.com/img/decentraland-vision/you-zuck.jpg). I always thought of Decentraland as a VR-browser. Today, most people use Google Chrome, Safari, or Edge to browse the web. However, open source and free alternatives such as Firefox and Brave are there, for those of us who value freedom, tech sovereignty, and open standards. 

How can Decentraland become the de-facto standard for an open metaverse? I think we need to improve the following three things, in order of importance:  

1) Accessibility  
2) Developer-friendliness  
3) Cozyness  

## How we improve Decentraland's Accessibility
Decentraland is currently too hard and/or expensive to use. If we're going to beat other metaverses, we need to make it very simple to get started. I imagine a 12-year-old kid building their house in Decentraland and inviting their friends to see what they built. Later, they dress up their avatars and go exploring the public lands. If they can't do that in Decentraland easily and for free, they will build it in Facebookverse and get ads everywhere (yuck). How can we make this happen?
### Private Lands
First, we need to enable private lands. This means the ability to create a 3d scene and share it only with whomever we want. I envison something very similar to today's [builder](https://builder.decentraland.org/), but with the ability to generate a shareable link to inhabit the scene with friends. This will allow people to get started in Decentraland for free, and it's step 1 in making it (economically) accessible. Having to buy a LAND for $7k USD or more to start creating playable content for Decentraland makes no sense. 
### New Public Land Issuance
Aside from enabling private lands and content, we need to increase the pool of public lands. The original map of 301x301 parcels was great to bootstrap the project by generating LAND scarcity, but it's already too small for our community. What's worse, many LANDs are in the hands of speculators who will never deploy content to the world. My proposed solution? Continuous LAND issuance. Every day, or every week, the protocol can auction a new LAND, and the highest bidder can spawn a new LAND at any coordinate adjacent to an already existing one. If nobody wants to bid, no LAND is created that period. Believe it or not, this was the original scheme for LAND issuance, and how the first testnet worked. Yes, this would reduce prices for already existing LANDs, but... if only whales can buy LANDs, other metaverses will kill Decentraland and your LAND will be worthless. Let's make Genesis City the first of many cities in Decentraland!

## How we improve developer-friendliness
Decentraland as a platform is *way* more powerful than most users know. Decentraland's main differentiator is that it's an open-source protocol, which means anyone can build on it without asking for permission. Both at the smart contract level, the Decentraland Nodes (called catalysts), the SDK, the client, and scene content, the Decentraland Foundation is still too much of a central coordinator. Developers need to understand each component separately to hack cool stuff with them without contacting the Foundation. At the moment, it's hard to see the difference between the protocol, the nodes, and the client. Everything gets mixed up as a blurry "Decentraland". I guess most users don't even know that the content deployed on each LAND is determined by its owner, not by the "company" behind Decentraland.
Some ideas on how to improve this:

### Fully document components and APIs
A huge developer pain point to solve is that it's very hard build stuff for Decentraland, at all levels of the protocol. Current [docs](https://docs.decentraland.org/) are very stylish, but far from high quality, organized or up to date. Some critical infrastructure docs (like the catalyst API) are on [hard to find sites](https://decentraland.github.io/catalyst-api-specs/#tag/Content-Server). All components of the protocol must be assessed, explained, and documented. Tutorials can be written on each component, and example apps should be maintained. Examples of some random ideas:
- a LAND liquidity protocol that issues a "liquidLAND" ERC20 when you deposit LANDs according to some function of the coordinates (eg: [2^(-abs(x)/300)+2^(-abs(y)/300)](https://www.wolframalpha.com/input?i=2%5E%28-abs%28x%29%2F300%29%2B2%5E%28-abs%28y%29%2F300%29)), and which allows you to withdraw LANDs for "liquidLAND" too.
- an alternative client which reads the data from IPFS and renders it differently (eg: [isometric view](https://www.youtube.com/watch?v=U6rGeAuPcno), or 2D)
- a bot that tweets every time a new scene is uploaded to coordinate (x, y)
- a "layer 2" game over Decentraland where LAND owners can deploy pre-determined farm, mine, or forest scenes which generate FOOD, STONE and WOOD ERC20 tokens. These can in turn be used to craft wearables. An "age of empires" over Decentraland.

All of this is possible today... but it's very hard to achieve without asking the Foundation for help. Technical know-how is buried deep in Discord and GitHub.

### Ecosystem Development Fund
Many crypto projects have these, so I don't need to say much here. An Ecosystem Fund should be an independent team which helps value-add projects financially. Some examples: developing alternative clients, onboarding brands to build content for Decentraland, events like TEDxDecentraland, etc. Funding should not be a problem, as the DAO can easily provide the money for this for years.


## How we improve cozyness
Some of the best digital experiences I had as a gamer are related to spending time with friends in virtual worlds. Decentraland currently feels a whirlwind of one-off events. Come get this POAP, this exclusive NFT drop, or this 1-week event. I get it, that's what drives engagement today. But remember we're thinking 5 years from now. To make this last, we need something that compounds over time. This means allowing everyone to create and invest time into their own place. Today, Decentraland is frantic and exciting. We need to make it cozy.

- 14 y/o house building
- social interactions
- adventures and things to do globally, not NFT 1-time events


<div style="text-align: center">
	<iframe style="display:block;" src="https://maraoz.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

### Additional Resources and Learning
- [Decentraland's website](https://decentraland.org/)
- [Decentraland's DAO](https://governance.decentraland.org/)
- [Genesis city map](https://genesis.city/)

### Acknowledgements

Cover photo by <a href="https://unsplash.com/@yogidan2012">Daniele Levis Pelusi</a> on <a href="https://unsplash.com/">Unsplash</a>
  
### Comments and Discussion
[Discuss on HN]() — [Discuss on Reddit]() — [Email a private comment](mailto:contact@maraoz.com)


