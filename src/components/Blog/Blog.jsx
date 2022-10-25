import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="shadow-lg p-3 rounded mb-5">
        <h3 className="">What is cors?</h3>
        <p>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. Most of the time, a script running in the user's browser would only ever need to access resources on the same origin (think about API calls to the same backend that served the JavaScript code in the first place). So the fact that JavaScript can't normally access resources on other origins is a good thing for security. In this context, "other origins" means the URL being accessed differs from the location that the JavaScript is running from, by having: <br />

            a different scheme (HTTP or HTTPS) <br />
            a different domain <br />
            a different port <br />
        </p>
      </div>
      <div className="shadow-lg p-3 rounded mb-3">
        <h3 >Why are you using Firebase?</h3>
        <p>
        Firebase helps to develop high-quality apps, grow user base, and earn more money. Each feature works independently, and they work even better together. Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. <br />
        Thanks to Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here).
        </p>
      </div>
      
    </div>
  );
};

export default Blog;
