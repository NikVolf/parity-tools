

#### Capnp pros (https://github.com/dwrensha/capnpc-rust)

- high speed (upto 2gbps ?)
- rpc support

#### Capnp cons

- runtime library is half full with unsafe code
- no single test
- contains open issues aged a year
- no good documentation with examples
- little evidence of being useful anywhere
- can't serialize arbitrary types if one going to save speed advantage (need to use their api and type system to modifiy messages inplace)
