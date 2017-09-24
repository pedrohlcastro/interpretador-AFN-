#! /bin/bash

source "./assert.sh"
tests=$(ls *.json);

for i in $tests; do
    $(node ../src/index.js -f $i -t $i.input > $i.out);
    expected=$(cat $i.expect)
    actual=$(cat $i.out)
    assert_eq "$expected" "$actual" "not equivalent!"
done;

