import Link from "next/link";
import Image from "next/image";
import forkImage from "@/assets/fork-example.png";

const demoProfile = `{
    "id": "1",
    "name": "Bijoy Kar",
    "username": "bijoykar",
    "headline": "Student 👨‍🎓| Full Stack Web Developer 🌐| Python 🐍 , JavaScript ⚙️| ML / AI 🤖 | Tech Enthusiast ✨",
    "location": "Kolkata, India",
    "tags": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
      "Git",
      "GitHub",
      "C++",
      "Python"
    ],
    "profilePic": "https://avatars.githubusercontent.com/u/85790967?v=4"
  }`;

const demoFullProfile = `
{
    "name": "Bijoy Kar",
    "headline": "Student 👨‍🎓| Full Stack Web Developer 🌐| Python 🐍 , JavaScript ⚙️| ML / AI 🤖 | Tech Enthusiast ✨",
    "profilePic": "https://avatars.githubusercontent.com/u/85790967?v=4",
    "summary": "I am a software engineer with a passion for creating innovative and efficient solutions. I have experience in developing web applications using various technologies. My goal is to contribute to the success of projects by delivering high-quality code and collaborating effectively with team members.",
    "location": {
      "city": "Kolkata",
      "country": "India",
      "countryCode": "IN"
    },
    "tags": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
      "Git",
      "GitHub",
      "C++",
      "Python"
    ],
    "links": [
      {
        "type": "twitter",
        "url": "https://twitter.com/iamBijoyKar",
        "label": "Follow me on Twitter"
      },
      {
        "type": "linkedIn",
        "url": "https://www.linkedin.com/in/iambijoykar/",
        "label": "Connect with me on LinkedIn"
      },
      {
        "type": "github",
        "url": "https://github.com/iamBijoyKar",
        "label": "Follow me on Github"
      }
    ]
  }
  
`;

export default function PageContent() {
  return (
    <div className="w-full max-h-screen h-screen overflow-y-scroll p-6">
      <h1 className="text-2xl font-medium mb-6">
        Create your own BioDrop page and share it with the world
      </h1>
      <ul className="">
        <li className="" id="step-1">
          <h3 className="text-xl font-medium mb-3">Step 1 : Fork the Repo</h3>
          <div className="">
            <p className="">
              Visit the GitHub Repo{" "}
              <Link
                href={"https://github.com/TechStarHub/bio-drop"}
                target="_blank"
                className="italic text-sky-700 font-medium hover:underline"
              >
                here
              </Link>{" "}
              , and fork the repo. <br />
            </p>
            <Image
              src={forkImage}
              className="rounded mt-2"
              alt="fork the repo"
            />
          </div>
        </li>
        <li className="mt-4" id="step-2">
          <h3 className="text-xl font-medium mb-3">Step 2 : Clone the Repo</h3>
          <div className="">
            <p className="">Clone it to your local machine using</p>
            <pre className="bg-gray-100 p-1 rounded ">
              git clone url-of-the-repo{" "}
            </pre>
          </div>
        </li>
        <li className="mt-4" id="step-3">
          <h3 className="text-xl font-medium mb-3">
            Step 3 : Install the Dependencies
          </h3>
          <div className="">
            <p className="">Install the dependencies using </p>
            <pre className="bg-gray-100 p-1 rounded ">cd bio-drop</pre>
            <br />
            <pre className="bg-gray-100 p-1 rounded ">npm install</pre>
          </div>
        </li>
        <li className="mt-4" id="step-4">
          <h3 className="text-xl font-medium mb-3">
            Step 4 : Write your own Bio
          </h3>
          <div className="">
            <p className="mb-2">
              Open src/data/people.json and add your profilel information in the
              json file. Enter your profile information in the following format
              :{" "}
            </p>
            <code className="">
              <pre className="bg-gray-100 p-2 rounded overflow-x-scroll sm:w-[60vw]">
                {demoProfile}
              </pre>
            </code>
            <p className="mt-4">
              You must follow the id numeration. If the last id is 5, then your
              id must be 6.
            </p>
          </div>
        </li>
        <li className="mt-4">
          <div className="">
            <h3 className="text-xl font-medium mb-3">
              Step 5 : Add your profile JSON file
            </h3>
            <div className="">
              <p className="mb-4">
                Create a new file in the src/people folder with your
                username.json. For example, if your username is bijoykar, then
                your file name must be bijoykar.json. <br />
                The username you enter in the people.json file must match the
                file name. <br />
                See the example below :{" "}
              </p>
              <code className="">
                <pre className="bg-gray-100 p-2 rounded overflow-x-scroll sm:w-[60vw]">
                  {demoFullProfile}
                </pre>
              </code>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
