import Link from "next/link";

export default function Privacy() {
  return (
    <section className="flex flex-col items-center justify-start min-h-[90vh] p-2 my-10 ">
      <h1 className="text-4xl font-bold -mt-4">BioDrop Privacy Policy</h1>
      <p className="mt-3 text-md text-center w-full sm:w-3/4 lg:max-w-[1000px]">
        Your privacy is important to us. It is BioDrop's policy to respect your
        privacy regarding any information we may collect from you across our
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
        Information we collect
      </h3>
      <div className="mx-auto max-w-[1000px] flex flex-col justify-center items-center">
        <p className="mt-3 text-md text-center w-full">
          We only collect the information you provide to us. This includes your
          name, email address, and profile picture etc. We use this information
          to provide you with the service you requested. We do not share your
          information with third parties. See in detail what information we
          collect in the following section
        </p>
        <ul className="w-full flex flex-col justify-center list-disc max-w-[800px] mt-2">
          <li className="mt-3 text-md ">
            <span className="font-bold">Name:</span> We use your name to
            personalize your profile. This is the only information that is
            required to use our service.
          </li>
          <li className="mt-3 text-md ">
            <span className="font-bold">Profile Description:</span> We use your
            profile description to personalize your profile. This is the only
            information that is required to use our service. We suggest you not
            to share any sensitive information in your profile description.
          </li>
          <li className="mt-3 text-md ">
            <span className="font-bold">Profile Picture:</span> We use your
            profile picture to personalize your profile. This is the only
            information that is required to use our service.
          </li>
          <li className="mt-3 text-md ">
            <span className="font-bold">Links:</span> We use your links to
            provide you with the service you requested like Twitter/X profile,
            LinkedIn profile, Reddit profile etc . We do not share your links
            with third parties.
          </li>
          <li className="mt-3 text-md ">
            <span className="font-bold">Location:</span> The location is
            optional and is used to show your location on your profile. We don't
            access your device location without your permission, we use the
            location you provide to us. We do not share your location with third
            parties.
          </li>
          <li className="mt-3 text-md ">
            <span className="font-bold">Tags:</span> The tags are optional and
            are used to show your tags on your profile.
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-[1000px] flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-center mt-4">
          Information we store
        </h3>
        <p className="mt-3 text-md text-center w-full sm:w-3/4 lg:max-w-[1000px]">
          We store your name, profile picture, profile description, links, and
          location. We do not store any other information. All the information
          are stored in JSON format in our project because it is a open source
          project. We suggest you not to share any sensitive information in your
          profile description.
        </p>
      </div>
      <div className="mx-auto max-w-[1000px] flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-center mt-4">Disclaimers</h3>
        <p className="mt-3 text-md text-center w-full sm:w-3/4 lg:max-w-[1000px]">
          This is an open source project. We do not store any information in our
          database. All the information are stored in JSON format in our
          project. We are not responsible for any information you share in your
          profile description. We suggest you not to share any sensitive
          information in your profile description.
        </p>
      </div>
    </section>
  );
}
