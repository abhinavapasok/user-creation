#!/bin/sh


echo "Building app" 

npm run build

echo "Deplyoing..."


sudo rm -rf /var/www/51.20.190.70/build

sudo cp -r dist/* /var/www/51.20.190.70
echo "Done" 