1. NPM - > NPM does not stands for node package manager. it does not have full form . It manages packages.
          Its repository for all packages.
2. npm init - input details and it will create the package.json file for us.
3. package.json - it is configuration file for our npm. We need it for manages the third party packages.
4. bundlers - It bundles out packages and file and get ready our project for production
5. Dependencies - There are two type of dependencies we can install in our application. one is dev dependencies and 
other dependencies are nomal. dev dependency are used in development work and normal dependency used in other activity then development.
6."parcel": "^2.8.3" --  caret sign stands for - if new version will availabel in future it will uatomaticallu 
    update the minor version in application.
7. "~2.8.3" -- it will update all future pathced version without increamenting the minoir version.
8. pakcege-lock.json - It keeps record of exact version of packages being used
9. integrity in pakcege-lock.json - it will keep same the vesion of packege from local to production.
10. node_modules -  node_ modules cotain all dependency defined in package.json and being used in our application.
11. node_modules can be created again with the help of package.json and package-lock.json file so we should not
 push node_modules on github.
 12. npx - It executes the packages. for example - (npx parcel index.html) - it will execute the parcel.
 13. Parcel is responsible for
        -Dev build
        -up local server
        -HMR - Hot Module replacement
        -Parcel use File Watching Algortihtm - written in C++ - it keep track of chnages in all files and update the chnages
        -Caching - Faster Builds
        -Image optimization 
        -Minification of files for production
        -Bundling
        -File Comression
        -Consistent Hashing - 
        -Code splitting
        -Differential bundling - to suppport older browser.
        -Parcel gives better error handling suggestion
        -Host our app on HTTPS
        -Tree Shaking - remove unused code \
        - Difference dev and prod bundles

14. npx parcel build index.html - while running this command we will get one exception to resolve that exception
    We should remove the main from package.json file.
15. browsersList - We can define this property in package.json and provide the browsers list you wants your app support browsers

