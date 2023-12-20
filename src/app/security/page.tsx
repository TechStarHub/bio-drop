import Link from "next/link";

export default function Security() {
  return (
    <section className="flex flex-col items-center justify-start min-h-[90vh] p-2 my-10 ">
      <h1 className="text-4xl font-bold -mt-4">BioDrop Security Policy</h1>
      <p className="mt-3 text-md text-center w-full sm:w-3/4 lg:max-w-[1000px]">
        Your security is important to us. It is BioDrop's policy to respect your
        security regarding any information we may collect from you across our
        website,
        <Link
          className="text-sky-600 hover:text-sky-700 font-medium"
          href={"https://bio-drop.netlify.app/"}
        >
          https://bio-drop.netlify.app/
        </Link>{" "}
        , and other sites we own and operate. So thank you for trusting us with
        your personal information. We will never sell your personal information
        to third parties.
      </p>
      <h3 className="text-2xl font-bold text-center mt-4">
        Security Precautions
      </h3>
      <p className="mt-3 text-md text-center w-full sm:w-3/4 lg:max-w-[1000px]">
        Don't share your sensitive information in your profile. We will never
        ask for your sensitive information. Make sure you to double check your
        provided information before submitting. We will not be responsible for
        any wrong information provided by you.
      </p>
    </section>
  );
}
