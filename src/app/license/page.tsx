import Link from "next/link";

export default function License() {
  return (
    <section className="flex flex-col items-center justify-start min-h-[90vh] p-2 my-10 ">
      <h1 className="text-4xl font-bold -mt-4">BioDrop License</h1>
      <p className="mt-3 text-md text-center w-full sm:w-3/4 lg:max-w-[1000px]">
        BioDrop is an open source project. You can find the source code on{" "}
        <Link
          className="text-sky-600 hover:text-sky-700 font-medium"
          href={"https://github.com/TechStarHub/bio-drop"}
        >
          GitHub
        </Link>
        . You can use the source code for your own projects. You can also
        contribute to the project by creating a pull request on GitHub.
      </p>
      <h3 className="text-2xl font-bold text-center mt-4">License</h3>
      <div className="mx-auto max-w-[1000px] flex flex-col justify-center items-center">
        <p className="mt-3 text-md text-center w-full">MIT License</p>
        <p className="mt-3 text-md text-center w-full">
          {`Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:`}
        </p>
        <p className="mt-3 text-md text-center w-full">
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p className="mt-3 text-md text-center w-full">
          {`THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`}
        </p>
      </div>
    </section>
  );
}
