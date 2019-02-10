---
layout: post
title:  "Designing Digital Life and Death"
---

<img class="swasthya" src="/img/digital-life/1.jpg">

As can happen to anyone, earlier today I was [marvelling
at the wonders of digital scarcity](https://twitter.com/maraoz/status/1094247203026149377), a gift brought to the world
by blockchain technology. Having the ability to create scarce
digital goods unlocks many new possibilities for app developers. 

One such possibility that just occurred to me, and I want to share, is the ability to design a sort of **digital violence**, implemented by a mechanic that allows the destruction of digitally scarse goods. This, I think, could lead to the creation of an interesting decentralized digital identity system. 

## Digital Life
Imagine a blockchain-based registry where people can burn some 
value to create a new digital "life". For example, let's write an Ethereum smart contract to do this: 

```js
pragma solidity ^0.5.2;

contract Life {
  mapping(address => uint256) public health;

  function spawn() payable public {
    require(msg.value == 1 ether);
    health[msg.sender] = 10;
    address(0).transfer(msg.value); // burn the ether
  }
}
```

Here, anyone can call the `spawn` function, burning 1 ETH to create a new life with 10 "health" points.

## Digital Violence
Now let's implement a way for people to punish this identity via digital violence:
```js
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

contract Life {
  using SafeMath for uint256;

  ...

  function isAlive(address x) public view returns (bool) {
    return health[x] > 0;
  }

  function hit(address victim) public {
    require(isAlive(msg.sender));
    health[victim] = health[victim].sub(1); 
  }
}


```

Any life can `hit` another to reduce it's health. If a life reaches 0 health, it is destroyed (it dies). 

The semantics of the `hit` function and what 'dying' means can be application-specific.
For example, if this system is used for an online forum, 
the "report" button could trigger a `hit` against the life 
associated to the user account being reported.
Death of a user's life could mean being banned
from the forum (remember spawning a new life costs real money).

## Healing
Let's now add the ability of lives to cure one another, signaling they don't want other to die:
```
contract Life {
  ...
  function heal(address friend) public {
    require(isAlive(msg.sender));
    require(health[friend] < 10);
    health[friend] = health[friend].add(1); 
  }
}
```

However, the mechanisms, as described above, are not very useful unless there's some sort of limit to the ability of any life to hit or heal another. There's lots of ways to do this, but we'll implement the simplest.

## Time-Limiting Actions

A simple way to do this is to time-limit `hit`s and `heal`s
to one action per day. The idea behind this is that a life owner 
has enough time to react (by asking friends to heal them, or by
retaliating and hitting the attacker). This is implemented easily with a `cooldown` modifier:
 
```
contract Life {

  mapping(address => uint256) public lastActionTimestamp;

  ...

  modifier cooldown() {
    require(now - lastActionTimestamp[msg.sender] > 1 days);
    _;
    lastActionTimestamp[msg.sender] = now;
  }

  function hit(address victim) cooldown public {
    ...
  }

  function heal(address friend) cooldown public {
    ...
  }
}
```

Now, each digital life can `hit` or `heal` only once per day.

## Dynamics and Next Steps

The fact that each life costs money, and that it can only `hit` or `heal` once each day makes the ability to perform those actions scarce too. The amount of damage and healing available in the system has an upper bound that depends on the amount of ETH burnt and the time passing. Apps can rely on `isAlive` to determine if a certain address should be allowed to interact, and use its `health` as some sort of reputation. 

Some pending questions and future work:
- ○ How to prevent a user controlling 10 lives to gang them up and kill anyone instantly.
- ○ Does this work if the contract holds the ETH and it can be refunded by commiting suicide? (My guess is it doesn't)
- ○ Should we use the ERC20 token standard to model health?
- ○ Implementing a simple test use-case for this system (maybe a chat?).

This mechanism on its own is not very useful, but hopefully the potential is clear. The goal of this post is to get others excited about implementing some sort of digital life system where digital "violence" has real-world consequences (loss of value). If you have any feedback or would like to collaborate, feel free to ping me!


For the complete code used in this post, check [this github project](https://github.com/maraoz/digital-life).

Thanks for reading!

