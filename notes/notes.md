1. NPM - > NPM does not stands for node package manager. it does not have full form . It manages packages.
          Its repository for all packages.
2. npm init - input details and it will create the package.json file for us.
3. package.json - it is configuration file for our npm. We need it for manages the third party packages.
4. bundlers - It bundles out packages and files and get ready our project for production
5. Dependencies - There are two type of dependencies we can install in our application. one is dev dependencies and 
other dependencies are nomal. dev dependency are used in development work and normal dependency used in other activity other then development.
6."parcel": "^2.8.3" --  caret sign stands for - if new version will available in future it will auomatically
    update the minor version in application.
7. "~2.8.3" -- it will update all future patched version without increamenting the minor version.
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
29. Babel also transpiled from ES6 code to older browser compatible code.
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
44. props - short form of porperty , suppose we wants to pass some data to component then we can send the data with help of props.
45. We can pass as many props to component react will wrap all propes into one object
46. props can be recieved in two way 
    1.  const comp = (props) => {}
    2. const comp = (props1 , props2) => {} // destrcuturing of objects on the fly -- its a JS concept.
47. Config Driven UI - All the UI driven by config
48. When we loop over list then we will have to pass key props in its child component - 
49. If we dont' provide key in loops then it will re-render all its child component when a new child component introduce.
50. Never use index as a key in for loop. Its not recommended from React documentation.
51. There are two type of exports/import  first type of default export/import 
    export default <name of variable/component>
    import component from "path";
52. Second type is Named export/import -- this is used when we have to export multiple variable form same file.
    export const Component/varibale
    import {component} from "path";
53. React is fast/efficient in DOM manupulation.
54. Hooks are noraml JS utility functions given by React to us.
55. useState() and useEffect() are most important hooks provided by React.
56. useState() - used to create state variables in React.
57. IT maintains state of component.
58. Whenever a state variable changes then React re-rendering the components.
59. React use Reconcillation Algorithm( React Fiber).
60. Virtual DOM is representation of real DOM in terms of JS objects
61. React is very efficient to diff b/w the virtual DOMs and render a new one, and  its kick in when setProperty call from useState hook.
62. React Fiber is the new reconcillation engine in REACT 16. ITs main goal is to enable incremental rendering of the virtual DOMS.
63. increamnetal rendeting which splits rendering work into chunks and spread it out over mupltiple frames.
64. Two appraoches to fetch data from API.
65. App load ---> fetch Data ----> render it on API.
66. App/Page load -----> Render it on API ------> Fetch Data from API.(this approach is recommended)
67. useEffect(() => {} ,[]) hook will be used to fetch data from server
68. First argument is callback arrow function , this function executed when component render cycle  complete.
69. fetch() is an ECMAScript6 (ES6) feature.
70. Shimmer UI is concept in which we show dummy ui to user do that user can anticipate coming result on ui it is better the loading ui concept.
71. Conditional rendering means when we render based on some condition suppose our data is empty then we will show the shimmer UI.
72. Why do we need state variabel(useState) ? - if we declare some local variabel and we try to change it then that change will not reflect in UI because React component does not know that a property changed so for that we use useState hook it will re-render the UI and updates the changes on UI.
