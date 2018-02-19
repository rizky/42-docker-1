#!/bin/bash

# Run the teamspeak server
export LD_LIBRARY_PATH=/opt/teamspeak
cd /opt/teamspeak
./ts3server logpath=/data/logs
