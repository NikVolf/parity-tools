#### full build travis - nightly
```
multirust update nightly
multirust override nightly
cargo build --release --verbose --features travis-nightly -p ethash -p ethcore-util -p ethcore -p ethsync -p ethcore-rpc -p parity
```
