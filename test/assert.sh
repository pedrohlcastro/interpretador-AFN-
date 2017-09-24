#!/usr/bin/env bash

#####################################################################
##
## title: Assert Extension
##
## description:
## Assert extension of shell (bash, ...)
##   with the common assert functions
## Function list based on:
##   http://junit.sourceforge.net/javadoc/org/junit/Assert.html
## Log methods : inspired by
##	- https://natelandau.com/bash-scripting-utilities/
## author: Mark Torok
##
## date: 07. Dec. 2016
##
## license: MIT
##
#####################################################################

RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
MAGENTA=$(tput setaf 5)
NORMAL=$(tput sgr0)
BOLD=$(tput bold)

log_header() {
  printf "\n${BOLD}${MAGENTA}==========  %s  ==========${NORMAL}\n" "$@" >&2
  }

log_success() {
  printf "${GREEN}✔ %s${NORMAL}\n" "$@" >&2
}

log_failure() {
  printf "${RED}✖ %s${NORMAL}\n" "$@" >&2
}


assert_eq() {
  local expected="$1"
  local actual="$2"
  local msg

  if [ "$#" -ge 3 ]; then
    file="$3"
  fi

  if [ "$expected" == "$actual" ]; then
    log_success "$DUMP $FOO $file"
    return 0
  else
    [ "${#file}" -gt 0 ] && log_failure "$FOO $DUMP $file" || true
    return 1
  fi
}