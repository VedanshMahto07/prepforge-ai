export const fallbackAnswers = {

  // ─── FRONTEND ───────────────────────────────────────────────────────────────

  "What is HTML and what is it used for?":
    "HTML (HyperText Markup Language) is the standard language for structuring web pages. It uses tags like <h1>, <p>, <div> to define content and layout that browsers render.",

  "What is CSS and how does it style a webpage?":
    "CSS (Cascading Style Sheets) controls the visual presentation of HTML elements — colors, fonts, spacing, layout. Rules are written as selectors + declarations: `p { color: red; }`.",

  "What is JavaScript?":
    "JavaScript is a dynamic, interpreted programming language that runs in the browser (and Node.js on server). It adds interactivity to web pages — event handling, DOM manipulation, API calls.",

  "What is React?":
    "React is a JavaScript library by Meta for building UI using reusable components. It uses a virtual DOM to efficiently update only changed parts of the real DOM.",

  "What is JSX?":
    "JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript. Babel transpiles it to React.createElement() calls at build time.",

  "What is a React component?":
    "A component is a reusable, self-contained piece of UI. Functional components are plain JS functions that return JSX. They accept props as input and manage their own state.",

  "What are props in React?":
    "Props (properties) are read-only inputs passed from parent to child components. They allow data to flow down the component tree. A child cannot modify its own props.",

  "What is state in React?":
    "State is mutable data managed within a component using useState. When state changes, React re-renders the component to reflect the new values in the UI.",

  "What is responsive design?":
    "Responsive design makes web pages adapt to different screen sizes using techniques like fluid grids, flexible images, and CSS media queries.",

  "What is Flexbox?":
    "Flexbox is a CSS layout model that arranges items in a row or column. Properties like justify-content, align-items, and flex-wrap control alignment and spacing.",

  "What is the difference between HTML and HTML5?":
    "HTML5 adds semantic elements (<header>, <footer>, <article>), multimedia tags (<audio>, <video>), Canvas API, local storage, and better form input types over older HTML.",

  "What is a CSS class vs an ID?":
    "A class (.btn) can be applied to multiple elements; an ID (#header) must be unique per page. IDs have higher specificity than classes.",

  "What is the DOM?":
    "The DOM (Document Object Model) is a tree representation of an HTML document. JavaScript can traverse and manipulate it to dynamically change content, style, and structure.",

  "What is the difference between inline, block, and inline-block elements?":
    "Block elements (div, p) take full width and start on a new line. Inline elements (span, a) flow with text. Inline-block combines both: flows inline but respects width/height.",

  "What is a media query?":
    "A media query applies CSS rules conditionally based on device characteristics like screen width. Example: `@media (max-width: 768px) { ... }` targets mobile screens.",

  "What is the Virtual DOM and why does React use it?":
    "The Virtual DOM is a lightweight JS copy of the real DOM. React diffs the old and new virtual DOM, then applies only the minimal real DOM changes needed — making updates fast.",

  "What is useState and how do you use it?":
    "useState is a React hook that adds state to functional components. `const [count, setCount] = useState(0)` gives a state variable and a setter. Calling the setter triggers a re-render.",

  "What is useEffect and when should you use it?":
    "useEffect runs side effects (data fetching, subscriptions, DOM mutations) after render. Dependency array controls when it runs: [] = once on mount, [val] = when val changes.",

  "What is the difference between props and state?":
    "Props are read-only inputs from a parent; state is mutable data owned by the component itself. Both trigger re-renders when changed.",

  "What is the Context API?":
    "Context API lets you share data (theme, auth, locale) across a component tree without prop drilling. Create a context, wrap with Provider, consume with useContext.",

  "What are React Hooks and why were they introduced?":
    "Hooks (useState, useEffect, useRef…) let functional components use state and lifecycle features. Introduced in React 16.8 to replace class components and simplify code reuse.",

  "What is React Router and how does routing work?":
    "React Router maps URL paths to components. <BrowserRouter> wraps the app; <Route path='/about' element={<About/>}/> renders the component when the URL matches.",

  "What is event bubbling in JavaScript?":
    "When an event fires on an element, it bubbles up through its ancestors. A click on a button also triggers click handlers on its parent div, form, body, etc. Use stopPropagation() to stop it.",

  "What are closures in JavaScript?":
    "A closure is a function that remembers variables from its outer scope even after that scope has returned. Used in callbacks, event handlers, and module patterns.",

  "What is hoisting?":
    "JS moves var declarations and function declarations to the top of their scope at parse time. var hoists as undefined; let/const hoist but are not initialised (temporal dead zone).",

  "What is the difference between == and === in JavaScript?":
    "== compares values with type coercion (1 == '1' is true). === compares value AND type (1 === '1' is false). Always prefer === to avoid unexpected coercions.",

  "What is async/await and how does it work?":
    "async/await is syntactic sugar over Promises. An async function returns a Promise. await pauses execution until the Promise resolves, making async code read like synchronous code.",

  "What is a Promise in JavaScript?":
    "A Promise represents a value that will be available in the future: pending, fulfilled, or rejected. Chain with .then()/.catch() or use async/await.",

  "What is CSS Grid and how does it differ from Flexbox?":
    "Grid is two-dimensional (rows + columns), ideal for full page layouts. Flexbox is one-dimensional (row or column), ideal for aligning items within a single axis.",

  "What is the difference between localStorage and sessionStorage?":
    "Both store key-value strings in the browser. localStorage persists indefinitely; sessionStorage clears when the tab is closed.",

  "Explain the React reconciliation algorithm.":
    "React diffs the old and new virtual DOM trees. It assumes elements of different types produce different trees, and uses keys to match list items. Only differing nodes get updated in the real DOM.",

  "How does React Fiber work under the hood?":
    "Fiber is React's internal reconciliation engine (rewritten in v16). It breaks rendering into small units of work that can be paused, aborted, or prioritised — enabling concurrent features.",

  "What is code splitting and how do you implement it in React?":
    "Code splitting breaks the bundle into smaller chunks loaded on demand. Use React.lazy() + Suspense, or dynamic import(). Reduces initial load time.",

  "What is lazy loading and how does it improve performance?":
    "Lazy loading defers loading of non-critical resources until needed. Images load when entering the viewport; JS chunks load when the route is visited. Reduces initial page weight.",

  "What is the difference between SSR and CSR?":
    "CSR (Client-Side Rendering) sends a blank HTML shell; JS renders the page in the browser. SSR (Server-Side Rendering) sends fully rendered HTML from the server — faster first paint, better SEO.",

  "What is hydration in the context of React?":
    "Hydration is the process where React attaches event listeners to server-rendered HTML. The HTML is visible immediately; React then 'hydrates' it to make it interactive.",

  "Explain useMemo and when you would use it.":
    "useMemo caches the result of an expensive calculation. It recomputes only when dependencies change. Use it when a computation is slow and its inputs don't change every render.",

  "Explain useCallback and how it differs from useMemo.":
    "useCallback memoizes a function reference. useMemo memoizes a computed value. Use useCallback when passing callbacks to child components that rely on referential equality (React.memo).",

  "What is tree shaking and how does it work in webpack?":
    "Tree shaking removes unused exports from the final bundle. Webpack (with ES modules) statically analyses import/export statements and eliminates dead code during bundling.",

  "How would you approach optimizing a slow React application?":
    "Profile with React DevTools. Memoize with React.memo, useMemo, useCallback. Code-split with lazy/Suspense. Virtualise long lists (react-window). Avoid unnecessary state and context updates.",

  "What is the difference between controlled and uncontrolled components?":
    "Controlled: form input value is driven by React state. Uncontrolled: input manages its own DOM value; you read it via a ref. Controlled components are easier to validate and test.",

  "Explain the concept of lifting state up in React.":
    "When two sibling components need to share data, move the state to their closest common ancestor. The parent passes state down as props and handlers back as callbacks.",

  "What are render props and how do they work?":
    "A render prop is a function prop that a component calls to know what to render. It's a pattern for sharing logic: `<DataFetcher render={(data) => <List data={data}/>}/>`. Mostly replaced by hooks.",

  "What is a Higher Order Component (HOC)?":
    "An HOC is a function that takes a component and returns an enhanced component. Used to share cross-cutting concerns like auth checks or logging. `withAuth(Dashboard)`.",

  "How would you implement infinite scrolling in React?":
    "Use IntersectionObserver to detect when a sentinel element at the bottom is visible, then fetch the next page of data and append to the list. Libraries like react-infinite-scroll-component simplify this.",

  // ─── BACKEND ────────────────────────────────────────────────────────────────

  "What is Node.js?":
    "Node.js is a JavaScript runtime built on Chrome's V8 engine. It lets you run JS on the server side with a non-blocking, event-driven I/O model suited for scalable network apps.",

  "What is Express.js?":
    "Express.js is a minimal, unopinionated Node.js web framework. It provides routing, middleware support, and HTTP utility methods to build APIs and web servers quickly.",

  "What is an API?":
    "An API (Application Programming Interface) is a contract that lets two software systems communicate. A REST API, for example, exposes endpoints that clients call over HTTP.",

  "What is REST?":
    "REST (Representational State Transfer) is an architectural style for APIs using HTTP methods (GET, POST, PUT, DELETE), stateless requests, and resource-based URLs.",

  "What is JSON?":
    "JSON (JavaScript Object Notation) is a lightweight, text-based data format using key-value pairs. It is the standard data interchange format for REST APIs.",

  "What is a server?":
    "A server is software (or hardware) that listens for requests on a network and returns responses. A web server handles HTTP requests from browsers or API clients.",

  "What is HTTP and what are common HTTP methods?":
    "HTTP (HyperText Transfer Protocol) is the protocol for transferring data on the web. Common methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).",

  "What is a database?":
    "A database is an organised collection of structured data. SQL databases (PostgreSQL, MySQL) use tables and relations; NoSQL databases (MongoDB, Redis) use documents, key-value pairs, etc.",

  "What is the difference between GET and POST requests?":
    "GET retrieves data; parameters go in the URL. POST sends data in the request body to create/submit. GET is idempotent and cacheable; POST is not.",

  "What is an HTTP status code? Give examples.":
    "Status codes indicate the result of an HTTP request. 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.",

  "What is npm and what is it used for?":
    "npm (Node Package Manager) is the default package manager for Node.js. It installs, manages, and publishes JavaScript packages from the npm registry.",

  "What is a port in networking?":
    "A port is a logical endpoint on a server. HTTP uses 80, HTTPS uses 443, Node.js dev servers often use 3000 or 5000. Ports allow multiple services to run on one machine.",

  "What is an environment variable?":
    "An environment variable is a key-value pair in the OS environment, used to configure apps without hardcoding secrets. Accessed in Node.js via process.env.KEY.",

  "What is a route in Express.js?":
    "A route is a mapping between an HTTP method + URL path and a handler function. `app.get('/users', handler)` responds to GET /users.",

  "What is CRUD?":
    "CRUD stands for Create, Read, Update, Delete — the four basic database operations. They map to HTTP methods: POST, GET, PUT/PATCH, DELETE.",

  "What is middleware in Express.js?":
    "Middleware are functions that run between receiving a request and sending a response. They can modify req/res, end the request, or call next() to pass control forward. Used for logging, auth, parsing.",

  "What is JWT and how does authentication with it work?":
    "JWT (JSON Web Token) is a signed, compact token containing encoded claims. Server signs it on login; client sends it in the Authorization header. Server verifies signature on each request — no session storage needed.",

  "What is the difference between authentication and authorization?":
    "Authentication verifies who you are (login). Authorization determines what you can access (permissions). Auth first, then authz.",

  "What is MongoDB and when would you use it over SQL?":
    "MongoDB is a document-oriented NoSQL database storing JSON-like documents. Use it when schema is flexible, data is hierarchical, or rapid iteration is needed. SQL is better for complex joins and strict relationships.",

  "What is SQL and what are its core operations?":
    "SQL (Structured Query Language) is used to manage relational databases. Core operations: SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, WHERE.",

  "What is CORS and why does it exist?":
    "CORS (Cross-Origin Resource Sharing) is a browser security policy that blocks requests to a different origin. Servers opt-in by sending Access-Control-Allow-Origin headers.",

  "What is an ORM and why would you use one?":
    "An ORM (Object-Relational Mapper) maps database tables to code objects. Use it to write queries in your language instead of raw SQL, enabling type safety and reducing boilerplate. Examples: Sequelize, Prisma.",

  "What is the difference between SQL and NoSQL databases?":
    "SQL databases are relational (tables, schemas, ACID). NoSQL databases are non-relational (documents, key-value, graph) and prioritise flexibility and horizontal scaling.",

  "What is a RESTful API and what are its constraints?":
    "REST constraints: stateless, client-server, cacheable, uniform interface (resource URLs + HTTP methods), layered system, optional code-on-demand. These ensure scalability and simplicity.",

  "What is bcrypt and why is it used for passwords?":
    "bcrypt is a password-hashing algorithm that incorporates a salt and a work factor (cost). It makes brute-force attacks slow. Never store plain-text passwords — always hash with bcrypt.",

  "What is pagination and why is it important in APIs?":
    "Pagination splits large datasets into pages (limit + offset, or cursor-based). It avoids returning millions of rows at once, reducing response time and memory usage.",

  "What is a database transaction?":
    "A transaction is a group of operations that succeed or fail together (ACID). If any step fails, all changes are rolled back, ensuring data consistency.",

  "What is the purpose of a .env file?":
    "A .env file stores environment variables (DB_URL, API_KEY) outside of source code. Libraries like dotenv load it into process.env. Never commit .env to git.",

  "What is async error handling in Express.js?":
    "Async errors won't reach Express's default error handler unless you call next(err) or wrap async route handlers. Use a wrapper or express-async-errors library to auto-forward errors.",

  "What is rate limiting and why is it important?":
    "Rate limiting restricts how many requests a client can make in a time window. It protects against DDoS attacks, brute-force, and API abuse. Libraries: express-rate-limit.",

  "Explain database indexing and when to use it.":
    "An index is a data structure (B-tree) that speeds up lookups on a column. Use on frequently queried, high-cardinality columns. Trade-off: faster reads, slower writes, extra storage.",

  "Explain load balancing and common strategies.":
    "Load balancing distributes traffic across multiple servers. Strategies: round-robin (equal turns), least connections (least busy server), IP hash (sticky sessions), weighted round-robin.",

  "What is microservices architecture and how does it differ from monolithic?":
    "Microservices break an app into small, independently deployable services each with its own DB. Monolith is a single deployable unit. Microservices improve scalability and team autonomy but add operational complexity.",

  "What is caching and what are common caching strategies?":
    "Caching stores computed results for reuse. Strategies: cache-aside (app checks cache first), write-through (write to cache + DB together), TTL expiry. Tools: Redis, Memcached.",

  "What is the N+1 query problem and how do you solve it?":
    "N+1 occurs when fetching N records then making N additional queries for related data. Solve with eager loading (JOIN or include) or DataLoader (batching).",

  "Explain database sharding.":
    "Sharding splits data across multiple DB instances (shards) based on a shard key. Each shard holds a subset of data. Enables horizontal scaling but complicates cross-shard queries.",

  "What is event-driven architecture?":
    "In EDA, services communicate via events (messages). A producer emits an event; consumers react. Decouples services and enables async workflows. Tools: Kafka, RabbitMQ.",

  "Explain the CAP theorem.":
    "CAP: a distributed system can only guarantee two of three properties — Consistency (all nodes see same data), Availability (every request gets a response), Partition Tolerance (system works despite network splits).",

  "What is a message queue and when would you use one?":
    "A message queue stores messages between producer and consumer, enabling async processing and decoupling. Use for email sending, image processing, or tasks that can be deferred. Tools: RabbitMQ, SQS.",

  "How would you design a scalable REST API from scratch?":
    "Define resources and endpoints, use proper HTTP methods, paginate responses, add auth (JWT), validate inputs, use a database with indexes, add caching (Redis), rate limit, monitor with logging, and deploy behind a load balancer.",

  "What is connection pooling in databases?":
    "Connection pooling reuses a set of open DB connections instead of opening a new one per request. Reduces latency and prevents overwhelming the DB with too many connections.",

  "What is horizontal vs vertical scaling?":
    "Vertical scaling adds more CPU/RAM to one server. Horizontal scaling adds more servers. Horizontal is preferred for high availability and virtually unlimited scale.",

  "How do you handle zero-downtime deployments?":
    "Use rolling deployments (replace instances one by one), blue-green deployments (swap traffic), or canary releases (route small % of traffic first). Combined with health checks.",

  "Explain the ACID properties of a database.":
    "Atomicity (all or nothing), Consistency (data stays valid), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes).",

  // ─── FULLSTACK ───────────────────────────────────────────────────────────────

  "What is full stack development?":
    "Full stack development involves building both the frontend (UI) and backend (server, DB) of a web application. A full stack developer handles the complete request-response cycle.",

  "What is the frontend?":
    "The frontend is everything the user sees and interacts with in the browser — HTML, CSS, JavaScript, and UI frameworks like React.",

  "What is the backend?":
    "The backend is the server-side: application logic, database, authentication, and APIs. It processes requests from the frontend and returns data.",

  "What is HTTP?":
    "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. It defines how clients send requests and servers return responses.",

  "What is a web server?":
    "A web server is software that listens for HTTP requests and serves responses. Examples: Nginx (serves static files, reverse proxy), Express.js (Node.js server).",

  "What is the difference between frontend and backend?":
    "Frontend runs in the browser and handles UI/UX. Backend runs on a server and handles data processing, business logic, authentication, and database access.",

  "What is a URL and how does it work?":
    "A URL (Uniform Resource Locator) identifies a resource on the web: `https://example.com/path?query=1`. Browser resolves the domain via DNS, connects to the server, and requests the path.",

  "What is responsive design?":
    "Responsive design ensures web pages adapt to different screen sizes using fluid grids, flexible images, and CSS media queries.",

  "What is a framework and why do we use one?":
    "A framework provides pre-built structure, conventions, and tools to speed up development. Examples: React (UI), Express (server). Reduces boilerplate and enforces best practices.",

  "What is version control and what is Git?":
    "Version control tracks changes to code over time. Git is the most popular VCS — it allows branching, merging, and collaboration without overwriting each other's work.",

  "What is a package manager?":
    "A package manager automates installing, updating, and removing software libraries. npm and yarn are common for JavaScript; pip for Python.",

  "What is localhost?":
    "Localhost (127.0.0.1) refers to your own machine. When you run a dev server on localhost:3000, you're accessing it only from your computer.",

  "Explain client-server architecture.":
    "The client (browser) sends HTTP requests to the server. The server processes the request, queries the database if needed, and returns a response. This separates concerns and enables scaling.",

  "What is authentication and how is it implemented?":
    "Authentication verifies a user's identity. Common implementation: user submits credentials, server validates and issues a JWT or session, client stores it and sends it with future requests.",

  "What is authorization and how does it differ from authentication?":
    "Authentication = who are you? Authorization = what can you do? After login (authn), the server checks roles/permissions before granting access to a resource (authz).",

  "What is a REST API?":
    "A REST API is a server that exposes resources via URLs and HTTP methods. Stateless — each request contains all info needed. Responses are typically JSON.",

  "What is CRUD and how does it map to HTTP methods?":
    "Create → POST, Read → GET, Update → PUT/PATCH, Delete → DELETE. These are the four fundamental operations on any data resource.",

  "What is the MVC pattern?":
    "MVC (Model-View-Controller) separates an app into: Model (data/business logic), View (UI), Controller (handles requests, coordinates M and V). Common in frameworks like Express + templating engines.",

  "What is state management and why is it needed?":
    "As apps grow, passing data via props becomes unmanageable. State management (Redux, Zustand, Context) provides a centralised store accessible by any component.",

  "What is session-based vs token-based authentication?":
    "Session: server stores session data, sends a session ID cookie. Token: server issues a signed JWT; client stores and sends it. Sessions are stateful; tokens are stateless and better for APIs.",

  "How do you connect a React frontend to a Node.js backend?":
    "React calls the backend API via fetch/axios. In development, configure a proxy in vite.config.js or package.json. In production, serve React from the same origin or configure CORS.",

  "What is a webhook?":
    "A webhook is an HTTP callback. A third-party service sends a POST request to your URL when an event occurs (e.g. payment completed). Your server processes the payload.",

  "What is middleware?":
    "Middleware functions sit between request and response. In Express they access req/res/next. Used for logging, auth guards, body parsing, error handling.",

  "Explain scalability and how you would scale a full stack app.":
    "Scalability is the ability to handle growing load. Horizontal: add more servers + load balancer. Vertical: bigger server. Add caching (Redis), CDN, DB read replicas, queue for async work.",

  "How would you deploy a MERN application to production?":
    "Build React (`npm run build`), serve static files via Express or Nginx. Deploy Node.js to a VPS/cloud (EC2, Railway, Render). Use MongoDB Atlas. Add SSL, env vars, PM2 for process management.",

  "What is CI/CD and how would you set it up?":
    "CI (Continuous Integration) auto-runs tests on every push. CD (Continuous Deployment) auto-deploys passing builds. Tools: GitHub Actions, GitLab CI. Pipeline: install → test → build → deploy.",

  "Explain Docker and containerization.":
    "Docker packages an app and its dependencies into a container — a lightweight, isolated environment. Containers run identically anywhere. Dockerfile defines the image; docker-compose orchestrates multi-container apps.",

  "Explain system design basics with an example.":
    "Break the problem into: requirements → high-level components (client, server, DB, cache, CDN) → data model → API design → scalability (sharding, replication, load balancing). Example: URL shortener uses a KV store and a hash function.",

  "How would you implement role-based access control (RBAC)?":
    "Assign roles (admin, user, guest) to users. Store role in JWT. Middleware checks role before granting access to routes. Optionally use a permissions table for fine-grained control.",

  "What is a monorepo and what are its tradeoffs?":
    "A monorepo keeps multiple projects (frontend, backend, shared libs) in one repo. Benefits: shared code, atomic commits, easier refactoring. Trade-offs: larger repo, slower CI, complex tooling (Nx, Turborepo).",

  "How would you handle file uploads securely in a full stack app?":
    "Use multipart/form-data. Validate file type and size on both client and server. Store files in object storage (S3), not on the server disk. Generate signed URLs for access. Scan for malware.",

  "What is WebSocket and how does it differ from HTTP?":
    "WebSocket is a persistent, full-duplex connection between client and server. Unlike HTTP (request-response), WebSocket allows the server to push data at any time. Used for chat, live updates.",

  "Explain optimistic UI updates.":
    "Update the UI immediately assuming the server call will succeed, then reconcile if it fails. Provides a snappy UX. Common in like buttons, task toggles.",

  "How do you secure a REST API?":
    "Use HTTPS, validate and sanitise all inputs, authenticate with JWT, authorize with roles, rate limit, add CORS headers, log requests, and rotate secrets.",

  "What is GraphQL and how does it differ from REST?":
    "GraphQL is a query language for APIs. Clients request exactly the fields they need in a single query. REST returns fixed shapes from multiple endpoints; GraphQL returns flexible shapes from one endpoint.",

  "How would you architect a multi-tenant SaaS application?":
    "Options: shared DB (tenant_id column), separate schemas per tenant, or separate DBs per tenant. Use middleware to scope queries by tenant. Consider isolated deployments for enterprise customers.",

  "What is a reverse proxy and why is Nginx commonly used?":
    "A reverse proxy sits in front of backend servers, forwarding client requests. Nginx is used for SSL termination, load balancing, serving static files, and caching — improving performance and security.",

  "How would you implement real-time notifications in a full stack app?":
    "Use WebSockets (socket.io) for low-latency bidirectional comms, or Server-Sent Events for one-way push. Server emits events when data changes; client subscribes and updates UI.",

  // ─── REACT ──────────────────────────────────────────────────────────────────

  "What is React and why is it popular?":
    "React is a declarative UI library by Meta. It's popular for its component model, fast virtual DOM diffing, large ecosystem, and strong community/job market.",

  "What is a component in React?":
    "A component is a reusable piece of UI. Functional components are JS functions returning JSX. They can hold state, use hooks, and accept props.",

  "What is create-react-app?":
    "create-react-app (CRA) is a CLI tool that bootstraps a React project with webpack, Babel, and dev server pre-configured. Now largely replaced by Vite for new projects.",

  "What is the difference between a class component and a functional component?":
    "Class components use lifecycle methods (componentDidMount) and this.state. Functional components use hooks (useState, useEffect). Functional components are now preferred.",

  "What is React DevTools?":
    "React DevTools is a browser extension that lets you inspect the component tree, view props/state, profile performance, and debug re-renders.",

  "What is the purpose of the key prop in lists?":
    "Keys help React identify which list items changed, added, or removed. Use stable, unique IDs as keys — not array indexes — to avoid subtle bugs during reconciliation.",

  "How do you render a list in React?":
    "Use Array.map() to transform a data array into JSX elements. Each element must have a unique key prop: `items.map(item => <li key={item.id}>{item.name}</li>)`.",

  "What is conditional rendering in React?":
    "Rendering JSX based on a condition. Use ternary: `{isLoggedIn ? <Dashboard/> : <Login/>}`, short-circuit: `{error && <ErrorMsg/>}`, or if-else before return.",

  "What is an event handler in React?":
    "A function passed to an element's event prop that runs when the event fires: `<button onClick={handleClick}>`. React wraps native events in SyntheticEvent for cross-browser consistency.",

  "What is the root element in a React app?":
    "React mounts the entire component tree into a single DOM node (usually `<div id='root'>`). In React 18: `ReactDOM.createRoot(document.getElementById('root')).render(<App/>)`.",

  "What is the Context API and when would you use it?":
    "Context API shares global data without prop drilling. Use for themes, auth, language. For complex state logic, prefer Zustand or Redux.",

  "What is prop drilling and how do you avoid it?":
    "Prop drilling is passing props through many intermediate components that don't use them. Avoid it with Context API, state management libraries, or component composition.",

  "What is the difference between useEffect with [] vs no dependency array?":
    "[] runs once after initial mount (like componentDidMount). No array runs after every render. [dep] runs when dep changes.",

  "What is a Higher Order Component?":
    "An HOC is a function that takes a component and returns a new enhanced component. Used for auth wrappers, logging, data fetching. Pattern: `withAuth(Component)`.",

  "What are render props?":
    "A pattern where a component receives a function prop and calls it to render. Shares stateful logic. Largely replaced by hooks.",

  "What is useRef and when would you use it?":
    "useRef holds a mutable value that doesn't trigger re-renders. Use to access DOM nodes (focusing inputs, measuring), or store previous values.",

  "What is useReducer and when is it better than useState?":
    "useReducer manages complex state with a reducer function (state, action) => newState. Better than useState when state has multiple sub-values or transitions follow explicit actions.",

  "What is lazy loading with React.lazy()?":
    "React.lazy() dynamically imports a component. Wrap in <Suspense fallback={<Spinner/>}> to show a loading state while the chunk loads. Reduces initial bundle size.",

  "What is the React reconciliation process?":
    "React diffs the new virtual DOM against the previous one, identifies minimal changes (insertions, updates, deletions), and applies them to the real DOM efficiently.",

  "What is the difference between React.memo and useMemo?":
    "React.memo wraps a component to skip re-renders if props haven't changed. useMemo memoizes a computed value inside a component.",

  "How do you handle forms in React?":
    "Controlled: bind input value to state, update with onChange. Uncontrolled: use useRef. For complex forms use libraries like React Hook Form or Formik.",

  "Explain the React Fiber architecture.":
    "Fiber reimplements the reconciler as a linked list of units of work. It enables interruptible, prioritised rendering — the foundation of concurrent features like Suspense and transitions.",

  "How does React's reconciliation algorithm work?":
    "React walks the component tree, comparing old and new virtual DOM (diffing). Different element types → replace subtree. Same type → update props. Keys help match list items.",

  "What is concurrent mode in React?":
    "Concurrent mode lets React prepare multiple UI versions simultaneously. Low-priority updates can be interrupted by urgent ones (e.g. typing stays smooth while a heavy list renders).",

  "Explain the Suspense API and its use cases.":
    "Suspense lets a component 'wait' for async work (lazy imports, data fetching with frameworks like Relay/Next.js). Shows a fallback UI during the wait.",

  "How would you implement a custom hook?":
    "Extract reusable stateful logic into a function prefixed with 'use'. Example: `useWindowWidth()` uses useState + useEffect to track window width and return it.",

  "How would you optimize a React app with 10,000 list items?":
    "Use windowing/virtualisation (react-window or react-virtual): render only visible items. Memoize list items with React.memo. Avoid inline object/array creation.",

  "Explain useCallback and when it prevents unnecessary renders.":
    "useCallback memoizes a function reference. If passed to a child wrapped in React.memo, the child won't re-render because the function reference stays stable between parent renders.",

  "What are portals in React and when would you use them?":
    "Portals render a component's DOM output outside its parent DOM hierarchy. Use for modals, tooltips, and dropdowns that need to escape overflow:hidden or z-index stacking contexts.",

  "What is an error boundary in React?":
    "An error boundary is a class component implementing componentDidCatch and getDerivedStateFromError. It catches runtime errors in the component tree and shows a fallback UI instead of crashing.",

  "How does React handle synthetic events?":
    "React wraps native browser events in SyntheticEvent objects for cross-browser consistency. In React 17+, events are attached to the root instead of the document.",

  "What is the stale closure problem in React hooks?":
    "When a useEffect or callback captures a stale version of state/props from when it was created. Fix by including the value in the dependency array, or using a ref to always read the latest value.",

  "How would you implement undo/redo functionality in React?":
    "Maintain a history array of states and a pointer. Each action pushes a new state onto history. Undo moves the pointer back; redo moves it forward. Store in useReducer.",

  "What is the difference between Redux, Zustand, and Context API for state management?":
    "Context API is built-in but causes re-renders widely. Redux has a strict pattern (actions, reducers) and excellent devtools but is verbose. Zustand is a lightweight store with a simple API — good middle ground.",

  // ─── JAVA ────────────────────────────────────────────────────────────────────

  "What is Java?":
    "Java is a statically typed, object-oriented, platform-independent language. Code compiles to bytecode that runs on the JVM — 'write once, run anywhere'.",

  "What is the JVM?":
    "The Java Virtual Machine executes Java bytecode. It handles memory management, garbage collection, and provides a layer of abstraction over the OS.",

  "What is the difference between JDK, JRE, and JVM?":
    "JVM runs bytecode. JRE = JVM + libraries needed to run Java apps. JDK = JRE + compiler (javac) + dev tools. You need JDK to develop, JRE to run.",

  "What are primitive data types in Java?":
    "int, long, double, float, boolean, char, byte, short. They store values directly (not objects) and are stored on the stack.",

  "What is an object in Java?":
    "An object is an instance of a class. It encapsulates state (fields) and behaviour (methods). Created with `new ClassName()`.",

  "What is a class in Java?":
    "A class is a blueprint for objects, defining fields and methods. `public class Dog { String name; void bark() { ... } }`",

  "What is inheritance in Java?":
    "Inheritance lets a subclass extend a superclass, inheriting its fields and methods. Use `extends`. Java supports single inheritance; interfaces provide multiple-inheritance behaviour.",

  "What is a constructor?":
    "A constructor is a special method with the same name as the class, invoked when creating an object with `new`. It initialises the object's state.",

  "What is the difference between == and .equals() in Java?":
    "== compares references (memory addresses). .equals() compares content. For Strings and objects, always use .equals() unless you specifically need reference equality.",

  "What is a String in Java?":
    "String is an immutable class in Java. Once created, its value cannot change. String literals are cached in the string pool for memory efficiency.",

  "What are access modifiers in Java?":
    "public (accessible everywhere), protected (same package + subclasses), default/package-private (same package), private (same class only).",

  "What is the static keyword?":
    "static belongs to the class, not instances. Static fields/methods are shared across all objects. Access via ClassName.method().",

  "What is the final keyword?":
    "final on a variable: can't reassign. On a method: can't override. On a class: can't extend (e.g., String is final).",

  "What is an array in Java?":
    "An array is a fixed-size, ordered collection of elements of the same type. `int[] nums = new int[5];`. Size cannot change after creation; use ArrayList for dynamic sizing.",

  "What is a loop in Java? Name the types.":
    "Loops repeat code. Types: for (known iterations), while (condition-based), do-while (runs at least once), enhanced for-each (iterating collections).",

  "What is polymorphism in Java?":
    "Polymorphism allows one interface to represent different types. Method overriding (runtime polymorphism) and method overloading (compile-time). A Shape reference can point to a Circle or Rectangle.",

  "What is encapsulation?":
    "Encapsulation bundles data (fields) and methods into a class and restricts direct access. Use private fields + public getters/setters to control access.",

  "What is abstraction?":
    "Abstraction hides implementation details and exposes only what's necessary. Achieved via abstract classes and interfaces.",

  "What is an interface in Java?":
    "An interface defines a contract of methods a class must implement. From Java 8, interfaces can have default and static methods. Enables multiple inheritance of type.",

  "What is the difference between an abstract class and an interface?":
    "Abstract class can have state, constructors, and concrete methods. Interface (pre-Java 8) only had abstract methods. A class can implement multiple interfaces but extend only one abstract class.",

  "What is exception handling in Java?":
    "Use try-catch-finally to handle runtime errors gracefully. `throw` raises an exception; `catch` handles it; `finally` always runs (cleanup).",

  "What is the difference between checked and unchecked exceptions?":
    "Checked exceptions (IOException) must be declared or caught — the compiler enforces this. Unchecked exceptions (RuntimeException, NullPointerException) don't need to be declared.",

  "What is a Collection in Java?":
    "The Collection framework provides data structures: List (ordered, duplicates), Set (no duplicates), Map (key-value), Queue. All extend java.util.Collection or java.util.Map.",

  "What is the difference between ArrayList and LinkedList?":
    "ArrayList uses a dynamic array — O(1) random access, O(n) insert/delete in middle. LinkedList uses doubly-linked nodes — O(1) insert/delete at ends, O(n) random access.",

  "What is HashMap in Java?":
    "HashMap stores key-value pairs using a hash table. O(1) average get/put. Keys must implement hashCode() and equals(). Not thread-safe; use ConcurrentHashMap in multi-threaded context.",

  "What is multithreading?":
    "Multithreading runs multiple threads concurrently. In Java, extend Thread or implement Runnable. Threads share heap memory, so synchronisation is needed for shared data.",

  "What is synchronization in Java?":
    "Synchronization prevents race conditions by allowing only one thread to access a critical section at a time. Use `synchronized` keyword on methods or blocks.",

  "What is the difference between Stack and Queue?":
    "Stack: LIFO (last in, first out) — push/pop. Queue: FIFO (first in, first out) — enqueue/dequeue. Java provides Deque (ArrayDeque) for both.",

  "What is autoboxing in Java?":
    "Autoboxing automatically converts primitives to wrapper objects (int → Integer) and unboxing does the reverse. Enables primitives in collections.",

  "What is the difference between String, StringBuffer, and StringBuilder?":
    "String is immutable. StringBuffer is mutable and thread-safe (synchronised). StringBuilder is mutable and not thread-safe but faster. Use StringBuilder for single-thread string manipulation.",

  "Explain Java memory management and garbage collection.":
    "JVM memory: Heap (objects), Stack (frames, locals), Metaspace (class metadata). GC automatically reclaims heap memory of unreachable objects. Algorithms: G1, ZGC, Shenandoah.",

  "What is the Java Stream API?":
    "Streams (Java 8+) enable functional-style operations on collections: filter, map, reduce, collect. They are lazy (evaluated only when terminal operation is called) and can be parallelised.",

  "What are lambda expressions in Java?":
    "Lambdas are anonymous functions: `(a, b) -> a + b`. Used to implement functional interfaces (one abstract method). Enabled functional programming in Java 8.",

  "Explain the Java Collections Framework in depth.":
    "Interfaces: List, Set, Map, Queue. Implementations: ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, PriorityQueue. Utility class: Collections for sorting, searching, syncing.",

  "What is the difference between HashMap and ConcurrentHashMap?":
    "HashMap is not thread-safe. ConcurrentHashMap allows concurrent reads and segment-locked writes, making it safe for multi-threaded environments without full lock.",

  "What are design patterns? Explain Singleton and Factory.":
    "Design patterns are reusable solutions to common problems. Singleton ensures one instance per class (private constructor + static getInstance). Factory creates objects without specifying the concrete class.",

  "What is the volatile keyword in Java?":
    "volatile ensures a variable's value is read from and written to main memory, not CPU cache. Guarantees visibility across threads but not atomicity.",

  "Explain deadlock and how to avoid it.":
    "Deadlock: two threads each hold a lock the other needs. Avoid: always acquire locks in the same order, use tryLock with timeout, or use higher-level concurrency utilities (java.util.concurrent).",

  "What is the Java Memory Model?":
    "JMM defines how threads interact with memory. It specifies happens-before relationships — guaranteeing visibility and ordering of actions between threads. Relevant for volatile, synchronized, and concurrent utilities.",

  "What is reflection in Java?":
    "Reflection allows inspecting and invoking classes, methods, and fields at runtime. Used in frameworks (Spring, Hibernate). Powerful but slow and bypasses access control.",

  "Explain generics in Java.":
    "Generics enable type-safe data structures and methods: `List<String>`, `<T> T identity(T t)`. Type info is erased at runtime (type erasure) but checked at compile time.",

  "What is the difference between Callable and Runnable?":
    "Runnable has no return value and can't throw checked exceptions. Callable returns a value (Future<V>) and can throw checked exceptions. Use with ExecutorService.",

  "What is a thread pool and when would you use one?":
    "A thread pool reuses a fixed set of threads to execute tasks, avoiding the overhead of creating/destroying threads. Use ExecutorService: `Executors.newFixedThreadPool(n)`.",

  "What is dependency injection?":
    "DI is a pattern where dependencies are provided to a class rather than created inside it. Promotes loose coupling and testability. Spring Framework implements DI via IoC container.",

  "Explain SOLID principles with Java examples.":
    "Single Responsibility: one class, one reason to change. Open/Closed: open for extension, closed for modification. Liskov Substitution: subclass can replace superclass. Interface Segregation: small interfaces. Dependency Inversion: depend on abstractions.",

  // ─── PYTHON ──────────────────────────────────────────────────────────────────

  "What is Python?":
    "Python is a high-level, interpreted, dynamically typed language known for its readable syntax. Widely used for web dev, data science, automation, and scripting.",

  "What are Python's key features?":
    "Dynamic typing, interpreted, garbage collected, readable indentation-based syntax, extensive standard library, multiple paradigms (OOP, functional), and a huge ecosystem (pip packages).",

  "What is a variable in Python?":
    "A variable is a named reference to an object. Python is dynamically typed — no declaration needed. `x = 10` binds the name x to the integer object 10.",

  "What are Python data types?":
    "Built-in types: int, float, complex, str, bool, list, tuple, dict, set, frozenset, bytes, NoneType.",

  "What is a list in Python?":
    "A list is an ordered, mutable collection: `[1, 'a', True]`. Supports indexing, slicing, and methods like append, pop, sort.",

  "What is a tuple and how is it different from a list?":
    "A tuple is ordered and immutable: `(1, 2, 3)`. Faster than lists. Use tuples for fixed data; lists for data that changes.",

  "What is a dictionary in Python?":
    "A dict is an unordered (insertion-ordered in Python 3.7+) collection of key-value pairs: `{'name': 'Alice', 'age': 30}`. O(1) average lookup.",

  "What is a function in Python?":
    "Defined with `def`. Takes arguments, executes a block, optionally returns a value. Functions are first-class objects — they can be passed and returned.",

  "What is the difference between print() and return?":
    "print() outputs to stdout (side effect). return sends a value back to the caller. A function without return returns None.",

  "What is indentation in Python?":
    "Python uses indentation (4 spaces standard) instead of braces to define code blocks. Consistent indentation is mandatory — mixing tabs and spaces causes IndentationError.",

  "What is a for loop in Python?":
    "A for loop iterates over any iterable: `for item in list`. Use range() for numeric ranges: `for i in range(10)`.",

  "What is a while loop?":
    "Runs while a condition is True: `while x > 0: x -= 1`. Use break to exit early, continue to skip to next iteration.",

  "What is an if-else statement?":
    "Conditional logic: `if condition: ... elif condition: ... else: ...`. Python also supports ternary: `x if condition else y`.",

  "What is None in Python?":
    "None is Python's null value. It's an object of type NoneType. Functions without an explicit return statement return None.",

  "What is pip?":
    "pip is Python's package installer. `pip install pandas` downloads and installs packages from PyPI. Manage dependencies in requirements.txt or pyproject.toml.",

  "What is a Python module and a package?":
    "A module is a single .py file. A package is a directory of modules with an __init__.py. Import with `import module` or `from package import module`.",

  "What are list comprehensions?":
    "Concise way to create lists: `[x**2 for x in range(10) if x % 2 == 0]`. More readable and faster than equivalent for loops.",

  "What is a lambda function?":
    "An anonymous, inline function: `lambda x: x * 2`. Used for short, throwaway functions. Can only contain one expression.",

  "What is the difference between deep copy and shallow copy?":
    "Shallow copy (copy.copy) copies the object but not nested objects — they share references. Deep copy (copy.deepcopy) recursively copies everything.",

  "What are *args and **kwargs?":
    "*args captures extra positional arguments as a tuple. **kwargs captures extra keyword arguments as a dict. Useful for flexible function signatures.",

  "What is object-oriented programming in Python?":
    "Python supports OOP: define classes with attributes and methods, create objects, use inheritance, polymorphism, and encapsulation. Everything in Python is an object.",

  "What is a class method vs a static method?":
    "classmethod receives the class (cls) as first argument — used for alternative constructors. staticmethod receives no implicit argument — it's a utility function in the class namespace.",

  "What is inheritance in Python?":
    "A subclass inherits attributes and methods from a parent class. `class Dog(Animal)`. Python supports multiple inheritance and uses MRO to resolve method lookup order.",

  "What is exception handling in Python?":
    "try/except/else/finally. `try` runs code that might fail. `except ExceptionType` catches it. `else` runs if no exception. `finally` always runs.",

  "What is a generator in Python?":
    "A function using `yield` instead of `return`. Returns a lazy iterator that produces values one at a time. Memory efficient for large sequences.",

  "What is a decorator in Python?":
    "A decorator is a function that wraps another function to add behaviour. `@decorator` syntax applies it. Common: @staticmethod, @classmethod, @property, @functools.wraps.",

  "What is the difference between is and == in Python?":
    "is checks identity (same object in memory). == checks equality (same value). `[] == []` is True; `[] is []` is False.",

  "What is a context manager and how does 'with' work?":
    "A context manager handles setup and teardown. `with open('file') as f:` automatically closes the file. Implement via __enter__/__exit__ or @contextmanager.",

  "What is the GIL in Python?":
    "The Global Interpreter Lock prevents multiple threads from executing Python bytecode simultaneously. Means Python threads don't utilise multiple CPU cores for CPU-bound tasks. Use multiprocessing instead.",

  "What are Python's built-in data structures?":
    "list, tuple, dict, set, frozenset, deque (collections), namedtuple, defaultdict, OrderedDict, Counter (all in collections module).",

  "Explain Python's memory management.":
    "Python manages memory with reference counting + cyclic garbage collector. Objects are stored on the heap. CPython uses a private allocator (pymalloc) for small objects.",

  "What are metaclasses in Python?":
    "Metaclasses are classes of classes — they define how classes behave. `type` is the default metaclass. Custom metaclasses can modify class creation (used in ORMs like Django models).",

  "Explain coroutines and asyncio in Python.":
    "Coroutines (async def) are functions that can suspend (await) and resume. asyncio provides an event loop to run many coroutines concurrently on a single thread — ideal for I/O-bound tasks.",

  "What is the difference between multiprocessing and multithreading in Python?":
    "Threads share memory but are limited by the GIL for CPU tasks. Processes have separate memory but bypass the GIL — use multiprocessing for CPU-bound parallel work.",

  "Explain Python's garbage collection mechanism.":
    "Python uses reference counting (object freed when refcount hits 0) + cyclic GC to handle reference cycles. The gc module provides control over the cyclic collector.",

  "What is a descriptor in Python?":
    "An object that defines __get__, __set__, or __delete__. Used to customise attribute access. Properties, classmethods, and staticmethods are implemented as descriptors.",

  "What are slots in Python and why would you use them?":
    "__slots__ restricts the attributes a class can have, replacing the per-instance __dict__ with a fixed-size array. Reduces memory usage significantly for classes with many instances.",

  "How does Python's import system work?":
    "Python searches sys.modules first (cache), then sys.path directories for a matching module. On find, executes the module's code and caches the module object.",

  "What is memoization and how do you implement it?":
    "Memoization caches function results for given inputs to avoid recomputation. Implement with a dict, or use `@functools.lru_cache` decorator.",

  "Explain method resolution order (MRO) in Python.":
    "MRO defines the order Python searches classes for a method in inheritance. Python uses C3 linearisation. Inspect with `ClassName.__mro__` or `ClassName.mro()`.",

  "What is functional programming and how does Python support it?":
    "FP treats computation as function evaluation, avoids shared state. Python supports it via lambdas, map/filter/reduce, list comprehensions, itertools, and functools.",

  "What are abstract base classes in Python?":
    "ABCs (from abc module) define interfaces that subclasses must implement. `@abstractmethod` marks required methods. Ensures a common interface across subclasses.",

  "How would you design a REST API using FastAPI or Flask?":
    "Define routes with decorators (@app.get), use Pydantic models for validation (FastAPI), handle errors with exception handlers, add auth middleware, and connect to a DB via SQLAlchemy.",

  "What is the difference between a thread and a process?":
    "A thread is a lightweight unit of execution within a process, sharing memory. A process is an independent program with its own memory. Python's GIL limits thread-level CPU parallelism.",

  "How would you optimize a slow Python script?":
    "Profile first (cProfile, line_profiler). Use built-ins and list comprehensions over loops. Replace slow loops with NumPy vectorisation. Cache with lru_cache. Use generators for large data. Consider Cython or C extensions.",

  // ─── DATA ANALYST ────────────────────────────────────────────────────────────

  "What is data analysis?":
    "Data analysis is the process of inspecting, cleaning, transforming, and modelling data to discover useful information, draw conclusions, and support decision-making.",

  "What is the difference between mean, median, and mode?":
    "Mean: arithmetic average. Median: middle value when sorted. Mode: most frequent value. Median is robust to outliers; mean is sensitive.",

  "What is a SQL JOIN?":
    "JOIN combines rows from two tables based on a related column. Types: INNER JOIN (matching rows only), LEFT JOIN (all left + matching right), FULL OUTER JOIN (all rows).",

  "What is data cleaning?":
    "Data cleaning removes or corrects inaccurate, incomplete, duplicate, or irrelevant data. Steps: handle nulls, fix types, remove duplicates, standardise formats.",

  "What is a CSV file?":
    "A CSV (Comma-Separated Values) file stores tabular data as plain text with comma delimiters. Widely supported by spreadsheets, databases, and Python libraries.",

  "What tools are commonly used for data analysis?":
    "Excel/Google Sheets, SQL (data querying), Python (Pandas, NumPy, Matplotlib, Seaborn), R, Tableau/Power BI (visualisation), and Jupyter Notebooks.",

  "What is a pivot table?":
    "A pivot table summarises and aggregates data by grouping rows/columns. In Excel or Pandas, it lets you compute sums, averages, counts across categories.",

  "What is the difference between structured and unstructured data?":
    "Structured data is organised in rows/columns (SQL tables, CSVs). Unstructured data lacks a schema (emails, images, PDFs). Semi-structured (JSON, XML) is in between.",

  "What is data visualization?":
    "Data visualisation represents data graphically (charts, graphs, maps) to make patterns and insights easier to understand. Tools: Matplotlib, Seaborn, Tableau, Power BI.",

  "What is Excel used for in data analysis?":
    "Excel is used for data entry, cleaning, pivot tables, VLOOKUP, formulas, and charting. Common in business analytics; limited for large datasets (use Python/SQL for scale).",

  "What is a bar chart vs a pie chart?":
    "Bar chart compares quantities across categories — preferred for most comparisons. Pie chart shows proportions of a whole — use only with few categories that sum to 100%.",

  "What is a primary key in a database?":
    "A primary key uniquely identifies each row in a table. Must be unique and non-null. Used to build relationships via foreign keys.",

  "What is a SELECT statement in SQL?":
    "`SELECT column1, column2 FROM table WHERE condition ORDER BY column LIMIT n;` — the fundamental SQL query for reading data.",

  "What is a null value?":
    "NULL represents missing or unknown data. Not the same as 0 or empty string. Use IS NULL / IS NOT NULL in SQL; handle with fillna() in Pandas.",

  "What is descriptive statistics?":
    "Descriptive statistics summarise a dataset: measures of central tendency (mean, median, mode), spread (variance, standard deviation, range), and shape (skewness, kurtosis).",

  "How do you detect and handle outliers in data?":
    "Detect: box plots, z-scores (>3 std), IQR method (< Q1-1.5*IQR or > Q3+1.5*IQR). Handle: remove, cap (winsorisation), transform (log), or analyse separately depending on context.",

  "What is the difference between supervised and unsupervised learning?":
    "Supervised: model learns from labelled data (input → output). Unsupervised: model finds structure in unlabelled data (clustering, dimensionality reduction).",

  "How would you measure the success of a marketing campaign?":
    "Define KPIs upfront: CTR, conversion rate, CAC, ROI, revenue lift. Compare treatment vs control with A/B testing. Track over time and segment by channel/audience.",

  "What is A/B testing and how do you design one?":
    "A/B testing compares two variants (control vs treatment) on one metric. Design: define hypothesis, sample size (power analysis), random assignment, run for statistical significance, then analyse.",

  "What is normalization in databases?":
    "Normalisation organises tables to reduce redundancy. Normal forms (1NF, 2NF, 3NF): eliminate repeating groups, partial dependencies, and transitive dependencies.",

  "What is the difference between INNER JOIN and LEFT JOIN?":
    "INNER JOIN returns only rows with matches in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right (NULL if no match).",

  "What is data wrangling?":
    "Data wrangling (munging) is the process of cleaning, restructuring, and enriching raw data into a usable format for analysis. Done with Pandas, SQL, or Excel.",

  "What is a correlation and how is it measured?":
    "Correlation measures the strength and direction of a linear relationship between two variables. Pearson correlation coefficient ranges from -1 (perfect negative) to +1 (perfect positive). 0 = no linear correlation.",

  "What is the difference between variance and standard deviation?":
    "Variance is the average squared deviation from the mean. Standard deviation is its square root — in the same units as the data. SD is easier to interpret.",

  "What is a GROUP BY clause in SQL?":
    "`GROUP BY` groups rows sharing the same value in specified columns, enabling aggregate functions: `SELECT dept, AVG(salary) FROM employees GROUP BY dept;`",

  "What is ETL (Extract, Transform, Load)?":
    "ETL is the process of extracting data from sources, transforming it (cleaning, joining, computing), and loading it into a destination (data warehouse, database).",

  "What is a data warehouse?":
    "A data warehouse is a centralised repository for structured, historical data optimised for analytics and reporting (OLAP). Examples: Snowflake, BigQuery, Redshift.",

  "What is the difference between a data analyst and a data scientist?":
    "Data analysts focus on descriptive analysis, reporting, SQL, and dashboards. Data scientists build predictive models using ML, statistics, and programming. Analysts answer 'what happened'; scientists answer 'what will happen'.",

  "What is a KPI?":
    "A KPI (Key Performance Indicator) is a measurable value that tracks progress toward a business objective. Examples: monthly active users, churn rate, NPS.",

  "What is Pandas used for?":
    "Pandas is a Python library for data manipulation and analysis. It provides DataFrames (tabular data), Series, and tools for reading/writing CSV/Excel, cleaning, grouping, and merging data.",

  "How would you design a churn prediction model?":
    "Define churn, collect features (usage, tenure, engagement), handle class imbalance, train a classifier (XGBoost, logistic regression), evaluate with ROC-AUC, and deploy with monitoring for drift.",

  "How would you build a real-time analytics dashboard?":
    "Stream events (Kafka/Kinesis), process with Spark Streaming or Flink, store aggregates in a fast DB (Redis, ClickHouse), and visualise with Grafana or a custom React dashboard.",

  "Explain advanced SQL window functions with examples.":
    "Window functions compute over a result set partition without collapsing rows. `ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)` ranks employees per department.",

  "How do you ensure data quality in a large pipeline?":
    "Add validation checks at ingestion (schema, null checks, range checks). Use tools like Great Expectations or dbt tests. Monitor data freshness, row counts, and anomalies in production.",

  "What is the difference between OLAP and OLTP?":
    "OLTP (Online Transaction Processing) handles high-volume, short transactions (inserts/updates) for operational systems. OLAP (Online Analytical Processing) handles complex analytical queries over historical data in a data warehouse.",

  "Explain the concept of data governance.":
    "Data governance is a framework of policies, roles, and processes that ensure data quality, security, privacy, and compliance. Includes data cataloguing, lineage, access control, and stewardship.",

  "How would you handle a dataset with 80% missing values?":
    "Investigate why data is missing (MCAR/MAR/MNAR). Drop columns with >50-70% missing if not critical. Impute remaining with mean/median/mode or model-based imputation. Document decisions.",

  "What is dimensionality reduction and when would you use it?":
    "Reducing the number of features while retaining information. Use PCA for linear reduction, t-SNE/UMAP for visualisation. Helps with the curse of dimensionality and speeds up models.",

  "Explain the bias-variance tradeoff.":
    "Bias: error from wrong assumptions (underfitting). Variance: error from sensitivity to training data (overfitting). More complex models reduce bias but increase variance. Balance with regularisation and cross-validation.",

  "How do you interpret a ROC curve?":
    "ROC plots true positive rate vs false positive rate at various thresholds. AUC (Area Under Curve) measures overall classifier performance. AUC=0.5 is random; AUC=1.0 is perfect.",

  "What is feature engineering?":
    "Feature engineering transforms raw data into informative inputs for ML models. Includes creating new features, encoding categoricals, scaling numerics, handling dates, and interaction terms.",

  "How would you present complex data findings to a non-technical audience?":
    "Lead with the insight, not the method. Use clear visuals (bar charts, not heatmaps). Avoid jargon. Tell a narrative — context → finding → recommendation. Anticipate questions.",

  "What is cohort analysis?":
    "Cohort analysis groups users by a shared characteristic (signup month) and tracks their behaviour over time. Useful for understanding retention and lifetime value.",

  "How would you detect data drift in production?":
    "Monitor input feature distributions over time (PSI, KS-test). Track model performance metrics. Set up alerts when drift exceeds thresholds. Retrain when drift is confirmed.",

  // ─── DATA SCIENTIST ───────────────────────────────────────────────────────────

  "What is data science?":
    "Data science combines statistics, programming, and domain knowledge to extract insights and build predictive models from data.",

  "What is machine learning?":
    "Machine learning is a subset of AI where algorithms learn patterns from data to make predictions or decisions without being explicitly programmed.",

  "What is the difference between AI, ML, and deep learning?":
    "AI is the broad field of machines simulating intelligence. ML is a subset using statistical learning. Deep learning is a subset of ML using multi-layer neural networks.",

  "What is a training dataset?":
    "A training dataset is labelled data used to train a model. The model learns to map inputs to outputs based on these examples.",

  "What is a model in machine learning?":
    "A model is a mathematical function learned from data that maps inputs to predictions. Examples: decision tree, neural network, logistic regression.",

  "What is supervised learning?":
    "Supervised learning trains on labelled data (input-output pairs). The model learns to predict the output for new inputs. Classification and regression are supervised tasks.",

  "What is unsupervised learning?":
    "Unsupervised learning finds patterns in unlabelled data. Common tasks: clustering (k-means), dimensionality reduction (PCA), anomaly detection.",

  "What is Python's role in data science?":
    "Python is the dominant data science language. Key libraries: NumPy (arrays), Pandas (tabular data), scikit-learn (ML), TensorFlow/PyTorch (deep learning), Matplotlib/Seaborn (visualisation).",

  "What is a feature in ML?":
    "A feature is an input variable used to make predictions — a column in a dataset. Feature quality and selection significantly impact model performance.",

  "What is a label in ML?":
    "A label is the target variable the model learns to predict — the 'answer' in supervised learning. Example: spam/not-spam, house price.",

  "What is overfitting?":
    "Overfitting occurs when a model learns the training data too well, including noise, and fails to generalise to new data. Fix: regularisation, more data, simpler model.",

  "What is underfitting?":
    "Underfitting occurs when a model is too simple to capture the patterns in the data. Fix: more complex model, more features, less regularisation.",

  "What is a classification problem?":
    "A classification problem predicts a discrete class label. Binary: spam/not-spam. Multi-class: digit recognition. Algorithms: logistic regression, SVM, decision trees.",

  "What is a regression problem?":
    "A regression problem predicts a continuous numeric value. Example: house price prediction. Algorithms: linear regression, random forest, gradient boosting.",

  "What is NumPy used for?":
    "NumPy provides N-dimensional arrays and mathematical functions. It's the foundation of scientific computing in Python, enabling fast vectorised operations on large datasets.",

  "What is cross-validation?":
    "Cross-validation evaluates model performance by splitting data into k folds, training on k-1, testing on 1, rotating. Gives a reliable performance estimate and reduces overfitting.",

  "Explain precision, recall, and F1 score.":
    "Precision = TP/(TP+FP) — of predicted positives, how many are correct. Recall = TP/(TP+FN) — of actual positives, how many did we find. F1 = harmonic mean of both.",

  "What is a confusion matrix?":
    "A confusion matrix shows TP, FP, TN, FN predictions. Rows are actual classes; columns are predicted. Used to compute precision, recall, and accuracy.",

  "What is the difference between bagging and boosting?":
    "Bagging (e.g., Random Forest) trains models in parallel on random subsets and averages results — reduces variance. Boosting (e.g., XGBoost) trains sequentially, each model correcting the previous — reduces bias.",

  "What is a decision tree?":
    "A decision tree splits data recursively based on feature values to reach a prediction. Highly interpretable but prone to overfitting. Depth and pruning control complexity.",

  "What is a Random Forest?":
    "Random Forest is an ensemble of decision trees (bagging). Each tree is trained on a random subset of data and features. Averages predictions for robust, low-variance results.",

  "What is gradient descent?":
    "Gradient descent minimises a loss function by iteratively updating parameters in the direction of the negative gradient. Learning rate controls step size.",

  "What is regularization (L1 vs L2)?":
    "Regularisation adds a penalty to the loss function to reduce overfitting. L1 (Lasso) adds absolute values → sparse weights (feature selection). L2 (Ridge) adds squared values → small but non-zero weights.",

  "What is PCA?":
    "PCA (Principal Component Analysis) transforms data into orthogonal components in directions of maximum variance. Used to reduce dimensions while retaining most information.",

  "What is the difference between parametric and non-parametric models?":
    "Parametric models (linear regression) assume a fixed functional form. Non-parametric models (KNN, decision trees) make fewer assumptions and learn structure from data.",

  "What is a neural network?":
    "A neural network is a model of stacked layers (input, hidden, output) of interconnected nodes (neurons). Learns via backpropagation and gradient descent to approximate complex functions.",

  "What is the role of a loss function?":
    "A loss function measures how wrong a model's predictions are. Training minimises it. Examples: MSE for regression, cross-entropy for classification.",

  "Explain how backpropagation works.":
    "Backpropagation computes gradients of the loss with respect to each weight using the chain rule, then gradient descent updates weights. Forward pass: compute loss. Backward pass: propagate gradients.",

  "What is a convolutional neural network (CNN)?":
    "CNNs apply learnable filters (kernels) to input data (images) via convolution, detecting local patterns. Pooling reduces spatial dimensions. Widely used in computer vision.",

  "What is an LSTM and when would you use it?":
    "LSTM (Long Short-Term Memory) is a recurrent neural network that can learn long-range dependencies in sequences. Use for time series, NLP, speech. Mostly replaced by Transformers now.",

  "Explain transfer learning.":
    "Transfer learning reuses a model pretrained on one task (ImageNet) for a different but related task. Fine-tune the top layers on your data. Saves compute and data requirements.",

  "What is the attention mechanism in transformers?":
    "Attention computes a weighted sum of values based on query-key similarity, allowing the model to focus on relevant parts of the input. Self-attention lets each token attend to all others.",

  "How would you handle severely imbalanced classes?":
    "Oversample minority class (SMOTE), undersample majority, use class weights in loss, use appropriate metrics (F1, AUC, not accuracy), and try ensemble methods.",

  "What is hyperparameter tuning and what methods do you use?":
    "Hyperparameter tuning finds optimal model settings (learning rate, depth, regularisation). Methods: grid search, random search, Bayesian optimisation (Optuna), cross-validated.",

  "Explain model interpretability techniques like SHAP and LIME.":
    "SHAP assigns each feature a Shapley value — its contribution to a prediction. LIME creates a local linear approximation of the model around a single prediction. Both explain black-box models.",

  "How do you deploy a machine learning model to production?":
    "Serialise model (pickle, ONNX). Build a REST API (FastAPI/Flask). Containerise (Docker). Deploy to cloud. Add logging, monitoring (data drift, performance), and a retraining pipeline.",

  "What is a recommendation system and how would you build one?":
    "Recommendation systems predict user preferences. Collaborative filtering (user-item matrix), content-based (item features), or hybrid. Matrix factorisation (ALS) or neural approaches (two-tower model).",

  "Explain the difference between generative and discriminative models.":
    "Discriminative models (logistic regression, SVM) learn P(y|x) — the decision boundary. Generative models (Naive Bayes, GANs) learn P(x,y) — the data distribution and can generate samples.",

  "What is reinforcement learning?":
    "RL trains an agent to maximise cumulative reward by taking actions in an environment. Agent observes state, takes action, receives reward, updates policy. Examples: game-playing AI, robotics.",

  "How would you design an A/B test for an ML model?":
    "Define metric and hypothesis. Randomly assign users to control (current model) and treatment (new model). Run until statistical significance (power analysis determines sample size). Analyse with t-test or chi-squared.",

  "What are the ethical considerations in machine learning?":
    "Bias and fairness (model discriminating protected groups), privacy (training on personal data), transparency (explainability), accountability (who is responsible), and environmental impact (compute cost).",

  // ─── ML ──────────────────────────────────────────────────────────────────────

  "What is scikit-learn?":
    "scikit-learn is Python's premier ML library. Provides consistent API for classification, regression, clustering, preprocessing, pipelines, and model evaluation.",

  "What is accuracy in ML?":
    "Accuracy = (TP+TN) / Total. Proportion of correct predictions. Misleading for imbalanced datasets — prefer F1, ROC-AUC.",

  "What is data preprocessing?":
    "Preparing raw data for ML: handling nulls, encoding categoricals (one-hot, label encoding), scaling numerics (StandardScaler, MinMaxScaler), train/test split.",

  "What is a hyperparameter?":
    "A hyperparameter is a model setting set before training (learning rate, tree depth, number of layers). Different from parameters (weights), which are learned during training.",

  "Explain gradient descent and its variants.":
    "Batch GD computes gradient on full dataset. Stochastic GD uses one sample — noisy but fast. Mini-batch GD uses small batches — balance of both. Adam adapts learning rates per parameter.",

  "What is a Support Vector Machine (SVM)?":
    "SVM finds the hyperplane that maximises the margin between classes. Kernel trick (RBF) projects data to higher dimensions to handle non-linear boundaries.",

  "What is k-nearest neighbors (KNN)?":
    "KNN classifies a point by majority vote of its k nearest neighbours (by distance). Non-parametric, lazy learner. Choose k via cross-validation. Slow for large datasets.",

  "What is feature importance?":
    "Feature importance ranks features by their contribution to model predictions. Tree-based models provide it natively. SHAP gives model-agnostic importance scores.",

  "What is the curse of dimensionality?":
    "As dimensions increase, data becomes sparse, distances become meaningless, and models overfit. Addressed with dimensionality reduction (PCA), feature selection, or regularisation.",

  "What is a GAN and how does it work?":
    "GAN (Generative Adversarial Network): Generator creates fake samples; Discriminator tries to distinguish real from fake. They compete — Generator improves until Discriminator can't tell the difference.",

  "How do you detect and handle data drift in production?":
    "Monitor input feature distributions (PSI, KS-test) and output predictions. Alert when drift exceeds thresholds. Retrain the model on recent data when performance degrades.",

  "What is federated learning?":
    "Federated learning trains models across decentralised devices without sharing raw data. Each device trains locally; only model updates (gradients) are aggregated on a central server. Preserves privacy.",

  "What is the difference between batch, mini-batch, and stochastic gradient descent?":
    "Batch GD: full dataset per update — stable but slow. SGD: one sample per update — fast but noisy. Mini-batch: small batches — best of both. Industry standard is mini-batch.",

  "How would you productionize an ML model?":
    "Train → evaluate → serialise (pickle/ONNX) → build API (FastAPI) → containerise (Docker) → deploy (cloud/k8s) → monitor (drift, latency, accuracy) → automate retraining.",

  "What are the ethical risks in ML and how do you mitigate them?":
    "Bias (use fairness metrics, diverse data), privacy (differential privacy, data minimisation), opacity (explainability tools), accountability (audit trails), and misuse (governance policies).",

  // ─── DEVOPS ──────────────────────────────────────────────────────────────────

  "What is DevOps?":
    "DevOps is a culture and set of practices combining development and operations to shorten the software delivery lifecycle. Emphasises automation, collaboration, and continuous improvement.",

  "What is CI/CD?":
    "CI (Continuous Integration) auto-builds and tests code on each push. CD (Continuous Delivery/Deployment) auto-releases passing builds. Together they reduce manual effort and deployment risk.",

  "What is Git?":
    "Git is a distributed version control system. It tracks code changes, enables branching and merging, and allows teams to collaborate. GitHub/GitLab/Bitbucket host remote repositories.",

  "What is a pipeline in DevOps?":
    "A pipeline is an automated sequence of steps: source → build → test → deploy. Triggered on code changes. Built in tools like GitHub Actions, Jenkins, GitLab CI.",

  "What is Docker?":
    "Docker packages an application and its dependencies into a portable container image. Containers run consistently across environments. Key commands: docker build, docker run, docker push.",

  "What is a container?":
    "A container is a lightweight, isolated process running from a Docker image. Shares the host OS kernel but has its own filesystem, network, and process space.",

  "What is Kubernetes at a high level?":
    "Kubernetes (K8s) orchestrates container deployments. It manages scheduling, scaling, self-healing, and networking of containers across a cluster of nodes.",

  "What is a cloud provider?":
    "A cloud provider offers on-demand computing resources over the internet. Major providers: AWS, Azure, Google Cloud. Provides VMs, storage, databases, networking, and managed services.",

  "What is infrastructure as code (IaC)?":
    "IaC manages and provisions infrastructure via code (not manual UI). Tools: Terraform (declarative), Ansible (procedural). Enables version control, repeatability, and automation.",

  "What is monitoring in DevOps?":
    "Monitoring collects metrics, logs, and traces to understand system health. Tools: Prometheus (metrics), Grafana (dashboards), ELK stack (logs), Jaeger (traces). Alerts on anomalies.",

  "What is a deployment?":
    "A deployment releases a new version of software to an environment. Strategies: rolling, blue-green, canary. Automated deployments reduce human error.",

  "What is a build?":
    "A build compiles source code into a runnable artifact (binary, Docker image, JAR). Triggered by CI on code push. Build failures block deployment.",

  "What is a staging environment?":
    "Staging is a pre-production environment that mirrors production. Used for final testing before release. Prevents bugs from reaching real users.",

  "What is rollback?":
    "Rollback reverts to a previous stable version when a deployment causes issues. Blue-green deployments enable instant rollback by switching traffic back.",

  "Explain the difference between Docker and a virtual machine.":
    "VMs include a full OS on hypervisor — heavy (~GBs, minutes to start). Containers share the host OS kernel — lightweight (~MBs, seconds to start). Containers are faster but less isolated.",

  "What is a Dockerfile and how do you write one?":
    "A Dockerfile defines how to build a Docker image. Key instructions: FROM (base image), COPY (files), RUN (install deps), EXPOSE (port), CMD (startup command).",

  "What is a Helm chart?":
    "A Helm chart is a package of Kubernetes manifests with templating. Helm is the package manager for K8s — install, upgrade, and rollback apps with `helm install/upgrade`.",

  "What is Terraform?":
    "Terraform is a declarative IaC tool by HashiCorp. Write infrastructure in HCL; `terraform plan` previews changes; `terraform apply` provisions them. State file tracks real resources.",

  "What is Ansible?":
    "Ansible is an agentless configuration management and automation tool. Uses YAML playbooks to describe desired state. Connects via SSH to configure servers.",

  "What is blue-green deployment?":
    "Two identical environments: blue (live) and green (new version). Deploy to green, test, then switch traffic. Instant rollback by switching back to blue.",

  "What is canary deployment?":
    "Route a small percentage of traffic (5-10%) to the new version. Monitor for errors. Gradually increase traffic if healthy. Reduces blast radius of bad releases.",

  "What is a load balancer?":
    "A load balancer distributes incoming traffic across multiple servers. Prevents overload, improves availability, and enables horizontal scaling. Types: L4 (TCP), L7 (HTTP).",

  "What is observability (logs, metrics, traces)?":
    "Observability = understanding system state from outputs. Logs (events), metrics (numeric measurements over time), traces (request flow across services). Three pillars of production visibility.",

  "What is an artifact in CI/CD?":
    "A build artifact is the output of a build step — a Docker image, JAR, binary, or zip. Stored in a registry or artifact store and promoted through environments.",

  "What is a container registry?":
    "A container registry stores Docker images. Push: `docker push`. Pull: `docker pull`. Examples: Docker Hub, AWS ECR, GitHub Container Registry.",

  "What is secrets management?":
    "Secrets management securely stores and distributes sensitive values (API keys, passwords). Tools: HashiCorp Vault, AWS Secrets Manager, K8s Secrets. Never hardcode secrets.",

  "Design a complete CI/CD pipeline for a microservices application.":
    "PR triggers: lint → unit tests → build Docker images → push to registry. Merge triggers: integration tests → deploy to staging (Helm) → smoke tests → deploy to prod (canary) → monitor.",

  "How would you implement zero-downtime deployments?":
    "Use rolling deployments (K8s default), blue-green, or canary with traffic shifting. Combine with health checks, readiness probes, and connection draining.",

  "Explain Kubernetes networking in depth.":
    "Each pod gets an IP. Services (ClusterIP, NodePort, LoadBalancer) provide stable endpoints. Ingress routes HTTP traffic. CNI plugins (Calico, Flannel) implement pod networking.",

  "How would you handle secrets securely in a Kubernetes cluster?":
    "Use K8s Secrets (base64 encoded, not encrypted by default) + RBAC. Enable encryption at rest. Prefer Vault with the vault-agent injector for production-grade secret management.",

  "What is GitOps and how does ArgoCD work?":
    "GitOps uses Git as the single source of truth for infrastructure. ArgoCD watches a Git repo and syncs K8s cluster state to match. Any drift triggers automatic or manual reconciliation.",

  "How would you design a disaster recovery strategy?":
    "Define RTO (recovery time objective) and RPO (recovery point objective). Implement: multi-region replication, regular backups, automated failover, runbook for manual recovery, and DR drills.",

  "Explain distributed tracing and tools like Jaeger.":
    "Distributed tracing tracks a request across multiple services. Each service adds a trace/span with timing. Jaeger visualises traces, showing where latency occurs in a microservices call chain.",

  "What is service mesh (Istio) and when would you use it?":
    "A service mesh manages service-to-service communication: mTLS, retries, circuit breaking, observability — without changing app code. Use when you have many microservices needing consistent policies.",

  "How would you scale a stateful application in Kubernetes?":
    "Use StatefulSets (stable pod names, persistent volumes). Scale read replicas for DBs. Use operator patterns for complex stateful apps (PostgreSQL Operator). External managed DBs are often simpler.",

  "What is chaos engineering?":
    "Chaos engineering deliberately injects failures (kill pods, slow network, fill disk) to test system resilience. Tools: Chaos Monkey, LitmusChaos. Validates that systems recover gracefully.",

  "How do you optimize Docker image build times?":
    "Order layers from least to most frequently changing. Use multi-stage builds. Cache dependencies layer before copying source. Use .dockerignore. Use BuildKit for parallel builds.",

  "Explain infrastructure drift and how to prevent it.":
    "Infrastructure drift is when actual infrastructure diverges from its IaC definition (manual changes). Prevent: enforce IaC-only changes, run `terraform plan` in CI, use policy-as-code (OPA).",

  "What is a pod disruption budget in Kubernetes?":
    "A PodDisruptionBudget (PDB) limits how many pods of a deployment can be simultaneously unavailable during voluntary disruptions (node drains, rolling updates). Ensures availability.",

  "How would you implement auto-scaling in a cloud environment?":
    "Horizontal Pod Autoscaler (HPA) scales pods on CPU/memory/custom metrics. Cluster Autoscaler adds/removes nodes. Combine with KEDA for event-driven scaling.",

  "What are the SRE principles and how do they apply to DevOps?":
    "SRE applies engineering to operations. Key principles: SLIs/SLOs/SLAs (reliability targets), error budgets (tolerated downtime), toil reduction (automate repetitive work), blameless post-mortems.",

  // ─── CLOUD ────────────────────────────────────────────────────────────────────

  "What is cloud computing?":
    "Cloud computing delivers computing resources (servers, storage, databases, networking) on-demand over the internet, with pay-as-you-go pricing. Eliminates upfront hardware investment.",

  "What is the difference between IaaS, PaaS, and SaaS?":
    "IaaS: raw infrastructure (EC2 VMs). PaaS: platform for running apps without managing servers (Heroku, App Engine). SaaS: fully managed software (Gmail, Salesforce). More abstraction as you go up.",

  "What is AWS?":
    "Amazon Web Services is the world's largest cloud provider. Offers 200+ services: EC2 (compute), S3 (storage), RDS (database), Lambda (serverless), EKS (Kubernetes), and more.",

  "What is Azure?":
    "Microsoft Azure is a major cloud platform tightly integrated with Microsoft products. Offers VMs, Azure Functions, AKS, Azure SQL, Blob Storage, and extensive enterprise services.",

  "What is Google Cloud Platform?":
    "GCP is Google's cloud platform. Known for BigQuery (analytics), GKE (Kubernetes), Vertex AI (ML), and its global network. Strong in data and AI workloads.",

  "What is a virtual machine in the cloud?":
    "A VM is a software emulation of a physical server. In AWS: EC2 instance. You choose CPU, RAM, storage, and OS. Pay by the hour. Flexible but requires OS management.",

  "What is object storage (e.g. S3)?":
    "Object storage stores data as objects (files + metadata) in a flat namespace, accessed via HTTP APIs. S3 is infinitely scalable, highly durable (11 nines), and cheap for large volumes.",

  "What is a region and availability zone?":
    "A region is a geographic area (us-east-1). Each region has multiple availability zones (AZs) — isolated data centres. Deploy across AZs for high availability against single-AZ failures.",

  "What is a CDN?":
    "A CDN (Content Delivery Network) caches static content at edge locations globally. Reduces latency by serving users from the nearest point of presence. AWS CloudFront, Cloudflare.",

  "What is serverless computing?":
    "Serverless runs code in response to events without managing servers. AWS Lambda charges only for execution time. Auto-scales to zero. Ideal for event-driven, sporadic workloads.",

  "What is auto-scaling?":
    "Auto-scaling automatically adjusts the number of compute resources based on demand. Scale out (add) under load; scale in (remove) when idle. Balances cost and performance.",

  "What is a cloud database?":
    "Cloud databases are fully managed database services. AWS RDS (MySQL/PostgreSQL), DynamoDB (NoSQL), Aurora (scalable relational). No hardware management — cloud handles backups, patching.",

  "What is a VPC?":
    "A VPC (Virtual Private Cloud) is an isolated virtual network in the cloud. You define IP ranges, subnets, route tables, and gateways. Controls network traffic in/out of your resources.",

  "What is a security group?":
    "A security group is a stateful virtual firewall for EC2 instances. Define inbound/outbound rules by port, protocol, and source/destination IP. Defaults to deny all inbound.",

  "What is the shared responsibility model?":
    "Cloud providers secure the infrastructure (hardware, facilities, hypervisor). Customers are responsible for what runs on it (OS, data, IAM, app config). Responsibility split depends on service type (IaaS vs PaaS vs SaaS).",

  "What is a load balancer in AWS (ALB vs NLB)?":
    "ALB (Application Load Balancer) operates at L7 (HTTP), supports path/host-based routing, WebSockets. NLB (Network Load Balancer) operates at L4 (TCP/UDP), ultra-low latency, static IPs.",

  "What is AWS Lambda and when would you use it?":
    "Lambda runs functions in response to events (HTTP, S3, queue). No server management, scales automatically, pay per invocation. Use for lightweight event-driven tasks, not long-running processes.",

  "What is S3 and what are its storage classes?":
    "S3 is AWS object storage. Storage classes trade cost for access speed: Standard (frequent access), Intelligent-Tiering, Standard-IA (infrequent access), Glacier (archival, minutes/hours to retrieve).",

  "What is RDS vs DynamoDB?":
    "RDS is managed relational DB (MySQL, PostgreSQL, Aurora) — structured data, complex queries, ACID. DynamoDB is managed NoSQL (key-value/document) — massive scale, single-digit ms latency, flexible schema.",

  "What is CloudFront?":
    "CloudFront is AWS's CDN. Caches content at 400+ edge locations. Integrates with S3, ALB, API Gateway. Supports custom SSL, WAF, signed URLs for private content.",

  "What is IAM in AWS?":
    "IAM (Identity and Access Management) controls who can do what in AWS. Users, groups, roles, and policies. Attach policies granting specific permissions to resources.",

  "What is the principle of least privilege?":
    "Grant only the minimum permissions needed to perform a task. Reduces attack surface. In IAM: use specific resource ARNs and actions, not wildcard (*) policies.",

  "What is a subnet (public vs private)?":
    "A subnet is a range of IPs within a VPC. Public subnets have a route to an Internet Gateway — resources can be internet-accessible. Private subnets don't — use NAT Gateway for outbound.",

  "What is Route 53?":
    "Route 53 is AWS's DNS service. Resolves domain names to IPs. Supports health checks, failover routing, latency-based routing, geolocation routing, and alias records for AWS resources.",

  "What is EC2 and how do you choose an instance type?":
    "EC2 provides virtual servers. Choose by workload: compute-optimised (C series) for CPU tasks, memory-optimised (R series) for large datasets, GPU instances (P/G series) for ML/graphics.",

  "What is Elastic Beanstalk?":
    "Elastic Beanstalk is a PaaS that handles deployment, scaling, and monitoring of web apps. You upload code; AWS manages the infrastructure. Less control than ECS/EKS.",

  "What is ECS vs EKS?":
    "ECS (Elastic Container Service) is AWS's proprietary container orchestrator — simpler. EKS (Elastic Kubernetes Service) is managed Kubernetes — more powerful and portable.",

  "What is CloudWatch?":
    "CloudWatch is AWS's monitoring service. Collects metrics from AWS services, stores logs, sets alarms, and triggers actions. Central observability hub for AWS infrastructure.",

  "What is a multi-region architecture?":
    "Deploying resources across multiple AWS regions for disaster recovery and low latency globally. Data replication (S3 CRR, Aurora Global DB), Route 53 failover, and traffic routing handle distribution.",

  "Design a highly available, fault-tolerant web application on AWS.":
    "Multi-AZ deployment: ALB → EC2 Auto Scaling Group across AZs → RDS Multi-AZ → ElastiCache. CloudFront + S3 for static assets. Route 53 for DNS. CloudWatch for monitoring. Backups enabled.",

  "Explain the Well-Architected Framework pillars.":
    "Six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimisation, Sustainability. Each has design principles and best practices for cloud architectures.",

  "How would you reduce AWS costs for a large workload?":
    "Right-size instances (use Cost Explorer). Use Reserved Instances or Savings Plans for predictable workloads. Spot instances for fault-tolerant batch work. Delete unused resources. Use S3 lifecycle policies.",

  "Design a serverless data processing pipeline.":
    "S3 trigger → Lambda → transform data → DynamoDB/S3. For heavy processing: Kinesis/SQS → Lambda → Glue ETL → Athena query → QuickSight dashboard. Cost-effective, scales to zero.",

  "What is event-driven architecture on the cloud?":
    "Services communicate via events (SNS, SQS, EventBridge). Producers emit events; consumers react. Decouples services, enables async processing and scalability.",

  "How would you implement disaster recovery in AWS?":
    "Define RTO/RPO. Options: backup-restore (cheapest, slowest), pilot light (minimal infra standby), warm standby (scaled-down replica), multi-site active-active (fastest, costliest). Test regularly.",

  "What is a Transit Gateway and when would you use it?":
    "Transit Gateway connects multiple VPCs and on-premises networks through a central hub. Use when you have many VPCs that need to communicate — simpler than full-mesh VPC peering.",

  "Explain VPC peering vs PrivateLink.":
    "VPC Peering connects two VPCs for private communication — traffic stays on AWS network. PrivateLink exposes a service privately to other VPCs without full peering — more controlled, no CIDR conflicts.",

  "How would you secure data in transit and at rest on AWS?":
    "In transit: enforce TLS (HTTPS, ACM certs, ALB SSL policies). At rest: S3 SSE-S3/SSE-KMS, RDS encryption with KMS, EBS encryption. Use IAM policies to restrict access.",

  "What is AWS Organizations and how do you manage multi-account setups?":
    "AWS Organizations manages multiple accounts centrally. Use SCPs (Service Control Policies) to restrict permissions across accounts. Organise by OU (organisational unit) — prod, dev, sandbox.",

  "Explain how to implement a zero-trust network on cloud.":
    "Never trust, always verify. Use IAM roles (not static keys), enforce MFA, segment VPCs, use Security Groups + NACLs, enable CloudTrail, deploy WAF, and require mutual TLS between services.",

  "What is a data lake and how would you build one on AWS?":
    "A data lake stores raw, structured, and unstructured data at scale. Build on S3 (storage) + Glue (ETL/catalogue) + Athena (query) + Lake Formation (governance) + QuickSight (visualise).",

  "How would you migrate a monolithic app to microservices on the cloud?":
    "Strangler fig pattern: incrementally extract services. Containerise with Docker. Use EKS/ECS for orchestration. Introduce API Gateway. Separate DBs per service. Use SQS/SNS for async comms.",

  "What is FinOps and how do you practice it?":
    "FinOps is the practice of bringing financial accountability to cloud spend. Teams take ownership of their costs. Practice: tag resources, use budgets/alerts, right-size, share savings plans, review Cost Explorer regularly.",

  "How does Kubernetes work on managed services like EKS?":
    "AWS manages the control plane (API server, etcd). You manage worker nodes (EC2/Fargate). EKS integrates with IAM (IRSA), VPC, ALB Ingress Controller, EBS/EFS CSI drivers.",

  // ─── CYBERSECURITY ────────────────────────────────────────────────────────────

  "What is cybersecurity?":
    "Cybersecurity protects computer systems, networks, and data from theft, damage, and unauthorised access. Encompasses network security, application security, identity management, and incident response.",

  "What is a firewall?":
    "A firewall filters network traffic based on rules. Packet filtering (L3/L4), stateful inspection, and NGFW (application-aware) are types. Blocks unauthorised access while allowing legitimate traffic.",

  "What is encryption?":
    "Encryption transforms plaintext into ciphertext using an algorithm and key. Only parties with the correct key can decrypt. Protects data confidentiality in transit and at rest.",

  "What is the difference between HTTP and HTTPS?":
    "HTTP transfers data in plaintext. HTTPS uses TLS to encrypt the connection, ensuring confidentiality, integrity, and server authentication. Required for all modern web applications.",

  "What is a password hash?":
    "A hash is a one-way transformation of a password (SHA-256, bcrypt). Servers store hashes, not plaintext. On login, re-hash the input and compare. Salting prevents rainbow table attacks.",

  "What is phishing?":
    "Phishing is a social engineering attack where attackers impersonate trusted entities via email/SMS to trick users into revealing credentials or installing malware.",

  "What is malware?":
    "Malware is malicious software designed to disrupt, damage, or gain unauthorised access. Types: virus, worm, ransomware, trojan, spyware, rootkit.",

  "What is a VPN?":
    "A VPN (Virtual Private Network) creates an encrypted tunnel between a client and server. Masks the user's IP and protects traffic on untrusted networks (e.g. public Wi-Fi).",

  "What is two-factor authentication?":
    "2FA requires a second form of verification beyond a password: OTP (TOTP/SMS), hardware key (YubiKey), or biometric. Prevents account takeover even if the password is compromised.",

  "What is a vulnerability?":
    "A vulnerability is a weakness in a system that can be exploited by an attacker. Examples: unpatched software, misconfiguration, weak passwords, SQL injection flaws.",

  "What is a threat vs a risk?":
    "Threat: a potential cause of harm (attacker, natural disaster). Risk: the likelihood and impact of a threat exploiting a vulnerability. Risk = Threat × Vulnerability × Impact.",

  "What is social engineering?":
    "Social engineering manipulates people rather than systems to gain access. Examples: phishing emails, pretexting (fake scenarios), baiting (USB drops), vishing (voice calls).",

  "What is an SSL certificate?":
    "An SSL/TLS certificate binds a domain name to a public key. Issued by a Certificate Authority (CA). Enables HTTPS and lets browsers verify server identity.",

  "What is a DDoS attack?":
    "A Distributed Denial of Service attack floods a server with traffic from many sources, overwhelming it and making it unavailable to legitimate users. Mitigated with rate limiting, CDNs, and DDoS protection services (CloudFlare, AWS Shield).",

  "What is the OWASP Top 10?":
    "OWASP Top 10 lists the most critical web application security risks: Injection, Broken Auth, Sensitive Data Exposure, XXE, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization, Vulnerable Components, Insufficient Logging.",

  "What is SQL injection and how do you prevent it?":
    "SQL injection inserts malicious SQL into input fields to manipulate DB queries. Prevent: use parameterised queries/prepared statements, ORMs, input validation, and least-privilege DB users. Never concatenate user input into queries.",

  "What is XSS and how do you prevent it?":
    "XSS (Cross-Site Scripting) injects malicious scripts into web pages viewed by others. Stored XSS persists in DB; reflected XSS is in URL. Prevent: encode output, use CSP, sanitise input.",

  "What is CSRF and how do you protect against it?":
    "CSRF tricks an authenticated user's browser into making unwanted requests. Protect: use CSRF tokens (synced between server and form), SameSite cookie attribute, verify Origin header.",

  "What is the difference between symmetric and asymmetric encryption?":
    "Symmetric: same key encrypts and decrypts (AES) — fast. Asymmetric: public key encrypts, private key decrypts (RSA, ECC) — slower but enables key exchange. TLS uses both.",

  "What is a man-in-the-middle attack?":
    "MITM attack intercepts communication between two parties. Attacker can read or modify traffic. Prevented by TLS with certificate validation and HSTS.",

  "What is penetration testing?":
    "Pen testing simulates attacks to find vulnerabilities before real attackers do. Phases: recon, scanning, exploitation, post-exploitation, reporting. Types: black-box (no prior info), white-box (full access).",

  "What is a CVE?":
    "CVE (Common Vulnerabilities and Exposures) is a public database of known security vulnerabilities with unique IDs (CVE-2021-44228). CVSS score rates severity.",

  "What is the CIA triad?":
    "Confidentiality (data accessible only to authorised parties), Integrity (data is accurate and unmodified), Availability (systems accessible when needed). Foundation of information security.",

  "What is network sniffing?":
    "Network sniffing captures packets on a network. Legitimate use: debugging with Wireshark. Malicious use: stealing credentials on unencrypted protocols. Mitigate with encryption.",

  "What is intrusion detection vs intrusion prevention?":
    "IDS monitors and alerts on suspicious activity. IPS actively blocks detected threats. IDS is passive; IPS is inline and can affect traffic flow.",

  "What is a zero-day vulnerability?":
    "A zero-day is a vulnerability unknown to the vendor or public, giving them zero days to patch before it can be exploited. Extremely valuable to attackers and in bug bounty markets.",

  "What is role-based access control (RBAC)?":
    "RBAC assigns permissions to roles, not individuals. Users are assigned roles. Enforces least privilege and simplifies access management. Roles: admin, editor, viewer.",

  "What is TLS and how does the handshake work?":
    "TLS secures network communication. Handshake: client sends ClientHello (cipher suites), server responds with certificate and ServerHello. Key exchange (ECDHE). Both derive symmetric session keys. Encrypted channel established.",

  "What is a security audit?":
    "A security audit systematically reviews systems, policies, and processes against security standards (ISO 27001, SOC 2). Identifies gaps and produces a remediation report.",

  "Design a secure authentication system from scratch.":
    "Hash passwords with bcrypt. Store email + hash in DB. Issue short-lived JWTs + long-lived refresh tokens. Enforce MFA. Rate limit login. Log attempts. Implement account lockout. Use HTTPS. Rotate secrets.",

  "Explain how a buffer overflow attack works.":
    "A buffer overflow writes more data than a buffer can hold, overwriting adjacent memory. Attackers can overwrite the return address to redirect execution to malicious code (shellcode). Mitigated by ASLR, NX bits, stack canaries, safe functions.",

  "What is PKI (Public Key Infrastructure)?":
    "PKI is a framework for managing digital certificates and public-private key pairs. CAs issue certificates binding identities to public keys. Enables HTTPS, S/MIME, code signing.",

  "How would you perform a web application penetration test?":
    "Recon (subdomains, tech stack). Scan (Nikto, OWASP ZAP, Burp Suite). Test OWASP Top 10 manually. Exploit findings. Document proof of concept. Report with risk ratings and remediation steps.",

  "What is threat modeling and how do you apply STRIDE?":
    "Threat modeling identifies threats early in design. STRIDE: Spoofing (identity), Tampering (data), Repudiation (actions), Information Disclosure, Denial of Service, Elevation of Privilege. For each component, identify which STRIDE threats apply.",

  "Explain OAuth 2.0 and OpenID Connect in depth.":
    "OAuth 2.0 is an authorisation framework — grants third-party limited access to a resource. OpenID Connect adds authentication on top — provides an ID token (JWT) with user identity. Used for 'Login with Google'.",

  "What is a supply chain attack?":
    "A supply chain attack compromises a dependency or third-party component to infect downstream users. Example: SolarWinds (malicious update), npm package poisoning. Mitigate: pin dependencies, verify checksums, SBOM.",

  "How would you respond to a ransomware incident?":
    "Isolate affected systems. Preserve evidence. Identify patient zero. Restore from clean backups. Notify stakeholders/legal/regulators. Conduct post-mortem. Patch the vector. Don't pay ransom.",

  "What is red team vs blue team?":
    "Red team: attackers (offensive security, pen testing). Blue team: defenders (monitoring, incident response, hardening). Purple team: both collaborate to improve defences.",

  "Explain how DNS poisoning works.":
    "DNS poisoning injects false DNS records into a resolver's cache. When users query a poisoned resolver, they're directed to a malicious IP instead of the legitimate server. Mitigated by DNSSEC.",

  "What is SIEM and how would you use it?":
    "SIEM (Security Information and Event Management) aggregates logs from all systems, correlates events, and generates alerts. Use to detect threats, investigate incidents, and maintain audit trails. Examples: Splunk, Elastic SIEM.",

  "How do you secure a Kubernetes cluster?":
    "RBAC for access control. Network policies (deny-all default). Limit container privileges (non-root, read-only FS). Scan images (Trivy). Enable audit logging. Use Pod Security Admission. Secrets managed via Vault.",

  "What is cryptographic key management?":
    "Key management covers generating, storing, rotating, and revoking cryptographic keys. Use HSMs or cloud KMS (AWS KMS, HashiCorp Vault). Rotate keys regularly. Audit key usage.",

  "Explain advanced persistent threats (APTs).":
    "APTs are long-term, stealthy attacks typically by nation-states or sophisticated groups. Phases: initial compromise → establish foothold → lateral movement → exfiltrate data. Detected through anomaly detection, threat hunting.",

  "How would you design a zero-trust security architecture?":
    "Assume no implicit trust — verify every request. Enforce MFA and strong IAM. Micro-segment networks (deny-all, explicit allow). Encrypt all traffic. Continuous monitoring and least-privilege everywhere.",

  // ─── QA ──────────────────────────────────────────────────────────────────────

  "What is software testing?":
    "Software testing verifies that software behaves as expected. It catches bugs, ensures quality, and validates requirements are met before release.",

  "What is the difference between manual and automated testing?":
    "Manual testing is performed by a human following test cases. Automated testing uses scripts to run tests programmatically — faster, repeatable, and suited for regression. Manual is better for exploratory and UX testing.",

  "What is a test case?":
    "A test case defines a scenario with input, preconditions, steps, and expected output. Used to verify specific functionality. A test suite groups related test cases.",

  "What is a bug?":
    "A bug (defect) is a discrepancy between expected and actual behaviour. Documented with steps to reproduce, severity, and priority. Goes through a lifecycle: open → in progress → resolved → closed.",

  "What is a test plan?":
    "A test plan documents the testing strategy, scope, resources, schedule, and entry/exit criteria for a project. It guides the QA team throughout the testing process.",

  "What is black-box testing?":
    "Black-box testing tests functionality without knowledge of internal code. Tester focuses on inputs and expected outputs. Examples: functional testing, UAT.",

  "What is white-box testing?":
    "White-box testing has full knowledge of the code. Tests internal logic, paths, branches. Examples: unit testing, code coverage analysis.",

  "What is regression testing?":
    "Regression testing ensures new changes haven't broken existing functionality. Run after every code change. Automated regression suites are essential in CI/CD.",

  "What is smoke testing?":
    "Smoke testing checks the most critical functions of an app after a build. Quick sanity check before deeper testing. Fails fast if basic functionality is broken.",

  "What is sanity testing?":
    "Sanity testing verifies a specific bug fix or feature after a minor change. Narrower than regression — checks just the affected area works correctly.",

  "What is functional testing?":
    "Functional testing validates that features work as per requirements. Tests each function against expected behaviour. Includes unit, integration, system, and UAT.",

  "What is non-functional testing?":
    "Non-functional testing checks performance, scalability, usability, reliability, and security — qualities beyond functional correctness.",

  "What is a defect lifecycle?":
    "New → Assigned → In Progress → Fixed → Re-test → Closed (or Reopened if fix fails). Tracks a bug from discovery to resolution.",

  "What is acceptance testing?":
    "Acceptance testing (UAT) validates software meets business requirements from the end-user perspective. Done by stakeholders or QA before release sign-off.",

  "What is a testing environment?":
    "A testing environment is a setup of hardware, software, and data configured for testing — separate from production. Typically includes dev, QA, staging, and production environments.",

  "What is unit testing and how does it differ from integration testing?":
    "Unit testing tests individual functions/methods in isolation (mocked dependencies). Integration testing tests multiple components working together. Unit tests are fast; integration tests catch wiring bugs.",

  "What is Selenium and how does it work?":
    "Selenium is a browser automation framework for web UI testing. WebDriver controls browsers (Chrome, Firefox) programmatically. Write test scripts in Python/Java/JS to simulate user actions.",

  "What is Jest and what is it used for?":
    "Jest is a JavaScript testing framework by Meta. Used for unit and integration testing of JS/TS/React code. Built-in mocking, snapshot testing, and code coverage.",

  "What is API testing and how do you test APIs?":
    "API testing validates endpoints return correct data, status codes, and handle errors. Tools: Postman (manual), REST-assured (Java), Supertest (Node.js). Check: status, response schema, auth, edge cases.",

  "What is test-driven development (TDD)?":
    "TDD: write a failing test first, write minimal code to pass it, then refactor. Red-green-refactor cycle. Leads to better design, higher coverage, and confidence in changes.",

  "What is behavior-driven development (BDD)?":
    "BDD uses natural language (Gherkin: Given-When-Then) to write specifications that double as tests. Bridges business and dev. Tools: Cucumber, SpecFlow.",

  "What is a test suite?":
    "A test suite is a collection of related test cases grouped together. Suites can be run as a batch, often organised by feature or component.",

  "What is mocking in testing?":
    "Mocking replaces real dependencies (DB, API, file system) with controlled fake implementations. Allows testing in isolation. Jest, Mockito, unittest.mock provide mocking capabilities.",

  "What is code coverage?":
    "Code coverage measures what percentage of code is executed by tests. Types: line, branch, function, statement coverage. High coverage reduces untested code risk but doesn't guarantee quality.",

  "What is load testing vs stress testing?":
    "Load testing verifies system performance under expected load. Stress testing pushes beyond limits to find the breaking point. Tools: JMeter, k6, Locust.",

  "What is a test automation framework?":
    "A framework provides structure, utilities, and conventions for automated tests: test runner, assertions, reporting, and CI integration. Examples: Selenium + TestNG, Cypress, Playwright.",

  "What is exploratory testing?":
    "Exploratory testing is unscripted testing where testers explore the app using domain knowledge and intuition. Complements scripted tests — finds unexpected bugs and UX issues.",

  "What is the difference between verification and validation?":
    "Verification: are we building the product right? (reviews, code inspections). Validation: are we building the right product? (testing against user needs).",

  "What is CI integration with automated tests?":
    "Tests run automatically on every commit in CI. Fast feedback catches regressions immediately. Tests gate merges and deployments. Keeps the main branch always releasable.",

  "What is performance testing?":
    "Performance testing measures speed, scalability, and stability under load. Types: load, stress, spike, soak testing. Identify bottlenecks before production.",

  "Design a test automation strategy for a large e-commerce platform.":
    "Unit tests for business logic. API tests for backend services. E2E tests (Playwright) for critical user flows (checkout, login). Load tests for peak traffic. Run in CI with gating on failure.",

  "How would you handle flaky tests in a CI/CD pipeline?":
    "Identify via failure reports. Quarantine in a separate suite. Investigate root cause (timing, async, test data). Fix or rewrite. Add retries for truly non-deterministic cases. Track flakiness rate.",

  "Explain how to test a microservices architecture.":
    "Unit test each service. Integration test service + DB. Contract testing (Pact) between services. E2E tests on critical flows. Chaos testing for resilience. Each service has its own CI pipeline.",

  "What is contract testing and how does Pact work?":
    "Contract testing verifies consumer-provider API compatibility. Consumer defines expected interactions (contract). Pact verifies the provider meets them. Prevents integration breakage without E2E tests.",

  "How would you implement end-to-end testing with Cypress or Playwright?":
    "Install framework, write tests that simulate real user journeys (navigate, fill forms, assert). Run in CI on build. Use Page Object Model for maintainability. Run against staging.",

  "What is mutation testing?":
    "Mutation testing introduces small code changes (mutations) and checks if tests catch them. If tests pass despite the mutation, they're weak. Measures test suite effectiveness beyond coverage.",

  "How do you measure the effectiveness of a QA process?":
    "Defect escape rate (bugs found in prod), test coverage, mean time to detect/resolve, automation ratio, regression pass rate, and test execution time.",

  "What is chaos testing and how does it differ from traditional QA?":
    "Chaos testing deliberately injects failures in production-like environments to test resilience. Traditional QA tests expected behaviour; chaos tests unexpected failures and recovery.",

  "How would you test a real-time system?":
    "Test for latency, message ordering, concurrency, and fault handling. Use load testing tools with WebSocket support. Mock event streams. Test reconnection and at-least-once/exactly-once delivery guarantees.",

  "Explain shift-left testing and its impact on SDLC.":
    "Shift-left moves testing earlier in the SDLC. Devs write unit tests; QA reviews requirements for testability; defects are caught cheaper when found earlier. Reduces cost and time to fix.",

  "How do you test for security vulnerabilities in an application?":
    "SAST (static analysis: SonarQube, Semgrep), DAST (dynamic: OWASP ZAP, Burp Suite), dependency scanning (Snyk), manual penetration testing, and code reviews focused on OWASP Top 10.",

  "What is visual regression testing?":
    "Visual regression testing captures UI screenshots and compares them across builds to detect unintended visual changes. Tools: Percy, Chromatic (Storybook), Playwright screenshot diffing.",

  "How would you set up test data management for a large test suite?":
    "Use dedicated test databases seeded with known data. Factory libraries create entities on demand. Teardown after tests. Avoid sharing state between tests. Use data mocking for external services.",

  "What is continuous testing and how does it fit in DevOps?":
    "Continuous testing runs automated tests at every stage of the pipeline: unit on commit, integration on PR merge, E2E and performance on staging, and monitoring in production.",

  "How would you prioritize test cases when time is limited?":
    "Risk-based: test high-impact, high-probability failure areas first. Prioritise: smoke tests, critical user journeys, recently changed code, and known defect-prone areas.",

  // ─── BUSINESS ANALYST ────────────────────────────────────────────────────────

  "What is business analysis?":
    "Business analysis identifies business needs, defines solutions, and facilitates change. BAs bridge the gap between stakeholders and technical teams by translating business needs into requirements.",

  "What is a stakeholder?":
    "A stakeholder is anyone affected by or interested in a project. Types: primary (end users), secondary (managers, IT), and key stakeholders (decision-makers and sponsors).",

  "What is a requirement?":
    "A requirement describes what a system or process must do. Functional requirements define features; non-functional requirements define quality attributes (performance, security).",

  "What is a use case?":
    "A use case describes how an actor (user or system) interacts with a system to achieve a goal. It includes preconditions, main flow, alternative flows, and postconditions.",

  "What is a BRD (Business Requirements Document)?":
    "A BRD documents the business need, scope, stakeholders, functional and non-functional requirements, and constraints. It's the foundation for solution design.",

  "What is the difference between functional and non-functional requirements?":
    "Functional: what the system does (features, behaviours). Non-functional: how the system performs (speed, reliability, security, usability).",

  "What is a process flow diagram?":
    "A process flow diagram visually maps steps, decisions, and actors in a business process. Helps identify inefficiencies and clarify workflows. Tools: Lucidchart, Visio.",

  "What is a gap analysis?":
    "Gap analysis compares the current state (as-is) to the desired future state (to-be), identifying gaps that need to be addressed to achieve business goals.",

  "What is SWOT analysis?":
    "SWOT evaluates Strengths, Weaknesses, Opportunities, and Threats of a project or business. Used to inform strategic decisions.",

  "What is a wireframe?":
    "A wireframe is a low-fidelity visual mockup of a UI, showing layout and structure without detailed design. Used to communicate requirements to designers and developers.",

  "What is Agile?":
    "Agile is an iterative development methodology. Work is done in short sprints (1-4 weeks), delivering working software incrementally. Prioritises collaboration and responding to change.",

  "What is a user story?":
    "A user story describes a feature from the user's perspective: 'As a [role], I want [feature] so that [benefit].' It includes acceptance criteria defining when it's done.",

  "What is scope creep?":
    "Scope creep is the uncontrolled expansion of project scope. Caused by adding requirements without adjusting time, cost, or resources. Managed through change control processes.",

  "What is change management?":
    "Change management is a structured approach to transitioning individuals and organisations to a new state. Includes stakeholder communication, training, and adoption strategies.",

  "How do you gather and document requirements from stakeholders?":
    "Techniques: interviews, workshops, surveys, observation, prototyping, document analysis. Document in user stories, use cases, BRD. Validate back with stakeholders for sign-off.",

  "What is the difference between a business analyst and a project manager?":
    "BA focuses on WHAT and WHY — defining requirements and ensuring the solution meets business needs. PM focuses on HOW and WHEN — planning, scheduling, resource management, and delivery.",

  "What is BPMN and how do you use it?":
    "BPMN (Business Process Model and Notation) is a standard graphical notation for modelling business processes. Events, activities, gateways, and flows show how a process works end-to-end.",

  "What is a cost-benefit analysis?":
    "CBA compares the total expected costs vs benefits of a project. If benefits > costs (positive NPV/ROI), the project is justified. Helps prioritise initiatives.",

  "How do you prioritize requirements?":
    "MoSCoW (Must, Should, Could, Won't), RICE scoring, stakeholder input, business value vs effort, risk, and regulatory compliance. Always validate prioritisation with sponsors.",

  "What is MoSCoW prioritization?":
    "MoSCoW categorises requirements: Must Have (critical), Should Have (important but not vital), Could Have (nice to have), Won't Have (out of scope for now).",

  "What is a feasibility study?":
    "A feasibility study assesses whether a proposed solution is technically possible, financially viable, legally compliant, and operationally feasible before committing resources.",

  "What is root cause analysis?":
    "RCA identifies the underlying cause of a problem (not just symptoms). Techniques: 5 Whys (ask why 5 times), fishbone diagram, fault tree analysis.",

  "How do you handle conflicting requirements from stakeholders?":
    "Facilitate a discussion to understand each stakeholder's underlying need. Find common ground. Escalate to a sponsor if needed. Use priority frameworks (MoSCoW) and document decisions.",

  "What is an as-is vs to-be process?":
    "As-is is the current state of a process. To-be is the desired future state after improvement. Gap analysis identifies what needs to change.",

  "What is a data flow diagram?":
    "A DFD shows how data moves through a system — inputs, processes, data stores, and outputs. Level 0 (context diagram) shows the whole system; lower levels add detail.",

  "What is UAT (User Acceptance Testing)?":
    "UAT is the final testing phase where end users validate the system meets business requirements in real-world scenarios before go-live sign-off.",

  "What is a sprint in Agile?":
    "A sprint is a fixed iteration (1-4 weeks) in Agile where the team delivers a working increment. Starts with planning, ends with review and retrospective.",

  "How do you measure ROI for a project?":
    "ROI = (Net Benefit / Total Cost) × 100. Identify all costs (development, training, infrastructure) and quantifiable benefits (revenue increase, cost savings, efficiency gains).",

  "What is a risk register?":
    "A risk register tracks identified risks, their likelihood, impact, mitigation strategies, owner, and status. Reviewed regularly and updated throughout the project.",

  "How would you manage a large-scale digital transformation project?":
    "Define clear vision and success metrics. Executive sponsorship. Phased delivery (pilot → scale). Strong change management. Dedicated BA and PM roles. Regular steering committee reviews. Agile delivery with milestones.",

  "Explain how to drive organizational change through business analysis.":
    "Understand the current state and pain points. Define future state and benefits. Engage stakeholders early. Map impacts. Design transition plan. Provide training. Measure adoption metrics.",

  "How would you align IT projects with business strategy?":
    "Map projects to strategic objectives. Use a benefits realisation framework. Involve executives in prioritisation. Review portfolio regularly against strategic KPIs. Kill low-value projects early.",

  "Describe how you've used data to influence a business decision.":
    "Identify the decision to be made. Gather relevant data (sales, ops, customer). Analyse trends and root causes. Present findings clearly with visualisations. Recommend evidence-based action.",

  "How do you handle a situation where stakeholders have conflicting priorities?":
    "Facilitate structured discussions. Use decision matrices (impact vs effort). Get the sponsor to arbitrate. Document the agreed priority and rationale to prevent future disputes.",

  "What is enterprise architecture and how does a BA contribute?":
    "EA aligns business strategy with IT systems and processes. BAs contribute by mapping business capabilities, processes, and data flows that inform EA decisions.",

  "How do you ensure requirements traceability throughout a project?":
    "Use a Requirements Traceability Matrix (RTM) linking requirements to design, test cases, and delivered features. Ensures nothing is missed and changes are tracked end-to-end.",

  "What is a business capability model?":
    "A business capability model maps what an organisation does (capabilities) independent of how. Used in enterprise architecture to identify gaps, prioritise IT investment, and plan transformation.",

  "How would you evaluate a vendor solution against business requirements?":
    "Create a requirements matrix. Score each vendor on must-have vs nice-to-have criteria. Include TCO, support, integration, scalability, and vendor viability. Present a weighted scorecard to stakeholders.",

  "Explain how to facilitate a requirements workshop with 20+ stakeholders.":
    "Set clear agenda and pre-read. Use structured techniques (brainstorming, affinity mapping, dot voting). Capture in real-time. Park off-topic items. Summarise decisions. Follow up with documented output for review.",

  "What is the impact of poor requirements on project delivery?":
    "Rework and cost overrun, missed deadlines, misaligned solutions, stakeholder dissatisfaction, failed UAT, and project failure. 60-70% of defects trace back to poor requirements.",

  "How do you measure the business value of a completed project?":
    "Track benefit realisation against the original business case. Measure KPIs defined at outset (revenue, cost savings, NPS, efficiency). Conduct post-implementation review 3-6 months after go-live.",

  "What is a balanced scorecard?":
    "A strategic performance management framework measuring four perspectives: Financial, Customer, Internal Processes, Learning & Growth. Balances financial metrics with leading indicators.",

  "How do you approach requirements for a greenfield vs legacy system?":
    "Greenfield: more freedom to innovate; gather requirements from scratch; focus on future state. Legacy: understand existing constraints; document as-is; manage migration risks; balance modernisation with continuity.",

  "Describe your approach to eliciting requirements from resistant stakeholders.":
    "Understand the source of resistance (fear of change, past failures, political concerns). Build trust through listening. Focus on their pain points and goals. Show early wins. Get executive sponsorship.",

  // ─── PRODUCT MANAGER ─────────────────────────────────────────────────────────

  "What is product management?":
    "Product management defines the 'why', 'what', and 'when' of a product. PMs bridge business, user, and technical perspectives to deliver products that meet user needs and business goals.",

  "What is a product roadmap?":
    "A product roadmap is a strategic plan showing what will be built and when. It communicates direction, aligns stakeholders, and prioritises initiatives against business goals.",

  "What is a product backlog?":
    "A product backlog is a prioritised list of features, improvements, and bugs to be worked on. The PM owns it. Items at the top are refined and ready for sprint planning.",

  "What is product-market fit?":
    "Product-market fit is when a product satisfies a strong market demand. Leading indicators: high retention, organic growth, users deeply disappointed if product disappeared.",

  "What is an MVP?":
    "An MVP (Minimum Viable Product) is the smallest product that delivers value and tests key assumptions. Not a buggy product — a focused one. Ship → learn → iterate.",

  "What is user research?":
    "User research uncovers user needs, behaviours, and pain points. Methods: interviews, surveys, usability testing, contextual inquiry, diary studies.",

  "What is a persona?":
    "A persona is a fictional representation of a target user based on research. Includes goals, pain points, context, and behaviours. Helps the team make user-centred decisions.",

  "What is a feature vs a requirement?":
    "A feature is a capability of the product visible to users. A requirement is a specific condition the feature must satisfy. Features are discovered from user needs; requirements are the spec for building them.",

  "What is OKR?":
    "OKR (Objectives and Key Results) is a goal-setting framework. Objective: qualitative goal. Key Results: measurable outcomes. Helps focus teams on impact.",

  "What is prioritization in product management?":
    "Deciding which features to build next based on value, effort, risk, and strategic alignment. Frameworks: RICE, MoSCoW, ICE, opportunity scoring.",

  "How do you prioritize features on a product roadmap?":
    "Combine user value, business impact, strategic fit, effort, and risk. Use RICE or ICE scoring. Validate with data. Align with company OKRs. Say no more than yes.",

  "What is the RICE scoring model?":
    "RICE: Reach × Impact × Confidence / Effort. Produces a prioritisation score. Standardises gut-feel decisions into data-driven comparisons.",

  "How do you conduct user interviews?":
    "Prepare open-ended questions around the problem space. Don't lead. Listen more than talk. Ask 'why' repeatedly. Take notes and record (with permission). Synthesise across interviews for patterns.",

  "How do you define success metrics for a feature?":
    "Tie to user outcome and business goal. Combine: adoption rate, retention impact, task success rate, NPS delta, revenue attribution. Define before building, measure after launch.",

  "What is the product lifecycle?":
    "Introduction → Growth → Maturity → Decline. Strategy changes at each phase: invest in growth, defend share at maturity, manage costs or pivot at decline.",

  "How do you work with engineering teams?":
    "Define clear requirements with acceptance criteria. Involve engineers early to surface technical constraints. Prioritise ruthlessly. Remove blockers. Trust their estimates. Collaborate on trade-offs.",

  "What is a go-to-market strategy?":
    "GTM defines how to launch a product to market: target segment, value proposition, channels, pricing, and sales/marketing motions. Aligns product, marketing, and sales for launch.",

  "How do you handle feature requests from sales vs user research?":
    "Understand the underlying problem. Quantify impact (how many users? revenue potential?). Check against research. If aligned with strategy: prioritise. If not: say no with reasoning. Log for future consideration.",

  "What is a North Star metric?":
    "A single metric that best captures the core value your product delivers to users and correlates with long-term success. Example: Spotify's time spent listening. Guides all decisions.",

  "What is funnel analysis?":
    "Funnel analysis tracks how users move through a sequence of steps (acquisition → activation → retention). Identifies drop-off points to optimise conversion.",

  "How do you write a product spec?":
    "Problem statement, user persona, goals and non-goals, user stories, success metrics, designs/mockups, edge cases, technical constraints, open questions. Keep it brief but complete.",

  "What is competitive analysis?":
    "Evaluating competitor products on features, pricing, positioning, and user experience. Identifies differentiation opportunities and market gaps. Regular cadence keeps strategy relevant.",

  "How would you turn around a struggling product?":
    "Diagnose: user interviews, retention analysis, funnel drop-offs. Identify core value not being delivered. Focus on ICP (ideal customer profile). Kill low-value features. Accelerate iteration cycle.",

  "Describe how you would build a 0-to-1 product.":
    "Start with problem discovery (customer interviews). Define ICP. Build an MVP to test riskiest assumption. Measure PMF signals. Iterate rapidly. Don't scale until PMF is found.",

  "How do you balance short-term wins with long-term vision?":
    "Allocate capacity deliberately (e.g., 70% long-term, 30% short-term fixes). Use OKRs to anchor long-term. Show quarterly wins to keep stakeholders aligned. Don't let firefighting become the default.",

  "How do you make a build vs buy vs partner decision?":
    "Evaluate: strategic differentiation (build core), speed to market (buy/partner), cost, integration complexity, vendor lock-in risk, and build/maintain capability. Document trade-offs for stakeholder alignment.",

  "Describe your approach to data-driven decision making.":
    "Define the question. Identify metrics. Gather data (quantitative + qualitative). Form and test hypotheses. Use A/B testing for uncertain decisions. Document learnings regardless of outcome.",

  "How would you handle a major product failure or bug affecting users?":
    "Triage severity. Communicate transparently and quickly to users. Coordinate with engineering on fix ETA. Post-mortem to identify root cause and prevent recurrence. Rebuild trust with affected users.",

  "What is your framework for evaluating new product opportunities?":
    "Market size, user pain severity, competitive intensity, strategic fit, feasibility, monetisation potential, and time-to-value. Filter through company's strategic priorities.",

  "How do you build alignment across engineering, design, and business?":
    "Shared understanding of user problems and goals. Involve all disciplines early. Use design sprints for alignment. Regular cross-functional rituals (stand-ups, demos). Shared OKRs.",

  "What is dual-track Agile?":
    "Dual-track runs discovery (research, prototype, validate) and delivery (build, test, ship) tracks in parallel. Discovery informs the next sprints; delivery ships current validated work.",

  "How would you design a monetization strategy for a freemium product?":
    "Identify the feature or usage threshold that converts value. Gate enough to motivate upgrade without crippling free tier. Price based on value metrics (seats, usage, features). A/B test pricing.",

  "How do you approach pricing a new product?":
    "Research willingness-to-pay (Van Westendorp, conjoint analysis). Analyse competitor pricing. Choose a pricing model (per-seat, usage, flat). Test price points with small cohorts. Iterate.",

  "Describe how you've used user feedback to change product direction.":
    "Gather feedback via NPS, interviews, support tickets. Synthesise themes. Quantify impact of the top issue. Build business case. Realign roadmap. Communicate change to team and users.",

  "How do you manage technical debt as a PM?":
    "Treat as a product risk. Quantify its impact on velocity and reliability. Allocate explicit capacity (e.g., 20% of sprints). Prioritise debt that blocks key features or causes user-facing issues.",

  "What is your approach to sunset a product feature?":
    "Identify low-usage features via analytics. Validate with user research. Communicate deprecation timeline. Offer migration path. Monitor for unexpected drop in engagement.",

  "How do you create a culture of experimentation in your team?":
    "Celebrate learnings from failed experiments. Set up easy A/B testing infrastructure. Define hypotheses and metrics upfront. Make results visible. Reward rigour, not just wins."
};

/**
 * Get the answer for a question.
 * @param {string} question
 * @returns {string}
 */
export function getAnswer(question) {
  return fallbackAnswers[question] ?? "Answer not available for this question.";
}