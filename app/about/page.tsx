import React from "react";
export const metadata={
    title:"About || Geekdev"
}
const Page = () => {
  return (
    <div className="h-screen  w-[80%]  max-md:w-[100%] mt-8">
    <header>
        <h1>Geekdev</h1>
        <p>Your go-to hub for the latest in frontend web development.</p>
    </header>
    <main>
        <section>
            <h2>Key Features of Geekdev{`'`}s Framework Coverage:</h2>
            <ul>
                <li>
                    <h3>In-depth Framework Guides</h3>
                    <p>Explore detailed guides that cover the ins and outs of popular frontend frameworks. Learn about key concepts, features, and best practices to help you leverage the full potential of each framework.</p>
                </li>
                <li>
                    <h3>Framework Comparisons</h3>
                    <p>Evaluate different frameworks side by side with our comprehensive comparison articles. Discover the strengths and weaknesses of each framework and make informed decisions based on your project requirements.</p>
                </li>
                <li>
                    <h3>Tutorials and How-Tos</h3>
                    <p>Dive into practical tutorials and how-tos that walk you through the process of building applications using various frontend frameworks. From simple CRUD apps to complex SPA architectures, our tutorials cover a wide range of use cases.</p>
                </li>
                <li>
                    <h3>Community Discussions</h3>
                    <p>Engage with fellow developers in our community discussions dedicated to frontend frameworks. Share your experiences, ask questions, and get advice from experienced developers who have worked with different frameworks.</p>
                </li>
            </ul>
        </section>
    </main>
    </div>
  );
};

export default Page;
