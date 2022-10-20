# Script to copy over all contents from project to current location
echo "API - Copying from Dist...."
cp -a ../../api/dist/. ../../../../heroku-deployments/zurich-api/.
cp -a ../../api/assets ../../../../heroku-deployments/zurich-api
echo "Copied! "
echo "API - Deleting source location..."
rm -rf ../../api/dist
echo "Deleted source location (zurich-api)!"
