import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
     <h2 className="text-center m-5 fw-bold text-success">Now Find Your Answers</h2>
      <div className="shadow-lg p-3 rounded mb-5 bg-light">
        <h3  className='fw-bold'>What is cors?</h3>
        <p  className='fw-semibold opacity-75'>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. Most of the time, a script running in the user's browser would only ever need to access resources on the same origin (think about API calls to the same backend that served the JavaScript code in the first place). So the fact that JavaScript can't normally access resources on other origins is a good thing for security. In this context, "other origins" means the URL being accessed differs from the location that the JavaScript is running from, by having: <br />

            a different scheme (HTTP or HTTPS) <br />
            a different domain <br />
            a different port <br />
        </p>
      </div>
      <div className="shadow-lg p-3 rounded mb-5 bg-light">
        <h3  className='fw-bold'>Why are you using Firebase?</h3>
        <p  className='fw-semibold opacity-75'>
        Firebase helps to develop high-quality apps, grow user base, and earn more money. Each feature works independently, and they work even better together. Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. <br />
        Thanks to Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here).
        </p>
      </div>
      <div className="shadow-lg p-3 rounded mb-5 bg-light">
        <h3  className='fw-bold'>What other options do you have to implement authentication?</h3>
        <p className='fw-semibold opacity-75'>
        Auth0, MongoDB, Passport, Okta, are the most popular alternatives and competitors to Firebase Authentication.
        </p>
      </div>
      <div className="shadow-lg p-3 rounded mb-5 bg-light">
        <h3 className='fw-bold'>How does the private route work?</h3>
        <p className='fw-semibold opacity-75'>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br />
        1. only allow authenticated user to visit the route. <br />
        2. Redirect user to the route they wanted to go before login.
        </p>
      </div>
      <div className="shadow-lg p-3 rounded mb-5 bg-light">
        <h3 className='fw-bold'>What is Node?</h3>
        <p className='fw-semibold opacity-75'>
        Node.js is a JavaScript runtime for building server-side or desktop applications. Node.js is an open source server environment, Node.js is free, it runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) and it uses JavaScript on the server. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
        </p>
      </div>
      <div className="shadow-lg p-3 rounded mb-5 bg-light">
        <h3 className='fw-bold'>How does Node work?</h3>
        <p className='fw-semibold opacity-75'>
        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Node.js is an event loop single-threaded language.  Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads.
        </p>
      </div>
    </div>
  );
};

export default Blog;
