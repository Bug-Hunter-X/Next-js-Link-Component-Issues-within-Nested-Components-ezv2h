```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      {/* Incorrect usage of the Link component */}
      <Link href="/contact">
          <a>Go to Contact</a>
      </Link>
    </div>
  );
}

export default About;
```