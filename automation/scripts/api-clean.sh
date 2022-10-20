# Script to clean up source & destination files
echo "Deleting target files (Heroku)...."
rm -rf ../../../../heroku-deployments/zurich-api/node_modules
rm -rf ../../../../heroku-deployments/zurich-api/app
rm -rf ../../../../heroku-deployments/zurich-api/auth
rm -rf ../../../../heroku-deployments/zurich-api/assets
rm -rf ../../../../heroku-deployments/zurich-api/common
rm -rf ../../../../heroku-deployments/zurich-api/db
rm -rf ../../../../heroku-deployments/zurich-api/events
rm -rf ../../../../heroku-deployments/zurich-api/health
rm -rf ../../../../heroku-deployments/zurich-api/promotions
rm -rf ../../../../heroku-deployments/zurich-api/payments
rm -rf ../../../../heroku-deployments/zurich-api/subscriptions
rm -rf ../../../../heroku-deployments/zurich-api/filemanager
rm -rf ../../../../heroku-deployments/zurich-api/swagger
rm -rf ../../../../heroku-deployments/zurich-api/util
rm ../../../../heroku-deployments/zurich-api/main.d.ts
rm ../../../../heroku-deployments/zurich-api/main.js
rm ../../../../heroku-deployments/zurich-api/main.js.map
rm ../../../../heroku-deployments/zurich-api/tsconfig.build.tsbuildinfo
rm ../../../../heroku-deployments/zurich-api/yarn.lock
rm ../../../../heroku-deployments/zurich-api/package-lock.json
echo "Completed clean up (Heroku)!"
echo "Deleting source files (zurich-api)..."
rm -rf ../../api/dist
echo "Completed clean up (zurich-api)!"
