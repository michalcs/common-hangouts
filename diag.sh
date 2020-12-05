#!/bin/bash
d=$(date "+%Y-%m-%d_%H.%M")
f=~/Desktop/Sketch_Diag_$d

mkdir -p $f &
echo "Creating folder on Desktop…"
wait


log show --last 1h --predicate '(subsystem == "com.bohemiancoding.sketch3.xcode") && (category == "collaboration")' --info > $f/Collab-$d.log &
echo "Copying Collaboration logs…"
wait

log show --last 15m --predicate 'processImagePath CONTAINS[c] "Sketch"' --info > $f/Console-$d.log &
echo "Copying Console logs…"
wait

find ~/Library/Logs/DiagnosticReports -mtime -1h -iname "*sketch*.crash" -exec cp {} $f \; &
echo "Copying Crash logs…"
wait

find ~/Library/Preferences -mtime -1d -iname "*sketch3*.plist" -exec cp {} $f \; &
echo "Copying Sketch preferences…"
wait

system_profiler -detaillevel mini SPDisplaysDataType SPHardwareDataType SPSoftwareDataType > $f/Sys_Profile.txt &
echo "Capturing anonymous system profile…"
wait

echo "All done!"