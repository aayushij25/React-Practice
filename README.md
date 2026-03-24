# REACT PRACTICE 

# PARCEL
- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm (written in C++)
- Caching : Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Content Hashing
- Code Splitting
- Differential Bundling : support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking : remove ununsed code
- Different dev and prod bundles

# Food ordering app - Mac n' Soul
/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search 
 *  - Restaurant Container
 *      - Restaurant Cards
 *          - Image
 *          - Name of restaurant, Star rating, Cuisine, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 Two types of exports/imports
 - Default Export/Import
 export default Component;
 import Component from "path";

 - Named Export/Import
 export const Component;
 import {Component} from "path";

 # React Hooks
 - Normal JS Functions
 - useState() : Superpowerful State Variable in React, imported as named import
 - useEffect()

 # 2 Types of Routing in web apps:
 - Client Side Routing
 - Server Side Routing

 # Mounting Cycle
 - Parent Constructor
 - Parent Render
    - Child1 Constructor
    - Child1 Render
    - Child2 Constructor
    - Child2 Render
    - Child1 ComponentDidMount
    - Child2 ComponenetDidMount
- Parent ComponentDidMount

# Updating Cycle
- Constructor (dummy data)
- Render (dummy data)
    <HTML Dummy>
- ComponentDidMount
    <API CALL>
    <this.setState> -> State variable is updated
- Update
    Render (API data)
        <HTML API>
    ComponentDidUpdate

# Unmounting Cycle
- ComponentWillUnmount (when move to different component)

# Redux
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector