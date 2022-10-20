echo "Deploying to assets folder..."
cp -a ../../ui/build/ ../../aws/build/
echo "deploy successful!"
echo "clean up UI"
rm -rf ../../ui/build
echo "clean up successful!"