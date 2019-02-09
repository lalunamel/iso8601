#!/usr/bin/env bash
# 1
# Builds junk

echo '### Building Journal ###'
yarn install
yarn run build production
