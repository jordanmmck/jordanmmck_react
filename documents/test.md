# ♦ Ethereum: World Computer ♦

```js
const aaaa = 1;
const bbbb = 'string';
const cccc = `test${aaaa}`;
const dddd = true;
// comment
const function = (a, b) => {
  console.log(!aaaa >= bbbb);
  Date.now() * 100;
};
class x extends y {

}
```

```python
# comment
class Animal:
  def __init__():
    self.u = 1234

def function(a, b):
  for i in range(55):
    print(i)
```

```jsx
import { NavLink } from 'react-router-dom';

export default class TwetchStream extends React.Component {
  state = {
    c: [],
    u: [],
  };
}

const SubNav = props => (
  <div className="sub-nav-container">
    {props.childLinks.map(childLink => {
      return (
        <NavLink
          key={childLink}
          to={`/${props.parentLink}/${childLink}`}
          activeClassName="is-active"
        >
          {childLink}
        </NavLink>
      );
    })}
  </div>
);

export default SubNav;
```

```css
ul > li {
  background: #eee;
}
```

![header](/images/header.jpeg)

Here in some inline code: `a => b ==> c`.
I’ve long been skeptical that Bitcoin would win out as future-money, but in light of the recent increase in pro-Bitcoin.
Here is some more: `A < B <= C === D`.
Here in some inline code: `a => b ==> c`.
I’ve long been skeptical that Bitcoin would win out as future-money, but in light of the recent increase in pro-Bitcoin.
Here is some more: `A < B <= C === D`.
I’ve long been skeptical that Bitcoin would win out as future-money, but in light of the recent increase in pro-Bitcoin.
I’ve long been skeptical that Bitcoin would win out as future-money, but in light of the recent increase in pro-Bitcoin.
I’ve long been skeptical that Bitcoin would win out as future-money, but in light of the recent increase in pro-Bitcoin.
I’ve long been skeptical that Bitcoin would win out as future-money, but in light of the recent increase in pro-Bitcoin.

> I’ve long been skeptical that Bitcoin would win out as future-money, but in light of the recent increase in pro-Bitcoin sentiment...
>
> - Jordan McKinney

I’ve long been skeptical that Bitcoin would win out as future-money, but in light of the recent increase in pro-Bitcoin sentiment...

```js
// define thing to 1
const thing = 1111111111111111111111;
const s = 'string';
const func = (a, b) => {
  if (a === 1) {
  } else if (a === true) {
  }
};
```

During research I ran into the question of how Bitcoin will maintain security as the block reward declines. Despite a lot of searching (and pestering people on Twitter) I was surprised at how little discussion I found, and how bad the proposed solutions seemed.

![header](/images/header.jpeg)

![alt text][logo]

[logo]: /images/header.jpeg 'Logo Title Text 2'

## H2 Header

During research I ran into the question of how Bitcoin will maintain security as the block reward declines. Despite a lot of searching (and pestering people on Twitter) I was surprised at how little discussion I found, and how bad the proposed solutions seemed.

### H3 Header

Unless I’ve completely missed something, I can’t see how Bitcoin security does not decline with block rewards — which follow a negative exponential!

#### H4 Header

This problem has been discussed elsewhere (0, 1, 2, 3, 4), but I haven’t found any source which lays out the problem and critically assesses the commonly proposed solutions. So, that is the purpose of this post.

If I have missed something important then this post can serve as an application of Cunningham’s Law and someone can enlighten me.

## Basics of Proof-of-Work

Value is stored on the Bitcoin network — that is its purpose.

The network uses proof-of-work (PoW) to (among other things) protect against 51% attacks. PoW protects against `51% => 55%` attacks by making them expensive to pull off — not impossible!

To successfully do a 51% you need to acquire slightly more than half the hash power of the network. If the network has a lot of hash power then this will probably be expensive because hash power has a real world cost (hardware and electricity).

```css
a {
  color: red;
}
a:active {
  color: blue;
}
```

```python
# comment
def func(a, b):
  for i in range(10):
    print(i, a, b)
    print(False)

a = [1, 2, 3]
```

## The Security Budget

The security of a PoW network depends on the cost to 51% it. The cost to 51% it depends on how much money the miners are collectively spending. How much miners are spending depends on how much they’re being paid.

Therefore the security of a PoW network depends on how much money the network is paying out to miners — which is why I’m calling this amount the “security budget”. The security budget directly determines security.

## Simplest Example

A new ASIC-resistant, PoW cryptocurrency appears. It pays out exactly \$1M/day (the security budget!) to miners regardless of total hash power etc.

At first, one person mines. Total money spent mining is low, hash power is low, difficulty is low, and they earn the entire \$1M/day.

New miners join. Total money spent mining rises, hash power rises, difficulty rises, and the \$1M/day is spread across more people.

As the system approaches equilibrium, the combined cost expended by miners (“total spend”) approaches, but is always less than, \$1M/day.

![eth](/images/eth.jpeg)

Why?

