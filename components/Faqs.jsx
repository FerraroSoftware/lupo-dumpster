import { FadeIn } from "./FadeIn";

export default function Faqs({ faqs }) {
  return (
    <div className="bg-white py-16 " id="faq">
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-wide text-black sm:text-4xl uppercase">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq, key) => (
              <div
                key={key}
                className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt className="text-base font-medium text-black uppercase md:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-2 md:col-span-7 md:mt-0">
                  <p className="text-base text-gray-900">{faq.answer}</p>
                  <ul className="list-disc pl-4">
                    {faq.items.map((item, key) => (
                      <li key={key} className="text-base text-gray-900">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
