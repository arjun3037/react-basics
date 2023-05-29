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
16. We can define scripts in package.json file under script tag. 
17. npm start is equivlant to npm run start - so we can use npm start instead  of npm run start
18. npm build is not equivalent to npm run build - so we have to type npm run build to build    the  prject for production.
19. JSX and react are two different things
20. React can be wriiten without JSX.
21. JSX is not html inside java script
22. JSX is HTML like or XML syntax not exactly HTML.
23. JSX is just syntax
24. JSX transpiled before it reached to the JS engine. Parcel(bundlers) does it for us.
25. JSX is not a pure java script it will not run by JS engine.
26. Parcel takes help from babel to transpiled JSX code.
27. JSX code tranpiled to React.createElemnt by Babel and then React.createElement is rendered by ReactDOM to browser friendly code.
28. Babel is javascript compiler.
29. Babel transpiled from ES6 code to older browser compatible code.
30. Attribute in JSX is in camel case.
31. IF JSX code written in two line then it should be enclosed with round bracket
32. Everything is component in react
33. Component are of two type - 1) Class Based component- older way to write 2) Functional Component 
34. React Functional compnent => Its a noraml JS function.
35. Component name should be start with capital letter. React understands in capital letter.
36. Functional component is normal JS function which returns a  JSX elemnts.
37. Component composition is one component inside another component.
38. in curlybraces {} we can execute any piece of JS code inside the component.
39. JSX takes care cross site injection. JSX won't blindly render data from api , its sanitizes every data its rendering.
40. JSX can have only one parent element.
41. React Fragment (<React.Fragment>) - we can add two element at parent level parallely
        const HeadingComponent = () => (
            <React.Fragment>
                <div id = "container1"></div>
                <div id = "container2"></div>
            </React.Fragment>
        );
42. <React.Fragment> behaves like an empty tag. this belong to React lib.
43. we can use <></> instead of React fragment.
        const HeadingComponent = () => (
            <>
                <div id = "container1"></div>
                <div id = "container2"></div>
            </>
        );
44. 

