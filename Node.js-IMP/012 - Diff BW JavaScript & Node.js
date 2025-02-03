Diff BW JavaScript & Node.js:-

1) JavaScript (JS) is Single-Threaded & Synchronous
  > JavaScript runs on a single thread inside the browser or Node.js runtime.
  > It executes one task at a time in a synchronous manner.
  > However, it supports asynchronous operations using callbacks, promises, and async/await, but it doesn't mean it runs multiple threads.

2) Node.js is Single-Threaded but Asynchronous & Non-Blocking
  > Node.js itself is single-threaded because it uses JavaScript, but it can handle multiple operations asynchronously.
  > It uses an event loop and libuv (a C++ library) to delegate tasks, like file system operations, network requests, and database queries to the operating system.
  > The OS handles these tasks in the background (potentially using multiple threads), and Node.js listens for completion.

3) Node.js Can Use Multiple Threads
  A) Internally Multithreaded – Node.js uses a thread pool (via libuv) for tasks like:
      File I/O
      Network requests
      Crypto operations
      Compression
      Database queries
      Explicit Multithreading – Node.js allows manual multithreading via:
  B) Worker Threads (worker_threads module) for CPU-intensive tasks.

Conclusion:-
✅ JavaScript is single-threaded & synchronous by default.
✅ Node.js is single-threaded but asynchronous & non-blocking.
✅ Node.js can use multiple threads (via worker threads or libuv thread pool) for background
