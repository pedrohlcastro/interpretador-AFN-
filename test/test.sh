#! /bin/bash

source "./assert.sh"

for i in $(seq 1 9); do
    $(node ../src/index.js -f case0$i.al -t case0$i.in > case0$i.expect);
    expected=$(cat case0$i.expect)
    actual=$(cat case0$i.out)
    assert_eq "$expected" "$actual" "$i"
done;

$(node ../src/index.js -f case10.al -t case10.in > case10.expect);
expected=$(cat case10.expect)
actual=$(cat case10.out)
assert_eq "$expected" "$actual" "10"

