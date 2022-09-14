#!/bin/sh

# Decrypt the file
mkdir secrets
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="@*!Ext652" \
--output secrets/MYCEA_Development_Profile.mobileprovision MYCEA_Development_Profile.mobileprovision.gpg
