#### full build travis - nightly
```
multirust update nightly
multirust override nightly
cargo build --release --verbose --features travis-nightly -p ethash -p ethcore-util -p ethcore -p ethsync -p ethcore-rpc -p parity
```
#### full build travis - beta
```
multirust update beta
multirust override beta
cargo build --release --verbose --features travis-beta -p ethash -p ethcore-util -p ethcore -p ethsync -p ethcore-rpc -p parity
```
