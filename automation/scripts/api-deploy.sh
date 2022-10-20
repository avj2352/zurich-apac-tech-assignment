# Script to copy over all contents from project to current location
echo "API - Deploying...."
cdk deploy --ZurichTechAPIStack
echo "API - Deleting dist..."
rm -rf ../../aws/lambda/api/dist
echo "Deleted source location (zurich-api)!"
