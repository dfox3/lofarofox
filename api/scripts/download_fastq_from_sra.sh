#!/bin/bash

for sra_id in ${@}; do
    fasterq-dump ${sra_id}
done