import Link from "next/link";

export default function Terms() {
  return (
    <section className="flex flex-col items-center justify-start min-h-[90vh] p-2 my-10 ">
      <h1 className="text-4xl font-bold -mt-4">BioDrop Terms Policy</h1>
      <p className="mt-3 text-md text-center w-full sm:w-3/4 lg:max-w-[1000px]">
        BioDrop is a free service and Open Source project that allows anyone
        create there own bio link page. For more information about BioDrop,
        please visit our{" "}
        <Link
          className="text-sky-600 hover:text-sky-700 font-medium"
          href={"https://bio-drop.netlify.app/"}
        >
          https://bio-drop.netlify.app/
        </Link>{" "}
        . By using BioDrop, you are agreeing to these terms. Please read them
        carefully.
      </p>
      <h3 className="text-2xl font-bold text-center mt-4">Terms of Service</h3>
      <p className="mt-3 text-md text-center w-full sm:w-3/4 lg:max-w-[1000px]">
        You may not use BioDrop for any illegal or unauthorized purpose nor may
        you, in the use of the Service, violate any laws in your jurisdiction
        (including but not limited to copyright laws) as well as the laws of the
        India / Bharat.
        <br />
        <br />
        You agree not to reproduce, duplicate, copy, sell, resell or exploit any
        portion of the Service, use of the Service, or access to the Service
        without the express written permission by BioDrop.
        <br />
        <br />
        Verbal, physical, written or other abuse (including threats of abuse or
        retribution) of any BioDrop contributors will result in immediate
        account termination.
      </p>
    </section>
  );
}
