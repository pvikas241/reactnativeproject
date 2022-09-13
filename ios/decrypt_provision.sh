#!/bin/sh

# Decrypt the file
mkdir $HOME/ios/secrets
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$IOS_MOBILE_PROVISION_BASE64" \
--output $HOME/ios/secrets/MYCEA_Development_Profile.mobileprovision MYCEA_Development_Profile.mobileprovision.gpg