If the total spend were more than $1M/day the less efficient miners would lose money and soon quit — lowering total spend. If the total spend were much less than $1M/day new miners would join, eat those profits, and total spend would creep upward.

Now, since the size of that \$1M/day pie that miners fight for depends on how much hash power they contribute, they constantly compete to output more hash power per dollar spent.

Therefore the $1M/day security budget will tend to get the network close to the maximum total hash power that can be had for $1M/day. This is good!

### The Attack

Let’s attack this network. To 51% any PoW network we just need a bit more than half the hash power, right? So, how much do we need to spend?

Well, we know the protocol pays out $1M/day. So, the miners can’t be spending more than $1M/day mining. Competition should squeeze them to produce close to the maximum total hash that can be had for $1M/day — but that’s OK, it’s still capped at $1M/day.

So we can kill the network for about \$1M/day.

### Defense

How could our attack be prevented? Well, all you can do with PoW is make attacks more expensive, so you increase the security budget.

Suppose the network doubles the security budget to $2M/day. New miners join, total spend increases, hash power increases, and a new equilibrium is reached just like before. Now total spend is close to, but less than, $2M/day. And the network has close to the maximum hash power you can get for \$2M/day.

OK. Now we can kill the network for \$2M/day.

It also works in the other direction. If the amount paid to miners were halved from $1M/day to $500K/day we could kill the network for \$500K/day.

### Security Budget Determines Security!

We know that PoW protects against 51% attacks by making them expensive.

Now, we’ve seen that the cost to attack depends on how much miners are spending, and this is capped by the amount the network pays out to miners — the “security budget”.

Therefore, we can see that security budget determines network security.

## ASIC Example

In the example above, the network was ASIC-resistant and we concluded that security budget determines security.

Does this conclusion change if we add ASICs? Bitcoin has ASICs after all, and this post is (supposedly) about Bitcoin.

---

A new ASIC-mined cryptocurrency appears. It pays $1M/day ($365M/year) to miners. Miners must purchase, and periodically upgrade, the ASICs used to mine on the network — this can be amortized into an annual hardware cost. They also incur an annual operating cost (the usual electricity, etc).

Maybe it works out that miners spend $250M/year on hardware and $100M/year on operating cost. Whatever the break down is, they can’t sustainably\* spend more than they earn. So, the sum of these will approach, but generally be less than, annual miner revenue — aka the annual security budget:

annual hardware cost + annual operating cost ≤ annual security budget

As before, the pool of miners will tend to produce the maximum hash power that can be had given the security budget. To maximize hash power they must figure out how much to spend each year upgrading hardware. Miners don’t like upgrading hardware, but competition eats their operating margins as hardware ages. Eventually some equilibrium hardware-spend is found.

The result of all of this is that, if the protocol spends $365M/year on miners it gets close to a “true” $365M/year worth of hash power, regardless of how the hardware-spend works out. So, it all tends to work out same as before.

### The Attack

The cost to attack will vary somewhat depending on how long the hardware refresh period is. Suppose miners spend $300M/year on hardware, $65M/year (\$178K/day) on operating costs, and hardware has a 3 year useful lifespan.

This means at any given time there is $900M worth of hardware mining, and it’s burning $178K/day. So, to attack the network we must spend $900M on ASICs and $178K/day.

### Defense

The community anticipates our attack. How can they prevent it? Once again, all they can do is increase the security budget.

The network doubles the security budget to \$2M/day. New miners buy ASICs and start mining, hash power increases, and after some time a new equilibrium is reached.

The ratio of hardware spend to operational spend should stay roughly the same so now we can expect to spend twice as much on ASICs and twice as much per day to attack.

And, just like before this works the other way too. If the security budget were halved to \$500K/day, and equilibrium were reached, we could expect to spend half as much on ASICs and half as much per day to attack.

### Security Budget (Still) Determines Security

ASICs make 51% attacks more expensive — assuming we are comparing relatively short-lived attacks — but the attack cost is still bound and determined by the security budget. How could it be otherwise?

ASICs or not, the network must have a high security budget if it’s going to have high security.

## Absolute Hash Rate

Notice that we didn’t need to care about absolute hash rate in these examples. The ultimate determinant of cost to attack was how much miners were spending — which was capped by how much they were earning.

So the absolute hash rate produced by the pool of miners is not a direct measure of security — it is a sort of proxy for security, even a red herring.

Example: Imagine a network that pays out a constant $1M/day to miners no matter what, forever. It has a constant level of security — whether we attack today, or one year from now, we can expect to pay $1M/day.

But, what would the hash power graph look like for this network? It would go up and to the right. Hardware is always advancing. You can get more hashes per dollar next year than you can today.

It would be a mistake to look at the rising hash power and simply conclude that the network is becoming more secure with time (see next section for Bitcoin-specific illustration).

Cost expended (security budget!) — not absolute hash rate — determines security… This is why statements like the one below make no sense.

> As ASICs become more efficient we can reduce the overall cost spent mining!
